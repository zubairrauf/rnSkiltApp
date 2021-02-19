import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import {MySignsContextProvider} from './context/MySignsContext'
import SplashScreen from './screens/SplashScreen'
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignsScreen from './screens/SignsScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Splash" component={SplashScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
    <Stack.Screen name="Dashboard" component={DashboardScreen}/>
    <Stack.Screen name="Signs" component={SignsScreen}/>
    <Stack.Screen name="Quiz" component={QuizScreen}/>
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <MySignsContextProvider>
        <StackNavigator />
      </MySignsContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
