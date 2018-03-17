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
    this.state = { active: '' };
    this.handleClick = this.handleClick.bind(this);
    this.populate = this.populate.bind(this);
  }

  handleClick(newTab) {
    this.setState({ active: newTab });
  }

  populate() {
    return this.tabs.map((obj, i) => {
      if (obj.text === this.state.active) {
        return (
          <Navtab
            key={i}
            style={{ color: 'yellow' }}
            link="#"
            text={obj.text}
            onClick={this.handleClick}
          />
        );
      } else {
        return (
          <Navtab
            key={i}
            style={{ color: 'white' }}
            link="#"
            text={obj.text}
            onClick={this.handleClick}
          />
        );
      }
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
