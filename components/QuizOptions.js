import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText'
import AppIcon from './AppIcon'
import colors from '../config/colors'

function QuizOptions({children, style, handleIcon, ...otherProps}) {
  return (
    <View style={styles.container}>
        <AppText style={[styles.option, style]} {...otherProps}>
            {children}
        </AppText>
        {handleIcon==='correct' && <AppIcon name='check' size={30} backgroundColor={colors.primary}/>}
        {handleIcon==='incorrect' && <AppIcon name='cross' size={30} backgroundColor={colors.danger}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    margin: 3,
  },
  option: {
      fontSize: 16
  }
});

export default QuizOptions;