import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import {data, Item, RootStackParamList, Screens} from '../utilities'
import {StackNavigationProp} from "@react-navigation/stack";

const earth = require("../assets/images/earth.png");
const moon = require("../assets/images/moon.png")
const mars = require("../assets/images/mars.png");
const mercury = require("../assets/images/mercury.png");
const sun = require("../assets/images/sun.png");
const ton618 = require("../assets/images/ton618.png");
const muchMore = require("../assets/images/astronaut.png");
const saturn = require("../assets/images/saturn.png");
const neptune = require("../assets/images/neptune.png");
const uranus = require("../assets/images/uranus.png");

const images = {
  [Screens.Earth]: earth,
  [Screens.Moon]: moon,
  [Screens.Mars]: mars,
  [Screens.Mercury]: mercury,
  [Screens.MuchMore]: muchMore,
  [Screens.TON618]: ton618,
  [Screens.Sun]: sun,
  [Screens.Saturn]: saturn,
  [Screens.Neptune]: neptune,
  [Screens.Uranus]: uranus,
}

export const Home = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // @ts-ignore: Dit is altijd gezeik
  const handleImagePress = (item: Item) => navigation.navigate(item.id, {item});

  //Onderstaande error kan worden genegeerd
  const renderItem = (item, index) => (
      <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => handleImagePress(item)}>
        <Image source={images[item.id]} style={styles.image}/>
        <Text style={styles.imageText}>{item.id}</Text>
      </TouchableOpacity>
  );

  return (
      <View style={styles.background}>
        <TextInput style={styles.searchBar} placeholder="What are you looking for?" placeholderTextColor="black"/>
        <FlatList
  contentContainerStyle={styles.container}
  data={data}
  renderItem={({ item, index }) => renderItem(item, index)}
  keyExtractor={({ id }) => id}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#171717',
  },
  searchBar: {
    height: 40,
    marginHorizontal: 16,
    marginTop: 80,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 80,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  imageText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
