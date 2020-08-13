import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { Header, HeaderStyles } from '../../Components/Header/Header';
import { Navigation, Route } from '../../common/types';
import { COLOR } from '../../common/colors';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { commonstyles } from '../../common/styles';
import Swipeable from 'react-native-swipeable';
import { BasketItem, basketStyles } from '../Basket/Basket';


export const DecorationConsist = ({ navigation, route }: any) => {
    return(
        <View style={{flex: 1, backgroundColor: COLOR.COMP_BG}}>
            <View style={[HeaderStyles.wrapper]}>
            <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
                <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e: any) => navigation.goBack()}/>
            </View>
            <View style={{flex: 5}}>
                <Text style={{ fontSize: 19, color: COLOR.WHITE, fontFamily: 'Roboto-Medium', letterSpacing: .5}}>{route.params.title}</Text>
            </View>
            </View>
            <View>
            <ScrollView>
                <View style={basketStyles.container}>
                <BasketItem />
                </View>
            </ScrollView>
            </View>
        </View>
    )
}