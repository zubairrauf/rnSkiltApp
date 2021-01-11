import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import SignsList from '../components/SignsList'
import AppHeader from '../components/AppHeader'

function SignsScreen({ route }) {
  const [ mySigns, setMySigns ] = useState([])
  return (
    <Screen style={styles.container}>
        <Eclips />
        <AppHeader title={route.params.slug} />
        <SignsList slug={route.params.slug} mySigns={mySigns} setMySigns={setMySigns}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignsScreen;