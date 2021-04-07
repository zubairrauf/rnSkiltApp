import React from "react";
import { StyleSheet } from "react-native";

import AppHeader from "../components/AppHeader";
import Eclips from "../components/Eclips";
import { MySignsContext } from "../context/MySignsContext";
import Screen from "../components/Screen";
import SignsList from "../components/SignsList";

function SignsScreen({ route }) {
  return (
    <Screen>
      <Eclips />
      <AppHeader title={route.params.slug} />
      <MySignsContext.Consumer>
        {({ mySigns, setMySigns }) => (
          <SignsList
            slug={route.params.slug}
            mySigns={mySigns} //comming from context
            setMySigns={setMySigns} //comming from context
          />
        )}
      </MySignsContext.Consumer>
    </Screen>
  );
}

export default SignsScreen;
