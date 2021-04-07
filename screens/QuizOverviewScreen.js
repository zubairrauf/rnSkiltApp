import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
} from "react-native-chart-kit";

import AppButton from "../components/AppButton";
import AppHeader from "../components/AppHeader";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";
import { SignsScoreContext } from "../context/SignsScoreContext";

function QuizOverviewScreen({ navigation }) {
  const deviceWidth = Dimensions.get("window").width;
  const lineChartConfig = {
    backgroundColor: colors.primary,
    backgroundGradientFrom: colors.light,
    backgroundGradientTo: colors.white,
    fillShadowGradient: colors.white,
    fillShadowGradientOpacity: 0,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => colors.secondary,
    strokeWidth: 3,
    labelColor: () => colors.dark,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: colors.primary,
    },
  };
  const barChartConfig = {
    backgroundColor: colors.primary,
    backgroundGradientFrom: colors.light,
    backgroundGradientTo: colors.white,
    fillShadowGradient: colors.secondary,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => colors.primary,
    barPercentage: 0.7,
    labelColor: () => colors.dark,
    style: {
      borderRadius: 16,
    },
  };
  return (
    <SignsScoreContext.Consumer>
      {({ signsScore, setSignsScore }) => {
        let chartData =
          signsScore.length > 0
            ? signsScore.slice(Math.max(signsScore.length - 10, 0))
            : [5, 10, 15, 20, 25];
        return (
          <Screen style={styles.container}>
            <Eclips />
            <AppHeader title="Dine tester" />
            <View style={styles.header}>
              <AppText style={styles.description}>
                Her kan du se resultat av 10 siste tester. Ta flere tester og se
                om du kan gjøre det bedre enn førrige gang. Øvelse gjør mester.
              </AppText>
            </View>
            <View style={styles.chartsContainer}>
              <LineChart
                data={{
                  datasets: [
                    {
                      data: chartData,
                    },
                  ],

                  legend: ["Dine poeng"],
                }}
                width={deviceWidth - 20}
                height={150}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={lineChartConfig}
                bezier
                style={{
                  marginVertical: 5,
                  borderRadius: 10,
                }}
              />
              <BarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 5,
                }}
                data={{
                  datasets: [
                    {
                      data: chartData,
                    },
                  ],
                }}
                width={deviceWidth - 20}
                height={150}
                chartConfig={barChartConfig}
                style={{
                  marginVertical: 8,
                  borderRadius: 5,
                }}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <AppButton
                title="Start skilt test"
                onPress={() =>
                  navigation.navigate("SignsTest", {
                    signsScore,
                    setSignsScore,
                  })
                }
              />
            </View>
          </Screen>
        );
      }}
    </SignsScoreContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
  },
  chartsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuizOverviewScreen;
