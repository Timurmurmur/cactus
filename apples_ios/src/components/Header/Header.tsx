import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { COLOR } from '../../common/color';
import { ShoppingCardIcon, ArrowLeft, CloseIcon } from '../Icons/Icons';
import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';
import { Navigation, Route } from '../../common/types';



export interface IHeaderProps {
    navigation: Navigation;
    route: Route;
    config: {
        title: string;
        back: boolean;
        basket: boolean;
        type: string;
        close?: boolean;
    };
}

export const Header:React.FC<IHeaderProps> = ({navigation, route, config}) => {
    const { title, back, basket, type, close } = config;
    console.log(config);
    return(
        <View style={[{backgroundColor: COLOR.WHITE, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between',}, type === "DEFAULT" ? { height: 109 } : { height: 60 }]}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
                <View style={{width: 30 }}>
                    { back ? <ArrowLeft width={11} height={22} color={COLOR.BLACK} underlayColor={COLOR.WHITE} onPress={(e) => { navigation.goBack() }}/> : null}
                    { close ? <CloseIcon onPress={e => navigation.goBack() } underlayColor={COLOR.WHITE} width={20} height={20} color={COLOR.BLACK} />: null}
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   {
                        title === 'Logo' ? <>
                            <Logo />
                            <Text style={{fontWeight: '200', fontSize: 34, lineHeight: 41, letterSpacing: 0.04, color: COLOR.BLACK}}>Apple’s</Text>
                        </> :
                        <Text style={{fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase', color: COLOR.BLACK}}>{title}</Text>
                   }
                </View>
                <View style={{ width: 30 }} onTouchStart={e => navigation.navigate('Basket')}>
                    { basket ? 
                    <>
                    <ShoppingCardIcon width={25} height={24} color={COLOR.BLACK}/>
                        <View style={{position: 'absolute',backgroundColor: COLOR.TINT_COLOR, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: 0}}>
                        <Text style={{fontSize: 10, color: COLOR.WHITE, fontWeight: 'bold'}}>3</Text>
                    </View>
                    </>: null}
                </View>
            </View>
            { type === "DEFAULT" ? 
            <View style={{ height: 49}}>
                <Search />
            </View> : null}
        </View>
    )
}