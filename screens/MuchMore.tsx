import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const MuchMore = () => (
    <View>
        <Image
            source={require('/Users/larsdebruijn/CelestialExplorer/assets/images/muchmore.png')}
            style={{ width: '100%', height: '100%', zIndex: 1 }}/>  
        <Text style={styles.text}>More ideas are yet to come...
            </Text>      
    </View>
)

const styles = StyleSheet.create({
    text: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    }
  });

export default MuchMore;