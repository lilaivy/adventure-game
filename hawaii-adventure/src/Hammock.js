import React from 'react';
import hammock from './images/hammock.jpg';

export default function Hammock () {

    return(
         <div className="Hammock">
          {/*<h2>Well, {name}! You've had {drinks} drinks.  You should sleep it off on this hammock. </h2>*/}
          <img src={hammock} className="hammock" alt='hammock' />
        </div>
    )
}