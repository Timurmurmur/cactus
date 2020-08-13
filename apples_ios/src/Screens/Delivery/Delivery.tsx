import React from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, TouchableHighlight, Text, Image, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { ArrowRight, ArrowLeft, ShoppingCardIcon } from '../../components/Icons/Icons';
import { TextInput } from 'react-native-gesture-handler';
import { COLOR } from '../../common/color';

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
      {title: 'Магазин Apple`s', image: {
        src: require('../../../assets/images/apples.png'),
        width: 22,
        height: 26
      }}, 
      {title: 'Отделение Новой почты', image: {
        src: require('../../../assets/images/novaPochta.png'),
        width: 26,
        height: 26
      }},
      {title: 'Отделение Укрпошты', image: {
        src:  require('../../../assets/images/ukrPochta.png'),
        width: 26,
        height: 26
      }},
      {title: 'Отделение Justin', image: {
        src: require('../../../assets/images/justin.png'),
        width: 26,
        height: 26
      }},
      {title: 'Отделение Meest Express', image: {
        src: require('../../../assets/images/meest.png'),
        height: 26,
        width: 26,
      }},
    ]

    const deliveryType = [
      {title: 'Эксперсс доставка за 2 часа', image: {
        src: require('../../../assets/images/apples.png'),
        width: 22,
        height: 26
      },
      price: '200 грн',
      }, 
      {title: 'Курьер "Новая почта"', image: {
        src: require('../../../assets/images/novaPochta.png'),
        width: 26,
        height: 26
      }, price: 'от 25 грн'}
    ]

    const { radio, pickUpRadio, deliveryTypeRadio } = this.state;
    return(
      <>
      <View style={[{backgroundColor: COLOR.WHITE, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between',}, { height: 60 }]}>
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
          <View style={{width: 55 }}>
            <ArrowLeft width={11} height={22} color={COLOR.BLACK} underlayColor={COLOR.WHITE} onPress={(e) => { this.props.navigation.goBack() }}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase', color: COLOR.BLACK}}>Способ доставки</Text>
          </View>
          <View style={{ width: 55 }} onTouchStart={e => this.props.navigation.goBack()}>
            <Text style={{color: COLOR.GRAY, fontSize: 17,}}>Готово</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#F9F9F9'}}>
      <KeyboardAvoidingView behavior="position">
        <View style={{padding: 16}}>
          <View style={{backgroundColor: COLOR.WHITE, paddingLeft: 16, borderRadius: 7,paddingVertical: 8}}>
            { delivery.map((el, index) => {
                return(
                    <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.radioHandler(el)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', overflow: 'hidden'}}>
                        <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${radio === el ? COLOR.TINT_COLOR : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: `${radio === el ?
                        COLOR.TINT_COLOR : COLOR.WHITE}`}}>
                        { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.WHITE}}></View> : null }
                        </View>
                        <View style={[{paddingBottom: 11,paddingTop: 11, width: '100%'},index !== delivery.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                        <Text style={[{fontSize: 16, color: COLOR.BLACK, fontWeight: '300'}]}>{el}</Text>
                        </View>
                    </View>
                    </TouchableHighlight>
                )
                })}
          </View>
          <View style={{marginTop: 16}}>
            {radio === 'Самовывоз' ? 
            <View>
              <View style={{marginBottom: 10}}><Text style={{ fontSize: 16, color: COLOR.BLACK, fontWeight: '600' }}>Способ самовывоза*</Text></View>
              <View style={{paddingLeft: 16, backgroundColor: COLOR.WHITE, borderRadius: 7, overflow: 'hidden'}}>
                { pickup.map((el, index) => {
                    return(
                    <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.pickupRadioHadnler(el.title)}>
                        <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                          <View style={{marginRight: 12, width: 25,}}>
                            <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${pickUpRadio === el.title ? COLOR.TINT_COLOR : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: `${pickUpRadio === el.title ? COLOR.TINT_COLOR : COLOR.WHITE}`}}>
                            { pickUpRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.WHITE}}></View> : null }
                            </View>
                          </View>
                          <View style={[{flexDirection: 'row',  width: '85%', paddingVertical: 9, alignItems: 'center'}, index !== pickup.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                              <View style={{marginRight: 20, width: 30, alignItems: 'center', justifyContent: 'center'}}>
                                  <Image source={el.image.src} style={{width: el.image.width, height: el.image.height}}/>
                              </View>
                              <Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '300'}}>{el.title}</Text>
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
              <View style={{marginBottom: 10}}><Text style={{fontSize: 16, fontWeight: '600', color: COLOR.BLACK}}>Служба доставки</Text></View>
              <View style={{backgroundColor: COLOR.WHITE, paddingLeft: 16, overflow: 'hidden'}}>
              { deliveryType.map((el, index) => {
                return(
                <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.pickupRadioHadnler(el.title)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                        <View style={{marginRight: 12 ,width: 25}}>
                            <View style={{width: 22, height: 22, borderWidth: 1, borderColor: `${pickUpRadio === el.title ? COLOR.TINT_COLOR : '#C5C5C5'}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: `${pickUpRadio === el.title ? COLOR.TINT_COLOR : COLOR.WHITE}`}}>
                            { pickUpRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.WHITE}}></View> : null }
                            </View>
                        </View>
                        <View style={[{flexDirection: 'row',  width: '85%', paddingBottom: 9, alignItems: 'center', paddingTop: 9}, index !== deliveryType.length - 1 ? {  borderBottomWidth: .5, borderBottomColor: '#EBEBEB',} : {}]}>
                            <View style={{marginRight: 20, width: 30, alignItems: 'center'}}>
                                <Image source={el.image.src} style={{width: el.image.width, height: el.image.height}}/>
                            </View>
                            <View>
                                <Text allowFontScaling={false} style={{fontSize: 12, color: '#A8A8A8', fontWeight: '300'}}>{el.price}</Text>
                                <Text allowFontScaling={false} style={{fontSize: 14, color: COLOR.BLACK, fontWeight: '300'}}>{el.title}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                  )
                })}
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{marginBottom: 10}}><Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '600'}}>Адрес доставки</Text></View>
              <View style={{ backgroundColor: COLOR.WHITE, paddingHorizontal: 16}}>
                <View style={{borderColor: '#DFDFDF', borderTopStartRadius: 7, borderTopEndRadius: 7}}>
                    <TextInput style={{paddingVertical: 12,  fontSize: 16, fontWeight: '300', color: COLOR.GRAY}} placeholder={"Улица"}/>
                </View>
                <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,}}>
                    <TextInput style={{paddingVertical: 12, fontSize: 16, fontWeight: '300', color: COLOR.GRAY}} placeholder={"Дом"}/>
                </View>
                <View style={{borderColor: '#DFDFDF', borderTopWidth: .5, borderBottomStartRadius: 7, borderBottomEndRadius: 7}}>
                    <TextInput style={{paddingVertical: 12,  fontSize: 16, fontWeight: '300', color: COLOR.GRAY}} placeholder={"Квартира"} keyboardType="phone-pad"/>
                </View>
            </View>
            <View style={{marginTop: 15}}>
                <View style={{padding: 16, backgroundColor: COLOR.WHITE, paddingVertical: 18, borderRadius: 7}}>
                    <TextInput placeholder="Комментарий к заказу" multiline={true} numberOfLines={4 } style={{ fontSize: 16, fontWeight: '300', minHeight: 130 }}/>
                </View>
            </View>
            </View>
            <View>
              {/* <Button title="готово" styles={{backgroundColor: COLOR.TINT_COLOR}} textStyle={{color: COLOR.WHITE, fontSize: 14,fontFamily: 'Roboto-Medium', textTransform: 'uppercase'}}></Button> */}
            </View>
            </>}
          </View>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
      </>
    )
  }
}