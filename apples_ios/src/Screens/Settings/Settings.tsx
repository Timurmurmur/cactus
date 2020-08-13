import React, { useState, useCallback } from 'react';
import { View, Text, TouchableHighlight, SafeAreaView, Modal, Route } from 'react-native';
import { ArrowRight, ArrowLeft, CheckedIcon, ShoppingCardIcon } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../common/types';

export const Settings:React.FC = (props: any) => {
    const languageRadio = ['Русский', 'Украинский'];
    const interfaceRadio = ['Русский', 'Украинский'];
    const [languageSelected, setLanguageSelected] = useState('Русский');
    const [interfaceSelected, setInterfaceSelected] = useState('Русский');
    const [languageModal, setLanguageModal] = useState(false);
    const [interfaceModal, setInterfaceModal] = useState(false);

    const languageRadioHandler = useCallback(
        (item: string, e: any) => {
            setLanguageSelected(item);
            showLanguageModalHandler(e);
        }, [languageSelected]
    )
    const interfaceRadioHandler = useCallback(
        (item: string, e: any) => {
            setInterfaceSelected(item);
            showInterfaceModalHandler(e);
        }, [interfaceSelected]
    )

    const showLanguageModalHandler = useCallback(
        (e: any) => {
            setLanguageModal(!languageModal);
        }, [languageModal]
    );

    const showInterfaceModalHandler = useCallback(
        (e: any) => {
            setInterfaceModal(!interfaceModal);
        }, [interfaceModal]
    )


    return(
        <>
        <Header navigation={props.navigation} route={props.route} config={{back: true, title: 'Настройки', type: 'SMALL', basket: true, }}/>
        <View style={{backgroundColor: COLOR.BACKGROUND, flex: 1}}>
            <View style={{marginTop: 20}}>
                <View style={{paddingHorizontal: 15}}>
                    <Text style={{fontSize: 16, fontWeight: '600', color: COLOR.BLACK}}>Язык</Text>
                </View>
                <View style={{backgroundColor: COLOR.WHITE, paddingLeft: 16, marginTop: 8}}>
                    <TouchableHighlight onPress={e => props.navigation.navigate('SettingsItem', {
                        title: 'Рассылка',
                        radio: languageRadio,
                        selected: props.route.params.selectedSpam,
                        checkbox: true
                    })} underlayColor={COLOR.WHITE} style={{paddingVertical: 12, paddingRight: 16, borderBottomColor: '#EBEBEB', borderBottomWidth: .5 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: COLOR.BLACK}}>Рассылка</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{marginRight: 12, fontSize: 16, color: COLOR.GRAY}}>{props.route.params.selectedSpam} </Text>
                                <ArrowRight width={7} height={14} color={COLOR.GRAY}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e => props.navigation.navigate('SettingsItem', {
                        title: 'Интерфейс',
                        radio: languageRadio,
                        selected: props.route.params.selectedInterface,
                        checkbox: false
                    })}underlayColor={COLOR.WHITE} style={{paddingVertical: 12, paddingRight: 16 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, color: COLOR.BLACK}}>Интерфейс</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{marginRight: 12, fontSize: 16, color: COLOR.GRAY}}>{props.route.params.selectedInterface} </Text>
                                <ArrowRight width={7} height={14} color={COLOR.GRAY}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            <Modal visible={languageModal} onRequestClose={showLanguageModalHandler} animationType="slide" transparent={false}>
                <SafeAreaView style={{backgroundColor: COLOR.WHITE, flex: 1}}>
                    <View style={{height: 60, backgroundColor: COLOR.WHITE, paddingHorizontal: 16, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
                        <ArrowLeft width={11} height={20} color={COLOR.BLACK} onPress={showLanguageModalHandler}/>
                        <View style={{width: '100%'}}>
                            <Text style={{textAlign: 'center', color: COLOR.BLACK, fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase'}}>Рассылка</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: COLOR.BACKGROUND, flex: 1, paddingVertical: 16}}>
                        <View style={{paddingHorizontal: 15, paddingBottom: 12}}>
                            <Text style={{fontSize: 16, fontWeight: '600', color: COLOR.BLACK}}>Язык</Text>
                        </View>
                        <View style={{backgroundColor: COLOR.WHITE, paddingLeft: 16}}>
                            {
                                languageRadio.map((el, index) => {
                                    return(
                                        <TouchableHighlight onPress={e => languageRadioHandler(el, e)} underlayColor={COLOR.WHITE} style={[{paddingVertical: 12}, index !== languageRadio.length - 1 ? { borderBottomWidth: .5, borderBottomColor: '#EBEBEB' } : null]}>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16}}>
                                                <Text style={{fontSize: 16, color: `${languageSelected === el ? COLOR.TINT_COLOR : COLOR.BLACK}`}}>{el}</Text>
                                                { languageSelected === el ? <CheckedIcon width={12} height={9} color={COLOR.TINT_COLOR}/> : null }
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }
                        </View>
                    </View>

                </SafeAreaView>
            </Modal>
            <Modal visible={interfaceModal} onRequestClose={showInterfaceModalHandler} animationType="slide" transparent={false}>
            
            </Modal>
        </View>
        </>
    )
}


export const SettingsItem: React.FC<{ navigation: Navigation; route: Route; }> = ({ route, navigation }) => {
    return(
        <SafeAreaView style={{backgroundColor: COLOR.WHITE, flex: 1}}>
            <View style={{height: 60, backgroundColor: COLOR.WHITE, paddingHorizontal: 16, alignItems: 'center', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View style={{width: 30}}>
                <ArrowLeft width={11} height={20} color={COLOR.BLACK} onPress={e => navigation.goBack()}/>
                </View>
                <View style={{}}>
                    <Text style={{textAlign: 'center', color: COLOR.BLACK, fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase'}}>{route.params.title}</Text>
                </View>
                <View style={{ width: 30 }} onTouchStart={e => navigation.navigate('Basket')}>
                    <ShoppingCardIcon width={25} height={24} color={COLOR.BLACK}/>
                        <View style={{position: 'absolute',backgroundColor: COLOR.TINT_COLOR, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: 0}}>
                        <Text style={{fontSize: 10, color: COLOR.WHITE, fontWeight: 'bold'}}>3</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: COLOR.BACKGROUND, flex: 1, paddingVertical: 16}}>
                <View style={{paddingHorizontal: 15, paddingBottom: 12}}>
                    <Text style={{fontSize: 16, fontWeight: '600', color: COLOR.BLACK}}>Язык</Text>
                </View>
                <View style={{backgroundColor: COLOR.WHITE, paddingLeft: 16}}>
                    {
                        route.params.radio.map((el: any, index: number) => {
                            return(
                                <TouchableHighlight onPress={e => navigation.navigate('Settings', route.params.checkbox ? {
                                    selectedSpam: el
                                }: {
                                    selectedInterface: el
                                })} underlayColor={COLOR.WHITE} style={[{paddingVertical: 12}, index !== route.params.radio.length - 1 ? { borderBottomWidth: .5, borderBottomColor: '#EBEBEB' } : null]}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16}}>
                                        <Text style={{fontWeight: '500', fontSize: 16, color: `${route.params.selected === el ? COLOR.TINT_COLOR : COLOR.BLACK}`}}>{el}</Text>
                                        { route.params.selected === el ? <CheckedIcon width={12} height={9} color={COLOR.TINT_COLOR}/> : null }
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