import React from 'react';
import { StyleSheet } from 'react-native';

import DashboardScreen from './screens/DashboardScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
   <RegisterScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
