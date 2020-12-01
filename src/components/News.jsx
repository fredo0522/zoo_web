import React, { Component } from "react";
import { connect } from "react-redux";
import { getNewsDB } from "../actions/news"

class News extends Component {

  constructor(props){
    super()
    
  }

  render() {
    return (
      <div className="carousel slide" id="carouselNews" data-ride="carousel">
        <div className="carousel-inner">
          {this.props.upNews.map((currNew) => {
            return (
              <div
                className={
                  currNew.id === 1 ? "carousel-item active" : "carousel-item"
                }
                key={currNew.id}
              >
                <img
                  src={currNew.imagen}
                  alt={currNew.titulo}
                  className="d-block w-100"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{currNew.titulo}</h5>
                  <p>{currNew.contenido}</p>
                </div>
              </div>
            );
          })}
          <a
            className="carousel-control-prev"
            href="#carouselNews"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselNews"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.props.getNewsDB()
  }
}


const mapStateToAction = {
  getNewsDB
};

const mapStoreToProps = (state) => {
  return {
    upNews: state.news.noticias,
  };
};

export default connect(mapStoreToProps, mapStateToAction)(News);
