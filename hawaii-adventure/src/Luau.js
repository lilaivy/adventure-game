import React from 'react';
import Dead from './Dead';
import Beach from './Beach';
import ChangeSceneButton from './ChangeSceneButton';
import luau from './images/luau.jpg';
import Drunk from './Drunk'

export default function Luau ({changeScene, Scene, name}) {
  return(
  <div className="Luau">
    <h2>Oh no {name}! You've encountered a touristy Luau while trying to access the beach! Do you throw on a grass skirt and join in on the hula action, head back to the bar, or bail on the resort all together with your new surfer homie? </h2>
  <img src={luau} className="luau" alt='luau' />
    <ChangeSceneButton
      changeScene={changeScene}
      Scene={Dead}
      buttonMessage="Stay at The Luau" 
      />
       <ChangeSceneButton
      changeScene={changeScene}
      Scene={Drunk}
      buttonMessage="Head Back To The Bar" 
      />
    <ChangeSceneButton
      changeScene={changeScene}
      Scene={Beach} 
      buttonMessage="Bail on Luau"
      />
  </div>
  );
}