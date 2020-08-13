import React, { useState, useCallback, useRef, forwardRef } from "react";
import { View, ScrollView, Text, Image, TouchableHighlight, Modal, StyleSheet, Picker, ActionSheetIOS, ImageBackground, KeyboardAvoidingView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLOR } from "../../common/color";
import { getAsync ,PermissionStatus, askAsync } from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Header } from "../../components/Header/Header";
import Svg, { Path } from "react-native-svg";

export const Profile: React.FC = (props: any) => {
    const [selectedItem,setSelectedItem] = useState('Мужской');
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [birthday, setBirthday] = useState(new Date);
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState('');
    const [changeEmailStatus, setChangeEmailStatus] = useState(false);
    const [email, setEmail] = useState('bartimurmurmur@gmail.com');

    const changeEmailStatusHandler = useCallback(
      (e: any) => {
        setChangeEmailStatus(!changeEmailStatus);
      },[changeEmailStatus]
    );

    const emailChangeHandler = useCallback(
      (e: any) => {
        if(e.nativeEvent) {
          setEmail(e.nativeEvent.text)
        }
      },[email]
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
        tintColor: COLOR.TINT_COLOR,
        options: ['Снять фото', 'Выбрать фото', 'Отмена'],
        cancelButtonIndex: 2
      }, (index: number) => {
        if (index === 0) {
          getPhotoFromCamera('0');
        } else if (index === 1) {
          getPhotoFromGalary('1');
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
        <Header navigation={props.navigation} route={props.route} config={{back: false, title: 'Профиль', type: 'SMALL', basket: false, }}/>
        <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
            <View style={{padding: 16, height: '100%'}}>
              <KeyboardAvoidingView behavior="position">
              <View style={{alignItems: 'center', marginVertical: 30}}>
                  <TouchableHighlight onPress={addPhotoHandler} underlayColor={'#DDDFE0'} style={{width: 80, height: 80, backgroundColor: '#DDDFE0', position: 'relative', borderRadius: 50, justifyContent:"center", alignItems: 'center' }}>
                     <> 
                      {
                        image === '' ? 
                        <>
                        <Image source={require('../../../assets/icons/userPhoto.png')} style={{width: 40, height: 56}}/>
                        <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: COLOR.TINT_COLOR, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                          <Text style={{ color: COLOR.WHITE, fontSize: 16, lineHeight: 17}}>+</Text>
                        </View>
                        </>
                        :
                        <>
                          <ImageBackground source={{ uri : image }} style={{width: '100%', height: '100%', borderRadius: 50, overflow: 'hidden'}}/>
                          <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: COLOR.TINT_COLOR, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                            <Text style={{ color: COLOR.WHITE, fontSize: 16, lineHeight: 17}}>+</Text>
                          </View>
                        </>
                      }
                    </>
                  </TouchableHighlight>
              </View>
              <View style={{marginBottom: 8}}>
                  <Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '600'}}>Личные данные</Text>
              </View>
              <View style={{marginBottom: 30, backgroundColor: COLOR.WHITE, borderRadius: 3, paddingHorizontal: 16}}>
                <View style={profile.inputWrapper}>
                  <TextInput style={profile.input} placeholder="Имя" placeholderTextColor={COLOR.GRAY}></TextInput>
                </View>
                <View style={profile.inputWrapper}>
                  <TextInput style={profile.input} placeholder="Фамилия" placeholderTextColor={COLOR.GRAY}></TextInput>
                </View>
                <View style={profile.inputWrapper}>
                  <TextInput style={profile.input} placeholder="Пол" placeholderTextColor={COLOR.GRAY}></TextInput>
                  <View style={{position: 'absolute', right: 0}}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                      <Text style={[{fontSize: 16, fontWeight: '300'}, selectedItem === "Не указан"? { color: COLOR.TINT_COLOR } : { color: COLOR.BLACK, }]}>{selectedItem}</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                <View style={profile.inputWrapper}>
                  <TextInput style={profile.input} value={"+38 (066) 432 22 88"} placeholderTextColor={COLOR.GRAY}></TextInput>
                </View>
                <View style={{paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TextInput keyboardType="email-address" editable={changeEmailStatus ? true : false}style={[profile.input, changeEmailStatus ? { width: '100%'}: null]} placeholder="Email" clearButtonMode="while-editing" onChange={emailChangeHandler} onSubmitEditing={changeEmailStatusHandler} value={email} placeholderTextColor={"#A8A8A8"}></TextInput>
                  {
                    changeEmailStatus ? null :
                    <TouchableHighlight onPress={e => changeEmailStatusHandler(e)}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Svg style={{marginRight: 5}} width="16" height="16" viewBox="0 0 16 16" fill="none" >
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.6737 1.88138L14.2222 0.422776C13.6612 -0.140925 12.7504 -0.140925 12.1875 0.422776L10.7971 1.81998L14.0519 5.09068L15.6737 3.46092C16.1088 3.02368 16.1088 2.31859 15.6737 1.88138ZM9.94919 2.67019L13.204 5.94087L4.96526 14.2199L1.71234 10.9492L9.94919 2.67019ZM0.457113 15.9892C0.190506 16.0544 -0.0501753 15.8143 0.00905723 15.5464L0.831082 11.8348L4.084 15.1055L0.457113 15.9892Z" fill={COLOR.TINT_COLOR}/>
                      </Svg>
                      <Text style={{color: COLOR.TINT_COLOR, fontSize: 16, fontWeight: '300'}}>Изменить</Text>
                    </View>
                  </TouchableHighlight>
                  }
                </View>
              </View>
              <View style={{marginBottom: 30, backgroundColor: COLOR.WHITE, paddingHorizontal: 15, borderRadius: 7}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12}}>
                  <View>
                    <Text style={{fontSize: 16, fontWeight: '300', color: COLOR.GRAY}}>Дата рождения</Text>
                  </View>
                  <TouchableHighlight underlayColor={'transparent'} onPress={datePickerVisibilityHandler}>
                    <Text style={{color: COLOR.BLACK, fontSize: 16, fontWeight: '300'}}>{`${birthday.getDate()}.${birthday.getMonth()}.${birthday.getFullYear()}`}</Text>
                  </TouchableHighlight>
                </View>
              </View>
              </KeyboardAvoidingView>
              <TouchableHighlight style={{marginTop: 40, backgroundColor: COLOR.WHITE, paddingVertical: 12, borderRadius: 7}} underlayColor="transparent">
                <Text style={{textAlign: 'center', color: COLOR.TINT_COLOR, fontSize: 16, fontWeight: '500'}}>Выйти из профиля</Text>
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
    fontSize: 16,
    color: COLOR.BLACK
  },
  inputWrapper: {
    paddingVertical: 12,
    borderBottomColor: '#EBEBEB',
    borderBottomWidth: .5,
    justifyContent: 'center'
  }
})