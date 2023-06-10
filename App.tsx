import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Home} from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Screens} from './utilities';
import Earth from './screens/Earth';
import Moon from './screens/Moon';
import Mars from './screens/Mars';
import Sun from './screens/Sun';
import Saturn from './screens/Saturn';
import Uranus from './screens/Uranus';
import Mercury from './screens/Mercury';
import Neptune from './screens/Neptune';
import TON618 from './screens/TON618';
import MuchMore from './screens/MuchMore';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name={Screens.Home} component={Home}/>
        <Stack.Screen name={Screens.Earth} component={Earth}/>
        <Stack.Screen  name={Screens.Moon} component={Moon} />
        <Stack.Screen  name={Screens.Mars} component={Mars} />
        <Stack.Screen  name={Screens.Sun} component={Sun} />
        <Stack.Screen  name={Screens.Saturn} component={Saturn} />
        <Stack.Screen  name={Screens.Uranus} component={Uranus} />
        <Stack.Screen  name={Screens.Mercury} component={Mercury} />
        <Stack.Screen  name={Screens.Neptune} component={Neptune} />
        <Stack.Screen  name={Screens.TON618} component={TON618} />
        <Stack.Screen  name={Screens.MuchMore} component={MuchMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;