import React, { Component } from "react";
import { connect } from "react-redux";
import { setAnimalById } from "../actions/animal";

class AnimalDetails extends Component {
  render() {
    return (
      <div className="mt-5 mb-5 w-100">
        <img
          src={this.props.animal.bg_img}
          className="img-fluid rounded mx-auto d-block mt-5 mb-3"
          alt={this.props.animal.name}
        />
        <div className="container mb-5">
          <h1 className="card-title">{this.props.animal.name}</h1>
          <p className="card-text">{this.props.animal.bg_description}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setAnimalById(id);
  }
}

const mapStateToAction = {
  setAnimalById,
};

const mapStateToProps = (state) => {
  return {
    animal: state.animal.animal,
  };
};

export default connect(mapStateToProps, mapStateToAction)(AnimalDetails);
