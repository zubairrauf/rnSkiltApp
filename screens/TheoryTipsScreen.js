import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";

import TipsBox from "../components/TipsBox";
import { tipsData } from "../data/tipsData";

function TheoryTipsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Eclips />
      <AppHeader title="Teori tips" />
      <ScrollView
        contentContainerStyle={styles.SignsScrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {tipsData.map((tip) => (
          <TipsBox
            key={tip.id}
            title={tip.title}
            subTitle={tip.description}
            image={tip.img}
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
