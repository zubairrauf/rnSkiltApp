import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignsScoreContext = React.createContext();

const SignsScoreContextProvider = ({ children }) => {
  const [signsScore, setSignsScore] = useState([6]);
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

  //Save score in AsyncStorage
  //Save signsScore on state change
  useEffect(() => {
    storeSignsScore(signsScore);
    console.log("storeSignsScore ran", signsScore);
  }, [signsScore]);

  //Store signsScore array in AsyncStorage
  const storeSignsScore = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("kivSignsScore", jsonValue);
      console.log("Yippi", jsonValue);
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
