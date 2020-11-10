import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Animals from './pages/Animals';
import AnimalDetails from './pages/AnimalDetails';
import Who from './pages/Who';
import {FaTwitter} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
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
        <div className="mx-auto">
          <footer className="footer-style container-fluid">
            <div className="row row-cols-md-4">
              <div className="col mb-5">
                <a href="https://www.youtube.com/user/zoocalitv" className="text-center">
                  <FaYoutube className="footer-style-icons ml-4" />
                </a>
                <a href="https://twitter.com/" className="text-center ml-4">
                  <FaTwitter className="footer-style-icons" />
                </a>
                <a href="https://es-es.facebook.com/zoologicodecali" className="text-center ml-4">
                  <FaFacebookSquare className="footer-style-icons" />
                </a>
              </div>
              <div className="col mb-5">
                PBX (57 2) 4880888 - Cra. 2 oeste Calle 14 - Santa Teresita. Cali - Colombia. / Desarrollo
              </div>
              <div className="col mb-5">
                <img
                  src={GenericImage}
                  alt="Generic Footer"
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
