import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../AwesomeProject/src/Screen/Homescreen';
import Logon from '../AwesomeProject/src/Screen/Logon';
import Registration from '../AwesomeProject/src/Screen/Registration'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboard from './src/Screen/Onboard';
import Profile from './src/Navigation/Profile';

// import AppNavigation from './src/Navigation';

const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name='Logon' component={Logon}/>
      <Stack.Screen name='Onboard' component={Onboard}/>
      {/* <Stack.Screen name='LoginScreen' component={LOginScreen}/> */}
      <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name='Profile' component={Profile}/>

    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;


