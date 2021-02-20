import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from '../screens/SplashScreen'
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={AppNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

export default AuthNavigator