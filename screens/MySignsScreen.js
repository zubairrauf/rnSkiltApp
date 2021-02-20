import React from 'react';
import { StyleSheet } from 'react-native';

import {MySignsContext} from '../context/MySignsContext'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import SignsList from '../components/SignsList'
import AppHeader from '../components/AppHeader'

function SignsScreen() {
  return (
    <Screen style={styles.container}>
        <Eclips />
        <AppHeader title='Mine skilt' />
        <MySignsContext.Consumer>
          {({mySigns, setMySigns}) => (
              <SignsList 
                slug='mySigns'
                mySigns={mySigns} //comming from context
                setMySigns={setMySigns} //comming from context
              />
          )}
        </MySignsContext.Consumer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignsScreen;