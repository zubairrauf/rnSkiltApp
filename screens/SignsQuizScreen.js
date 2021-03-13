import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Vibration,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppIcon from "../components/AppIcon";
import AppHeader from "../components/AppHeader";
import Screen from "../components/Screen";
import { signsData } from "../data/signsData";
import { shuffleArray, isEmpty } from "../utils/helperFunctions";
import QuizOptions from "../components/QuizOptions";
import colors from "../config/colors";
import Eclips from "../components/Eclips";

function SignsQuizScreen({ route, navigation }) {
  const { setSignsScore } = route.params;

  //Restart quiz on navigating away and coming back
  useFocusEffect(
    React.useCallback(() => {
      //Can add a function to perform on focus to this screen.
      return () => {
        resetQuiz();
        //Can show an warning alert here before resetting the quiz.
      };
    }, [])
  );

  const [questions, setQuestions] = useState([]); //Holds all quiz questions
  const [randomOptions, setRandomOptions] = useState([]); //1 correct and 3 random wrong answers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [score, setScore] = useState(0);
  const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);
  const [previousNextDisabled, setNextButtonDisabled] = useState(false);
  const [correctIndex, setCorrectIndex] = useState([]);
  const [incorrectIndex, setIncorrectIndex] = useState([]);
  const [resultIcons, setResultIcons] = useState([]);
  const [resultColor, setResultColor] = useState(colors.light);
  const [retry, setRetry] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  //Select random signs and put them in questions
  let numberOfQuestions = 5;
  let randomQuestionIds = [];

  //Make random IDs on component mount
  useEffect(() => {
    while (randomQuestionIds.length < numberOfQuestions) {
      let r = Math.floor(Math.random() * signsData.length) + 1;
      if (randomQuestionIds.indexOf(r) === -1) randomQuestionIds.push(r);
    }
  }, [retry]);

  //Grab signs based on randomQuestionIds and update the questions state
  useEffect(() => {
    if (questions.length === 0) {
      signsData.map((sign) => {
        if (randomQuestionIds.includes(parseInt(sign.id))) {
          setQuestions((prevQuestions) => [...prevQuestions, sign]); //TODO: Change how question state is updated.
        }
      });
    }
  }, [randomQuestionIds]);

  //Generate random options
  let allRandomAnswers = []; //holds all the random answer subarrays
  let randomId;
  useEffect(() => {
    for (let i = 0; i < questions.length; i++) {
      let randomAnswers = []; // holds random answer for one subarray
      for (let j = 0; j < 3; j++) {
        randomId = Math.floor(Math.random() * signsData.length - 1) + 1;
        randomAnswers.push(signsData[randomId].name);
      }
      if (questions.length > 0) randomAnswers.push(questions[i].name);
      randomAnswers = shuffleArray(randomAnswers);
      allRandomAnswers.push(randomAnswers);
    }
    setRandomOptions(allRandomAnswers); //Updates the randomOptions state
  }, [questions]);

  //Check if the answer is correct or incorrect
  const handleOptionClick = (i) => {
    setTotalAnswered((prevTotalAnswered) => prevTotalAnswered + 1);
    if (isRunning) {
      //Checking if quiz is running or finished
      if (randomOptions[currentIndex][i] === questions[currentIndex].name) {
        setCorrectIndex((prevCorrectIndex) => [
          ...prevCorrectIndex,
          currentIndex,
        ]);
        setScore((prevScore) => prevScore + 1);
        console.log("CorrectIndex: ", correctIndex);
      } else {
        setIncorrectIndex((prevIncorrectIndex) => [
          ...prevIncorrectIndex,
          currentIndex,
        ]);
        Vibration.vibrate(300);
        console.log("Answer: ", "Incorrect");
      }
      setTimeout(() => {
        quizNavigation("next");
      }, 1000);
    }
  };

  //Handle show correct or incorrect icon
  useEffect(() => {
    handleResultFeedback();
  }, [correctIndex, incorrectIndex, currentIndex]);

  let icons = [];
  const handleResultFeedback = () => {
    //Icons
    if (randomOptions.length > 0) {
      if (
        correctIndex.indexOf(currentIndex) !== -1 ||
        incorrectIndex.indexOf(currentIndex) !== -1
      ) {
        for (let i = 0; i < randomOptions[currentIndex].length; i++) {
          if (randomOptions[currentIndex][i] === questions[currentIndex].name) {
            icons[i] = "correct";
          } else {
            icons[i] = "incorrect";
          }
        }
        setResultIcons(icons);
      } else {
        setResultIcons([]);
        setResultColor(colors.light);
      }
    }
    //Background color
    if (correctIndex.indexOf(currentIndex) !== -1)
      setResultColor(colors.primary);
    else if (incorrectIndex.indexOf(currentIndex) !== -1)
      setResultColor(colors.danger);

    //Final result
    if (totalAnswered >= numberOfQuestions) {
      setSignsScore((prevSignsScore) => {
        return [...prevSignsScore, score];
      });
      setTimeout(() => {
        endQuiz();
      }, 500);
    }
  };

  //End quiz
  const endQuiz = () => {
    let percentage = Math.round((score * 100) / numberOfQuestions);
    let alertMsg = `Du svarte ${percentage} % rikitig.`;
    if (isRunning) {
      Alert.alert(
        "Resultat",
        alertMsg,
        [
          {
            text: "Ta ny test",
            onPress: () => resetQuiz(),
          },
          {
            text: "Se svarene",
            onPress: () => console.log("Avbryt pressed"),
          },
        ],
        { cancelable: false }
      );
      setIsRunning(false);
    }
  };

  //Reset quiz
  const resetQuiz = () => {
    setQuestions([]);
    setRandomOptions([]);
    setCurrentIndex(0);
    setTotalAnswered(0);
    setScore(0);
    setCorrectIndex([]);
    setIncorrectIndex([]);
    setResultIcons([]);
    setResultColor(colors.light);
    setRetry((prevRetry) => prevRetry + 1);
    setIsRunning(true);
  };
  //Button handlers
  const handleNextButton = () => {
    quizNavigation("next");
  };
  const handlePrevButton = () => {
    quizNavigation("prev");
  };
  const handleStartButton = () => {
    resetQuiz();
  };

  //Handle next or previouse question
  const quizNavigation = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < questions.length - 1) {
          return prevIndex + 1;
        } else {
          return prevIndex;
        }
      });
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) => {
        if (prevIndex > 0) {
          return prevIndex - 1;
        } else {
          return prevIndex;
        }
      });
    }
  };

  //TODO: Figure out where to use handleDisableButton
  //   const handleDisableButton = () => {
  //     if(currentIndex === 0) setPreviousButtonDisabled(true)
  //     else setPreviousButtonDisabled(false)
  //     if(currentIndex -1 < questions.length) setNextButtonDisabled(false)
  //     else setNextButtonDisabled(true)
  //   }

  return (
    <Screen style={styles.container}>
      <Eclips />
      <AppHeader title="Skilt test" />
      <View style={styles.statsContainer}>
        <AppText style={styles.stats}>Poeng: {score}</AppText>
        <AppText style={styles.stats}>
          {currentIndex + 1} av {questions.length}
        </AppText>
      </View>
      <View style={styles.questionContainer}>
        <AppText style={styles.question}>
          {questions[currentIndex] ? "Hva betyr dette skiltet?" : "loading"}
        </AppText>
        {questions[currentIndex] && (
          <Image style={styles.image} source={questions[currentIndex].img} />
        )}
      </View>
      <View style={styles.optionsContainer}>
        <QuizOptions
          style={styles.option}
          onPress={() => handleOptionClick(0)}
          handleIcon={resultIcons[0]}
        >
          {randomOptions[currentIndex]
            ? randomOptions[currentIndex][0]
            : "loading"}
        </QuizOptions>
        <QuizOptions
          style={styles.option}
          onPress={() => handleOptionClick(1)}
          handleIcon={resultIcons[1]}
        >
          {randomOptions[currentIndex]
            ? randomOptions[currentIndex][1]
            : "loading"}
        </QuizOptions>
        <QuizOptions
          style={styles.option}
          onPress={() => handleOptionClick(2)}
          handleIcon={resultIcons[2]}
        >
          {randomOptions[currentIndex]
            ? randomOptions[currentIndex][2]
            : "loading"}
        </QuizOptions>
        <QuizOptions
          style={styles.option}
          onPress={() => handleOptionClick(3)}
          handleIcon={resultIcons[3]}
        >
          {randomOptions[currentIndex]
            ? randomOptions[currentIndex][3]
            : "loading"}
        </QuizOptions>
      </View>
      <View style={[styles.resultContainer, { backgroundColor: resultColor }]}>
        <AppText style={styles.result}>
          {correctIndex.indexOf(currentIndex) !== -1
            ? "Du svarte riktig."
            : incorrectIndex.indexOf(currentIndex) !== -1
            ? "Du svarte feil."
            : "Du har ikke svart ennå."}
        </AppText>
      </View>
      <View style={styles.explainationContainer}>
        <AppText style={styles.explaination}>
          {correctIndex.indexOf(currentIndex) !== -1
            ? questions[currentIndex] && questions[currentIndex].description
            : incorrectIndex.indexOf(currentIndex) !== -1
            ? questions[currentIndex] && questions[currentIndex].description
            : "Velg riktig svar. Du kan hoppe over et spørsmål og komme tilbake til det. Vennligst svar på alle spørsmål for å se resultat. "}
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevButton}>
          <AppIcon
            backgroundColor={colors.dark}
            iconColor={colors.light}
            name="chevron-left"
          />
        </TouchableOpacity>
        {!isRunning && (
          <AppButton
            color="secondary"
            title="Start ny test"
            onPress={handleStartButton}
            width="50%"
          />
        )}
        <TouchableOpacity onPress={handleNextButton}>
          <AppIcon
            backgroundColor={colors.dark}
            iconColor={colors.light}
            name="chevron-right"
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 10,
    borderStartWidth: 3,
    borderEndWidth: 3,
  },
  stats: {
    fontWeight: "700",
  },
  question: {
    fontWeight: "bold",
    margin: 5,
  },
  questionContainer: {
    backgroundColor: colors.white,
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
  optionsContainer: {
    justifyContent: "center",
    width: "100%",
    marginTop: 5,
  },
  resultContainer: {
    backgroundColor: "orange",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    // height: 50
  },
  result: {
    textAlign: "center",
  },
  explainationContainer: {
    flex: 1,
    // padding: 10,
  },
  explaination: {
    fontSize: 14,
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});

export default SignsQuizScreen;
