import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }

  }

  changeName(name) {
    this.setState({ name });
  }




  render() {
    const { name } = this.state;
    const comma = ',';

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome To Hawaii Adventure</h2>
        </div>
        <p className="App-intro">
          To get started, enter your name:
        </p>
        <form onSubmit={event => {
          event.preventDefault();
          this.changeName(event.target.elements.signin.value);
        }}
          className="intro-form" >
          <input style={{
            fontSize: '15px',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}
            name="signin"
            type="text"
            placeholder="Enter Name" />
          <input
            style={{
              fontSize: '15px',
              borderRadius: '5px',
              backgroundColor: 'white'
            }}
            type="submit"
            name="submit"
          />
        </form>
      </div>
    );
  }
}



export default App;
