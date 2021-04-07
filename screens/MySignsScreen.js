import React from "react";
import { StyleSheet, View } from "react-native";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import Eclips from "../components/Eclips";
import { MySignsContext } from "../context/MySignsContext";
import Screen from "../components/Screen";
import SignsList from "../components/SignsList";

function SignsScreen() {
  return (
    <Screen style={styles.container}>
      <Eclips />
      <AppHeader title="Mine skilt" />
      <MySignsContext.Consumer>
        {({ mySigns, setMySigns }) => {
          if (mySigns.length > 0) {
            return (
              <SignsList
                slug="mySigns"
                mySigns={mySigns} //comming from context
                setMySigns={setMySigns} //comming from context
              />
            );
          } else {
            return (
              <View style={styles.container}>
                <AppText style={styles.title}>Ingen skilt lagret.</AppText>
                <AppText style={styles.description}>
                  Her dukker opp en liste av skilt som du lagrer ved å trykke på
                  + ikonen.
                </AppText>
              </View>
            );
          }
        }}
      </MySignsContext.Consumer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default SignsScreen;
