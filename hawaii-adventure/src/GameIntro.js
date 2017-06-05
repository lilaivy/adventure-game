import React from 'react';
import './App.css';
import Image from './images/welcome.jpg';
import ChangeSceneButton from './ChangeSceneButton'

export default function GameIntro({ name }) {
    return (

        <div className="adventureMessage">
            <h1>Good Morning {name}, you have been transported to Hawaii. Congratulations and Mahalo! </h1>
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
            <ChangeSceneButton/>
        </div>

    )
}