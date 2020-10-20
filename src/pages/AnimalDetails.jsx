import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnimalDetails extends Component {
  render() {
    return(
      <div>
        <p>{this.props.animal.name}</p>
        <p>{this.props.animal.description}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('Did Mount AnimalDetails!');
  }
}

const mapStateToProps = (state) => {
  return {
    animal: state.animal.animal
  };
}

export default connect(mapStateToProps)(AnimalDetails);
