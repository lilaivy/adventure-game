import React from 'react';
import Drunk from './Drunk'
import ChangeSceneButton from './ChangeSceneButton';

export default function Lobby({changeScene, Scene, name}) {
        return (
            <div>
                <h1>You've stumbled upon a fancy resort. Why not sneak in and check it out? Where should you go first?</h1>
                <ChangeSceneButton
                changeScene={changeScene}
                Scene={Drunk} 
                name={name}
                buttonMessage="Go To The Bar"/>
              
                    Go to Pool
               
            </div>
        );
    }
