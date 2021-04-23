import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";
import { MySignsContextProvider } from "./context/MySignsContext";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  const [name, setName] = useState();
  //Reading the name from AsynStorage and updating the name state.
  const getName = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const value = JSON.parse(jsonValue);
      setName(value.name);
    } catch (error) {
      console.error(error);
    }
  };

  //Run the getName on component load
  useEffect(() => {
    getName("kivName");
  }, []);

  return (
    <MySignsContextProvider>
      <NavigationContainer theme={navigationTheme}>
        {name ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </MySignsContextProvider>
  );
}
