import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText'

function AppHeader({ title }) {
  return (
    <View style={styles.container}>
        <AppText>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default AppHeader;