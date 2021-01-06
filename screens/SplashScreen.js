import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'

function SplashScreen(props) {
  return (
    <Screen style={styles.container}>
        <Eclips />
        <Image source={require('../assets/images/car.png')} style={styles.image}/>
        <AppText style={styles.heading}>Kjør i vei</AppText>
        <AppText>alt om trafikkskilt</AppText>
        <View style={styles.button} >
            <AppButton title="Start"/>
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center'
  },
  image: {
      width: 220,
      height: 170
  },
  heading: {
      fontSize: 22,
      fontWeight: '700'
  },
  button: {
      width: '100%',
      position: 'absolute',
      bottom: 0
  }
});

export default SplashScreen;