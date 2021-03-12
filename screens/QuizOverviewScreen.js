import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { SignsScoreContext } from "../context/SignsScoreContext";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";

function QuizOverviewScreen({ navigation }) {
  return (
    <SignsScoreContext.Consumer>
      {({ signsScore, setSignsScore }) => (
        <Screen style={styles.container}>
          <Eclips />
          <View style={styles.header}>
            <AppText style={styles.heading}>Kjør i vei</AppText>
            <AppText style={styles.subHeading}>Dine tester</AppText>
            {signsScore.map((score) => (
              <AppText style={styles.subHeading}>Last score {score}</AppText>
            ))}
          </View>
          <View style={styles.buttonsContainer}>
            <AppButton title="Teori test" color="secondary" width="40%" />
            <AppButton
              title="Skilt test"
              onPress={() =>
                navigation.navigate("SignsTest", { signsScore, setSignsScore })
              }
              width="40%"
            />
          </View>
        </Screen>
      )}
    </SignsScoreContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default QuizOverviewScreen;
