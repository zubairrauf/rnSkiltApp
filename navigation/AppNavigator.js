import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MySignsContext } from "../context/MySignsContext";
import HomeNavigator from "./HomeNavigator";
import TipsNavigator from "./TipsNavigator";
import QuizNavigator from "./QuizNavigator";
import MySignsScreen from "../screens/MySignsScreen";
import colors from "../config/colors";
import { SignsScoreContextProvider } from "../context/SignsScoreContext";

//Tab Navigation
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <SignsScoreContextProvider>
    <MySignsContext.Consumer>
      {({ mySigns }) => (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Forside") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Tips") {
                iconName = focused ? "book" : "book-outline";
              } else if (route.name === "Mine skilt") {
                iconName = focused ? "md-folder-sharp" : "md-folder-outline";
              } else if (route.name === "Test") {
                iconName = focused ? "trail-sign-sharp" : "trail-sign-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            // activeBackgroundColor: colors.secondary,
            activeTintColor: colors.dark,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.medium,
            labelStyle: { fontSize: 12, fontWeight: "700" },
          }}
        >
          <Tab.Screen name="Forside" component={HomeNavigator} />
          <Tab.Screen name="Tips" component={TipsNavigator} />
          <Tab.Screen
            name="Mine skilt"
            component={MySignsScreen}
            options={{
              tabBarBadge: mySigns.length,
              tabBarBadgeStyle: {
                backgroundColor:
                  mySigns.length < 1 ? colors.light : colors.primary,
              },
            }}
          />
          <Tab.Screen name="Test" component={QuizNavigator} />
        </Tab.Navigator>
      )}
    </MySignsContext.Consumer>
  </SignsScoreContextProvider>
);

export default AppNavigator;
