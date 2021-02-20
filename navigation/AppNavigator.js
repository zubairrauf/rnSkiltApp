import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator'
import DashboardScreen from '../screens/DashboardScreen';
import SignsScreen from '../screens/SignsScreen';
import MySignsScreen from '../screens/MySignsScreen';
import QuizScreen from '../screens/QuizScreen';
import colors from '../config/colors';

//Tab Navigation
const Tab = createBottomTabNavigator()
const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.secondary,
      activeTintColor: colors.dark,
      inactiveBackgroundColor: colors.light,
      inactiveTintColor: colors.dark,
      labelStyle: { fontSize: 12, fontWeight: '700' }
    }}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeNavigator}
      options={{ 
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>
      }}
    />
    <Tab.Screen 
      name="Mine skilt" 
      component={MySignsScreen}
      options={{ 
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="sign-direction" size={size} color={color}/>
      }}
    />
    <Tab.Screen 
      name="Quiz" 
      component={QuizScreen}
      options={{ 
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="arrow-decision" size={size} color={color}/>
      }}
    />
  </Tab.Navigator>
  )

  export default AppNavigator