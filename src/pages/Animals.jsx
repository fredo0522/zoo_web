import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimalCard from '../components/AnimalCard';

class Animals extends Component {
  render() {
    return(
      <div className='container mt-4'>
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
