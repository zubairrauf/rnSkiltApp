import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QuizOverviewScreen from "../screens/QuizOverviewScreen";
import SignsQuizScreen from "../screens/SignsQuizScreen";

const Stack = createStackNavigator();
const QuizNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Test"
      component={QuizOverviewScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignsTest"
      component={SignsQuizScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default QuizNavigator;
