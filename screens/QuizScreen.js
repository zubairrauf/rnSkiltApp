import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppHeader from '../components/AppButton'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen' 
import { signsData } from '../data/signsData'

function QuizScreen(props) {
    const [ questions, setQuestions ] = useState([])
    const [ randomOptions, setRandomOptions ] = useState([])
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ score, setScore ] = useState(0)

    //Select a random sign and put it in questions
    let numberOfQuestions = 15
    let randomQuestionIds = []
    
    //Make random IDs
    useEffect(() => {
        //To generate random questions
        for (let i=0; i<=numberOfQuestions; i++) {
            randomQuestionIds.push(Math.floor(Math.random() * signsData.length) + 1)
        }   
    }, [])
   
    //Grab signs based on randomQuestionIds and update the questions state
   useEffect(() => {
    signsData.map(sign => {
        if ( randomQuestionIds.includes(parseInt(sign.id)) ) {
            setQuestions((prevQuestions) => [...prevQuestions, sign])
        } 
    })
   }, [randomQuestionIds])

   //Generate random wrong options
   let tempArr = []
   const generateRandomOptions = () => {
        let randomId
    for (let i=0; i<3; i++) { 
        randomId = Math.floor(Math.random() * signsData.length) + 1
        tempArr.push(signsData[randomId].name)
    }
    // setRandomOptions(tempArr)
    console.log('Random options: ', tempArr)
   }
   generateRandomOptions();

   //Button handlers
   const handleNextButton = ()  => {
    setCurrentIndex(prevIndex => (prevIndex + 1))
   }
   
   const handlePrevButton = ()  => {
    setCurrentIndex(prevIndex => (prevIndex - 1))
   }

  return (
    <Screen style={styles.container}>
        <AppHeader title='Skilt quiz'/>
        {questions[currentIndex] && <Image style={styles.image} source={questions[currentIndex].img} />}
        <AppText>{questions[currentIndex] ? questions[currentIndex].name : 'loading'}</AppText>
        <AppText>{questions[currentIndex] ? tempArr[0] : 'loading'}</AppText>
        <AppText>{questions[currentIndex] ? tempArr[1] : 'loading'}</AppText>
        <AppText>{questions[currentIndex] ? tempArr[2] : 'loading'}</AppText>
        <AppButton 
            title="Forrige" 
            onPress={handlePrevButton}
        />
        <AppButton 
            title="Neste" 
            onPress={handleNextButton}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      alignItems: 'center' 
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  }
});

export default QuizScreen;