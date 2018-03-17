import React, { Component } from 'react';

export class Navtab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const name = e.target.text;
    this.props.onClick(name);
  }

  render() {
    return (
      <li>
        <a style={this.props.style} onClick={this.handleClick}>
          {this.props.text}
        </a>
      </li>
    );
  }
}
