import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, Modal, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import { AppTextMedium } from '../components/ui/AppTextMedium';


export const ProfileScreen = ({ route }) => {
  const data = route.params
  const phone = data.value

  const [modalVisible, setModalVisible] = useState(false);
  const [checkWooman, setCheckWooman] = useState(true);
  const [checkMan, setCheckMan] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [birthday, setBirthday] = useState('Не указана')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    setBirthday(formateDate(currentDate))
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const formateDate = (result) => {
    let date = new Date(Date.parse(result));
    let dd = date.getDate(date);
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth(date) + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear(date);
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.centeredElemsModal}>
              <AppTextMedium style={styles.titleStyle}>Добавить фотографию</AppTextMedium>

              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextMedium style={{ ...styles.textStyle, paddingBottom: 29 }}>Выбрать из галереи</AppTextMedium>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextMedium style={{ ...styles.textStyle, paddingBottom: 29 }}>Сделать снимок</AppTextMedium>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <AppTextMedium style={styles.textStyle}>Удалить фото</AppTextMedium>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      <ScrollView>
        <View style={{ ...styles.container, marginTop: 30 }}>

          <TouchableHighlight activeOpacity={0.6} underlayColor="#fff" onPress={() => {
            setModalVisible(true);
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/no_photo.png')} style={{ width: 80, height: 80, marginBottom: 30 }} />
              <Image source={require('../../assets/icons/add_photo.png')} style={{ width: 16, height: 16, position: 'relative', top: 60, right: 17 }} />
            </View>
          </TouchableHighlight>

          <View style={{
            width: Dimensions.get('window').width > 400 ? 400 : 320,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            marginBottom: 20
          }}>
            <AppTextMedium style={{
              color: '#8E8E93',
              fontSize: 12,
              marginBottom: 8
            }}>Имя</AppTextMedium>
            <AppTextMedium style={{
              color: '#3A3A3C',
              fontSize: 16,
              marginBottom: 8
            }}>Александр</AppTextMedium>
          </View>
          <View style={{
            width: Dimensions.get('window').width > 400 ? 400 : 320,
            marginHorizontal: 16,
            borderBottomColor: '#EBEBEB',
            borderBottomWidth: 1,
            marginBottom: 20
          }}>
            <AppTextMedium style={{
              color: '#8E8E93',
              fontSize: 12,
              marginBottom: 8
            }}>Фамилия</AppTextMedium>
            <AppTextMedium style={{
              color: '#3A3A3C',
              fontSize: 16,
              marginBottom: 8
            }}>Васильев</AppTextMedium>
          </View>

          <View style={{
            width: Dimensions.get('window').width > 400 ? 400 : 345,
            marginBottom: 20
          }}>
            <AppTextMedium style={{
              color: '#8E8E93',
              fontSize: 12,
              marginLeft: 12,
              marginBottom: 8
            }}>Пол</AppTextMedium>
            <View>
              <CheckBox
                title='Мужской'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                size={20}
                checked={checkWooman}
                checkedColor='#60B6FF'
                containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', padding: 0, margin: 0 }}
                textStyle={!checkMan ? { fontWeight: 'normal', color: '#60B6FF', fontSize: 16 } : { fontWeight: 'normal', color: '#3A3A3C', fontSize: 16 }}
                onPress={() => {
                  setCheckWooman(!checkWooman)
                  setCheckMan(false)
                }}
              />
              <CheckBox
                title='Женский'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                size={20}
                checked={checkMan}
                checkedColor='#60B6FF'
                containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', padding: 0, marginTop: 12 }}
                textStyle={!checkWooman ? { fontWeight: 'normal', color: '#60B6FF', fontSize: 16 } : { fontWeight: 'normal', color: '#3A3A3C', fontSize: 16 }}
                onPress={() => {
                  setCheckMan(!checkMan)
                  setCheckWooman(false)
                }}
              />
            </View>
          </View>
          <View style={{
            width: Dimensions.get('window').width > 400 ? 400 : 320,
            marginHorizontal: 16,
            marginBottom: 20
          }}>
            <AppTextMedium style={{
              color: '#8E8E93',
              fontSize: 12,
              marginBottom: 8
            }}>Телефон</AppTextMedium>
            <AppTextMedium style={{
              color: '#3A3A3C',
              fontSize: 16,
              marginBottom: 8
            }}>{phone}</AppTextMedium>
          </View>
          <View style={{
            width: Dimensions.get('window').width > 400 ? 400 : 320,
            marginHorizontal: 16,
            marginBottom: 20
          }}>
            <AppTextMedium style={{
              color: '#8E8E93',
              fontSize: 12,
              marginBottom: 8
            }}>Email адрес</AppTextMedium>
            <AppTextMedium style={{
              color: '#3A3A3C',
              fontSize: 16,
              marginBottom: 8
            }}>+797878787@mail.ru</AppTextMedium>
          </View>

          <TouchableOpacity onPress={showDatepicker}>
            <View style={{
              width: Dimensions.get('window').width > 400 ? 400 : 320,
              marginHorizontal: 16,
              marginBottom: 20
            }}>
              <AppTextMedium style={{
                color: '#8E8E93',
                fontSize: 12,
                marginBottom: 8
              }}>Дата рождения</AppTextMedium>
              <AppTextMedium style={{
                color: '#3A3A3C',
                fontSize: 16,
                marginBottom: 8
              }}>{birthday}</AppTextMedium>
            </View>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
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
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: "center",
    justifyContent: 'center',
  },
  centeredElemsModal: {
    backgroundColor: '#fff',
    width: 310,
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
  }
});