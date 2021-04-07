import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import AppTextInput from '../components/form/AppTextInput'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'

function RegisterScreen({ navigation }) {
    const [name, setName] = useState('')
    
    //Storing data in asyncStorage
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('kivName', jsonValue)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <Screen style={styles.container}>
        <Eclips />
        <View style={styles.headingsContainer}>
            <AppText style={styles.heading}>Velkommen om bord</AppText>
            <AppText>Vennligst registrer deg</AppText>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/kid-with-car.png')} style={styles.image}/>
        </View>
        <View style={styles.inputContainer}>
            <AppTextInput 
                icon="account" 
                placeholder="Navn" value={name}
                onChangeText={text => setName(text)}
            />
        </View>
        <View style={styles.button} >
            <AppButton 
                title="Registrer" 
                onPress={() => {
                    storeData({ name })
                    navigation.navigate("Dashboard")
                }}
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headingsContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      flex: 1,
    },
    heading: {
        fontSize: 22,
        fontWeight: '700'
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 170,
    },
    inputContainer: {
      flex: 2,
      justifyContent: "flex-start",
  },
  button: {
      width: '100%',
      flex: 1,
      justifyContent: 'flex-end',
  }
});

export default RegisterScreen;