import React, { useState, useCallback, useRef } from "react";
import { View, ScrollView, Text, Image, TouchableHighlight, Modal, StyleSheet, Picker, ActionSheetIOS, KeyboardAvoidingView, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from "../../constants/Colors";
import Svg, { Path } from "react-native-svg";
import * as ImagePicker from 'expo-image-picker';
import { getAsync, PermissionStatus, askAsync } from 'expo-permissions';


export const Profile: React.FC = (props) => {
  let emailRef: any = useRef();
  const [selectedItem,setSelectedItem] = useState('Мужской');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [birthday, setBirthday] = useState(new Date);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('bartimurmurmur@gmail.com');
  const [changeEmailStatus, setChangeEmailStatus] = useState(false);
  const [image, setImage] = useState('')
  

  const changeEmailStatusHandler = useCallback(
    (e: any) => {
      setChangeEmailStatus(!changeEmailStatus);
    },[changeEmailStatus]
  );

  const showModalHandler = useCallback(
    (e: any) => {
      if(!modal){
        setModal(true);
      } else {
        setModal(false);
        }
    }, [modal]
  )

  const emailChangeHandler = useCallback(
    (e: any) => {
      if(e.nativeEvent) {
        setEmail(e.nativeEvent.text)
      }
    },[email]
  );

  const radioHandler = (value: string, index: number) => {
    setSelectedItem(value)
    showModalHandler('');
  }

  const datePickerVisibilityHandler = (e: any) => {
    setDatePickerVisible(true)
  }
  const datePickerChangeHandler = (event: any, selectedDate: any) => {
    setDatePickerVisible(false);
    setBirthday(selectedDate);
  }

  const addPhotoHandler = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Снять фото', 'Выбрать фото', 'Отмена'],
      cancelButtonIndex: 2
    }, (index: number) => {
      switch(index) {
          case 0:
          getPhotoFromCamera('0');
          break;
        case 1:
          getPhotoFromGalary('1');
          break;
        default:
          break;
      }
    })
  }

  const getPhotoFromGalary = async (e: any) => {
    const { status } = await getAsync('cameraRoll');
    if (status === PermissionStatus.GRANTED) {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      console.log(status);
      askAsync('cameraRoll');
        // getPhotoFromGalary(e);
    }
  }

  const getPhotoFromCamera = async (e: any) => {
    const { status } = await getAsync('camera');
    if (status === PermissionStatus.GRANTED) {
      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } else {
      console.log(status);
      askAsync('camera');
      // getPhotoFromGalary(e);
    }
  }


  return(
    <>
      <View style={{height: 60, backgroundColor: Colors.green, justifyContent: 'center'}}>
        <Text style={{color: Colors.white, textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Профиль</Text>
      </View>
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
          <View style={{padding: 16, height: '100%'}}>
            <View style={{alignItems: 'center', marginVertical: 30}}>
                <TouchableHighlight onPress={addPhotoHandler} underlayColor={'#DDDFE0'} style={{width: 80, height: 80, backgroundColor: '#DDDFE0', position: 'relative', borderRadius: 50, justifyContent:"center", alignItems: 'center' }}>
                  <> 
                    {
                      image === '' ? 
                      <>
                      <Image source={require('../../../assets/icons/userPhoto.png')} style={{width: 40, height: 56}}/>
                      <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: Colors.lightGreen, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                        <Text style={{ color: Colors.white, fontSize: 16, lineHeight: 17}}>+</Text>
                      </View>
                      </>
                      :
                      <>
                        <ImageBackground source={{ uri : image }} style={{width: '100%', height: '100%', borderRadius: 50, overflow: 'hidden'}}/>
                        <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: Colors.lightGreen, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                          <Text style={{ color: Colors.white, fontSize: 16, lineHeight: 17}}>+</Text>
                        </View>
                      </>
                    }
                  </>
                </TouchableHighlight>
            </View>
            <View style={{marginBottom: 8}}>
                <Text style={{fontSize: 16, color: Colors.black, fontWeight: 'bold'}}>Личные данные</Text>
            </View>
            <KeyboardAvoidingView behavior="position">
            <View style={{marginBottom: 30, backgroundColor: Colors.white, paddingLeft: 15, borderRadius: 7}}>
              <View style={profile.inputWrapper}>
                <TextInput style={profile.input} placeholder="Имя" placeholderTextColor={"#A8A8A8"}></TextInput>
              </View>
              <View style={profile.inputWrapper}>
                <TextInput style={profile.input} placeholder="Фамилия" placeholderTextColor={"#A8A8A8"}></TextInput>
              </View>
              <View style={profile.inputWrapper}>
                <Text style={{fontSize: 16, color: Colors.black}}>Пол</Text>
                <View style={{position: 'absolute', right: 16}}>
                  <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                    <Text style={{color: selectedItem === "Не указан" ? Colors.lightGreen : '#A8A8A8', fontSize: 16, fontWeight: '500'}}>{selectedItem}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={profile.inputWrapper}>
                <TextInput style={profile.input} value={"+38 (066) 432 22 88"} placeholderTextColor={"#A8A8A8"}></TextInput>
              </View>
              <View style={{paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16}}>
                <TextInput keyboardType="email-address" editable={changeEmailStatus ? true : false} ref={ref => emailRef = ref} style={[profile.input, changeEmailStatus ? { width: '100%'}: null]} placeholder="Email" clearButtonMode="while-editing" onChange={emailChangeHandler} onSubmitEditing={changeEmailStatusHandler} value={email} placeholderTextColor={"#A8A8A8"}></TextInput>
                {
                  changeEmailStatus ? null :
                  <TouchableHighlight onPress={e => changeEmailStatusHandler(e)}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Svg style={{marginRight: 5}} width="16" height="16" viewBox="0 0 16 16" fill="none" >
                      <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.6737 1.88138L14.2222 0.422776C13.6612 -0.140925 12.7504 -0.140925 12.1875 0.422776L10.7971 1.81998L14.0519 5.09068L15.6737 3.46092C16.1088 3.02368 16.1088 2.31859 15.6737 1.88138ZM9.94919 2.67019L13.204 5.94087L4.96526 14.2199L1.71234 10.9492L9.94919 2.67019ZM0.457113 15.9892C0.190506 16.0544 -0.0501753 15.8143 0.00905723 15.5464L0.831082 11.8348L4.084 15.1055L0.457113 15.9892Z" fill="#34C678"/>
                    </Svg>
                    <Text style={{color: Colors.lightGreen, fontSize: 16}}>Изменить</Text>
                  </View>
                </TouchableHighlight>
                }
              </View>
            </View>
            <View style={{marginBottom: 30, backgroundColor: Colors.white, paddingHorizontal: 15, borderRadius: 7}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12}}>
                <View>
                  <Text style={{fontSize: 16, fontWeight: '500', color: '#A8A8A8'}}>Дата рождения</Text>
                </View>
                <TouchableHighlight underlayColor={'transparent'} onPress={datePickerVisibilityHandler}>
                  <Text style={{color: '#A8A8A8', fontSize: 16}}>{`${birthday.getDate()}-${birthday.getMonth()}-${birthday.getFullYear()}`}</Text>
                </TouchableHighlight>
              </View>
            </View>
            </KeyboardAvoidingView>
            <TouchableHighlight style={{marginTop: 40, backgroundColor: Colors.white, paddingVertical: 12, borderRadius: 7}} underlayColor="transparent">
              <Text style={{textAlign: 'center', color: Colors.tintColor, fontSize: 16, fontWeight: '500'}}>Выйти из профиля</Text>
            </TouchableHighlight>
          </View>
      </ScrollView>
      {
        datePickerVisible ? <View style={{}}>
        <DateTimePicker locale="RU-ru" onChange={datePickerChangeHandler} value={birthday}/>
      </View> : null
      }
      {
        modal ? 
        <View style={{}}>
          <Picker mode="dialog" onValueChange={radioHandler} selectedValue={selectedItem}>
            <Picker.Item value="Не указан" label="Не указан"/>
            <Picker.Item value="Мужской" label="Мужской"/>
            <Picker.Item value="Женский" label="Женский"/>
          </Picker>
        </View> : null
      }
      </>
  )
}


const profile = StyleSheet.create({
  input: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.black
  },
  inputWrapper: {
    paddingVertical: 12,
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: .5,
    justifyContent: 'center'
  }
})