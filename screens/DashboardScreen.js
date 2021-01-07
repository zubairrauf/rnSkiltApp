import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../components/AppText'
import Screen from '../components/Screen'
import colors from '../config/colors';

function DashboardScreen(props) {
  return (
      <>
        <View style={styles.topSection}>
            <AppText>Hei Zubair</AppText>
        </View>
        <Screen style={styles.container}>
        </Screen>
      </>
  );
}

const styles = StyleSheet.create({
  topSection: {
      height: 250,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default DashboardScreen;