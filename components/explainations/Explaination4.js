import React from "react";
import { View, Image, ScrollView, } from "react-native";


import AppText from "../AppText"
import styles from "./explainationStyles"

function Explaination4({ tip }) {
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
              En grei huskeregel er at plasseringen du gjør i feltet gir nyttig informasjon til andre trafikanter om hvor du skal, og at de samme reglene som i vanlig veikryss også gjelder for rundkjøringer.
            </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                1- Skal du kjøre til høyre ut av rundkjøringen?
              </AppText>
              <AppText style={styles.explaination}> 
                Kjør i det høyre kjørefeltet inn i rundkjøringen.
              </AppText>
            </View>
            <AppText style={styles.explaination}> 
              Skal du til høyre ved første avkjøring, gis tegn til høyre i god tid før du kjører inn i rundkjøringen og beholder blinklyset på til du har kjørt ut av den.
            </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                2- Skal du rett fram?
              </AppText>
              <AppText style={styles.explaination}> 
                Velg det feltet som er mest hensiktsmessig, fortrinnsvis høyre.
              </AppText>
            </View>
            <AppText style={styles.explaination}> 
              Skal du rett fram i en rundkjøring, blinker du til høyre når du er på høyde med siste utkjøring før du kjører ut. Behold blinklyset på til du er ute av rundkjøringen.
            </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                3-  Skal du til venstre ut fra rundkjøringen?
              </AppText>
              <AppText style={styles.explaination}> 
                Da bør du ligge i venstre kjørefelt inn i rundkjøringen. Skal du skifte kjørefelt, har du vikeplikt.
              </AppText>
            </View>
            <AppText style={styles.explaination}> 
              Skal du ut til venstre for der du kjører inn, kan det i enkelte tilfeller være nyttig for andre trafikanter at du gir tegn til venstre før du kjører inn i rundkjøringen. Inne i rundkjøringen endrer du til å blinke til høyre når du er på høyde med siste utkjøring før du kjører ut. Behold blinklyset på til du er ute av rundkjøringen.
            </AppText>
          </View>
        </ScrollView>
    );
  }

  export default Explaination4

