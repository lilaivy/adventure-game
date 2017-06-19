import React from 'react';
import './App.css';
import pina from './images/pina.jpg';
import ChangeSceneButton from './ChangeSceneButton';


export default function PinaColada({name}) {
    return (
        <div className="adventureMessage">
            <h2>Surf's up, {name}! It's time to cruise to the beach! </h2>

            <h2>But grab a Pina Colada first, duh!</h2>

            <img src={pina} className="pinaImage" alt='pina' />
            <ChangeSceneButton />
        </div>

    );

}