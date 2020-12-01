import React, { Component } from "react";
import { connect } from "react-redux";

import AnimalCard from "../components/AnimalCard";
import { getAnimals } from "../actions/animal";

class Animals extends Component {

  constructor(props){
    super(props)
    this.state = {
      animals: []
    }
  }

  render() {
    return (
      <div className="container mt-4 mb-4">
        {/* Search Animal */}
        <div className="input-group mb-3 mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text mt-4" id="search-animal">
              ¿Qué animal estas buscando?
            </span>
          </div>
          <input
            type="text"
            className="form-control mt-4"
            id="basic-url"
            aria-describedby="search-animal"
            onChange={(e) => this.filtrarAnimales(e)}
          />
        </div>

        <div className="row row-cols-md-3">
          {
            this.state.animals.map((animal) => {
              return (
                <div className="col-sm mb-4" key={animal.id}>
                  <AnimalCard animal={animal} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

  getClearName = function (name, tenerEnhe = false) {
    let clearName = name.toUpperCase();
    for (let i = 0; i < clearName.length; i++) {
      if (clearName[i] !== "Ñ") {
        clearName =
          clearName.substring(0, i) +
          clearName[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
          clearName.substring(i + 1, clearName.length);
      }
    }
    return clearName;
  };

  filtrarAnimales(e) {
      let text = ""
      if ( e !== null ){
        text = e.target.value.toUpperCase().trim();
      }
      if ( text === "" ){
        let filtered = this.props.animals
        this.setState( {animals: filtered} )
      }
      else{
        text = this.getClearName(text)
        let filtered = this.props.animals.filter( (animal) => this.getClearName(animal.name).includes(text) )
        this.setState( {animals: filtered} )
      }
  } 

  async componentDidMount() {
    await this.props.getAnimals()
    this.filtrarAnimales(null)
  }
}

const mapStateToAction = {
  getAnimals
};

const mapStoreToProps = (state) => {
  return {
    animals: state.animal.animals,
  };
};

export default connect(mapStoreToProps, mapStateToAction)(Animals);
