import React, { useState, useCallback } from "react";
import { View, ScrollView, Text, Image, TouchableHighlight, Modal, CameraRoll, ImageBackground } from "react-native";
import { HeaderStyles } from "../../Components/Header/StackHeader";
import { COLOR } from "../../common/colors";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAsync ,PermissionStatus, askAsync } from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export const Profile: React.FC = (props) => {
    const [image, setImage] = useState('');
    const [selectedItem,setSelectedItem] = useState('Мужской');
    const male = ['Мужской', 'Женский'];
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [birthday, setBirthday] = useState(new Date);
    const [modal, setModal] = useState(false);

    const showModalHandler = useCallback(
        (e: any) => {
            if(!modal){
                setModal(true);
            } else {
                setModal(false);
            }
        }, [modal]
    )

    const radioHandler = (el: string) => {
        setSelectedItem(el)
    }

    const datePickerVisibilityHandler = (e) => {
        setDatePickerVisible(true)
    }
    const datePickerChangeHandler = (event: any, selectedDate: Date) => {
        if(event.type === 'dismissed') {
            setDatePickerVisible(false)
        } else {
            console.log(event);
            setDatePickerVisible(false);
            setBirthday(selectedDate);
        }
    }

    const getPhotoFromGalary = async (e: any) => {
        const { status } = await getAsync('cameraRoll');
        if (status === PermissionStatus.GRANTED) {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                showModalHandler(e);
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
                showModalHandler(e);
                setImage(result.uri);
            }
        } else {
            console.log(status);
            askAsync('camera');
            // getPhotoFromGalary(e);
        }
    }

    const deleteUserPhoto = useCallback((e) => {
        
        setTimeout(() => {setImage('');showModalHandler(e)}, 0);
    }, [image, modal])

    return(
        <ScrollView style={{backgroundColor: '#F7F7F7'}}>
            <View style={[HeaderStyles.wrapper, { paddingLeft: 16 }]}>
              <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
                <Ionicons.Button name="ios-menu" size={40} iconStyle={{ color:  '#fff', marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => {props.navigation.openDrawer()}}/>
              </View>
              <View style={{flex: 5}}>
                <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>{'Профиль'}</Text>
              </View>
            </View>
            <View style={{marginVertical: 8, padding: 16, backgroundColor: '#fff', height: '100%'}}>
                <View>
                    <Text style={{fontSize: 14, fontFamily: 'Roboto-Medium', lineHeight: 16}}>Личные данные</Text>
                </View>
                <View style={{alignItems: 'center', marginVertical: 40}}>
                    { image === '' ? 
                        <TouchableHighlight onPress={showModalHandler} underlayColor={'#DDDFE0'} style={{width: 80, height: 80, backgroundColor: '#DDDFE0', position: 'relative', borderRadius: 50, justifyContent:"center", alignItems: 'center' }}>
                            <>
                            <Image source={require('../../../assets/icons/userPhoto.png')} style={{width: 40, height: 56}}/>
                            <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: COLOR.LIGHT_GREEN, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                            <Text style={{ color: COLOR.WHITE, fontSize: 16, lineHeight: 19}}>+</Text>
                            </View>
                            </>
                        </TouchableHighlight>
                        :
                        <TouchableHighlight onPress={showModalHandler} underlayColor={'#DDDFE0'} style={{width: 80, height: 80, backgroundColor: '#DDDFE0', position: 'relative', borderRadius: 50, justifyContent:"center", alignItems: 'center' }}>
                            <>
                            <ImageBackground source={{ uri : image }} style={{width: '100%', height: '100%', borderRadius: 50, overflow: 'hidden'}}/>
                            <View style={{width: 16, height: 16, borderRadius: 100,overflow: 'hidden', position: 'absolute', backgroundColor: COLOR.LIGHT_GREEN, justifyContent: 'center', alignItems: 'center', right: 0, bottom: 0 }}>
                            <Text style={{ color: COLOR.WHITE, fontSize: 16, lineHeight: 19}}>+</Text>
                            </View>
                            </>
                        </TouchableHighlight>
                    }
                </View>
                <View style={{marginBottom: 30}}>
                    <View style={{marginBottom: 20}}>
                        <Text style={{color: '#828282', fontSize: 12}}>Имя</Text>
                        <TextInput style={{borderBottomColor: '#E1E1E1', borderBottomWidth: 1, fontSize: 16, color: COLOR.BLACK, paddingBottom: 8}} value="Александр"/>
                    </View>
                    <View style={{}}>
                        <Text style={{color: '#828282', fontSize: 12}}>Фамилия</Text>
                        <TextInput style={{borderBottomColor: '#E1E1E1', borderBottomWidth: 1, fontSize: 16, color: COLOR.BLACK, paddingBottom: 8}} value="Васильев"/>
                    </View>
                </View>
                <View style={{marginBottom: 30}}>
                { male.map((el, index) => {
                    return(
                    <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => radioHandler(el)}>
                        <View style={{paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${selectedItem === el ? COLOR.LIGHT_GREEN : 'rgba(0,0,0,.26);'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                            { selectedItem === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                        </View>
                        <Text style={{fontSize: 14, color: `${selectedItem === el ? COLOR.LIGHT_GREEN : '#828282'}`}}>{el}</Text>
                        </View>
                    </TouchableHighlight>
                    )
                })}
                </View>
                <View style={{marginBottom: 30}}>
                    <View style={{}}>
                        <Text style={{color: '#828282', fontSize: 12}}>Телефон</Text>
                        <Text style={{fontSize: 16, color: COLOR.BLACK, lineHeight: 19, marginTop: 5}}>+380504432244</Text>
                    </View>
                </View>
                <View style={{marginBottom: 30}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../../assets/icons/add_circle.png')} style={{width: 20, height: 20}}/>
                        <Text style={{fontSize: 14, color: '#828282', marginLeft: 19}}>Добавить email адрес</Text>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{}}>
                        <Text style={{color: '#828282', fontSize: 12}}>Дата рождения</Text>
                        <TouchableHighlight onPress={datePickerVisibilityHandler} underlayColor={COLOR.GRAY}>
                        <Text style={{fontSize: 16, paddingVertical: 8}}>{`${birthday.getDate()}-${birthday.getMonth()}-${birthday.getFullYear()}`}</Text>
                        </TouchableHighlight>
                        { datePickerVisible ? 
                        <DateTimePicker
                        value={birthday}
                        mode="date"
                        display="default"
                        onChange={datePickerChangeHandler}>
                        </DateTimePicker>: null}
                    </View>
                </View>
                <Modal animationType="fade" visible={modal} transparent={true} onRequestClose={showModalHandler}>
                    <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(54, 54, 54, 0.3);', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{backgroundColor: COLOR.WHITE, paddingHorizontal: 24, paddingVertical: 22, width: 310}}>
                            <Text style={{color: COLOR.BLACK, fontFamily: 'Roboto-Medium', fontSize: 20}}>Добавить фотографию</Text>
                            <TouchableHighlight underlayColor="transparent" style={{marginTop: 27}} onPress={getPhotoFromGalary}>
                                <Text style={{color: COLOR.BLACK, fontSize: 16}}>Выбрать из галереи</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={{marginTop: 27}} onPress={getPhotoFromCamera}>
                                <Text style={{color: COLOR.BLACK, fontSize: 16}}>Сделать снимок</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor="transparent" style={{marginTop: 27}} onPress={deleteUserPhoto}>
                                <Text style={{color: COLOR.BLACK, fontSize: 16}}>Удалить фото</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}