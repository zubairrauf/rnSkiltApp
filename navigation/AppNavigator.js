import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MySignsContext } from "../context/MySignsContext";
import HomeNavigator from "./HomeNavigator";
import DashboardScreen from "../screens/DashboardScreen";
import SignsScreen from "../screens/SignsScreen";
import MySignsScreen from "../screens/MySignsScreen";
import TheoryTipsScreen from "../screens/TheoryTipsScreen";
import QuizScreen from "../screens/QuizScreen";
import colors from "../config/colors";

//Tab Navigation
const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <MySignsContext.Consumer>
    {({ mySigns }) => (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Tips") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Mine skilt") {
              iconName = focused ? "md-folder-sharp" : "md-folder-outline";
            } else if (route.name === "Quiz") {
              iconName = focused ? "trail-sign-sharp" : "trail-sign-outline";
            }

            // You can return any component that you like here!
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
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Tips" component={TheoryTipsScreen} />
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
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    )}
  </MySignsContext.Consumer>
);

export default AppNavigator;
