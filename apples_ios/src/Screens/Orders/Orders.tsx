import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight, Modal} from 'react-native';
import { Navigation, Route } from '../../common/types';
import { SafeAreaView } from 'react-navigation';
import { CheckedIcon, ArrowRight, SandClocks } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

interface OrderRouteInterface extends Route {
  params: {
    orders: Array<{orderDate: string; orderImage: Array<any>; orderNumber: string; orderPrice: string}>,
    title: string;
  };
}
export interface IOrdersProps {
  route: OrderRouteInterface;
  navigation: Navigation;
}
interface IOrdersState {
    orders: any;
    modal: boolean;
}

export class Orders extends React.Component<IOrdersProps, IOrdersState> {
  constructor(props: IOrdersProps){
    super(props);

        this.state = {
            orders: this.props.route.params?.orders,
            modal: false,
        }
    }

    showModalHandler = (e: any) => {
        let nextState;
        const { modal } = this.state;
        if (modal) {
        nextState = false;
        } else {
        nextState = true;
        }
        this.setState({
        modal: nextState
        })
    }

  render() {
    const { orders, modal } = this.state;

    return(
      <>
        <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Мои заказы', type: 'SMALL', basket: true, }}/>
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
            <View style={{marginBottom: 20,marginTop: 16, alignItems: 'center'}}>
                <View style={{width: 278, flexDirection: 'row',height: 38, borderColor: COLOR.TINT_COLOR, borderRadius: 3, borderWidth: 1, overflow: 'hidden'}}>
                    <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, width: '50%', justifyContent: 'center',}}>
                        <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 16, color: COLOR.WHITE}}>{this.props.route.params?.title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'transparent'} onPress={this.showModalHandler} style={{backgroundColor: COLOR.WHITE ,width: '50%', justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', color: COLOR.TINT_COLOR, fontWeight: '300', fontSize: 16, }}>Ещё</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <Modal visible={modal} onRequestClose={this.showModalHandler}>
              <OrdersTypeModal modalHandler={this.showModalHandler} navigation={this.props.navigation} selectedElement={this.props.route.params?.title}/>
            </Modal>
        { 
        orders === undefined ? 
        <View style={{flex: 1, paddingVertical: 30, backgroundColor: COLOR.BACKGROUND, paddingHorizontal: 16}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../../assets/icons/emptyOrder.png')} style={{width: 120, height: 120}}/>
          </View>
          <View style={{flex: 1, paddingHorizontal: 44, justifyContent: 'space-between'}}>
            <View>
              <Text style={{textAlign: 'center', marginBottom: 20, color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>У вас пока ещё нет закзов. </Text>
              <Text style={{textAlign: 'center', color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>Давайте исправим это!{'\n'}Сделайте первую покупку в Кактусе прямо сейчас.</Text>
            </View>
          </View>
            <View>
                <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, paddingVertical: 12, borderRadius: 3}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: COLOR.WHITE}}>Перейт в каталог</Text>
                </TouchableHighlight>
            </View>
        </View>
        :
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
          <View style={{paddingHorizontal: 16}}>
            {orders.map((el: IOrderItemProps, index: number) => {
                return(
                    <View key={index}>
                      <OrderItem {...el} navigation={this.props.navigation}/>
                    </View>
                )
              })}
          </View>
        </ScrollView>
        }
        </View>
      </>
    )
  } 
}

const OrdersTypeModal: React.FC = ({ modalHandler, navigation, selectedElement }: any) => {
    const [selected, setSelected] = useState(selectedElement);
  
    const radio = ['Все', 'В работе', 'Завершённые', 'Предзаказ', 'Отменённые'];
  
  
    const radioHandler = (element: string) => {
      setSelected(element);
      console.log(navigation);
      navigation.setParams({
        title: element
      })
      modalHandler();
    }
  
    return(
      <SafeAreaView style={{backgroundColor: COLOR.WHITE, flex: 1}}>
        <View style={{height: 60, backgroundColor: COLOR.WHITE, justifyContent: 'center'}}>
          <Text allowFontScaling={false} style={{textAlign: 'center', color: COLOR.BLACK, fontSize: 18, fontWeight: '300', letterSpacing: 2, textTransform: 'uppercase'}}>Состояние заказа</Text>
          <TouchableHighlight underlayColor={'transparent'} style={{position: 'absolute', right: 16}} onPress={modalHandler}>
            <Text allowFontScaling={false} style={{fontWeight: '600', fontSize: 15, color: COLOR.TINT_COLOR }}>Отмена</Text>
          </TouchableHighlight>
        </View>
        <View style={{paddingHorizontal: 16, paddingVertical: 20, backgroundColor: COLOR.BACKGROUND, overflow: 'hidden', flex: 1}}>
        <View style={[{backgroundColor: COLOR.WHITE, paddingHorizontal: 15 }, ]}>
          { radio.map((el, index) => {
              return(
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => radioHandler(el)} style={[{paddingVertical: 12, flexDirection: 'row', alignItems: 'center'}, index !== radio.length - 1 ? { borderBottomColor: '#EBEBEB', borderBottomWidth: .5 } : null]}>
                  <>
                  <Text style={[{ fontWeight: '500', fontSize: 16, width: '100%'}, el === selected ? { color: COLOR.TINT_COLOR, fontWeight: 'normal'} : { color: COLOR.GRAY, fontWeight: '300' }]}>{el}</Text>
                  { el === selected ? <View style={{right: 16}}>
                    <CheckedIcon width={12} height={9} color={COLOR.TINT_COLOR}/>
                  </View>: null}
                  </>
                </TouchableHighlight>
              )
            })
          }
          </View>
        </View>
      </SafeAreaView>
    )
  }

interface IOrderItemProps {
    orderNumber: number;
    orderDate: string;
    orderImage: Array<any>
    orderPrice: string;
    navigation: Navigation;
}

const OrderItem: React.FC<IOrderItemProps> = ({ orderDate, orderImage, orderNumber, orderPrice, navigation }) => {
    return(
        <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 15}]} onTouchStart={e => navigation.navigate('CurrentOrder')}>
        <View style={ { paddingHorizontal: 16,paddingVertical: 16 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 12}}>
                <Text style={{fontWeight: 'normal', fontSize: 14, color: COLOR.GRAY}}>Заказ № {orderNumber}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center3'}}>
                <Text style={{fontSize: 14, color: COLOR.GRAY, fontWeight: '300', marginRight: 14}}>
                    {orderDate}
                </Text>
                <View style={{}}>
                    <ArrowRight width={7} height={14} color={COLOR.GRAY}/>
                </View>
                </View>
            </View>
            <View style={{paddingTop: 12, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 10}}><SandClocks width={14} height={16} color={COLOR.TINT_COLOR} /></View>
              <Text style={{fontSize: 16, color: COLOR.GRAY }}>Статус: </Text><Text style={{color: COLOR.TINT_COLOR,fontSize: 16,}}>В работе</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
            {orderImage.map((el: any, index: number) => {
                return(<Image source={el} style={{width: 50, height: 67, marginRight: 20}}/>)
            })}
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '300'}}>Сумма заказа: </Text>
            <Text style={{fontSize: 18, fontWeight: '600', color: COLOR.BLACK }}>{orderPrice}</Text>
            </View>
        </View>
        </View>
    )
}