import React from 'react';
import hammock from './images/hammock.jpg';

export default function Hammock () {

    return(
         <div className="Hammock">
          <h2>Oh no {name}! You've encountered a touristy Luau that is blocking your beach access! Throw on a grass skirt and hula your way through the crowd. </h2>
          <img src={hammock} className="hammock" alt='hammock' />
        </div>
    )
}