import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Animated, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText';
import Screen from '../components/Screen'

function Flashcard({ title="Skilt navn", description="Beskrivelse av skiltet", category="Skiltkategori", image }) {
    const animate = useRef(new Animated.Value(0))
    const [ isFlipped, setIsFlipped ] = useState(false)

    const interpolateFront = animate.current.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    const interpolateBack = animate.current.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })

    const handleFlip = () => {
      Animated.timing(animate.current, {
        duration: 300,
        toValue: isFlipped ? 0 : 180,
        useNativeDriver: true,
      }).start(() => {
        setIsFlipped(!isFlipped)
      })
      console.log('Flippp')
    }  

  return (
    <Screen>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleFlip}>
          <View>
            <Animated.View style={[{ transform: [{ rotateY: interpolateFront}]}, styles.hidden]}>
              <View style={styles.card}>
                  <Image style={styles.cardImage} source={require("../assets/images/dangersigns/100_1.jpg")} />
              </View>
            </Animated.View>
            <Animated.View style={[{ transform: [{ rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
              <View style={styles.card} onPress={handleFlip}>
                  <AppText>{category}</AppText>
                  <AppText>{title}</AppText>
                  <AppText>{description}</AppText>
              </View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10
  },
  cardImage: {
    width: 100,
    height: 100
  },
  hidden: {
    backfaceVisibility: 'hidden'
  },
  back: {
    position: 'absolute',
    top: 0
  }
});

export default Flashcard;