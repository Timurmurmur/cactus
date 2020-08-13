import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Alert, Modal, TouchableHighlight, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppButton } from '../components/ui/AppButton';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppTextLight } from '../components/ui/AppTextLight';
import { ScrollView } from 'react-native-gesture-handler';

import OtpInputs from '../components/OtpInputs';


export const LoginScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [content, onChangeContent] = useState(false)
  const [value, onChangeText] = useState('+380')
  const [otp, getOtp] = useState(null)



  if (otp == 1234) {
    goScreen()
  }

  function goScreen() {
    navigation.navigate('Профиль', { value })
  }

  if (!content) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ ...styles.container, paddingVertical: 20 }}>
            <AppTextMedium style={{ fontSize: 20, marginBottom: 12 }}>Телефон</AppTextMedium>
            <AppTextLight style={{ fontSize: 14, marginBottom: 40, textAlign: 'center', color: '#8E8E93' }}>Пожалуйста, введите номер Вашего{`\n`} телефона</AppTextLight>
            <TextInput
              style={{
                width: Dimensions.get('window').width > 400 ? 400 : 300,
                height: 44,
                padding: 14,
                borderColor: '#EBEBEB',
                borderWidth: 1,
                marginBottom: 10
              }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <View style={{ marginBottom: 154 }}>
              <AppTextLight style={{ fontSize: 12 }}>При авторизации или регистрации Вы соглашаетесь с</AppTextLight>
              <AppTextLight style={{ fontSize: 12, color: '#60B6FF' }}>Политикой конфиденциальности</AppTextLight>
            </View>
            <AppButton
              style={{
                backgroundColor: '#EEEEEE',
                color: '#8E8E93',
                marginBottom: 20
              }}
              styleText={{
                color: '#8E8E93',
                textTransform: 'uppercase',
                fontSize: 14
              }}
              onPress={() => onChangeContent(true)}
            >Далее</AppButton>
            <Text style={{ fontSize: 14, color: '#8E8E93', marginBottom: 20 }}>или</Text>
            <AppTextMedium style={{ color: '#3A3A3C', marginBottom: 30 }}>Войти через соцсети</AppTextMedium>
            <View style={{ flexDirection: 'row' }}>
              <AppButton
                style={styles.socialButton}
                styleText={{
                  color: '#3A3A3C',
                  fontSize: 14
                }}
                image={require('../../assets/icons/facebook.png')}
              >Facebook</AppButton>
              <AppButton
                style={styles.socialButton}
                styleText={{
                  color: '#3A3A3C',
                  fontSize: 14
                }}
                image={require('../../assets/icons/google.png')}
                onPress={() => onChangeContent(true)}
              >Google</AppButton>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }


  return (
    <View style={styles.container}>
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
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextMedium style={{ ...styles.textStyle, paddingBottom: 29 }}>Отправить код еще раз</AppTextMedium>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible)
                  onChangeContent(false)
                }}
              >
                <AppTextMedium style={{ ...styles.textStyle, paddingBottom: 29 }}>Ввести другой номер</AppTextMedium>
              </TouchableHighlight>
              {/* <Image source={require('../../assets/icons/close.png')} style={{width: 22}} /> */}
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextMedium style={{ ...styles.textStyle }}>Закрыть</AppTextMedium>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView>
        <View style={{ ...styles.container, paddingVertical: 20 }}>
          <AppTextMedium style={{ fontSize: 20, marginBottom: 12 }}>{value}</AppTextMedium>
          <AppTextLight style={{ fontSize: 14, marginBottom: 40, textAlign: 'center', color: '#8E8E93' }}>Введите 4-значный код, отправленный на{`\n`} Ваш номер</AppTextLight>

          <OtpInputs getOtp={(otp) => getOtp(otp)} />

          <AppButton
            style={{
              backgroundColor: '#FFF',
              color: '#60B6FF',
              marginBottom: 20,
              marginTop: 170
            }}
            styleText={{
              color: '#60B6FF',
              textTransform: 'uppercase',
              fontSize: 14
            }}
            // onPress={() => onChangeContent(false)}
            onPress={() => { setModalVisible(true) }}
          >Не получили код?</AppButton>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    width: '40%',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    color: '#3A3A3C',
    marginHorizontal: 15
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: "center",
    justifyContent: 'flex-end',
  },
  centeredElemsModal: {
    backgroundColor: '#fff',
    width: '100%',
    height: 160,
    padding: 22,
    borderRadius: 2,
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
    fontSize: 20,
    marginBottom: 23,
  },
  textStyle: {
    fontSize: 16,
  },


  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});