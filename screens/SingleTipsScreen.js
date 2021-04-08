import React from "react";
import { StyleSheet } from "react-native";

import AppHeader from "../components/AppHeader";
import colors from "../config/colors";
import Eclips from "../components/Eclips";
import Screen from "../components/Screen";
import Explaination from "../components/explainations/Explaination"

function SingleTipsScreen({ route }) {
  const theTip = route.params
    return (
      <Screen style={styles.container}>
        <Eclips />
        <AppHeader title="Teori tips" />
        <Explaination tip = {theTip}/>
      </Screen>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: 10,
      width: '100%',
    },
    title: {
      fontSize: 16,
      fontWeight: '700'
    },
    mainImageContainer: {
      width: '100%',
      maxWidth: 350,
      maxHeight: 250,
    },
    mainImage: {
      borderRadius: 5,
      width: '100%',
      maxHeight: '100%',
    },
    explaination: {
      fontSize: 16,
      lineHeight: 26,
      marginVertical: 5,
    },
    box: {
      backgroundColor: colors.light,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: colors.white,
      padding: 10,
      marginVertical: 10,
      shadowColor: colors.dark,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.7,
      elevation: 3,
    },
    heading: {
      fontSize: 16,
      fontWeight: '700',
    }
  })

  export default SingleTipsScreen

