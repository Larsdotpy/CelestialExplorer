import { Dimensions } from "react-native";
import Moon from './screens/Moon';
import Earth from './screens/Earth';
import Mars from './screens/Mars';
import Sun from './screens/Sun';
import Saturn from './screens/Saturn';
import Uranus from './screens/Uranus';
import Mercury from './screens/Mercury';
import Neptune from './screens/Neptune';
import TON618 from './screens/TON618';
import MuchMore from './screens/MuchMore';

interface Item {
  id: string;
  image: any;
}

export const data: Item[] = [
    { id: '1', image: require('./assets/images/earth.png') },
    { id: '2', image: require('./assets/images/moon.png') },
    { id: '3', image: require('./assets/images/mars.png') },
    { id: '4', image: require('./assets/images/sun.png') },
    { id: '5', image: require('./assets/images/saturn.png') },
    { id: '6', image: require('./assets/images/uranus.png') },
    { id: '7', image: require('./assets/images/mercury.png') },
    { id: '8', image: require('./assets/images/neptune.png') },
    { id: '9', image: require('./assets/images/ton618.png') },
    { id: '10', image: require('./assets/images/astronaut.png') },
  ];
  
  export const screenWidth = Dimensions.get('window').width;
  export enum Screens{
    Home = "Home",
    Earth = "Earth",
    Moon = "Moon",
    Mars = "Mars",
    Sun = "Sun", 
    Saturn = "Saturn",
    Uranus = "Uranus",
    Mercury = "Mercury",
    Neptune = "Neptune",
    TON618 = "TON618",
    MuchMore = "MuchMore"
  }