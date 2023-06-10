import {Dimensions} from "react-native";

export enum Screens {
    Home = "home",
    Earth = "earth",
    Moon = "moon",
    Mars = "mars",
    Sun = "sun",
    Saturn = "saturn",
    Uranus = "uranus",
    Mercury = "mercury",
    Neptune = "neptune",
    TON618 = "ton618",
    MuchMore = "astronaut"
}

export interface Item {
    id: Screens;
    image: any;
    title: string
    subtitle?: string;
}

export const data: Item[] = Object.entries(Screens).map(([key, value]) => ({
    id: value,
    image: `./assets/images/${value}.png`,
    title: `${key} screen`
} as Item));

// export const data: Item[] = [{id: Screens.Home, title: `${Screens.Home} screen`,image: require(`./assets/images/home.png`)}]

export const screenWidth = Dimensions.get('window').width;

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
