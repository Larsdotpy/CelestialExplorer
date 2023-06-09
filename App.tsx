import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';

interface Item {
  id: string;
  image: any;
}

const data: Item[] = [
  { id: '1', image: require('./assets/images/earth.png') },
  { id: '2', image: require('./assets/images/moon.png') },
  { id: '3', image: require('./assets/images/mars.png') },
  { id: '4', image: require('./assets/images/sun.png') },
  { id: '5', image: require('./assets/images/saturn.png') },
  { id: '6', image: require('./assets/images/uranus.png') },
  { id: '7', image: require('./assets/images/mercury.png') },
  { id: '8', image: require('/Users/larsdebruijn/CelestialExplorer/assets/images/neptune.png') },
  { id: '9', image: require('/Users/larsdebruijn/CelestialExplorer/assets/images/ton618.png') },
  { id: '10', image: require('/Users/larsdebruijn/CelestialExplorer/assets/images/astronaut.png') },
];

const screenWidth = Dimensions.get('window').width;

const App = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    // Navigate to the desired screen
    navigation.navigate('DetailsScreen'); // Replace 'DetailsScreen' with the actual screen name
  };

  return (
    <AppNavigator>
      <View style={styles.background}>
        <TextInput style={styles.searchBar} placeholder="What are you looking for?" />
        <ScrollView contentContainerStyle={styles.container}>
          {data.map((item) => (
            <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={handleImagePress}>
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
          ))}
        </ScrollView>
      </View>
    </AppNavigator>
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
    paddingBottom: 80, // Adjust bottom padding to prevent overlapping content
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: screenWidth / 2, // Adjust image width as needed
    height: screenWidth / 2, // Adjust image height as needed
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

export default App;
