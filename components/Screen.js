//To make sure that the screens are below the notch on both Android and IOS

import React from 'react';
import Constants from 'expo-constants'
import { View, StyleSheet, SafeAreaView } from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 10
  },
  view: {
      flex: 1,
      width: "100%"
  }
});

export default Screen;