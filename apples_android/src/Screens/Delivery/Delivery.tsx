import React from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, TouchableHighlight, Text, Image } from 'react-native';
import { COLOR } from '../../common/colors';
import { HeaderStyles } from '../../Components/Header/Header';
import { AntDesign } from "@expo/vector-icons";
import { Input } from '../../Components/Input/ResultInput';
import { Button } from '../../Components/Button/Button';
import { ArrowRight } from '../../Components/Icons/Icons';

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
      {title: 'Отделение Новой почты', image: require('../../../assets/icons/novaPochta.png'), price: 'от 25 грн'}
    ]

    const { radio, pickUpRadio, deliveryTypeRadio } = this.state;
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={[HeaderStyles.wrapper]}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
            <AntDesign.Button onPress={e => this.props.navigation.goBack()} name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>Способ доставки</Text>
          </View>
        </View>
        <View style={{padding: 16}}>
          { delivery.map((el, index) => {
              return(
                <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.radioHandler(el)}>
                  <View style={{paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${radio === el ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                      { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                    </View>
                    <Text style={{fontSize: 16, color: COLOR.BLACK}}>{el}</Text>
                  </View>
                </TouchableHighlight>
              )
            })}
          <View style={{marginTop: 40}}>
            {radio === 'Самовывоз' ? 
            <View>
              <View style={{marginBottom: 20}}><Text style={{fontFamily: 'Roboto-Medium', fontSize: 18, color: COLOR.BLACK }}>Способ самовывоза</Text></View>
              <View>
              { pickup.map((el: any, index) => {
                return(
                  <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.pickupRadioHadnler(el.title)}>
                    <View style={{paddingVertical: 15, flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                      <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${pickUpRadio === el.title ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                        { pickUpRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                      </View>
                      <View style={{marginRight: 20}}><Image source={el.image} style={{width: 30, height: 30}}/></View>
                      <Text style={{fontSize: 16, color: COLOR.BLACK}}>{el.title}</Text>
                      <View style={{position: 'absolute', right: 0}}>
                        <ArrowRight width={7} height={12} color={'#CECECE'}/>
                      </View>
                    </View>
                  </TouchableHighlight>
                )
              })}
              </View>
            </View> : 
            <><View>
              <View style={{marginBottom: 20}}><Text style={{fontFamily: 'Roboto-Medium', fontSize: 18, }}>Служба доставки</Text></View>
              <View>
              { deliveryType.map((el: any, index) => {
                return(
                  <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.deliveryTypeHandler(el.title)}>
                    <View style={{paddingVertical: 15, flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
                      <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${deliveryTypeRadio === el.title ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                        { deliveryTypeRadio === el.title ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                      </View>
                      <View style={{marginRight: 20}}><Image source={el.image} style={{width: 30, height: 30}}/></View>
                      <View>
                        <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY }}>{el.price}</Text>
                        <Text style={{fontSize: 16, color: COLOR.BLACK}}>{el.title}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  )
                })}
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{marginBottom: 20}}><Text style={{fontFamily: 'Roboto-Medium', fontSize: 18, color: COLOR.BLACK}}>Адрес доставки</Text></View>
              <View style={{marginBottom: 15}}>
                <Input placeholder="Улица" />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <Input containerStyle={{width: '45%'}} placeholder="Дом"/>
                <Input containerStyle={{width: '45%'}} placeholder="Квартира"/>
              </View>
              <View style={{marginBottom: 25}}>
                <Input placeholder="Комментарий"/>
              </View>
            </View>
            <View>
              <Button title="готово" styles={{backgroundColor: COLOR.GREEN}} textStyle={{color: COLOR.WHITE, fontSize: 14,fontFamily: 'Roboto-Medium', textTransform: 'uppercase'}}></Button>
            </View>
            </>}
          </View>
        </View>
      </ScrollView>
    )
  }
}