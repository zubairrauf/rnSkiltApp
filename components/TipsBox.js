import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppModal from '../components/AppModal'
import colors from "../config/colors";

function TipsBox({ color = "white", image, onPress, subTitle, title }) {
  const [ modalVisible, setModalVisible ] = useState(false)
  const handleClick = () => {
    setModalVisible(true)
  }

  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} title={title}  description={subTitle} image={image}/>
      <TouchableOpacity
        style={[styles.box, { backgroundColor: colors[color] }]}
        onPress={handleClick}
      >
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    margin: 5,
    // paddingHorizontal: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    elevation: 8,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: "100%",
    backgroundColor: colors.light,
    borderBottomColor: colors.light,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderRadius: 50,
    padding: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    elevation: 8,
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 50,
  },
  textContainer: {
    // backgroundColor: colors.light,
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
