import React, { Component } from 'react';
import landingScene from './scenes/01-landing';
import User from './User';

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
    console.log(scene);
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
        <User userName={userName} />
        <div className="wrapper">
          <div className="Scene-header">
            <h2>{headerText}</h2>
          </div>
          <p> {bodyText} </p>
          <form onSubmit = {e => {
            e.preventDefault();
            this.setName(e.target.elements.nameinput.value);
            this.goToScene(scene.nextScene);
          }}>
            <label>What's Your Name? <input name = "nameinput"></input></label>
            <p><button type="submit">{buttonText}</button></p>
          </form>
          <p><button onClick = {e => {
            e.preventDefault();
            this.goToScene(scene.previousScene);
          }}>{buttonText}</button></p>
        </div>
      </div >
    );
  }
}

export default App;
