import caveImg from '../img/cave.jpg';
import staircaseScene from './04-cave';

function foundTea() {
  alert('You found a Taiwanese Oolong!');
}

export default {
  backgroundUrl: caveImg,
  prevScene: staircaseScene,
  nextScene: foundTea(),
  headerText: 'The Cave',
  bodyText: 'At the bottom of the stairs lies a mysterious and deep cave; you cannot enter, but there is just enough space for you to reach inside. You see something at the bottom of the small crevase.',
  buttonText: 'Peer into Cave'
};