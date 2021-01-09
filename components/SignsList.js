import React from 'react';
import { View, StyleSheet } from 'react-native';

import { signsData } from '../data/signsData'
import AppListItem from '../components/AppListItem'

function SignsList({ slug }) {
    const signsToDisplay = signsData.map((sign) => {
        if(sign.category == slug) {
            return (
                <AppListItem 
                    title={sign.name}
                    subTitle={sign.category}
                    image={sign.img}
                />
            );
        }
      });


  return (
      <View>
        {signsToDisplay}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SignsList;