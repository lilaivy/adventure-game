import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      backgroundURL: ['./img/landingpage.jpg', './img/cave.jpg', './img/staircase.jpg'],
      backgroundSize: '100%',
      css: {
        background: 'url(' + this.state.backgroundURL + ') no-repeat center center',
        backgroundSize: this.state.backgroundSize
      }
    };
  }

  render() {
    return (
      <div className="landingpage">
        <div className="Scene-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><button type="submit">Start Game</button></p>
      </div>
    );
  }
}

export default App;
