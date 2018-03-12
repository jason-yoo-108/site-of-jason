import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron style={this.props.jumboStyle}>
        <h1>Hello, I'm a different card.</h1>
        <p>
          The true person is Not anyone in particular; But, like the deep blue
          color Of the limitless sky, It is everyone, everywhere in the world.
        </p>
      </Jumbotron>
    );
  }
}
