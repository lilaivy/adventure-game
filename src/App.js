import React, { Component } from 'react';
import landingScene from './scenes/01-landing';

class App extends Component {

  constructor() {
    super();

    this.state = {
      backgroundURL: landingScene.backgroundUrl,
      headerText: landingScene.headerText,
      bodyText: landingScene.bodyText,
      buttonText: landingScene.buttonText,
      userName: '',
      scene: landingScene
    };
  }

  setName(userName) {
    this.setState({ userName });
  }

  goToScene(scene) {
    this.setState({ scene });
    this.setState({ backgroundURL: scene.backgroundUrl });
    this.setState({ headerText: scene.headerText });
    this.setState({ bodyText: scene.bodyText });
    this.setState({ buttonText: scene.buttonText });
  }

  render() {
    const { headerText, backgroundURL, bodyText, buttonText, userName, scene } = this.state;
    return (
      <div className="main" style={{
        backgroundImage: `url(${backgroundURL})`
      }}>
        <div className="wrapper">
          <div className="Scene-header">
            <h2>{headerText}</h2>
          </div>
          <p> {bodyText} </p>
          <form onSubmit={e => {
            e.preventDefault();
            this.setName(e.target.elements.nameinput.value);
            this.goToScene(scene.nextScene);
          }}>
            <label>Name <input name="nameinput"></input></label>
            <p><button type="submit">{buttonText}</button></p>
          </form>
          <p> Player: {userName} </p>
          <p> Items: </p>
          <p> Caffiene: 100/100</p>
        </div>
      </div >
    );
  }
}

export default App;
