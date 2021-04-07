import React from "react";
import { Text } from "react-native";

import Explaination1 from './Explaination1'
import Explaination2 from './Explaination2'
import Explaination3 from './Explaination3'
import Explaination4 from './Explaination4'
import Explaination5 from './Explaination5'
import Explaination6 from './Explaination6'

const allExplainations = {
    1: Explaination1,
    2: Explaination2,
    3: Explaination3,
    4: Explaination4,
    5: Explaination5,
    6: Explaination6,
}

function Explaination ({ tip }) {
    const Component = allExplainations[tip.id]
    return <Component tip={tip}/>
}

export default Explaination

