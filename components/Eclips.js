import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors'

function Eclips({color = colors.secondary}) {
  return (
    <View style={styles.container}>
        <View style={[styles.eclips1, {backgroundColor: color}]} />
        <View style={[styles.eclips2, {backgroundColor: color}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: -100,
      left: -100
  },
  eclips1: {
      width: 200,
      height: 200,
      borderRadius: 100,
      position: 'relative',
      left: 30,
      top: -30,
      opacity: .5
    },
    eclips2: {
        width: 200,
        height: 200,
        borderRadius: 100,
        position: 'relative',
        top: -160,
        left: -30,
        opacity: .5
  }
});

export default Eclips;