import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import colors from "../config/colors";

function CategoryBox({ title, subTitle, image, onPress, color = "white" }) {
  return (
    <TouchableOpacity
      style={[styles.box, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 5,
    width: (Dimensions.get("window").width - 40) / 2,
    height: 75,
    shadowColor: "#303030",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 3,
  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 12,
  },
});

export default CategoryBox;
