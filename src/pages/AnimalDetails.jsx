import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {
  render() {
    return(
      <div className='container'>
          <img
            src={this.props.animal.bg_img}
            className="img-fluid rounded mx-auto d-block mb-3 mt-3"
            alt={this.props.animal.name}
          />
          <h1 className="card-title">{this.props.animal.name}</h1>
          <p className="card-text">{this.props.animal.bg_description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    animal: state.animal.animal
  };
}

export default connect(mapStateToProps)(AnimalDetails);
