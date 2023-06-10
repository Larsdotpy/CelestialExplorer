import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, FlatList } from 'react-native';
import 'react-native-gesture-handler';
import {Screens, data } from '../utilities';

export const Home = () => {
  const navigation = useNavigation();
  const handleImagePress = (itemId) => {
    let screenName = '';

    switch (itemId) {
      case '1':
        screenName = Screens.Earth;
        break;
      case '2':
        screenName = Screens.Moon;
        break;
      case '3':
        screenName = Screens.Mars;
        break;
      case '4':
        screenName = Screens.Sun;
        break;
      case '5':
        screenName = Screens.Saturn;
        break;
      case '6':
        screenName = Screens.Uranus;
        break;
      case '7':
        screenName = Screens.Mercury;
        break;
      case '8':
      screenName = Screens.Neptune;
        break;
      case '9':
        screenName = Screens.TON618;
        break;
      case '10':
        screenName = Screens.MuchMore;
        break;
      default:
        screenName = Screens.Home; // The default screen name if no matching ID is found
        break;
    }

    navigation.navigate(screenName);
  };


  //Onderstaande error kan worden genegeerd
  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => handleImagePress(item.id)} >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.imageText}>
        {item.id === '1'
          ? 'Earth'
          : item.id === '2'
          ? 'Moon'
          : item.id === '3'
          ? 'Mars'
          : item.id === '4'
          ? 'Sun'
          : item.id === '5'
          ? 'Saturn'
          : item.id === '6'
          ? 'Uranus'
          : item.id === '7'
          ? 'Mercury'
          : item.id === '8'
          ? 'Neptune'
          : item.id === '9'
          ? 'TON 618'
          : item.id === '10'
          ? 'and much more...'
          : ''}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.background}>
      <TextInput style={styles.searchBar} placeholder="What are you looking for?" placeholderTextColor="black"/>
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    marginTop: 60,
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
