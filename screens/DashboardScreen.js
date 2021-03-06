import React, { Fragment, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MySignsContext } from "../context/MySignsContext";
import { SignsScoreContext } from "../context/SignsScoreContext";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import CategoryBox from "../components/CategoryBox";
import TipsBox from "../components/TipsBox";
import { tipsData } from "../data/tipsData";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";
import colors from "../config/colors";

function DashboardScreen({ navigation }) {
  const [name, setName] = useState();
  const categories = require("../data/categoriesData.json");

  //Reading the name from AsynStorage and updating the name state.
  const getName = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const value = JSON.parse(jsonValue);
      console.log(value);
      setName(value.name);
    } catch (error) {
      console.error(error);
    }
  };

  //Run the getName on component load
  useEffect(() => {
    getName("kivName");
  }, []);

  //Creating TipsBox for first few items in TipsData
  let tipsToDisplay = tipsData
    .slice(0, 2)
    .map((tip) => (
      <TipsBox
        key={tip.id}
        title={tip.title}
        subTitle={tip.description}
        image={tip.img}
        onPress={() => console.log("Tips")}
      />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.textContainer}>
          <AppText style={styles.heading}>Hei {name} </AppText>
          <AppText style={styles.description}>
            Les teoritips eller velg en kategori for å lære trafikkskilt. Ta
            tester for å se hvor mye du har lært.
          </AppText>
        </View>
      </View>
      <View style={styles.tipsContainer}>
        <ScrollView
          contentContainerStyle={styles.tipsScrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {tipsToDisplay}
        </ScrollView>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.signsContainer}>
          {categories.map((category) => (
            <CategoryBox
              key={category.id}
              title={category.name}
              subTitle={`Antall: ${category.number}`}
              onPress={() =>
                navigation.navigate("Signs", { slug: category.slug })
              }
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
  },
  tipsContainer: {
    marginTop: -50,
  },
  tipsScrollContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bodyContainer: {
    alignItems: 'center',
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  signsContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default DashboardScreen;
