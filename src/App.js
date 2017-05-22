import React, { Component } from 'react';
// import landingScene from './scenes/01-landing'; //might need to change this because of scene module
import landingScene from './scenes';
import User from './User';
import ActionButton from './ActionButton';
import EnterUserName from './EnterUserName';

//import scenes but what do we do with them?

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      currentScene: landingScene
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

  render() {
    const { userName, currentScene } = this.state;
    const { headerText, backgroundUrl, bodyText, buttonText } = currentScene;
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
      goToScene={this.goToScene}
      callback={currentScene.callback}
    />;
    const sceneAction = currentScene === landingScene ? form : button;

    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundUrl})`
      }}>
        <User userName={userName} />
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
