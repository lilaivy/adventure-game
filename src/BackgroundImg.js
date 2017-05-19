import React, { Component } from 'react';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundURL: ['./img/landingpage.jpg', './img/cave.jpg', './img/staircase.jpg'],
      backgroundSize: '100%',
      css: {
        background: 'url(' + this.props.backgroundURL + ') no-repeat center center',
        backgroundSize: this.props.backgroundSize
      }
    };
  }

  render() {
    return (
      <div className='background' style={this.state.css} />
    );
  }
}

export default Background;

