import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimalCard from '../components/AnimalCard';

class Animals extends Component {
  render() {
    return(
      <div className='container mt-4 mb-4'>
        <div className="input-group mb-3">
          <div class="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">¿Qué animal estas buscando?</span>
          </div>
          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
        </div>
        <div className='row row-cols-md-3'>
          {
            this.props.animals.map(animal => {
              return <div className='col mb-4' key={animal.id}>
                <AnimalCard animal={animal} />
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    animals: state.animal.animals
  };
}

export default connect(mapStoreToProps)(Animals);
