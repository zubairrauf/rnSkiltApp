import React from "react";
import { View, Text, Image,  StyleSheet, ScrollView, FlatList } from "react-native";

import Eclips from "../components/Eclips";
import Screen from "../components/Screen";
import AppHeader from "../components/AppHeader";
import colors from "../config/colors";

function SingleTipsScreen({ route }) {
  const theTip = route.params

    return (
      <Screen style={styles.container}>
        <Eclips />
        <AppHeader title="Teori tips" />
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{theTip.title}</Text>
          </View>
          <View style={styles.mainImageContainer}>
            <Image style={styles.mainImage} source={theTip.img} />
          </View>
          <View style={styles.explainationContainer}>
            <Text style={styles.explaination}> 
              Det å regne ut bremselengde er svært ofte en vesentlig del av teoriprøven når du skal ta lappen. Det å finne et helt riktig svar på oppgaven er nesten umulig da man er nødt til å ta høyde for en lang liste av faktorer. Eksempelvis: Kvalitet på bremser, dekk, føre, din helsetilstand, ferdigheter, fart, bakke/rett strekke osv. 
            </Text>
            <Text style={styles.explaination}> 
              Vi viser deg her to enkle måter som kan hjelpe deg med utregningen. Utregningen gjelder for tørr asfalt.
            </Text>
            <View style={styles.box}>
              <Text style={styles.heading}> 
                1- Første huskeregel
              </Text>
              <Text style={styles.explaination}> 
                Når du dobler farten, firedobler du bremselengden. Det vil si at dersom bremselengden ved 20 km/t er på 3 meter, er bremselengden ved 40 km/t på 12 meter, da 3 m x 4 = 12 meter.
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.heading}> 
                2- Andre huskeregel
              </Text>
              <Text style={styles.explaination}> 
                x * x / 2 = bremselengde
              </Text>
              <Text style={styles.explaination}> 
                Fortalt med ord: x ganger x, delt på to er lik bremselengde
              </Text>
              <Text style={styles.explaination}> 
                Og hva skal x være? Du tar farten og deler på 10.
              </Text>
              <Text style={styles.explaination}> 
                Eks:
                Er farten 65 km/t deler vi 65 på 10 og får 6,5. Regnestykket blir da:
                6,5 * 6,5 / 2 = 21,1 meter
                
                Bremselengden er 21,1 meter
              </Text>
            </View>
          </View>
        </ScrollView>
      </Screen>
    );
  }

  const styles = StyleSheet.create({
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
  export default SingleTipsScreen

