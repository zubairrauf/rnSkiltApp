import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import SignsList from '../components/SignsList'
import AppHeader from '../components/AppHeader'

function SignsScreen({ route }) {
    console.log(route)
  return (
    <Screen style={styles.container}>
        <Eclips />
        <AppHeader title={route.params.slug} />
        <SignsList slug={route.params.slug}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignsScreen;