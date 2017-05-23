import React, { Component } from 'react';
import landingScene from './scenes';
import User from './User';
import ActionButton from './ActionButton';
import EnterUserName from './EnterUserName';

const items = [
  // { name: 'Taiwanese Wulong', teaDrunk: 10, category: 'tea' },
  { name: 'Big Red Robe Wulong', teaDrunk: 20, category: 'tea' },
  { name: '1950 Pu\'er', teaDrunk: 30, category: 'tea' },
  { name: '1950 Pu\'er', teaDrunk: 30, category: 'tea' },
  { name: 'Broadsword', damage: 30, category: 'weapon' }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      currentScene: landingScene,
      
    };

    this.setName = this.setName.bind(this);
    this.goToScene = this.goToScene.bind(this);
  }

  setName(userName) {
    this.setState({ userName });
  }

  goToScene(scene) {
    this.setState({ currentScene: scene });
  }

  foundItem(item) {
    this.setState(item[0]);
    alert(`You found a ${item}!`);
  }

  // wanting to add item when user navigates to a given scene, where do we store the item data and user data and where do we call a function to add that item to user state? top level or user component...

  render() {
    const { userName, currentScene } = this.state;
    const { headerText, backgroundUrl, bodyText, buttonText, buttonText2 } = currentScene;
    const form =
      <EnterUserName
        currentScene={currentScene}
        setName={this.setName}
        goToScene={this.goToScene}
      />;
    const button =
      <ActionButton
        currentScene={currentScene}
        buttonText={buttonText}
        buttonText2={buttonText2}
        goToScene={this.goToScene}
        callback={currentScene.callback}
      />;
    const sceneAction = currentScene === landingScene ? form : button;

    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundUrl})`
      }}>
        <User userName={userName} items={items} />
        <div className="wrapper">
          <div className="Scene-header">
            <h2>{headerText}</h2>
          </div>
          <p> {bodyText} </p>
          {sceneAction}
        </div>
      </div>
    );
  }
}

export default App;
