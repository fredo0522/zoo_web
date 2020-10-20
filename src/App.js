import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Animals from './pages/Animals';
import AnimalDetails from './pages/AnimalDetails';

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
              {/* <Who /> */}
            </Route>
          </Switch>
        </div>
      </div>
    );
  };
}

export default App;
