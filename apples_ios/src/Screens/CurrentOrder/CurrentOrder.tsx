import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Route, Navigation } from '../../common/types';
import { SandClocks, ArrowRight } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

interface OrderRouteInterface extends Route {
    params: {
      orders: {orderDate: string; orderImage: Array<any>; orderNumber: string; orderPrice: string},
    };
  }
  export interface ICurrentOrderProps {
    route: OrderRouteInterface;
    navigation: Navigation;
  }

export const CurrentOrder:React.FC<ICurrentOrderProps> = ({ navigation, route }) => {
    const { orderPrice, orderImage, orderNumber, orderDate } = route.params.orders;

    return(
        <>
        <Header navigation={navigation} route={route} config={{back: true, title: `заказ № ${route.params.orders.orderNumber}`, type: 'SMALL', basket: true, }}/>
        <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
            <View style={{padding: 16}}>
            <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 15}]}>
                <View style={ { padding: 16 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 12, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{marginRight: 10}}><SandClocks width={14} height={16} color={COLOR.TINT_COLOR} /></View>
                            <Text style={{fontSize: 16, color: COLOR.GRAY}}>Статус: </Text><Text style={{color: COLOR.TINT_COLOR,fontSize: 16,}}>В работе</Text>
                        </View>
                        <Text style={{fontSize: 14, color: COLOR.GRAY, fontWeight: '300'}}>
                            {orderDate}
                        </Text>
                    </View>
                    <View style={{}}>
                    {orderImage.map((el: any, index: number) => {
                        return(
                            <View key={index} style={{flexDirection: 'row', paddingVertical: 15, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, justifyContent: 'space-between',}}>
                                <View style={{flexDirection: 'row', width: '50%', alignItems: 'center'}}>
                                    <View>
                                        <Image source={el} style={{width: 62, height: 85, marginRight: 15}}/>
                                    </View>
                                    <View>
                                        <Text style={{color: COLOR.BLACK, fontSize: 14, lineHeight: 18}}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
                                    </View>
                                </View>
                                <View style={{width: '30%', alignItems: 'flex-end', justifyContent: 'center'}}>
                                    <Text style={{ color: COLOR.GRAY, fontSize: 14, marginBottom: 8}}>1 шт</Text>
                                    <Text style={{ color: COLOR.BLACK, fontSize: 16 }}>29 699 ₴</Text>
                                </View>
                            </View>
                        )
                    })}
                    </View>
                    <View style={{paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between',  borderBottomColor: '#EBEBEB', borderBottomWidth: .5, alignItems: 'center'}}> 
                        <Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '300'}}>Доставка: </Text>
                        <Text style={{ fontSize: 16, color: COLOR.BLACK}}>200 ₴</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingTop: 15}}>
                        <Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '300'}}>Сумма заказа: </Text>
                        <Text style={{fontSize: 18, fontWeight: '600', color: COLOR.BLACK }}>{orderPrice}</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '500', color: COLOR.BLACK, fontSize: 16, marginBottom: 3}}>Данные о покупателе</Text>
                <Text style={{fontSize: 12, color: COLOR.GRAY, fontWeight: '300' }}>Александр Васильев, 0504432211</Text>
            </View>
            <View style={{ backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '500', color: COLOR.BLACK, fontSize: 16, marginBottom: 3}}>Доставка</Text>
                <Text style={{fontSize: 12, color: COLOR.GRAY, fontWeight: '300' }}>экспресс-доставка курьером (Харьков)</Text>
            </View>
            <View style={{ backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '500', color: COLOR.BLACK, fontSize: 16, marginBottom: 3}}>Оплата</Text>
                <Text style={{fontSize: 12, color: COLOR.GRAY, fontWeight: '300' }}>Наличными при получении</Text>
            </View>
            </View>
        </ScrollView>
        </>
    )
}