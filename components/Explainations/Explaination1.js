import React from "react";
import { View, Image, ScrollView, } from "react-native";

import AppText from "../AppText"
import styles from "./explainationStyles"

function Explaination1({ tip }) {
     return (
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.titleContainer}>
            <AppText style={styles.title}>{tip.title}</AppText>
          </View>
          <View style={styles.mainImageContainer}>
            <Image style={styles.mainImage} source={tip.img} />
          </View>
          <View style={styles.explainationContainer}>
            <AppText style={styles.explaination}> 
              Det å regne ut bremselengde er svært ofte en vesentlig del av teoriprøven når du skal ta lappen. Det å finne et helt riktig svar på oppgaven er nesten umulig da man er nødt til å ta høyde for en lang liste av faktorer. Eksempelvis: Kvalitet på bremser, dekk, føre, din helsetilstand, ferdigheter, fart, bakke/rett strekke osv. 
            </AppText>
            <AppText style={styles.explaination}> 
              Vi viser deg her to enkle måter som kan hjelpe deg med utregningen. Utregningen gjelder for tørr asfalt.
            </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                1- Første huskeregel
              </AppText>
              <AppText style={styles.explaination}> 
                Når du dobler farten, firedobler du bremselengden. Det vil si at dersom bremselengden ved 20 km/t er på 3 meter, er bremselengden ved 40 km/t på 12 meter, da 3 m x 4 = 12 meter.
              </AppText>
            </View>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                2- Andre huskeregel
              </AppText>
              <AppText style={styles.explaination}> 
                x * x / 2 = bremselengde
              </AppText>
              <AppText style={styles.explaination}> 
                Fortalt med ord: x ganger x, delt på to er lik bremselengde
              </AppText>
              <AppText style={styles.explaination}> 
                Og hva skal x være? Du tar farten og deler på 10.
              </AppText>
              </View>
              <AppText style={styles.heading}> 
                Eksempel:
              </AppText>
              <AppText style={styles.explaination}> 
                Er farten 65 km/t deler vi 65 på 10 og får 6,5. Regnestykket blir da:
                6,5 * 6,5 / 2 = 21,1 meter
                
                Bremselengden er 21,1 meter
              </AppText>
          </View>
        </ScrollView>
    );
  }

  export default Explaination1

