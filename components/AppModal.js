import React from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';

import colors from "../config/colors";
import AppText from "./AppText";

function AppModal({ modalVisible, setModalVisible, title, description, image }) { 
  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(5,5,5, 0.7)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  closeButton: {
    backgroundColor: colors.dark,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalImage: {
    width: 120,
    height: 120,
  },
  modalTitle: {
    fontWeight: "700",
    marginBottom: 15,
    textAlign: "center",
  },
  modalDescription: {
    textAlign: "left",
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default AppModal;