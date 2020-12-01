import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Animals from "./pages/Animals";
import AnimalDetails from "./pages/AnimalDetails";
import Who from "./pages/Who";
import Home from "./pages/Home";
import Boletas from "./pages/Boletas";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import GenericImage from "./images/generic_image.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />

        <div className="w-100 mt-5">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/animals" exact>
              <Animals />
            </Route>
            <Route path="/details/:id" component={AnimalDetails} exact />
            <Route path="/who" exact>
              <Who />
            </Route>
            <Route path="/boletas" exact>
              <Boletas />
            </Route>
          </Switch>
        </div>

        {/* -------footer----- */}
        <div className="mx-auto">
          <footer className="footer-style container-fluid">
            <div className="pt-4">
              <div className="row row-cols-md-4">
                {/* Social Apps */}
                <div className="col-sm text-center">
                  <a
                    href="https://www.youtube.com/user/zoocalitv"
                    className="text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="footer-style-icons ml-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/zoologicodecali/"
                    className="text-center ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="footer-style-icons" />
                  </a>
                  <a
                    href="https://es-es.facebook.com/zoologicodecali"
                    className="text-center ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare className="footer-style-icons" />
                  </a>
                </div>
                {/* Direccion */}
                <div className="col-sm">
                  PBX (57 2) 4880888 - Cra. 2 oeste Calle 14 - Santa Teresita.
                  Cali - Colombia. / Desarrollo
                </div>
                {/* Foto Patrocinadores */}
                <div className="col-sm mb-4">
                  <img
                    src={GenericImage}
                    alt="Generic Footer"
                    className="img-fluid w-100 rounded mx-auto d-block mt-3"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
