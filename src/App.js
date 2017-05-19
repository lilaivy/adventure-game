import React, { Component } from 'react';
import scene from './scene';

class App extends Component {

  constructor() {
    super();

    this.state = {
      backgroundURL: scene.backgroundUrl,
      backgroundSize: '100%',
    };
  }

  render() {
    return (
      <div className="main" style={{
        background: `url(${this.state.backgroundURL}) no-repeat center center`
      }}>
        <div className="Scene-header">
          <h2>Welcome to Tea Quest</h2>
        </div>
        <p className="App-intro">
          To start your adventure, please enter your name into the box below.
        </p>
        <p><button type="submit">Start Game</button></p>
      </div>
    );
  }
}

export default App;
