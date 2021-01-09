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


    //generate list of signs to display based on the category
    const signsToDisplay = signsData.map((sign) => {
        if(sign.category == slug) {
            return (
                <AppListItem 
                    key={sign.id}
                    title={sign.name}
                    image={sign.img}
                    onPress={() => console.log(sign.id)}
                />
            );
        }
      });

      //Store signs in AsynStorage when user click on the + icon
      const storeSigns = async (value) => {
          try {
              const jsonValue = JSON.stringify(value)
              await AsyncStorage.setItem('kivMySigns', jsonValue)
          } catch (error) {
              console.error(error)
          }
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