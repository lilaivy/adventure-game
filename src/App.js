import React, { Component } from 'react';
import landingScene from './scenes/01-landing';
import User from './User';
import Button from './Button';
import Form from './Form';

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

    this.setName = this.setName.bind(this);
    this.goToScene = this.goToScene.bind(this);
    this.goBack = this.goBack.bind(this);
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

  goBack(scene) {
    this.setState({ scene: scene.prevScene });
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
          {scene === landingScene &&
            <Form
              scene={scene}
              setName={this.setName}
              goToScene={this.goToScene}
            />
          }
          {scene !== landingScene &&
            <Button
              scene={scene}
              buttonText={buttonText}
              goToScene={this.goToScene}
              goBack={this.goBack}
              callback={scene.callback}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
