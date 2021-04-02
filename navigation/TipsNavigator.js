import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import TheoryTipsScreen from "../screens/TheoryTipsScreen";
import SingleTipsScreen from "../screens/SingleTipsScreen";

const Stack = createStackNavigator();
const TipsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tips" component={TheoryTipsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SingleTips" component={SingleTipsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

export default TipsNavigator