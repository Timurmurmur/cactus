import React, { useState } from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, Text, Image, Animated, Easing, Dimensions, Modal,TouchableHighlight, Switch } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HeaderStyles } from '../../Components/Header/Header';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';
import { Button } from '../../Components/Button/Button';
import { Input } from '../../Components/Input/ResultInput';
import { DeliveryCity } from '../DeliveryCity/DeliveryCity';
import { ArrowTop, ArrowBottom, ArrowRight } from '../../Components/Icons/Icons';

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


    return(<>
    <ScrollView style={{maxHeight: '100%'}}>
      <View style={[HeaderStyles.wrapper]}>
        <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
          <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => this.props.navigation.goBack()}/>
        </View>
        <View style={{flex: 5}}>
          <Text style={{ fontSize: 19, color: COLOR.WHITE, fontFamily: 'Roboto-Medium', letterSpacing: .5}}>{this.props.route.params.title}</Text>
        </View>
      </View>
      <View style={{padding: 16, backgroundColor: '#F7F7F7'}}>
        <View style={[commonstyles.shadow, { padding: 16, marginBottom: 16, borderRadius: 2 }]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View><Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', color: COLOR.BLACK}}>Состав заказа</Text></View>
            <View><TouchableHighlight style={{width: 24, height: 24, backgroundColor: COLOR.GRAY, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} onPress={(e) => { this.props.navigation.navigate("DecorationConsist") }}><ArrowRight height={12} width={7} color={COLOR.BLACK}/></TouchableHighlight></View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 18}}>
            <View style={{marginRight: 30}}><Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 70}}/></View>
            <View style={{marginRight: 30}}><Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 70}}/></View>
          </View>
        </View>
        <View>
        <DropDown height={272} title="Ваши данные*" subtitle={`${name === '' ? "Имя и фамилия" : name}, ${phone === '' ? 'номер телефона' : phone}`} count={1}>
          <View style={{marginTop: 20}}>
            <View>
              <Button title="Войти" disabled={false} styles={{backgroundColor: COLOR.GREEN}} textStyle={{fontSize: 14, textTransform: 'uppercase', fontFamily: 'Roboto-Medium', color: COLOR.WHITE}}/>
            </View>
            <View style={{marginTop: 12, marginBottom: 20}}>
              <Text style={{textAlign: 'center', fontSize: 12, color: COLOR.TEXT_GRAY}}>или стать новым пользователем</Text>
            </View>
            <View style={{marginBottom: 15}}>
              <Input placeholder={"Имя и фамилия"} value={name} placeholderColor={'#B4B4B4'} onChange={this.inputNameHandler}/>
            </View>
            <View>
              <Input ref={this.phoneRef} placeholder={"Номер телефона"} placeholderColor={'#B4B4B4'} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
            </View>
          </View>
        </DropDown>
        <Delivery navigation={this.props.navigation}/>
        <Payment />
        <View style={[commonstyles.shadow, { marginBottom: 16, borderRadius: 2 }]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16}}>
            <View>
              <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16, color: COLOR.BLACK }}>Не перезванивать</Text>
              <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12 }}>Я уверен в заказе</Text>
            </View>
            <View>
              <Switch value={true} trackColor={{ true: 'rgba(52, 198, 120, .5);', false: COLOR.TEXT_GRAY }} thumbColor={`${true ? COLOR.LIGHT_GREEN: COLOR.WHITE}`}></Switch>
            </View>
          </View>
        </View>
        <View style={[commonstyles.shadow, { borderRadius: 2}]}>
          <View style={{padding: 16}}>
            <Input placeholder="Комментарий к заказу" value={comment} onChange={this.inputCommentHandler}/>
          </View>
        </View>
        </View>
      </View>
    </ScrollView>
    <View style={[commonstyles.shadow, { padding: 16 }]}>
      <View>
        <TouchableHighlight style={{backgroundColor: '#ECEDEF', padding: 16, borderRadius: 7}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: COLOR.TEXT_GRAY, fontSize: 16, fontFamily: 'Roboto-Medium'}}>Оформить заказ</Text><Text style={{color: COLOR.TEXT_GRAY, fontSize: 16}}>58 998 ₴</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    </>)
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
    const paymentList = ['Наличными (в магазине при получении)', 'Наложенный платеж', 'LiqPay (оплата картой онлайн)', 'Оплата картой в магазине','Apple Pay', 'На карту Приват Банка', 'Кредит онлайн']

    return(
      <DropDown height={480} title="Оплата*" count={3} subtitle={radio === undefined ? 'Не выбрано' : radio}>
         <View style={{marginTop: 20, maxWidth: '100%'}}>
         { paymentList.map((el, index) => {
            return(
              <View key={index} style={{width: '100%', marginBottom: 30}} onTouchStart={e => this.radioHandler(el)}>
                <View style={{flexDirection: 'row', alignItems: 'center', position: 'relative', }}>
                  <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${radio === el ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                    { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                  </View>
                  <Text style={{fontSize: 16, width: '80%'}}>{el}</Text>
                  { index == paymentList.length - 1 ? <View style={{position: 'absolute', right: 0}}><AntDesign color={COLOR.TEXT_GRAY} name="right" size={19}/></View> : null}
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
        <View style={{marginTop: 20}}>
          <View style={{marginBottom: 10}}>
            <TouchableHighlight onPress={this.modalVisibilityHandler} underlayColor={COLOR.WHITE}  style={{paddingVertical: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 16}}>Город*</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}><Text style={{fontSize: 16, color: COLOR.TEXT_GRAY, marginRight: 15}}>{radioCity === undefined ? 'Не выбрано' : radioCity}</Text><AntDesign name="right" color={COLOR.TEXT_GRAY} size={15} /></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, }}>Я получатель</Text>
            <Switch trackColor={{ true: 'rgba(52, 198, 120, .5)', false: COLOR.TEXT_GRAY }} thumbColor={`${checkbox ? COLOR.LIGHT_GREEN : COLOR.WHITE }`} onValueChange={this.checkboxHandler} value={checkbox} />
          </View>
          { checkbox ? null : 
            <>
            <View style={{marginBottom: 15, marginTop: 15}}>
              <Input placeholder={"Имя и фамилия"} value={name} onChange={this.inputNameHandler}/>
            </View>
            <View style={{marginBottom: 15}}>
              <Input ref={this.phoneRef} placeholder={"Номер телефона"} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
            </View>
            </>}
          { radioCity === undefined ? null : 
          <View>
            <TouchableHighlight underlayColor={COLOR.GRAY}  style={{paddingVertical: 10}} onPress={e => this.props.navigation.navigate('BasketNavigation', { screen: 'Delivery'})}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 16, color: COLOR.BLACK}}>Способ доставки*</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}><Text style={{fontSize: 16, color: COLOR.TEXT_GRAY, marginRight: 15}}>Не выбрано</Text><AntDesign name="right" color={COLOR.TEXT_GRAY} size={15} /></View>
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
  subtitle: string;
  height: number;
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
    const { count, title, subtitle, children} = this.props;

    const animatedStyle = { opacity: this.animatedValue, maxHeight: this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: [0, this.props.height]
    }), overflow: 'hidden'}

    return(
      <View style={[{padding: 16, flexDirection: 'column', marginBottom: 16, borderRadius: 2 }, commonstyles.shadow,]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 24, height: 24, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: COLOR.WHITE, fontSize: 14, fontWeight: 'bold'}}>{count}</Text></View>
          <View style={{marginLeft: 10}}>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 16, color: COLOR.BLACK}}>{title}</Text>
            <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>{subtitle}</Text>
          </View>
        </View>
        <View>
          <View><TouchableHighlight underlayColor={COLOR.GRAY} onPress={this.pressHandler} style={{width: 24, height: 24, backgroundColor: COLOR.GRAY, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
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

