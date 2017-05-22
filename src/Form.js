import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName
    };
  }

  render() {
    return (
      <div>
          <form onSubmit= {e => {
            e.preventDefault();
            this.props.setName(e.target.elements.nameinput.value);
            this.props.goToScene(this.props.scene.nextScene);}}>
            <label>What's Your Name: <input name="nameinput"></input></label>
            <p><button type="submit">{this.props.scene.buttonText}</button></p>
          </form>
      </div >
    );
  }
}

export default Form;