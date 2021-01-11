import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signsData } from '../data/signsData'
import AppListItem from '../components/AppListItem'
import AppIcon from '../components/AppIcon'
import { useEffect } from 'react/cjs/react.development';

let mySignsArray = [] //Temporarily holds the signs

function SignsList({ slug }) {
    const [ mySigns, setMySigns ] = useState([])

    //Update the mySigns state on component load   
    useEffect(() => {
        console.log('SignsList loaded')
        getSigns('kivMySigns')
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

    //Read mySigns from AsyncStorage
    const getSigns = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            const value =  jsonValue !== null ? jsonValue : null
            setMySigns(value)
            console.log('Storge onLoad', value)
            console.log('State onLoad', mySigns)
        } catch (error) {
            console.error(error)
        }
    }

    //Handle onPress for + icon
    const handleOnPress = (item) => {
        mySignsArray.push(item)
        setMySigns(mySignsArray)
        storeSigns(mySigns)
        console.log('Array', mySignsArray)
        console.log('State', mySigns)
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