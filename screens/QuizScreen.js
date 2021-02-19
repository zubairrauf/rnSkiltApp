import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import AppHeader from '../components/AppButton'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen' 
import signsQuestion from '../data/signsQuizData.json'
import { signsData } from '../data/signsData'

function QuizScreen(props) {
    const [ numberOfQuestions, setNumberofQuestions ] = useState(15)
    const [ questions, setQuestions ] = useState(signsQuestion)
    const [ score, setScore ] = useState(0)

    //Select a random sign and put it in questions
    let randomQuestions = []
    let randomIds = []
    useEffect(() => {
        for (let i=0; i<numberOfQuestions; i++) {
            randomIds.push(Math.floor(Math.random() * signsData.length) + 1)
        }
        
    }, [])
    
   useEffect(() => {
    signsData.map(sign => {
        if ( randomIds.includes(sign.id) ) {
            console.log('This: ', sign.name)
        } else {
            console.log('That: ', sign.name)
        }
    })
   }, [randomIds])

  return (
    <Screen style={styles.container}>
        <AppHeader title='Skilt quiz'/>
        <AppText>{questions[0].question}</AppText>
        <AppText>{questions[0].optionA}</AppText>
        <AppText>{questions[0].optionB}</AppText>
        <AppText>{questions[0].optionC}</AppText>
        <AppText>{questions[0].optionD}</AppText>
        <AppButton 
            title="Forrige" 
            onPress={() => {
                console.log('Prev pressed')
            }}
        />
        <AppButton 
            title="Neste" 
            onPress={() => {
                console.log('Next pressed')
            }}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default QuizScreen;