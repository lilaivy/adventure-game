import React from 'react';

import caveImg from '../img/cave.jpg';

// function foundTea(props) {
//   User.addOrUseItem(props.items[0]);
//   alert('You found a Taiwanese Oolong!');
//   // User.items.push(props.items[0]);
// }

export default {
  backgroundUrl: caveImg,
  callback: foundTea,
  headerText: 'The Cave',
  bodyText: 'At the bottom of the stairs lies a mysterious and deep cave; you cannot enter, but there is just enough space for you to reach inside. You see something at the bottom of the small crevasse.',
  buttonText: 'Peer into Cave',
  item: [ { name: 'Taiwanese Wulong', teaDrunk: 10, category: 'tea' } ]
};