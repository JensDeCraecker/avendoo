import React, { Component } from 'react';

function em(val) {
  return val / 16 + 'em';
}

class Toggler extends Component {
  constructor() {
    super();
    this.state = { value: false };

    this.border = 4;
    this.height = 20;
    this.width = 60;
    this.bgcolor = 'rgba(0,0,0,0.2)';
    this.transition = '.4s ease';
  }

  get baseStyles() {
    return {
      display: 'inline-block',
      position: 'relative',
      height: em(this.height),
      width: em(this.width),
      borderRadius: em(this.height),
      cursor: 'pointer',
      transition: this.transition,
    };
  }

  get outerStyles() {
    return Object.assign({}, this.baseStyles, {
      textAlign: 'initial',
      verticalAlign: 'middle',
      border: `${em(this.border)} solid transparent`,
      background: this.state.value ? '#28394f' : 'rgba(0,0,0,0.2)',
    });
  }

  get innerStyles() {
    return Object.assign({}, this.baseStyles, {
      background: 'white',
      width: em(this.height),
      left: this.state.value ? em(this.width - this.height) : '0',
    });
  }

  toggle(e) {
    this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <span style={this.outerStyles} onClick={this.toggle.bind(this)}>
        <span style={this.innerStyles} />
      </span>
    );
  }
}

export default Toggler;
