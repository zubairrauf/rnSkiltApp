import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppHeader from '../components/AppButton'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen' 
import { signsData } from '../data/signsData'
import { shuffleArray } from '../utils/helperFunctions'

function QuizScreen(props) {
    const [ questions, setQuestions ] = useState([])
    const [ randomOptions, setRandomOptions ] = useState([])
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ score, setScore ] = useState(0)

    //Select random signs and put them in questions
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
    }, [randomQuestionIds])

    //Generate random options
    let randomAnswers = []
    let randomId1, randomId2, randomId3
    useEffect(() => {
        randomId1 = Math.floor(Math.random() * signsData.length) + 1
        randomId2 = Math.floor(Math.random() * signsData.length) + 1
        randomId3 = Math.floor(Math.random() * signsData.length) + 1
        randomAnswers.push(signsData[randomId1].name, signsData[randomId2].name, signsData[randomId3].name)
        if (questions.length > 0) randomAnswers.push(questions[currentIndex].name)
        setRandomOptions(randomAnswers)
    }, [questions, currentIndex])

   //Button handlers
   const handleNextButton = ()  => {
        setCurrentIndex(prevIndex => {
            if (prevIndex < questions.length - 1) {
                return prevIndex + 1
            }
            else {
                return prevIndex
            }
        })
   }
   
   const handlePrevButton = ()  => {
        setCurrentIndex(prevIndex => {
            if (prevIndex > 0) {
                return prevIndex - 1
            }
            else {
                return prevIndex
            }
        })
   }

  return (
    <Screen style={styles.container}>
        <AppHeader title='Skilt quiz'/>
        <AppText style={styles.question}>{questions[currentIndex] ? 'Hva betyr dette skiltet?' : 'loading'}</AppText>
        {questions[currentIndex] && <Image style={styles.image} source={questions[currentIndex].img} />}
        <View style={styles.optionsContainer}>
            <AppText style={styles.options}>{questions[currentIndex] ? randomOptions[0] : 'loading'}</AppText>
            <AppText style={styles.options}>{questions[currentIndex] ? randomOptions[1] : 'loading'}</AppText>
            <AppText style={styles.options}>{questions[currentIndex] ? randomOptions[2] : 'loading'}</AppText>
            <AppText style={styles.options}>{questions[currentIndex] ? randomOptions[3] : 'loading'}</AppText>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton
                color="secondary" 
                title="Forrige" 
                onPress={handlePrevButton}
                width='40%'
            />
            <AppButton
                color="secondary"  
                title="Neste" 
                onPress={handleNextButton}
                width='40%'
            />
        </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      alignItems: 'center' 
  },
  question: {
      fontWeight: 'bold',
      margin: 5
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  optionsContainer: {
      display: 'flex',
        justifyContent: 'center',
        height: 250,
        width: '100%'
  },
  options: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      margin: 3
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default QuizScreen;