import {Dimensions} from "react-native";

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

export const getPieChartData = (data: number[]) => {
    return data.map((item, index) => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

        return {
            key: index,
            value: item,
            svg: {fill: randomColor},
        }
    })
}
