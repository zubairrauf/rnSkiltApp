import React from "react";
import { View, Image, ScrollView, } from "react-native";


import AppText from "../AppText"
import styles from "./explainationStyles"

function Explaination2({ tip }) {
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
              Det er viktig å lære hvordan ending i farten påvirker på bremselengden. La oss si at du har en hastighet på 20km/t og bremselengden er 4 meter. Hvor mye blir bremselengden hvis hastigheten endres til 40km/t?
            </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                Huskeregel no. 1
              </AppText>
              <AppText style={styles.explaination}> 
                Dersom farten dobles, firedobles bremselengden.
              </AppText>
            </View>
            <AppText style={styles.explaination}> 
                Så hvis bremselenden er 4 meter ved 20 km/t, blir den 16 meter ved 40 km/t.
              </AppText>
            <View style={styles.box}>
              <AppText style={styles.heading}> 
                1- Huskeregel no. 2
              </AppText>
              <AppText style={styles.explaination}> 
                Bremselengden endres med kvadratet av fartsendringen.
              </AppText>
            </View>
            <AppText style={styles.heading}> 
                La oss se på et eksempel.
            </AppText>
            <AppText style={styles.explaination}> 
                Bremselengden er 4 meter ved 20 km/t. Hvor lang blir bremselengden ved 60 km/t?
            </AppText>
            <AppText style={styles.heading}> 
                1: Finn fartsending:
            </AppText>
            <AppText style={styles.explaination}> 
                60 / 20 = 3
            </AppText>
            <AppText style={styles.explaination}> 
              Dette viser at farten øker 3 ganger.
            </AppText>
            <AppText style={styles.heading}> 
                2: Regn ut kvadratet av endringen:
            </AppText>
            <AppText style={styles.explaination}> 
                3 x 3 = 9
            </AppText>
            <AppText style={styles.heading}> 
                3: Multipliser kvadratet med opprinnlige bremselenden.
            </AppText>
            <AppText style={styles.explaination}> 
                9 x 4 = 36
            </AppText>
            <AppText style={styles.explaination}> 
               Da har vi svaret. Hvis bremselenden er 4 meter ved 20 km/t, blir den 36 meter ved 60 km/t.
            </AppText>
          </View>
        </ScrollView>
    );
  }

  export default Explaination2

