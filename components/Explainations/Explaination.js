import React from "react";
import { View, Text, Image,  StyleSheet, ScrollView, } from "react-native";

import Explaination1 from './Explaination1'

function Explaination ({ tip }) {
     if(tip.id == 1) {
         return (
             <Explaination1 tip={tip}/>
         )
     } else {
         return <Text>Det har skjedd en feil. Vennligst prøv igjen senere.</Text>
     }
  }

 
  export default Explaination

