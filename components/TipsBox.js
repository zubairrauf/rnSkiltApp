import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function TipsBox({ title, subTitle, onPress, color = "white" }) {
  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/dangersigns/100_1.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hvordan beregne bremselengde</Text>
        <Text style={styles.subTitle}>
          Loru fucking ipsum flere ganger her så jeg har litt eksempel text.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    borderColor: colors.white,
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    margin: 5,
    width: "100%",
  },
  imageContainer: {
    // width: "20%",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    backgroundColor: colors.light,
    height: "100%",
    justifyContent: "center",
    padding: 10,
    width: "80%",
  },
  title: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: "700",
    // textTransform: "uppercase",
  },
});

export default TipsBox;
