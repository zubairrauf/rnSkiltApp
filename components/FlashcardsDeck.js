import React, { Fragment} from 'react';
import { View, StyleSheet } from 'react-native';
import Flashcard from './Flashcard'

function FlashcardsDeck(props) {
    const numberOfCards = 8
    const handleSwipe = () => {
        console.log('Swiped')
    }

  return (
      <>
        <Flashcard title='Yiii'/>
      </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FlashcardsDeck;