import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EarthScreen from '/Users/larsdebruijn/CelestialExplorer/EarthScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Other screens in your stack */}
      <Stack.Screen name="EarthScreen" component={EarthScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
