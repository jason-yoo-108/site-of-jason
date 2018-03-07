import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { CustomNavbar } from './CustomNavbar';
import { Card } from './Card';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Card />

        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Website coming... soon :)</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
