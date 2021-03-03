import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator'
import { MySignsContextProvider } from './context/MySignsContext'
import navigationTheme from './navigation/navigationTheme';
import FlashcardsDeck from './components/FlashcardsDeck'


export default function App() {
  return (
    // <NavigationContainer theme={navigationTheme}>
    //   <MySignsContextProvider>
    //     <AuthNavigator />
    //   </MySignsContextProvider>
    // </NavigationContainer>
    <FlashcardsDeck />
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
