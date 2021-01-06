import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({ title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity 
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      padding: 15,
      width: "100%",
  },
  text: {
      color: colors.dark,
      fontSize: 16,
      fontWeight: "700",
      // textTransform: "uppercase",
  }
});

export default AppButton;