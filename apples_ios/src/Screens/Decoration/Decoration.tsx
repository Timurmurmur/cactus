import React, { useState } from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, Text, Image, Animated, Easing, Dimensions, Modal,TouchableHighlight, Switch, KeyboardAvoidingView } from 'react-native';
import { DeliveryCity } from '../DeliveryCity/DeliveryCity';
import { ArrowTop, ArrowBottom, ArrowRight, ArrowLeft, CloseIcon } from '../../components/Icons/Icons';
import { TextInput } from 'react-native-gesture-handler';
import { COLOR } from '../../common/color';
import Svg, { Path } from 'react-native-svg';
import { Header } from '../../components/Header/Header';

export interface IDecorationProps {
  route: Route;
  navigation: Navigation;
}

interface IDecorationState {
  name: string;
  phone: string;
  comment: string;
}

export class Decoration extends React.Component<IDecorationProps, IDecorationState> {
  phoneRef: any
  constructor(props: IDecorationProps) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      comment: '',
    }
  }

  inputNameHandler = (e:any) => {
    if(e.nativeEvent){
      this.setState({
        name: e.nativeEvent.text
      })
    }
  }

  inputPhoneHandler = (e: any) => {
    if(e.nativeEvent){
      this.setState({
        phone: e.nativeEvent.text
      })
    }
  } 

  inputCommentHandler = (e: any) => {
    if(e.nativeEvent) {
      this.setState({
        comment: e.nativeEvent.text
      })
    }
  }

  render() {
    const { comment, name, phone } = this.state;


    return(<View style={{flex: 1}}>
    <Header navigation={this.props.navigation} route={this.props.route} config={{back: false, title: 'Оформление заказа', type: 'SMALL', basket: false, close: true}}/>
    <ScrollView style={{backgroundColor: COLOR.BACKGROUND, flex: 1}} >
      <KeyboardAvoidingView behavior="position" style={{padding: 16}}>
        <View style={[{ padding: 16, marginBottom: 16, backgroundColor: COLOR.WHITE, borderRadius: 3 }]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View><Text style={{fontSize: 16, color: COLOR.BLACK, fontWeight: '500'}}>Состав заказа</Text></View>
            <View><TouchableHighlight style={{width: 24, height: 24, backgroundColor: '#EEEEEE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} onPress={(e) => { this.props.navigation.navigate("DecorationConsist") }}>
              <Svg width={6} height={12}>
                <Path d="M5.9306 6.17291L0.430562 11.923C0.334866 12.0221 0.176661 12.0265 0.0770506 11.9308C-0.0225598 11.8353 -0.0259815 11.6771 0.069246 11.5773L5.40374 6.00006L0.0692228 0.422839C-0.0260047 0.322994 -0.0225826 0.16479 0.0770278 0.0693283C0.12538 0.0229454 0.187865 0 0.249881 0C0.315811 0 0.381226 0.0258741 0.430539 0.0771561L5.9306 5.82721C6.0229 5.92389 6.0229 6.07623 5.9306 6.17291Z" fill={COLOR.BLACK}/>
              </Svg>
            </TouchableHighlight></View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 18}}>
            <View style={{marginRight: 30}}><Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 70}}/></View>
            <View style={{marginRight: 30}}><Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 70}}/></View>
          </View>
        </View>
        <View>
        <DropDown height={272} title="Данные о покупателе*" subtitle="Александр Иванов, 0504456655" count={1}>
            <View style={{marginTop: 20, paddingRight: 16}}>
                <View>
                    <TouchableHighlight style={{ width: '100%', backgroundColor: COLOR.TINT_COLOR, paddingVertical: 10, borderRadius: 7 }}>
                        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: COLOR.WHITE}}>Войти</Text>
                    </TouchableHighlight>
                </View>
                <View style={{marginTop: 12, marginBottom: 10}}>
                    <Text style={{textAlign: 'center', fontSize: 14, color: '#A8A8A8', fontWeight: '300'}}>или стать новым пользователем</Text>
                </View>
                <View>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,borderRightWidth: .5,borderLeftWidth: .5,  borderTopStartRadius: 3, borderTopEndRadius: 3}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16, fontWeight: '300'}} placeholder={"Имя и Фамилия"} value={name} onChange={this.inputNameHandler}/>
                    </View>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,borderRightWidth: .5,borderLeftWidth: .5, borderBottomWidth: .5, borderBottomStartRadius: 3, borderBottomEndRadius: 3}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16, fontWeight: '300'}} ref={this.phoneRef} placeholder={"Номер телефона"} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
                    </View>
                </View>
            </View>
        </DropDown>
        <Delivery navigation={this.props.navigation}/>
        <Payment />
        <View style={[{ marginBottom: 16, borderRadius: 7, backgroundColor: COLOR.WHITE, }]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16}}>
            <View>
              <Text style={{ fontSize: 16, color: COLOR.BLACK, fontWeight: '600' }}>Не перезванивать</Text>
              <Text style={{color: '#A8A8A8', fontSize: 12 }}>Я уверен в заказе</Text>
            </View>
            <View>
              <Switch trackColor={{false: COLOR.WHITE, true: COLOR.TINT_COLOR}} thumbColor={COLOR.WHITE} value={true}></Switch>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={{padding: 16, backgroundColor: COLOR.WHITE, paddingVertical: 18, borderRadius: 3}}>
            <TextInput placeholder="Комментарий к заказу" style={{ fontSize: 16, fontWeight: '300', color: COLOR.GRAY }} onChange={this.inputCommentHandler}/>
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    <View style={[{ padding: 16, backgroundColor: COLOR.WHITE}]}>
      <View>
        <TouchableHighlight style={{backgroundColor: '#ECEDEF', padding: 16, borderRadius: 7}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLOR.GRAY, fontSize: 18, fontWeight: '500'}}>Оформить заказ</Text><Text style={{color: COLOR.GRAY, fontSize: 18, fontWeight: '600'}}>58 998 ₴</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    </View>)
  }
}

class Payment extends React.Component<any,{radio: string | undefined}> {
  constructor(props: any){
    super(props);

    this.state = {
      radio: undefined
    }
  }

  radioHandler = (val: string) => {
    this.setState({
      radio: val
    })
  }

  render(){
    const { radio } = this.state;
    const paymentList = ['Наличными (в магазине при получении)', 'Наложенный платеж', 'LiqPay (оплата картой онлайн)', 'Оплата картой в магазине','Apple Pay', 'Google Pay', 'На карту Приват Банка', 'Кредит онлайн']

    return(
      <DropDown height={480} title="Оплата*" count={3} subtitle={radio === undefined ? 'Не выбрано' : radio}>
         <View style={{ maxWidth: '100%'}}>
         { paymentList.map((el, index) => {
            return(
              <View key={index} style={[{width: '100%',}]} onTouchStart={e => this.radioHandler(el)}>
                <View style={[{flexDirection: 'row', alignItems: 'center', position: 'relative', paddingVertical: 16}, index !== paymentList.length - 1 ? { borderBottomWidth: .5, borderBottomColor: '#EBEBEB', }: {}]}>
                  <View style={{width: 20, height: 20, borderWidth: .5, borderColor: `${radio === el ? COLOR.TINT_COLOR : COLOR.GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 12, backgroundColor: radio === el ? COLOR.TINT_COLOR : COLOR.WHITE}}>
                    { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.WHITE}}></View> : null }
                  </View>
                  <View style={[{ width: '100%'}, ]}>
                    <Text style={{fontSize: 16, width: '80%', fontWeight: '300', color: COLOR.BLACK}}>{el}</Text>
                  </View>
                  { index == paymentList.length - 1 ? <View style={{position: 'absolute', right: 16}}><Svg width={6} height={12}>
                  <Path d="M5.9306 6.17291L0.430562 11.923C0.334866 12.0221 0.176661 12.0265 0.0770506 11.9308C-0.0225598 11.8353 -0.0259815 11.6771 0.069246 11.5773L5.40374 6.00006L0.0692228 0.422839C-0.0260047 0.322994 -0.0225826 0.16479 0.0770278 0.0693283C0.12538 0.0229454 0.187865 0 0.249881 0C0.315811 0 0.381226 0.0258741 0.430539 0.0771561L5.9306 5.82721C6.0229 5.92389 6.0229 6.07623 5.9306 6.17291Z" fill={COLOR.BLACK}/>
                </Svg></View> : null}
                </View>
              </View>
            )
          })}
         </View>
      </DropDown>
    )
  }
}

class Delivery extends React.Component<{navigation: Navigation,},{checkbox: boolean; phone: string, name: string, radioCity: string | undefined, modal: boolean,}> {
  phoneRef: any;
  constructor(props: any){
    super(props);

    this.state = {
      checkbox: true,
      phone: '',
      name: '',
      radioCity: undefined,
      modal: false
    }
  }

  checkboxHandler = (e: any) => {
    this.setState({
      checkbox: e
    })
  }

  inputPhoneHandler = (e: any) => {
    if(e.nativeEvent){
      this.setState({
        phone: e.nativeEvent.text
      })
    }
  } 

  inputNameHandler = (e:any) => {
    if(e.nativeEvent){
      this.setState({
        name: e.nativeEvent.text
      })
    }
  }

  radioCityHandler = (val: string) => {
    this.setState({
      radioCity: val
    })
  }

  modalVisibilityHandler = () => {
    let newState;
    const { modal } = this.state;
    if(modal){
      newState = false;
    } else {
      newState = true;
    }

    this.setState({
      modal: newState
    })
  }

  render() {
    const { checkbox, name, phone, modal, radioCity } = this.state;

    return(
      <DropDown height={500} title="Доставка" subtitle="Не выбрано" count={2}>
        <View style={{marginTop: 20, paddingRight: 16}}>
          <View style={{}}>
            <TouchableHighlight onPress={this.modalVisibilityHandler} underlayColor={COLOR.WHITE}  style={{paddingVertical: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: COLOR.BLACK, fontWeight: '300'}}>Город*</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}><Text style={{fontSize: 18, color: COLOR.GRAY, marginRight: 15, fontWeight: '300'}}>{radioCity === undefined ? 'Не выбрано' : radioCity}</Text>
                <Svg width={6} height={12}>
                  <Path d="M5.9306 6.17291L0.430562 11.923C0.334866 12.0221 0.176661 12.0265 0.0770506 11.9308C-0.0225598 11.8353 -0.0259815 11.6771 0.069246 11.5773L5.40374 6.00006L0.0692228 0.422839C-0.0260047 0.322994 -0.0225826 0.16479 0.0770278 0.0693283C0.12538 0.0229454 0.187865 0 0.249881 0C0.315811 0 0.381226 0.0258741 0.430539 0.0771561L5.9306 5.82721C6.0229 5.92389 6.0229 6.07623 5.9306 6.17291Z" fill="#8E8E93"/>
                </Svg>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{borderTopWidth: 1, borderTopColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, }}>
                <Text style={{fontSize: 18, color: COLOR.BLACK, fontWeight: '300'}}>Я получатель</Text>
                <Switch onValueChange={this.checkboxHandler} trackColor={{false: COLOR.WHITE, true: COLOR.TINT_COLOR}}  ios_backgroundColor={COLOR.WHITE} thumbColor={COLOR.WHITE} value={checkbox} />
            </View>
            { checkbox ? null : 
                <>
                <View style={{paddingBottom: 15}}>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,borderRightWidth: .5,borderLeftWidth: .5,  borderTopStartRadius: 3, borderTopEndRadius: 3}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16, fontWeight: '300'}} placeholder={"Имя и Фамилия"} value={name} onChange={this.inputNameHandler}/>
                    </View>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,borderRightWidth: .5,borderLeftWidth: .5, borderBottomWidth: .5, borderBottomStartRadius: 3, borderBottomEndRadius: 3}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16, fontWeight: '300'}} ref={this.phoneRef} placeholder={"Номер телефона"} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
                    </View>
                </View>
                </>}
          </View>
          { radioCity === undefined ? null : 
          <View style={{borderTopWidth: 1, borderTopColor: '#DFDFDF', paddingTop: 15}}>
            <TouchableHighlight underlayColor={COLOR.GRAY}  style={{justifyContent: 'center'}} onPress={e => this.props.navigation.navigate('Delivery')}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{fontSize: 18, color: COLOR.BLACK, fontWeight: '300'}}>Способ доставки*</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}><Text style={{fontSize: 18, color: COLOR.GRAY, marginRight: 15, fontWeight: '300'}}>Не выбрано</Text><ArrowRight width={7} height={12} color={'#A8A8A8'}/></View>
              </View>
            </TouchableHighlight>
          </View>}
        </View>
        <Modal transparent={false} animationType="slide" visible={modal} onRequestClose={this.modalVisibilityHandler}>
          <DeliveryCity selectedItem={radioCity} visibilityHandler={this.modalVisibilityHandler} onChange={this.radioCityHandler}/>
        </Modal>
      </DropDown>
    )
  }
}

export interface IDropDownProps {
  title: string;
  count: number;
  height: number;
  subtitle: string;
}

interface IDropDownState {
  show: boolean;
}

export class DropDown extends React.Component<IDropDownProps, IDropDownState> {
  animatedValue: any;  
  constructor(props: IDropDownProps){
    super(props);

    this.state = {
      show: false
    }
  }

  UNSAFE_componentWillMount(){
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount(){
    
  }

  pressHandler = (e:any) => {
    const { show } = this.state;
    if(show) {
      this.hideContent();
      this.setState({
        show: false
      })
    } else {
      this.showContent();
      this.setState({
        show: true
      })
    }
  } 
  
  showContent = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease
    }).start()
  }

  hideContent = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease
    }).start()
  }
  
  render() {
    const { count, title, subtitle ,children} = this.props;

    const animatedStyle = { opacity: this.animatedValue, maxHeight: this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: [0, this.props.height]
    }), overflow: 'hidden'}

    return(
      <View style={[{paddingLeft: 16, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', marginBottom: 16, backgroundColor: COLOR.WHITE, borderRadius: 7}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 24, height: 24, backgroundColor: COLOR.TINT_COLOR, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: COLOR.WHITE, fontSize: 14, fontWeight: 'bold'}}>{count}</Text></View>
          <View style={{marginLeft: 10}}>
            <Text style={{ fontSize: 16, color: COLOR.BLACK, fontWeight: '500', marginBottom: 3}}>{title}</Text>
            <Text style={{fontSize: 12, color: COLOR.GRAY, fontWeight: '300'}}>{subtitle}</Text>
          </View>
        </View>
        <View>
          <View><TouchableHighlight underlayColor={'#EEEEEE'} onPress={this.pressHandler} style={{width: 24, height: 24, backgroundColor: '#EEEEEE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            { this.state.show ? 
              <ArrowTop width={12} height={7} color={COLOR.BLACK}/>
            :
              <ArrowBottom width={12} height={7} color={COLOR.BLACK}/>
            }
          </TouchableHighlight></View>
        </View>
      </View>
      <Animated.View style={animatedStyle}>
        {children}
      </Animated.View>
      </View>
    )
  }
}

