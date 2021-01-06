import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import Eclips from '../components/Eclips'
import Screen from '../components/Screen'
import AppTextInput from '../components/form/AppTextInput'


function RegisterScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    //Storing data in asyncStorage
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('kivName', jsonValue)
        } catch (error) {
            console.error(error)
        }
    }

    //Reading data from asycStorage
    //TODO: Move this function to the dashboard screen to show the name
    // const getData = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('kivName')
    //         if(jsonValue !== null) console.log('Data from local storage: ', JSON.parse(jsonValue).name)
    //         else console.log('No value in local storage')
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

  return (
    <Screen style={styles.container}>
        <Eclips/>
        <AppText style={styles.heading}>Velkommen om bord</AppText>
        <AppText>Vennligst registrer deg</AppText>
        <Image source={require('../assets/images/kid-with-car.png')} style={styles.image}/>
        <AppTextInput 
            icon="account" 
            placeholder="Navn" value={name}
            onChangeText={text => setName(text)}
        />
        <AppTextInput 
            icon="email" 
            placeholder="E-post adresse"
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <View style={styles.button} >
            <AppButton 
                title="Registrer" 
                onPress={() => storeData({name, email})}
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center'
  },
  heading: {
      fontSize: 22,
      fontWeight: '700'
  },
  image: {
      width: 200,
      height: 170
  },
  button: {
      width: '100%',
  }
});

export default RegisterScreen;