import { StyleSheet } from "react-native";

import colors from "../../config/colors";

export default styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    titleContainer: {
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: '700'
    },
    mainImageContainer: {
      width: '100%',
      maxWidth: 350,
      maxHeight: 250,
    },
    mainImage: {
      borderRadius: 5,
      width: '100%',
      maxHeight: '100%',
    },
    explaination: {
      fontSize: 16,
      lineHeight: 26,
      marginVertical: 5,
    },
    box: {
      backgroundColor: colors.light,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: colors.white,
      padding: 10,
      marginVertical: 10,
      shadowColor: colors.dark,
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.7,
      elevation: 3,
    },
    heading: {
      fontSize: 16,
      fontWeight: '700',
    }
  })