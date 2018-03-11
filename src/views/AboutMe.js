import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';

export class AboutMe extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron style={this.props.style}>
        <h1>About Me</h1>
        <p>
          I'm a 3rd year UBC Computer Science student with a passion for
          continuous learning, embracing temporary setbacks, and becoming an
          expert in the field of computer science.
        </p>
      </Jumbotron>
    );
  }
}
