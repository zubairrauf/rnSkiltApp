import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import DashboardScreen from '../screens/DashboardScreen';
import SignsScreen from '../screens/SignsScreen';

const Stack = createStackNavigator();
const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={DashboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signs" component={SignsScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

export default HomeNavigator