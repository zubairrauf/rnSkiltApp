import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function CategoryBox({ title, subTitle, onPress, color = "white"}) {
  return (
    <TouchableOpacity 
      style={[styles.box, {backgroundColor: colors[color]}]}
      onPress={onPress}
    >
        <Image source={require("../assets/images/car.png")} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      padding: 15,
      width: 150,
      height: 150,
      shadowColor: '#303030',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.7,
      elevation: 3
  },
  image: {
      width: 60,
      height: 60
  },
  title: {
      color: colors.dark,
      fontSize: 18,
      fontWeight: "700",
      // textTransform: "uppercase",
  }
});

export default CategoryBox;