import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";

export enum Screens {
  Home = "Home",
  Earth = "Earth",
  Moon = "Moon",
  Mars = "Mars",
  Sun = "Sun",
  Saturn = "Saturn",
  Uranus = "Uranus",
  Mercury = "Mercury",
  Neptune = "Neptune",
  TON618 = "Ton618",
  MuchMore = "and much more..."
}

export interface Item {
  id: Screens;
  image: any;
  title: string;
  subtitle?: string;
}

const earth = require("./assets/images/earth.png");
const moon = require("./assets/images/moon.png");
const mars = require("./assets/images/mars.png");
const mercury = require("./assets/images/mercury.png");
const sun = require("./assets/images/sun.png");
const ton618 = require("./assets/images/ton618.png");
const muchMore = require("./assets/images/astronaut.png");
const saturn = require("./assets/images/saturn.png");
const neptune = require("./assets/images/neptune.png");
const uranus = require("./assets/images/uranus.png");

export const data: Item[] = [
  {
    id: Screens.Earth,
    image: earth,
    title: "Earth screen",
  },
  {
    id: Screens.Moon,
    image: moon,
    title: "Moon screen",
  },
  {
    id: Screens.Mars,
    image: mars,
    title: "Mars screen",
  },
  {
    id: Screens.Sun,
    image: sun,
    title: "Sun screen",
  },
  {
    id: Screens.Saturn,
    image: saturn,
    title: "Saturn screen",
  },
  {
    id: Screens.Uranus,
    image: uranus,
    title: "Uranus screen",
  },
  {
    id: Screens.Mercury,
    image: mercury,
    title: "Mercury screen",
  },
  {
    id: Screens.Neptune,
    image: neptune,
    title: "Neptune screen",
  },
  {
    id: Screens.TON618,
    image: ton618,
    title: "TON618 screen",
  },
  {
    id: Screens.MuchMore,
    image: muchMore,
    title: "and much more...",
  },
];

export const screenWidth = Dimensions.get("window").width;

export type RootStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Earth]: Item;
  [Screens.Moon]: Item;
  [Screens.Mars]: Item;
  [Screens.Sun]: Item;
  [Screens.Saturn]: Item;
  [Screens.Uranus]: Item;
  [Screens.Mercury]: Item;
  [Screens.Neptune]: Item;
  [Screens.TON618]: Item;
  [Screens.MuchMore]: Item;
};