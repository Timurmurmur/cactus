import React, { useState, useCallback } from 'react';
import { View, Text, TouchableHighlight, SafeAreaView, Modal, Route } from 'react-native';
import Colors from '../../constants/Colors';
import { ArrowRight, ArrowLeft, CheckedIcon } from '../../Components/Icons/Icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';
import { Navigation } from '../../common/types';

export const Settings:React.FC = (props) => {
    const languageRadio = ['Русский', 'Украинский'];
    // const [languageSelected, setLanguageSelected] = useState('Русский');
    // const [interfaceSelected, setInterfaceSelected] = useState('Русский');
    // const [languageModal, setLanguageModal] = useState(false);
    // const [interfaceModal, setInterfaceModal] = useState(false);

    // const languageRadioHandler = useCallback(
    //     (item: string, e: any) => {
    //         setLanguageSelected(item);
    //         showLanguageModalHandler(e);
    //     }, [languageSelected]
    // )
    // const interfaceRadioHandler = useCallback(
    //     (item: string, e: any) => {
    //         setInterfaceSelected(item);
    //         showInterfaceModalHandler(e);
    //     }, [interfaceSelected]
    // )

    // const showLanguageModalHandler = useCallback(
    //     (e: any) => {
    //         setLanguageModal(!languageModal);
    //     }, [languageModal]
    // );

    // const showInterfaceModalHandler = useCallback(
    //     (e: any) => {
    //         setInterfaceModal(!interfaceModal);
    //     }, [interfaceModal]
    // )


    return(
        <>
        <SmallHeader title="Настройки" back {...props}/>
        <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
            <View style={{marginTop: 20}}>
                <View style={{paddingHorizontal: 15}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.black}}>Язык</Text>
                </View>
                <View style={{backgroundColor: Colors.white, paddingLeft: 16, marginTop: 8}}>
                    <TouchableHighlight onPress={e => props.navigation.navigate('SettingsItem', {
                        title: 'Рассылка',
                        radio: languageRadio,
                        selected: props.route.params.selectedSpam,
                        checkbox: true
                    })} underlayColor={Colors.white} style={{paddingVertical: 12, paddingRight: 16, borderBottomColor: '#EBEBEB', borderBottomWidth: .5 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: '500', color: Colors.black}}>Рассылка</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{marginRight: 12, fontSize: 16, color: '#A8A8A8', fontWeight: '500'}}>{props.route.params.selectedSpam}</Text>
                                <ArrowRight width={7} height={12} color={'#A8A8A8'}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => props.navigation.navigate('SettingsItem', {
                        title: 'Интерфейс',
                        radio: languageRadio,
                        selected: props.route.params.selectedInterface,
                        checkbox: false
                    })} underlayColor={Colors.white} style={{paddingVertical: 12, paddingRight: 16 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: '500', color: Colors.black}}>Интерфейс</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{marginRight: 12, fontSize: 16, color: '#A8A8A8', fontWeight: '500'}}>{props.route.params.selectedInterface} </Text>
                                <ArrowRight width={7} height={12} color={'#A8A8A8'}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        </>
    )
}

export const SettingsItem: React.FC<{ navigation: Navigation; route: Route; }> = ({ route, navigation }) => {
    return(
        <SafeAreaView style={{backgroundColor: Colors.green, flex: 1}}>
            <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
                <ArrowLeft width={11} height={20} color={Colors.white} onPress={e => navigation.goBack()}/>
                <View style={{width: '100%'}}>
                    <Text style={{textAlign: 'center', color: Colors.white, fontWeight: 'bold', fontSize: 20}}>{route.params.title}</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#F9F9F9', flex: 1, paddingVertical: 20}}>
                <View style={{backgroundColor: Colors.white, paddingLeft: 16}}>
                    {
                        route.params.radio.map((el: any, index: number) => {
                            return(
                                <TouchableHighlight onPress={e => navigation.navigate('Settings', route.params.checkbox ? {
                                    selectedSpam: el
                                }: {
                                    selectedInterface: el
                                })} underlayColor={Colors.white} style={[{paddingVertical: 12}, index !== route.params.radio.length - 1 ? { borderBottomWidth: .5, borderBottomColor: '#EBEBEB' } : null]}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16}}>
                                        <Text style={{fontWeight: '500', fontSize: 16, color: `${route.params.selected === el ? Colors.lightGreen : Colors.black}`}}>{el}</Text>
                                        { route.params.selected === el ? <CheckedIcon width={12} height={9} color={Colors.lightGreen}/> : null }
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}