import React from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, TouchableHighlight, Text, Image, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { ArrowRight, ArrowLeft, ShoppingCardIcon } from '../../Components/Icons/Icons';
import Colors from '../../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from '../../Components/Header/Header';
import { SmallHeader } from '../../Components/Header/SmallHeader';

interface IDeliveryProps {
  route: Route;
  navigation: Navigation;
}

interface IDeliveryState {
  radio: string;
  pickUpRadio: string;
  deliveryTypeRadio: string;
}

export class Delivery extends React.Component<IDeliveryProps, IDeliveryState> {
  constructor(props: IDeliveryProps){
    super(props);

    this.state = {
      radio: 'Самовывоз',
      pickUpRadio: 'Магазин Cactus',
      deliveryTypeRadio: 'Магазин Cactus',
    }
  }

  radioHandler = (val: string) => {
    this.setState({
      radio: val
    })
  }

  pickupRadioHadnler = (val: string) => {
    this.setState({
      pickUpRadio: val
    })
  }

  deliveryTypeHandler = (val: string) => {
    this.setState({
      deliveryTypeRadio: val
    })
  }

  render() {
    const delivery = ['Самовывоз', 'Курьер']
    const pickup = [
      {title: 'Магазин Cactus', image: require('../../../assets/icons/cactus.png')}, 
      {title: 'Отделение Новой почты', image: require('../../../assets/icons/novaPochta.png')},
      {title: 'Отделение Укрпошты', image: require('../../../assets/icons/ukrPochta.png')},
      {title: 'Отделение Justin', image: require('../../../assets/icons/justin.png')},
      {title: 'Отделение Meest Express', image: require('../../../assets/icons/meest.png')},
    ]

    const deliveryType = [
      {title: 'Магазин Cactus', image: require('../../../assets/icons/cactus.png'), price: '200 грн'}, 
      {title: 'Курьер «Новая почта»', image: require('../../../assets/icons/novaPochta.png'), price: 'от 25 грн'}
    ]

    const { radio, pickUpRadio, deliveryTypeRadio } = this.state;
    return(
      <>
      <KeyboardAvoidingView behavior={"position"} style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between'}}>
          <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
              <View style={{width: 60}}>
                <ArrowLeft underlayColor={Colors.green} onPress={e => this.props.navigation.goBack() } width={11} height={20} color="#fff"/>
              </View>
              <View style={{}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', textAlign: 'center' }}>
                Cпособ доставки
              </Text>
              </View>
              <View style={{ width: 60 }} onTouchStart={e => this.props.navigation.goBack() }>
                <Text style={{fontWeight: '500', fontSize: 18, color: Colors.white}}>
                  Готово
                </Text>
              </View>
          </View>
      </View>
      <ScrollView style={{backgroundColor: '#F9F9F9'}}>
        <View style={{padding: 16}}>
          <View style={{backgroundColor: Colors.white, paddingLeft: 16, borderRadius: 7,paddingVertical: 8}}>
            { delivery.map((el, index) => {
                return(
                    <TouchableHighlight underlayColor={Colors.white} key={index} onPress={e => this.radioHandler(el)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', overflow: 'hidden'}}>
                        <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${radio === el ? Colors.lightGreen : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: `${radio === el ?
                        Colors.lightGreen : Colors.white}`}}>
                        { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: Colors.white}}></View> : null }
                        </View>
                        <View style={[{paddingBottom: 11,paddingTop: 11, width2: '100%'},index !== delivery.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                        <Text style={[{fontSize: 16, color: Colors.black, fontWeight: '500'}]}>{el}</Text>
                        </View>
                    </View>
                    </TouchableHighlight>
                )
                })}
          </View>
          <View style={{marginTop: 16}}>
            {radio === 'Самовывоз' ? 
            <View>
              <View style={{marginBottom: 10}}><Text style={{ fontSize: 16, color: Colors.black, fontWeight: '600' }}>Способ самовывоза*</Text></View>
              <View style={{paddingLeft: 16, backgroundColor: Colors.white, borderRadius: 7}}>
                { pickup.map((el: any, index) => {
                    return(
                    <TouchableHighlight underlayColor={Colors.white} key={index} onPress={e => this.pickupRadioHadnler(el.title)}>
                        <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                          <View style={{marginRight: 12, width: 25,}}>
                            <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${pickUpRadio === el.title ? Colors.lightGreen : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: `${pickUpRadio === el.title ? Colors.lightGreen : Colors.white}`}}>
                            { pickUpRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: Colors.white}}></View> : null }
                            </View>
                          </View>
                          <View style={[{flexDirection: 'row',  width: '85%', paddingVertical: 9, alignItems: 'center'}, index !== pickup.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                              <View style={{marginRight: 20}}>
                                  <Image source={el.image} style={{width: 30, height: 30}}/>
                              </View>
                              <Text style={{fontSize: 16, color: Colors.black}}>{el.title}</Text>
                              <View style={{position: 'absolute', right: 16}}>
                                  <ArrowRight width={7} height={12} color={'#CECECE'}/>
                              </View>
                          </View>
                        </View>
                    </TouchableHighlight>
                    )
                })}
              </View>
            </View> : 
            <><View>
              <View style={{marginBottom: 10}}><Text style={{fontSize: 16, fontWeight: '600', color: Colors.black}}>Служба доставки</Text></View>
              <View style={{backgroundColor: Colors.white, paddingLeft: 16}}>
              { deliveryType.map((el: any, index) => {
                return(
                <TouchableHighlight underlayColor={Colors.white} key={index} onPress={e => this.pickupRadioHadnler(el.title)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                        <View style={{marginRight: 12 ,width: 25}}>
                            <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${pickUpRadio === el.title ? Colors.lightGreen : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: `${pickUpRadio === el.title ? Colors.lightGreen : Colors.white}`}}>
                            { pickUpRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: Colors.white}}></View> : null }
                            </View>
                        </View>
                        <View style={[{flexDirection: 'row',  width: '85%', paddingBottom: 9, alignItems: 'center', paddingTop: 9}, index !== deliveryType.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                            <View style={{marginRight: 20}}>
                                <Image source={el.image} style={{width: 30, height: 30}}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 12, color: '#A8A8A8'}}>{el.price}</Text>
                                <Text style={{fontSize: 16, color: Colors.black}}>{el.title}</Text>
                            </View>
                        </View>
                        
                    </View>
                </TouchableHighlight>
                  )
                })}
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{marginBottom: 10}}><Text style={{fontSize: 16, color: Colors.black, fontWeight: '600'}}>Адрес доставки</Text></View>
              <View style={{ backgroundColor: Colors.white}}>
                <View style={{borderColor: '#DFDFDF', borderTopStartRadius: 7, borderTopEndRadius: 7}}>
                    <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} placeholder={"Улица"}/>
                </View>
                <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,}}>
                    <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} placeholder={"Дом"}/>
                </View>
                <View style={{borderColor: '#DFDFDF', borderTopWidth: .5, borderBottomStartRadius: 7, borderBottomEndRadius: 7}}>
                    <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} placeholder={"Квартира"} keyboardType="phone-pad"/>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{padding: 16, backgroundColor: Colors.white, paddingVertical: 18, borderRadius: 7}}>
                    <TextInput placeholder="Комментарий к заказу" style={{ fontSize: 16 }}/>
                </View>
            </View>
            </View>
            <View>
              {/* <Button title="готово" styles={{backgroundColor: Colors.green}} textStyle={{color: Colors.white, fontSize: 14,fontFamily: 'Roboto-Medium', textTransform: 'uppercase'}}></Button> */}
            </View>
            </>}
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      </>
      
    )
  }
}