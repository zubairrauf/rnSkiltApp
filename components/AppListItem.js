import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";
import AppIcon from "../components/AppIcon";

function AppListItem({ title, subTitle, image, icon, onPress }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AppText style={styles.modalTitle}>{title}</AppText>
            {image && <Image style={styles.modalImage} source={image} />}
            <Text style={styles.modalDescription}>{subTitle}</Text>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Lukk</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.itemContainer}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.iconContainer}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <AppIcon name={icon} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default AppListItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 5,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  itemContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    // backgroundColor: 'orange'
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.medium,
  },
  //Modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
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
    marginTop: 10,
    marginBottom: 15,
  },
});
