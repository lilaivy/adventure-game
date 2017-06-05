import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';
import ChangeSceneButton from './ChangeSceneButton';
import pina from './images/pina.jpg';
import luau from './images/luau.jpg'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      scene: UserSignin,


    }
    this.changeName = this.changeName.bind(this);
    this.changeScene = this.changeScene.bind(this);

  }


  changeName(name) {
    this.setState({ name });
  }

  changeScene(scene) {
    this.setState({ scene });
  }


  render() {
    const { name } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}
        />

        <ChangeSceneButton
          changeScene={this.changeScene} />

        <div className="adventureMessage">
          <h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

          <h2>But grab a Pina Colada first, duh!</h2>

          <img src={pina} className="pinaImage" alt='pina' />
          <ChangeSceneButton />
        </div>

        <div className="Luau">
          <h2>Oh no {name}! You've encountered a touristy Luau that is blocking your beach access! Throw on a grass skirt and hula your way through the crowd. </h2>
          <img src={luau} className="luau" alt='luau' />
          <ChangeSceneButton />
        </div>
      </div>
    );
  }
}


