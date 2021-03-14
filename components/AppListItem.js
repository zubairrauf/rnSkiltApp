import React, { useState } from "react";
import { Image, View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import AppIcon from '../components/AppIcon'
import AppModal from '../components/AppModal'


function AppListItem({ title, subTitle, image, icon, onPress }) {
  const [ modalVisible, setModalVisible ] = useState(false)
  const handleClick = () => {
    setModalVisible(true)
  }
  
  return (
    <View style={styles.container}>
    <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} title={title}  description={subTitle} image={image}/>
      <TouchableWithoutFeedback onPress={handleClick}>
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
    borderRadius: 15,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 5,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',

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
