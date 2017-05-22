import React, { Component } from 'react';
import './App.css';
import UserSignin from './UserSignin';
import Image from './images/map.jpg';
import Pina from './images/pina.jpg';
import Luau from './images/luau.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
      // nextScene:nextSence
      image: '',
      text: ''

    }

    this.changeName = this.changeName.bind(this);

  }
  changeName(name) {
    this.setState({ name });
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changeScene(nextScene) {
    this.setState({ nextScene });
  }
  changeImage(image) {
    this.setState({ image });

  }

  render() {
    const { name, message, image } = this.state;


    return (
      <div>
        <UserSignin
          name={name}
          changeName={this.changeName}
        />
        {/* <SceneOne/>*/}

        <div className="adventureMessage"></div>
        <h2>Good Morning {name}, you have been transported to Hawaii. Congratulations! </h2>
        <img src={Image} className="welcomeImage" />
        <h2>Send A message to all your rained out PDX homies: {this.state.message}</h2>
        <form className="message-form"
          onSubmit={event => {
            event.preventDefault();
            this.changeMessage(event.target.elements.message.value);
          }}
        >
          <input style={{
            fontSize: '15px',
            borderRadius: '5px',
            backgoundColor: 'while'
          }}
            name='message'
            type='text'
            placeholder='Message To Homies:' />
          <input style={{
            fontSize: '15px',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}
            type='submit'
            name='submit'
          />
        </form>
        <button className="move-on" onClick={() => this.changeScene('nextScene')}>CheckOut What Happens Next!</button>


        <div className="adventureMessage">
          <h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

          <h2>But grab a Pina Colada first, duh!</h2>

          <img src={Pina} className="pinaImage" onClick={this.changeImage('')} />
          <form className="message-form">

          </form>
          <div className="Luau">
             <h2>Oh no {name}! You've encountered a touristy Luau that is keeping you from assessing he beach! </h2>
            <img src={Luau} className="luau"/>
          </div>
        
        </div>
      </div>

    );
  }
}



export default App;
