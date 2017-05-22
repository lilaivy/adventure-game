import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <div>
        {this.props.callback ?
          (
            <div>
              <button type="submit" onClick={this.props.callback}>{this.props.buttonText}</button>
              <button onClick={() => {
                this.props.goBack(this.props.scene);
              }
              }>Go back</button>
            </div>
          )
          :
          (
            <div>
              <button type="submit" onClick={() => {
                this.props.goToScene(this.props.scene.nextScene);
              }}>{this.props.buttonText}</button>
              <button onClick={() => {
                this.props.goBack(this.props.scene);
              }
              }>Go back</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default Button;