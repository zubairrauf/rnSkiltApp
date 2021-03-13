import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function TipsBox({ color = "light", image, onPress, subTitle, title }) {
  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 5,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    margin: 5,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: "100%",
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderTopEndRadius: 50,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    backgroundColor: colors.light,
    flex: 1,
    height: "100%",
    width: 190,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: "700",
    // textTransform: "uppercase",
  },
});

export default TipsBox;
