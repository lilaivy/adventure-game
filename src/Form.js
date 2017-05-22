import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName
    };
  }

  setName(userName) {
    this.setState({ userName });
  }

  render() {
    const { scene } = this.state;
    return (
      <div>
        <form className="toggle" onSubmit={e => {
          e.preventDefault();
          this.setName(e.target.props.elements.nameinput.value);
          this.goToScene(scene.nextScene);
        }}>
          <label>Name <input name="nameinput"></input></label>
          <p><button type="submit">{buttonText}</button></p>
        </form>
      </div >
    );
  }
}

export default Form;