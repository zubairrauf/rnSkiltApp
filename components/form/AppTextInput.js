import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../config/styles'

function AppTextInput({ icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialCommunityIcons 
          name={icon}
          size={20}
          color={defaultStyles.colors.dark}
          style={styles.icon}
        />
      )}
      <TextInput 
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    shadowColor: defaultStyles.colors.dark,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1
  }
});

export default AppTextInput;