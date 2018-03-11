import React, { Component } from 'react';
import { CustomNavbar } from './CustomNavbar';
import { CustomBody } from './CustomBody';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <CustomBody />
      </div>
    );
  }
}

export default App;
