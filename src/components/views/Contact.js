import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap/lib';
import imageLinkedIn from '../../images/linkedin.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Contact extends Component {
  render() {
    const fadedGray = 'rgba(96, 96, 96, 0.95)';
    return (
      <Navbar
        id="Contact"
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
            <a
              href="https://www.linkedin.com/in/jasonjinsooyoo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: 'auto', height: 'auto' }}
                src={imageLinkedIn}
                alt=""
              />
            </a>
          </li>
        </Nav>
      </Navbar>
    );
  }
}
