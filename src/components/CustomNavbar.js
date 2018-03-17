import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap/lib';
import { Navtab } from '../views/Navtab';

export class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.tabs = [
      { text: 'About Me' },
      { text: 'Experiences' },
      { text: 'Projects' },
      { text: 'Quotes' },
      { text: 'Contact' }
    ];
    this.handleClick = this.handleClick.bind(this);
    this.populate = this.populate.bind(this);
  }

  handleClick(name) {
    if (name === 'About Me') {
      name = 'AboutMe';
    }
    let el = document.getElementById(name);
    if (!!el && el.scrollIntoView) {
      el.scrollIntoView();
    }
  }

  populate() {
    return this.tabs.map((obj, i) => {
      return (
        <Navtab
          key={i}
          style={{ color: 'white' }}
          text={obj.text}
          onClick={this.handleClick}
        />
      );
    }, this);
  }

  render() {
    const fadedGray = 'rgba(96, 96, 96, 0.95)';
    return (
      <Navbar
        style={{ background: fadedGray, borderColor: fadedGray }}
        collapseOnSelect
        fixedTop
        fluid
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="" style={{ fontSize: 30, color: 'white' }}>
              Jason Yoo
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>{this.populate()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
