import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { SignsScoreContext } from "../context/SignsScoreContext";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";

function QuizOverviewScreen({ navigation }) {
  const chartConfig = {
    backgroundColor: colors.primary,
    backgroundGradientFrom: colors.secondary,
    backgroundGradientTo: colors.primary,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: () => colors.dark,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "5",
      strokeWidth: "1",
      stroke: colors.dark,
    },
  };
  return (
    <SignsScoreContext.Consumer>
      {({ signsScore, setSignsScore }) => (
        <Screen style={styles.container}>
          <Eclips />
          <View style={styles.header}>
            <AppText style={styles.heading}>Kjør i vei - Dine tester</AppText>
            <AppText style={styles.description}>
              Her kan du se resultat av 10 siste tester. Ta flere tester og se
              om du kan gjøre det bedre enn førrige gang. Øvelse gjør mester.
            </AppText>
          </View>
          <View style={styles.chartsCotnainer}>
            <LineChart
              data={{
                datasets: [
                  {
                    data: signsScore,
                  },
                ],

                legend: ["Poeng"],
              }}
              width={Dimensions.get("window").width - 10} // from react-native
              height={150}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={chartConfig}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 10,
              }}
            />
            <BarChart
              style={{
                marginVertical: 8,
                borderRadius: 10,
              }}
              data={{
                datasets: [
                  {
                    data: signsScore,
                  },
                ],
              }}
              width={Dimensions.get("window").width - 10}
              height={150}
              chartConfig={chartConfig}
            />
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
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default QuizOverviewScreen;
