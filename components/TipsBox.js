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
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    backgroundColor: colors.white,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    backgroundColor: colors.light,
    flex: 1,
    height: "100%",
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
