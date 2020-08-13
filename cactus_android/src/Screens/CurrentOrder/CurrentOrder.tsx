import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Colors from '../../constants/Colors';
import { Route, Navigation } from '../../common/types';
import { SandClocks, ArrowRight } from '../../Components/Icons/Icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';

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
        <SmallHeader back title={`Заказ № ${orderNumber}`} navigation={navigation} route={route}/>
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
            <View style={{padding: 16}}>
            <View style={[{backgroundColor: Colors.white, borderRadius: 7, marginBottom: 15}]}>
                <View style={ { paddingLeft: 16,paddingVertical: 16 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 12, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{marginRight: 10}}><SandClocks width={14} height={16} color={Colors.lightGreen} /></View>
                            <Text style={{fontSize: 16,fontWeight: '500', color: Colors.gray}}>Статус: </Text><Text style={{color: Colors.lightGreen,fontSize: 16,fontWeight: '500',}}>В работе</Text>
                        </View>
                        <Text style={{fontSize: 14, color: Colors.gray}}>
                            {orderDate}
                        </Text>
                    </View>
                    <View style={{}}>
                    {orderImage.map((el: any, index: number) => {
                        return(
                            <View key={index} style={{flexDirection: 'row', paddingVertical: 15, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, justifyContent: 'space-between', paddingRight: 16}}>
                                <View style={{flexDirection: 'row', width: '50%', alignItems: 'center'}}>
                                    <View>
                                        <Image source={el} style={{width: 62, height: 85, marginRight: 15}}/>
                                    </View>
                                    <View>
                                        <Text style={{color: Colors.black, fontWeight: '600', fontSize: 14, lineHeight: 18}}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
                                    </View>
                                </View>
                                <View style={{width: '30%', alignItems: 'flex-end', justifyContent: 'center'}}>
                                    <Text style={{ color: '#A8A8A8', fontSize: 14, marginBottom: 8}}>1 шт</Text>
                                    <Text style={{ color: Colors.black, fontSize: 16, fontWeight: '500', }}>29 699 ₴</Text>
                                </View>
                            </View>
                        )
                    })}
                    </View>
                    <View style={{paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 16, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, alignItems: 'center'}}> 
                        <Text style={{fontSize: 16, color: Colors.black}}>Доставка: </Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: Colors.black}}>200 ₴</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingRight: 16, paddingTop: 15}}>
                        <Text style={{fontSize: 16, color: Colors.black}}>Сумма заказа: </Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.black }}>{orderPrice}</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: Colors.white, borderRadius: 7, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '600', color: Colors.black, fontSize: 16, marginBottom: 3}}>Данные о покупателе</Text>
                <Text style={{fontSize: 12, color: '#A8A8A8', }}>Александр Васильев, 0504432211</Text>
            </View>
            <View style={{ backgroundColor: Colors.white, borderRadius: 7, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '600', color: Colors.black, fontSize: 16, marginBottom: 3}}>Доставка</Text>
                <Text style={{fontSize: 12, color: '#A8A8A8', }}>экспресс-доставка курьером (Харьков)</Text>
            </View>
            <View style={{ backgroundColor: Colors.white, borderRadius: 7, marginBottom: 15, paddingVertical: 9, paddingHorizontal: 16}}>
                <Text style={{fontWeight: '600', color: Colors.black, fontSize: 16, marginBottom: 3}}>Оплата</Text>
                <Text style={{fontSize: 12, color: '#A8A8A8', }}>Наличными при получении</Text>
            </View>
            </View>
        </ScrollView>
        </>
    )
}