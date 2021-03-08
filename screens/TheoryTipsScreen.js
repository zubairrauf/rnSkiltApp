import React from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";

import TipsBox from "../components/TipsBox";

function TheoryTipsScreen({ navigation }) {
  const tips = require("../data/tipsData.json");
  console.log("Tipsdata", tips);
  return (
    <Screen style={styles.container}>
      <Eclips />
      <AppText style={styles.heading}>Kjør i vei</AppText>
      <AppText>Teoritips</AppText>
      <ScrollView
        contentContainerStyle={styles.SignsScrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {tips.map((tip) => (
          <TipsBox
            key={tip.id}
            title={tip.title}
            subTitle={tip.description}
            image={require("../assets/images/dangersigns/100_1.jpg")}
            onPress={() => console.log("Tips")}
          />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  SignsScrollContainer: {
    // backgroundColor: "blue",
  },
});

export default TheoryTipsScreen;
