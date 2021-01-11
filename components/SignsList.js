import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signsData } from '../data/signsData'
import AppListItem from '../components/AppListItem'
import AppIcon from '../components/AppIcon'
import { useEffect } from 'react/cjs/react.development';

function SignsList({ slug }) {
    const [ mySigns, setMySigns ] = useState([])
    let savedSigns = [] //Temporarily holds the signs

    //Read the signs from AsyncStorage
    useEffect(() => {
        getSigns()
    }, [])

    //Store mySings array to AsyncStorage
    const storeSigns = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('kivMySigns', jsonValue)
        } catch (error) {
            console.error(error)
        }
    }

    //Read mySigns from AsyncStorage and update the storeSigns array
    const getSigns = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('kivMySigns')
            const parsedValue = jsonValue !== null ? JSON.parse(jsonValue) : null
            if(parsedValue !== null && parsedValue.length != 0) {
                console.log('parsedValue not null', parsedValue)
                setMySigns(parsedValue) //This creates error when parsedValue is null
            }
            else {
                console.log('parsedvalue null', parsedValue)
            }

        } catch (error) {
            console.error(error)
        }
    }

    //Handle onPress for + icon
    const handleOnPress = async (item) => {
        setMySigns(prevSigns => [...prevSigns, item])
        await storeSigns(mySigns)
        console.log('My Signs', mySigns)
    }

    //generate list of signs to display based on the category
    const signsToDisplay = signsData.map((sign) => {
        if(sign.category == slug) {
            return (
                <AppListItem 
                    key={sign.id}
                    title={sign.name}
                    image={sign.img}
                    onPress={() => handleOnPress(sign.id)} //For + icon
                />
            );
        }
      });

  return (
      <ScrollView>
        {signsToDisplay}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignsList;
