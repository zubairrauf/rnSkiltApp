import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import AppIcon from "./AppIcon";
import colors from "../config/colors";

function QuizOptions({ children, style, handleIcon, ...otherProps }) {
  return (
    <View style={[styles.container, { style }]}>
      <AppText style={[styles.option, style]} {...otherProps}>
        {children}
      </AppText>
      <View style={styles.iconContainer}>
        {handleIcon === "correct" && (
          <AppIcon name="check" size={30} backgroundColor={colors.primary} />
        )}
        {handleIcon === "incorrect" && (
          <AppIcon name="cross" size={30} backgroundColor={colors.danger} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  option: {
    width: "100%",
  },
  iconContainer: {
    position: "absolute",
    right: 6,
    top: 10,
  },
});

export default QuizOptions;
