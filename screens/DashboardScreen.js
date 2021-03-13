import React, { Fragment, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MySignsContext } from "../context/MySignsContext";
import { SignsScoreContext } from "../context/SignsScoreContext";
import AppText from "../components/AppText";
import CategoryBox from "../components/CategoryBox";
import TipsBox from "../components/TipsBox";
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

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.textContainer}>
          <AppText style={styles.heading}>Hei {name} </AppText>
          <AppText style={styles.description}>
            Velg en kategori for å lære traffikkskilt eller ta en quizz.
          </AppText>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <MaterialCommunityIcons
              name="star"
              size={10}
              color={colors.dark}
              style={styles.icon}
            />
            <SignsScoreContext.Consumer>
              {({ signsScore }) => (
                <AppText
                  onPress={() =>
                    navigation.navigate("Test", { slug: "mySigns" })
                  }
                >
                  {signsScore[0] ? signsScore[signsScore.length - 1] : 0} poeng
                  i siste test
                </AppText>
              )}
            </SignsScoreContext.Consumer>
          </View>
          <View style={styles.statsBox}>
            <MaterialCommunityIcons
              name="folder-open"
              size={10}
              color={colors.dark}
              style={styles.icon}
            />
            <MySignsContext.Consumer>
              {({ mySigns }) => (
                <AppText
                  onPress={() =>
                    navigation.navigate("MySigns", { slug: "mySigns" })
                  }
                >
                  {`${mySigns.length} skilt i huskelisten`}
                </AppText>
              )}
            </MySignsContext.Consumer>
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView
          contentContainerStyle={styles.TipsScrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TipsBox
            title="Beregne bremselengde"
            subTitle="For å beregne bremselengde, multipliser farten med"
            image={require("../assets/images/dangersigns/100_1.jpg")}
          />
          <TipsBox
            title="Beregne bremselengde"
            subTitle="For å beregne bremselengde, multipliser farten med"
            image={require("../assets/images/dangersigns/100_1.jpg")}
          />
          <TipsBox
            title="Beregne bremselengde"
            subTitle="For å beregne bremselengde, multipliser farten med"
            image={require("../assets/images/dangersigns/100_1.jpg")}
          />
          <TipsBox
            title="Beregne bremselengde"
            subTitle="For å beregne bremselengde, multipliser farten med"
            image={require("../assets/images/dangersigns/100_1.jpg")}
          />
        </ScrollView>
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
    width: '100%',
  },
  topSection: {
    height: 190,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
  },
  statsContainer: {
    height: 60,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
  },
  statsBox: {
    backgroundColor: colors.secondary,
    padding: 10,
    width: "49%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    padding: 10,
    marginRight: 10,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  bodyContainer: {
    paddingHorizontal: 10, 
  },
  signsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TipsScrollContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    // marginTop: 20,
  },
});

export default DashboardScreen;
