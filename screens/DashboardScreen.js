import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppText from "../components/AppText";
import CategoryBox from "../components/CategoryBox";
import colors from "../config/colors";
import TipsBox from "../components/TipsBox";
import { categories } from '../data/categoriesData'
import { tipsData } from "../data/tipsData";

function DashboardScreen({ navigation }) {
  const [name, setName] = useState();

  //Reading the name from AsynStorage and updating the name state.
  const getName = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const value = JSON.parse(jsonValue);
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
    .slice(-2)
    .map((tip) => (
      <TipsBox
        key={tip.id}
        title={tip.title}
        subTitle={tip.description}
        image={tip.img}
        onPress={() => navigation.navigate("SingleTips", { 
          id: tip.id, 
          title: tip.title,
          img: tip.img
        })}
      />
    ));

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.textContainer}>
          <AppText style={styles.heading}>Hei {name}</AppText>
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
              image={category.img}
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
