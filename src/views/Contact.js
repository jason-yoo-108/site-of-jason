import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron style={this.props.style}>
        <h1>Get to know me better :)</h1>
        <p>Email: jasonyoo0116@gmail.com</p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/jasonjinsooyoo/">
            https://www.linkedin.com/in/jasonjinsooyoo/
          </a>
        </p>
      </Jumbotron>
    );
  }
}
