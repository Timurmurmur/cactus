import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { BasketItem, basketStyles } from '../Basket/Basket';
import { Header } from '../../components/Header/Header';


export const DecorationConsist = ({ navigation, route }: any) => {
    return(
        <>
        <Header navigation={navigation} route={route} config={{back: true, title: 'Состав заказа', type: 'SMALL', basket: false }}/>
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <ScrollView>
                <View style={basketStyles.container}>
                    <View style={{marginBottom: 16}}>
                    <BasketItem />
                    </View>
                    <View style={{marginBottom: 16}}>
                    <BasketItem />
                    </View>
                    <View style={{marginBottom: 16}}>
                    <BasketItem />
                    </View>
                    <View style={{marginBottom: 16}}>
                    <BasketItem />
                    </View>
                    <View style={{marginBottom: 16}}>
                    <BasketItem />
                    </View>
                </View>
            </ScrollView>
        </View>
        </>
    )
}