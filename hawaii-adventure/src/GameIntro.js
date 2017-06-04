import React from 'react';
import './App.css';
import Image from './images/welcome.jpg'

export default function GameIntro(props) {
    return (

        <div className="adventureMessage">
            <h1>Good Morning {name}, you have been transported to Hawaii. Congratulations! </h1>
            <img src={Image} className="welcomeImage" alt='map'/>
        </div>
    )
}