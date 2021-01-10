import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signsData } from '../data/signsData'
import AppListItem from '../components/AppListItem'
import AppIcon from '../components/AppIcon'
import { useEffect } from 'react/cjs/react.development';

function SignsList({ slug }) {
    //TODO: When someone clicks on +, push the sign to mySigns state array
    // and update the AsyncStorage. On component load, get the mySigns
    //from AsynStorage and update the mySigns state.

    const [ mySigns, setMySigns ] = useState([])
    //Update the mySigns state on component load 
    useEffect(() => {
        console.log('SignsList loaded')
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
            const jsonValue = AsyncStorage.getItem(key)
            return jsonValue !== null ? jsonValue : null
        } catch (error) {
            console.error(error)
        }
    }

    //Handle onPress for + icon
    const handleOnPress = (item) => {
        setMySigns((prevSigns) => [...prevSigns, item])
        storeSigns(mySigns)
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