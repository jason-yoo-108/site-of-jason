import React, { Component } from 'react';
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
            style={{ color: 'red' }}
            link="#"
            text={obj.text}
            onClick={this.handleClick}
          />
        );
      } else {
        return (
          <Navtab key={i} link="#" text={obj.text} onClick={this.handleClick} />
        );
      }
    }, this);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Jason's Website
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">{this.populate()}</ul>
        </div>
      </nav>
    );
  }
}
