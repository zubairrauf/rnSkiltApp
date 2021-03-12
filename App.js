<<<<<<< HEAD
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
=======
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator'
import { MySignsContextProvider } from './context/MySignsContext'
import navigationTheme from './navigation/navigationTheme';
import FlashcardsDeck from './components/FlashcardsDeck'
>>>>>>> c06d3286d6c9f9431dcd3aca5cd949508efb70b6

import AuthNavigator from "./navigation/AuthNavigator";
import { MySignsContextProvider } from "./context/MySignsContext";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
<<<<<<< HEAD
    <MySignsContextProvider>
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </MySignsContextProvider>
=======
    // <NavigationContainer theme={navigationTheme}>
    //   <MySignsContextProvider>
    //     <AuthNavigator />
    //   </MySignsContextProvider>
    // </NavigationContainer>
    <FlashcardsDeck />
>>>>>>> c06d3286d6c9f9431dcd3aca5cd949508efb70b6
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
