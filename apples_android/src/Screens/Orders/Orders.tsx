import React from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import { COLOR } from '../../common/colors';
import { Button } from '../../Components/Button/Button';
import { commonstyles } from '../../common/styles';
import { Navigation, Route } from '../../common/types';

interface OrderRouteInterface extends Route {
  params: {
    orders: Array<{orderDate: string; orderImage: Array<any>; orderNumber: string; orderPrice: string}>
  } | undefined;
}
export interface IOrdersProps {
  route: OrderRouteInterface;
  navigation: Navigation;
}
interface IOrdersState {
  orders: any;
}

export class Orders extends React.Component<IOrdersProps, IOrdersState> {
  constructor(props: IOrdersProps){
    super(props);

    this.state = {
      orders: this.props.route.params
    }
  }

  render() {
    const { orders } = this.state;

    if(orders === undefined) {
      return(
        <View style={{flex: 1, paddingVertical: 30, backgroundColor: COLOR.WHITE}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../../assets/icons/emptyOrder.png')} style={{width: 120, height: 120}}/>
          </View>
          <View style={{flex: 1, paddingHorizontal: 50, justifyContent: 'space-between'}}>
            <View>
              <Text style={{textAlign: 'center', marginBottom: 20, color: COLOR.TEXT_GRAY}}>У вас пока ещё нет закзов. </Text>
              <Text style={{textAlign: 'center', color: COLOR.TEXT_GRAY}}>Давайте исправим это!{'\n'}Сделайте первую покупку в Кактусе прямо сейчас.</Text>
            </View>
            <View>
              <Button title="ПЕРЕЙТИ В КАТАЛОГ" styles={{backgroundColor: COLOR.GREEN}} textStyle={{color: COLOR.WHITE}}/>
            </View>
          </View>
        </View>
      )
    } else {
      console.log(orders);
      return(
        <ScrollView style={{backgroundColor: '#F7F7F7'}}>
          <View style={{paddingVertical: 16}}>
            {orders.orders.map((el: object, index: number) => {
                return(
                  <View style={[{elevation: 2, backgroundColor: COLOR.WHITE}, {marginBottom: 16}]}>
                    <View style={ { padding: 16, borderBottomColor: COLOR.GRAY, borderBottomWidth: 1 }}>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'Roboto-Medium'}}>Заказ № {el.orderNumber}</Text>
                        <Text>{el.orderDate}</Text>
                      </View>
                      <View style={{flexDirection: 'row', marginVertical: 20}}>
                        {el.orderImage.map((el: any, index: number) => {
                          return(<Image source={el} style={{width: 50, height: 67, marginRight: 20}}/>)
                        })}
                      </View>
                      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text>Сумма заказа: </Text>
                        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>{el.orderPrice}</Text>
                      </View>
                    </View>
                    <View style={{padding: 20, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => this.props.navigation.navigate('MainNavigation', { screen: 'CurrentOrder' })} >
                          <Text style={{textTransform: 'uppercase', color: COLOR.LIGHT_GREEN}}>Подробнее</Text>
                        </TouchableHighlight>
                    </View>
                  </View>
                )
              })}
          </View>
        </ScrollView>
      )
    }
  } 
}