import React, { useEffect, useState } from "react";
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
    <>
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
              name="star-four-points"
              size={20}
              color={colors.dark}
              style={styles.icon}
            />
            <SignsScoreContext.Consumer>
              {({ signsScore }) => (
                <AppText
                  onPress={() =>
                    navigation.navigate("Quiz", { slug: "mySigns" })
                  }
                >
                  {signsScore[0] ? signsScore[signsScore.length - 1] : 0} poeng
                </AppText>
              )}
            </SignsScoreContext.Consumer>
          </View>
          <View style={styles.statsBox}>
            <MaterialCommunityIcons
              name="folder-open"
              size={20}
              color={colors.dark}
              style={styles.icon}
            />
            <MySignsContext.Consumer>
              {({ mySigns }) => (
                <AppText
                  onPress={() =>
                    navigation.navigate("Signs", { slug: "mySigns" })
                  }
                >
                  {`${mySigns.length} skilt lagret`}
                </AppText>
              )}
            </MySignsContext.Consumer>
          </View>
        </View>
      </View>
      <View style={styles.sectionTitleContainer}>
        <AppText style={styles.sectionTitle}>Trafikkskilt</AppText>
      </View>
      <View styles={styles.signsContainer}>
        <ScrollView
          contentContainerStyle={styles.SignsScrollContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
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
        </ScrollView>
      </View>
      <View style={styles.sectionTitleContainer}>
        <AppText style={styles.sectionTitle}>Teoritips</AppText>
      </View>
      <ScrollView
        contentContainerStyle={styles.TipsScrollContainer}
        showsVerticalScrollIndicator={false}
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
    </>
  );
}

const styles = StyleSheet.create({
  topSection: {
    height: 200,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    padding: 30,
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
  sectionTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    // backgroundColor: colors.white,
    marginTop: 5,
  },
  sectionTitle: {
    fontWeight: "700",
  },
  signsContainer: {},
  SignsScrollContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10,
  },
  TipsScrollContainer: {
    justifyContent: "space-around",
    // marginTop: 20,
  },
});

export default DashboardScreen;
