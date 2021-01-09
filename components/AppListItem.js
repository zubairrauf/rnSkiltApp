import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";
import AppIcon from '../components/AppIcon'


function AppListItem({ title, subTitle, image, onPress }) {
  return (
    <View style={styles.container}>
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
        <View style={styles.iconContainer}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <AppIcon name='plus' />
            </TouchableHighlight>
        </View>
    </View>
  );
}

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 5,
    alignItems: 'center',
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
});
