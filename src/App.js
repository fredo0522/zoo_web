import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Animals from './pages/Animals';
import AnimalDetails from './pages/AnimalDetails';
import Who from './pages/Who';
import { GoMarkGithub } from 'react-icons/go';
import { FaTwitter } from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import GenericImage from './images/generic_image.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />

        <div className='container-fluid'>
          <Switch>
            <Route path='/' exact>
            </Route>
            <Route path='/animals' exact>
              <Animals />
            </Route>
            <Route path='/details' exact>
              <AnimalDetails />
            </Route>
            <Route path='/who' exact>
              <Who />
            </Route>
          </Switch>
        </div>

        {/* -------footer----- */}
        <div className="mx-auto mt-5 mb-3">
          <footer className="footer-style container">
            <div className="row row-cols-md-4 mt-4">
              <div className="col mb-4 mt-2">
                <a href="#" className="text-center"><GoMarkGithub className="footer-style-icons"/></a>
                <a href="#" className="text-center ml-4"><FaTwitter className="footer-style-icons"/></a>
                <a href="#" className="text-center ml-4"> <FaFacebookSquare className="footer-style-icons"/></a>
              </div>
              <div className="col mb-4 mt-2">
                PBX (57 2) 4880888 - Cra. 2 oeste Calle 14 - Santa Teresita. Cali - Colombia. / Desarrollo
              </div>
              <div className="col">
                <img
                  src={GenericImage}
                  alt="Generic Image"
                  className="img-fluid w-100 rounded mx-auto d-block mt-3"
                />
            </div>
            </div>
          </footer>
        </div>
      </div>
    );
  };
}

export default App;
