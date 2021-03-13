import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import appSettings from "../config/appSettings";

function AppHeader({ title }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>
        {appSettings.name} - {title}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default AppHeader;
