import React, {Component} from 'react';
import {connect} from 'react-redux';

import AnimalCard from '../components/AnimalCard';
import {filterAnimals} from '../actions/animal'

class Animals extends Component {
  render() {
    return (
      <div className='container mt-4 mb-4'>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              ¿Qué animal estas buscando?
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={ (e) => this.filtrarAnimales( e ) }
          />
        </div>
        <div className='row row-cols-md-3'>
          {
            this.props.filtered.map(animal => {
              return <div className='col-sm mb-4' key={animal.id}>
                <AnimalCard animal={animal} />
              </div>
            })
          }
        </div>
      </div>
    );
  }
  filtrarAnimales(e){
    this.props.filterAnimals(e.target.value)
  }

  componentDidMount(){
    this.props.filterAnimals("")
  }
}

const mapStateToAction = {
  filterAnimals
}

const mapStoreToProps = (state) => {
  return {
    filtered: state.animal.filtered
  };
}

export default connect(mapStoreToProps, mapStateToAction)(Animals);
