import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppText from '../components/AppText'
import CategoryBox from '../components/CategoryBox'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import colors from '../config/colors';

//Reading data from asycStorage
//TODO: Move this function to the dashboard screen to show the name


function DashboardScreen(props) {
    const [name, setName] = useState();
    
    //Get the name from AsyncStorage
    const getName = async (key) => {
      try {
          const value = await AsyncStorage.getItem(key)
          setName(value)
      } catch (error) {
          console.error(error)
      }
    }

    //Run the getName on component load
    useEffect(() => {
        getName('user')
    }, [])

  return (
      <>
        <View style={styles.topSection}>
            <View style={styles.textContainer}>
                <AppText style={styles.heading}>Hei {name} </AppText>
                <AppText style={styles.description}>Velg en kategori for å lære traffikkskilt eller ta en quizz.</AppText>
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                  <MaterialCommunityIcons 
                    name='star-four-points'
                    size={20}
                    color={colors.dark}
                    style={styles.icon}
                  />
                  <AppText>100 poeng</AppText>
                </View>
                <View style={styles.statsBox}>
                  <MaterialCommunityIcons 
                      name='folder-open'
                      size={20}
                      color={colors.dark}
                      style={styles.icon}
                    />
                  <AppText>16 skilt lagret</AppText>
                </View>
            </View>
        </View>
        <Screen style={styles.categoryContainer}>
          <CategoryBox title="Fareskilt" subTitle="Antall: 15"/>
          <CategoryBox title="Vikepliktsskilt" subTitle="Antall: 8"/>
          <CategoryBox title="Vikepliktsskilt" subTitle="Antall: 8"/>
          <CategoryBox title="Vikepliktsskilt" subTitle="Antall: 8"/>
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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  icon: {
    padding: 10,
    marginRight: 10,
    backgroundColor: colors.primary,
    borderRadius: 50,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

export default DashboardScreen;