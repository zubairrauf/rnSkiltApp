import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./navigation/AuthNavigator";
import { MySignsContextProvider } from "./context/MySignsContext";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
    <MySignsContextProvider>
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </MySignsContextProvider>
  );
}

