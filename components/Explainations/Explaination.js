import React from "react";
import { View, Text, Image,  StyleSheet, ScrollView, } from "react-native";

import Explaination1 from './Explaination1'
import Explaination2 from './Explaination2'
import Explaination3 from './Explaination3'
import Explaination4 from './Explaination4'
import Explaination5 from './Explaination5'
import Explaination6 from './Explaination6'

function Explaination ({ tip }) {
    if (tip.id == 1) {
        return <Explaination1 tip={tip}/>
    } else if (tip.id == 2) {
        return <Explaination2 tip={tip} />
    } else if (tip.id == 3) {
        return <Explaination3 tip={tip} />
    } else if (tip.id == 4) {
        return <Explaination4 tip={tip} />
    } else if (tip.id == 5) {
        return <Explaination5 tip={tip} />
    } else if (tip.id == 6) {
        return <Explaination6 tip={tip} />
    } else {
        return <Text>Det har skjedd en feil. Vennligst prøv igjen senere.</Text>
    }
  }

 
  export default Explaination

