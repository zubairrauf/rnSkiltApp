import React, { useEffect} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signsData } from '../data/signsData'
import AppListItem from '../components/AppListItem'

function SignsList({ slug, mySigns, setMySigns }) {
    //Save Signs in AsynStorage on state change
    useEffect(() => {
        console.log('My Signs', mySigns)
        storeSigns(mySigns)
    }, [mySigns])

    //Store mySings array to AsyncStorage
    const storeSigns = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('kivMySigns', jsonValue)
        } catch (error) {
            console.error(error)
        }
    }

    //Handle onPress for + and - icon
    const handleOnPress = async (item) => {
        if (mySigns.indexOf(item) < 0) {
            setMySigns((prevSigns) => [...prevSigns, item])
        } else {
            let array = [...mySigns] //make a separate copy of the mySigns state array
            let index = mySigns.indexOf(item) //Get the first index of the item
            array.splice(index, 1) //Remove the item from the temp array
            setMySigns(array) //Set the mySigns with updated array
        }
    }

    //If slug is mySigns, generate a list of saved sings
    let signsToDisplay = []
    if(slug==='mySigns') {
        signsToDisplay = signsData.map((sign) => {
            if(mySigns.indexOf(sign.id) > -1) {
                return (
                    <AppListItem 
                        key={sign.id}
                        title={sign.name}
                        image={sign.img}
                        icon = {mySigns.indexOf(sign.id) < 0 ? 'plus' : 'minus'}
                        onPress={() => handleOnPress(sign.id)} //For + icon
                    />
                );
            }
        });
    } else {
        //generate list of signs to display based on the category
        signsToDisplay = signsData.map((sign) => {
            if(sign.category == slug) {
                return (
                    <AppListItem 
                        key={sign.id}
                        title={sign.name}
                        image={sign.img}
                        icon = {mySigns.indexOf(sign.id) < 0 ? 'plus' : 'minus'}
                        onPress={() => handleOnPress(sign.id)} //For + icon
                    />
                );
            }
        });
    }

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
