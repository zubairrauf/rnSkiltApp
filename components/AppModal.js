import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native';

import colors from "../config/colors";
import AppText from "./AppText";

function AppModal({ title, description, image, category }) {
    const [ modalVisible, setModalVisible ] = useState(false)

    const showModal = () => {
        setModalVisible(true)
    }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
    }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText style={styles.modalTitle}>{title}</AppText>
            {image && <Image style={styles.modalImage} source={image} />}
            <Text style={styles.modalDescription}>{description}</Text>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Lukk</Text>
            </TouchableHighlight>
          </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: colors.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalImage: {
    width: 150,
    height: 150
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalDescription: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15
  }
});

export default AppModal;