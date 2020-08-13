import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { BasketItem, basketStyles } from '../Basket/Basket';
import Colors from '../../constants/Colors';
import { SmallHeader } from '../../Components/Header/SmallHeader';


export const DecorationConsist = ({ navigation, route }: any) => {
    return(
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <SmallHeader title="Состав заказа" back navigation={navigation} route={route}/>
            <ScrollView>
                <View style={basketStyles.container}>
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
                </View>
            </ScrollView>
        </View>
    )
}