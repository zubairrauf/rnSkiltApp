import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignsScoreContext = React.createContext();

const SignsScoreContextProvider = ({ children }) => {
  const [signsScore, setSignsScore] = useState([]);
  //Get the score from AsyncStorage on load
  useEffect(() => {
    getSignsScore();
  }, []);
  const getSignsScore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("kivSignsScore");
      const parsedValue = jsonValue !== null ? JSON.parse(jsonValue) : null;
      if (parsedValue !== null) {
        console.log("SignsScore from AsyncStorage", parsedValue);
        setSignsScore(parsedValue);
      } else {
        console.log("parsedvalue null", parsedValue);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignsScoreContext.Provider value={{ signsScore, setSignsScore }}>
      {children}
    </SignsScoreContext.Provider>
  );
};

export { SignsScoreContext, SignsScoreContextProvider };
