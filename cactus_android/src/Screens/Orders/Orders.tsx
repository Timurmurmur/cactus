import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TouchableHighlight, Modal} from 'react-native';
import { Navigation, Route } from '../../common/types';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-navigation';
import { CheckedIcon, ArrowRight, SandClocks } from '../../Components/Icons/Icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';

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
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
          <SmallHeader back title="Мои заказы" {...this.props}/>
            <View style={{marginBottom: 20,marginTop: 16, alignItems: 'center'}}>
                <View style={{width: 278, flexDirection: 'row',height: 38, borderColor: Colors.green, borderRadius: 7, borderWidth: 1, overflow: 'hidden'}}>
                    <TouchableHighlight style={{backgroundColor: Colors.green, width: '50%', justifyContent: 'center',}}>
                        <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 16, color: Colors.white}}>{this.props.route.params?.title}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'transparent'} onPress={this.showModalHandler} style={{backgroundColor: Colors.white ,width: '50%', justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', color: Colors.green, fontWeight: '500', fontSize: 16, }}>Ещё</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <Modal visible={modal} onRequestClose={this.showModalHandler}>
                <OrdersTypeModal modalHandler={this.showModalHandler} navigation={this.props.navigation} selectedElement={this.props.route.params?.title}/>
            </Modal>
        { 
        orders === undefined ? 
        <View style={{flex: 1, paddingVertical: 30, backgroundColor: '#F9F9F9', paddingHorizontal: 16}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../../assets/icons/emptyOrder.png')} style={{width: 120, height: 120}}/>
          </View>
          <View style={{flex: 1, paddingHorizontal: 44, justifyContent: 'space-between'}}>
            <View>
              <Text style={{textAlign: 'center', marginBottom: 20, color: Colors.gray}}>У вас пока ещё нет закзов. </Text>
              <Text style={{textAlign: 'center', color: Colors.gray}}>Давайте исправим это!{'\n'}Сделайте первую покупку в Кактусе прямо сейчас.</Text>
            </View>
          </View>
            <View>
              {/* <Button title="ПЕРЕЙТИ В КАТАЛОГ" styles={{backgroundColor: Colors.green}} textStyle={{color: Colors.white}}/> */}
                <TouchableHighlight style={{backgroundColor: Colors.green, paddingVertical: 12, borderRadius: 7}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: Colors.white}}>Перейт в каталог</Text>
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
      <SafeAreaView style={{backgroundColor: Colors.green, flex: 1}}>
        <View style={{height: 60, backgroundColor: Colors.green, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Состояние заказа</Text>
          <TouchableHighlight underlayColor={'transparent'} style={{position: 'absolute', right: 16}} onPress={modalHandler}>
            <Text style={{fontWeight: '500', fontSize: 16, color: Colors.white }}>Отмена</Text>
          </TouchableHighlight>
        </View>
        <View style={{paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#F9F9F9', overflow: 'hidden', flex: 1}}>
        <View style={[{backgroundColor: Colors.white, paddingHorizontal: 15 }, ]}>
          { radio.map((el, index) => {
              return(
                <TouchableHighlight underlayColor={Colors.white} onPress={e => radioHandler(el)} style={[{paddingVertical: 12, flexDirection: 'row', alignItems: 'center'}, index !== radio.length - 1 ? { borderBottomColor: '#EBEBEB', borderBottomWidth: .5 } : null]}>
                  <>
                  <Text style={{color: `${el === selected ? Colors.lightGreen : Colors.gray}`, fontWeight: '500', fontSize: 16, width: '100%'}}>{el}</Text>
                  { el === selected ? <View style={{right: 16}}>
                    <CheckedIcon width={12} height={9} color={Colors.lightGreen}/>
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
        <View style={[{backgroundColor: Colors.white, borderRadius: 7, marginBottom: 15}]} onTouchStart={e => navigation.navigate('CurrentOrder')}>
        <View style={ { paddingLeft: 16,paddingVertical: 16 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 12}}>
                <Text style={{fontWeight: '500', fontSize: 14, color: Colors.gray}}>Заказ № {orderNumber}</Text>
                <Text style={{fontSize: 14, color: Colors.gray}}>
                    {orderDate}
                    <View style={{paddingLeft: 13}}>
                        <ArrowRight width={7} height={12} color={Colors.gray}/>
                    </View>
                </Text>
            </View>
            <View style={{paddingTop: 12, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 10}}><SandClocks width={14} height={16} color={Colors.lightGreen} /></View>
              <Text style={{fontSize: 16,fontWeight: '500', color: Colors.gray}}>Статус: </Text><Text style={{color: Colors.lightGreen,fontSize: 16,fontWeight: '500',}}>В работе</Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
            {orderImage.map((el: any, index: number) => {
                return(<Image source={el} style={{width: 50, height: 67, marginRight: 20}}/>)
            })}
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingRight: 16}}>
            <Text style={{fontSize: 16, color: Colors.black}}>Сумма заказа: </Text>
            <Text style={{fontSize: 18, fontWeight: '500', color: Colors.black }}>{orderPrice}</Text>
            </View>
        </View>
        </View>
    )
}