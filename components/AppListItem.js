import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/colors";

function AppListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    margin: 5,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
  },
  detailsContainer: {
    justifyContent: "center",
    paddingLeft: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
});
