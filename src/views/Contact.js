import React, { Component } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap/lib';
import imageLinkedIn from '../images/linkedin.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fadedGray = 'rgba(96, 96, 96, 0.95)';
    const divStyle = {
      background: 'white',
      borderRadius: 12,
      float: 'right',
      margin: 4
    };

    return (
      <Navbar
        style={{
          background: fadedGray,
          borderColor: fadedGray,
          borderRadius: 0,
          marginBottom: 0
        }}
        fluid
      >
        <Nav pullRight>
          <li>
            <a href="https://www.linkedin.com/in/jasonjinsooyoo/">
              <img
                style={{ width: 'auto', height: 'auto' }}
                src={imageLinkedIn}
              />
            </a>
          </li>
        </Nav>
      </Navbar>
    );
  }
}
