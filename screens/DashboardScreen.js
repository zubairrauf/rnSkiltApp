import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppText from '../components/AppText'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import colors from '../config/colors';

//Reading data from asycStorage
//TODO: Move this function to the dashboard screen to show the name
// const getName = async () => {
//     try {
//         return await AsyncStorage.getItem('kivName')
//     } catch (error) {
//         console.error(error)
//     }
// }

function DashboardScreen(props) {
    const [user, setUser] = useState({name: "Zubair", email: "zubairrr@gmail.com"});

    // useEffect(() => {
    //     console.log('Data back: ', getName())
    //     const nameValue = getName()
    //     setUser(nameValue)
    //     console.log('USer: ', user)
    // }, [])

  return (
      <>
        <View style={styles.topSection}>
            <View style={styles.textContainer}>
                <AppText style={styles.heading}>Hei {user.name}</AppText>
                <AppText style={styles.description}>Velg en kategori for å lære traffikkskilt eller ta en quizz.</AppText>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statsBox}><AppText>100 poeng</AppText></View>
                <View style={styles.statsBox}><AppText>100 poeng</AppText></View>
            </View>
        </View>
        <Screen style={styles.container}>
        </Screen>
      </>
  );
}

const styles = StyleSheet.create({
  topSection: {
      height: 250,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textContainer: {
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
  },
  heading: {
      fontSize: 18,
      fontWeight: '700',
  },
  description: {
    textAlign: 'center',
  },
  statsContainer: {
      height: 60,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0
    },
    statsBox: {
      backgroundColor: colors.secondary,
      padding: 10,
      width: '49%',
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default DashboardScreen;