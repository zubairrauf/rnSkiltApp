import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';

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
        for (let i=0; i<numberOfQuestions; i++) {
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
    console.log('Questions: ', questions)
   }, [randomQuestionIds])

   //Generate random wrong options
   let randomAnswers = []
   const generateRandomOptions = () => {
        let randomId1 = Math.floor(Math.random() * 55) + 1
        let randomId2 = Math.floor(Math.random() * 55) + 1
        let randomId3 = Math.floor(Math.random() * 55) + 1
        randomAnswers.push(signsData[randomId1].name, signsData[randomId2].name, signsData[randomId3].name)
    // setRandomOptions(tempArr)
    console.log('Random options: ', randomAnswers)
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
        <AppText>{questions[currentIndex] ? randomAnswers[0] : 'loading'}</AppText>
        <AppText>{questions[currentIndex] ? randomAnswers[1] : 'loading'}</AppText>
        <AppText>{questions[currentIndex] ? randomAnswers[2] : 'loading'}</AppText>
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