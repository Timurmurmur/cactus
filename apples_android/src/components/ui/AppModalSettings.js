import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";
import { CheckBox } from 'react-native-elements';

import { AppTextMedium } from './AppTextMedium';
import { AppTextUppercase } from './AppTextUppercase';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const AppModalSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checkRus, setCheckRus] = useState(true);
  const [checkUkr, setCheckUkr] = useState(false);
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.centeredElemsModal}>
              <AppTextMedium style={styles.titleStyle}>Язык рассылки</AppTextMedium>
              <CheckBox
                title='Русский'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                size={20}
                checked={checkRus}
                checkedColor='#60B6FF'
                containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', padding: 0, margin: 0 }}
                textStyle={{ fontWeight: 'normal', color: '#3A3A3C', fontSize: 16 }}
                onPress={() => {
                  setCheckRus(!checkRus)
                  setCheckUkr(false)
                }}
              />
              <CheckBox
                title='Украинский'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                size={20}
                checked={checkUkr}
                checkedColor='#60B6FF'
                containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', padding: 0, marginTop: 20 }}
                textStyle={{ fontWeight: 'normal', color: '#3A3A3C', fontSize: 16 }}
                onPress={() => {
                  setCheckUkr(!checkUkr)
                  setCheckRus(false)
                }}
              />

              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextUppercase style={styles.textStyle}>Отмена</AppTextUppercase>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <TouchableNativeFeedback style={styles.wrapperText} onPress={() => {
          setModalVisible(true);
        }}>
          <AppTextMedium style={styles.title}>Язык рассылки</AppTextMedium>
          <AppTextMedium style={styles.text}>Русский</AppTextMedium>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={styles.wrapperText} onPress={() => {
          setModalVisible(true);
        }}>
          <AppTextMedium style={styles.title}>Язык интерфейса</AppTextMedium>
          <AppTextMedium style={styles.text}>Русский</AppTextMedium>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: "center",
    justifyContent: 'center',
  },
  centeredElemsModal: {
    backgroundColor: '#fff',
    width: 230,
    paddingVertical: 25,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  titleStyle: {
    fontSize: 18,
    marginBottom: 25,
    marginLeft: 13
  },
  textStyle: {
    color: "#60B6FF",
    textAlign: 'right'
  },
  wrapperText: {
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    marginBottom: 3
  },
  text: {
    fontSize: 14,
    color: '#8E8E93'
  },
});

export default AppModalSettings;