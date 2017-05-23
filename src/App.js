import React, { Component } from 'react';
import landingScene from './scenes';
import User from './User-stats';
import ActionButton from './ActionButton';
import EnterUserName from './EnterUserName';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: '',
        items: [],
        teaBuzz: 100
      },
      currentScene: landingScene,
      
    };

    this.setName = this.setName.bind(this);
    this.goToScene = this.goToScene.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  setName(userName) {
    const user = this.state.user;
    this.setState({
      user: Object.assign(user, { name: userName })
    });
  }

  goToScene(scene) {
    this.setState({ currentScene: scene });
  }

  addItem(item) {
    const user = this.state.user;
    const items = user.items.slice();
    items.push(item);
    this.setState({
      user: Object.assign(user, { items })
    });
    alert(`You found a ${item.name}!`);
  }

  // wanting to add item when user navigates to a given scene, where do we store the item data and user data and where do we call a function to add that item to user state? top level or user component...

  render() {
    const { currentScene, user } = this.state;
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
        addItem={this.addItem}
        callback={currentScene.callback}
      />;
    const sceneAction = currentScene === landingScene ? form : button;

    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundUrl})`
      }}>
        <User user={ user } />
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
