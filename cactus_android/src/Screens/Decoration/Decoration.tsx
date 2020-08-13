import React, { useState } from 'react';
import { Route, Navigation } from '../../common/types';
import { View, ScrollView, Text, Image, Animated, Easing, Dimensions, Modal,TouchableHighlight, Switch, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DeliveryCity } from '../DeliveryCity/DeliveryCity';
import { ArrowTop, ArrowBottom, ArrowRight, ArrowLeft, CloseIcon } from '../../Components/Icons/Icons';
import Colors from '../../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';

export interface IDecorationProps {
  route: Route;
  navigation: Navigation;
}

interface IDecorationState {
  name: string;
  phone: string;
  comment: string;
  call: boolean;
}

export class Decoration extends React.Component<IDecorationProps, IDecorationState> {
  phoneRef: any
  constructor(props: IDecorationProps) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      comment: '',
      call: true,

    }
  }

  inputNameHandler = (e:any) => {
    if(e.nativeEvent){
      this.setState({
        name: e.nativeEvent.text
      })
    }
  }
  callHandler = (e:any) => {
    this.setState({
      call: !this.state.call
    })
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
    const { comment, name, phone, call } = this.state;


    return(
    <View style={{flex: 1}}>
      <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between'}}>
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%', flex: 1}}>
            <View style={{width: 24}} onTouchStart={e => this.props.navigation.goBack()}>
              <CloseIcon width={20} height={20} color={Colors.white}/>
            </View>
            <View style={{width: '70%'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', textAlign: 'center' }}>
                { 'Оформление заказа' }
                </Text>
            </View>
            <View style={{ width: 24 }}>
                
            </View>
        </View>
    </View>
      <ScrollView style={{backgroundColor: '#F9F9F9', flex: 1,}} >
        <KeyboardAvoidingView behavior="position" style={{flex: 1, padding: 16}}>
          <View style={[{ padding: 16, marginBottom: 16, backgroundColor: Colors.white, borderRadius: 7, }]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View><Text style={{fontSize: 16, color: Colors.black, fontWeight: '600'}}>Состав заказа</Text></View>
              <View><TouchableHighlight style={{width: 24, height: 24, backgroundColor: '#EEEEEE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}} onPress={(e) => { this.props.navigation.navigate("DecorationConsist") }}><ArrowRight height={12} width={7} color={Colors.black}/></TouchableHighlight></View>
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
                      <TouchableHighlight style={{ width: '100%', backgroundColor: Colors.green, paddingVertical: 10, borderRadius: 7 }}>
                          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '500', color: Colors.white}}>Войти</Text>
                      </TouchableHighlight>
                  </View>
                  <View style={{marginTop: 12, marginBottom: 10}}>
                      <Text style={{textAlign: 'center', fontSize: 14, color: '#A8A8A8'}}>или стать новым пользователем</Text>
                  </View>
                  <View>
                      <View style={{borderColor: '#DFDFDF', borderTopWidth: 1,borderRightWidth: 1,borderLeftWidth: 1, borderBottomWidth: .5, borderTopStartRadius: 7, borderTopEndRadius: 7}}>
                          <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} placeholder={"Имя и фамилия"} value={name} onChange={this.inputNameHandler}/>
                      </View>
                      <View style={{borderColor: '#DFDFDF', borderTopWidth: .5,borderRightWidth: 1,borderLeftWidth: 1, borderBottomWidth: 1, borderBottomStartRadius: 7, borderBottomEndRadius: 7}}>
                          <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} ref={this.phoneRef} placeholder={"Номер телефона"} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
                      </View>
                  </View>
              </View>
          </DropDown>
          <Delivery navigation={this.props.navigation}/>
          <Payment />
          <View style={[{ marginBottom: 16, borderRadius: 7, backgroundColor: Colors.white, }]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16}}>
              <View>
                <Text style={{ fontSize: 16, color: Colors.black, fontWeight: '600' }}>Не перезванивать</Text>
                <Text style={{color: '#A8A8A8', fontSize: 12 }}>Я уверен в заказе</Text>
              </View>
              <View>
                <Switch value={call} onValueChange={this.callHandler}></Switch>
              </View>
            </View>
          </View>
          <View style={{}}>
            <View style={{padding: 16, backgroundColor: Colors.white, paddingVertical: 18, borderRadius: 7}}>
              <TextInput placeholder="Комментарий к заказу" style={{ fontSize: 16 }} onChange={this.inputCommentHandler}/>
            </View>
          </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    <View style={[{ padding: 16, backgroundColor: Colors.white}]}>
      <View>
        <TouchableHighlight style={{backgroundColor: '#ECEDEF', padding: 16, borderRadius: 7}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#A8A8A8', fontSize: 18, fontWeight: '500'}}>Оформить заказ</Text><Text style={{color: '#A8A8A8', fontSize: 18, fontWeight: '500'}}>58 998 ₴</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    </View>
    )
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
         <View style={{ maxWidth: '100%'}}>
         { paymentList.map((el, index) => {
            return(
              <View key={index} style={[{width: '100%',}]} onTouchStart={e => this.radioHandler(el)}>
                <View style={[{flexDirection: 'row', alignItems: 'center', position: 'relative' }, index == paymentList.length - 1 ? { marginBottom: -14 }: {}]}>
                  <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${radio === el ? Colors.lightGreen : Colors.gray}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 12, backgroundColor: el === radio ? Colors.lightGreen : Colors.white}}>
                    { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: Colors.white}}></View> : null }
                  </View>
                  <View style={[{paddingVertical: 15, width: '100%'}, index !== paymentList.length - 1 ? { borderBottomWidth: .5, borderBottomColor: '#EBEBEB', }: { }]}>
                    <Text style={{fontSize: 16, width: '80%',}}>{el}</Text>
                  </View>
                  { index == paymentList.length - 1 ? <View style={{position: 'absolute', right: 16}}><ArrowRight width={7} height={12} color={'#CECECE'}/></View> : null}
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
            <TouchableHighlight onPress={this.modalVisibilityHandler} underlayColor={Colors.white}  style={{paddingVertical: 10}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: Colors.black}}>Город*</Text>
                <View style={{flexDirection: 'row',alignItems: 'center'}}><Text style={{fontSize: 18, color: '#A8A8A8', marginRight: 15}}>{radioCity === undefined ? 'Не выбрано' : radioCity}</Text><ArrowRight width={7} height={12} color={'#A8A8A8'}/></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{borderTopWidth: 1, borderTopColor: '#DFDFDF'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 15, }}>
                <Text style={{fontSize: 18, color: Colors.black}}>Я получатель</Text>
                <Switch onValueChange={this.checkboxHandler} value={checkbox} />
            </View>
            { checkbox ? null : 
                <>
                <View style={{paddingTop: 15}}>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: 1,borderRightWidth: 1,borderLeftWidth: 1, borderBottomWidth: .5, borderTopStartRadius: 7, borderTopEndRadius: 7}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} placeholder={"Имя и фамилия"} value={name} onChange={this.inputNameHandler}/>
                    </View>
                    <View style={{borderColor: '#DFDFDF', borderTopWidth: 1,borderRightWidth: 1,borderLeftWidth: 1, borderBottomWidth: .5, borderBottomStartRadius: 7, borderBottomEndRadius: 7}}>
                        <TextInput style={{paddingVertical: 12, paddingHorizontal: 12, fontSize: 16}} ref={this.phoneRef} placeholder={"Номер телефона"} keyboardType="phone-pad" value={phone} onChange={this.inputPhoneHandler}/>
                    </View>
                </View>
                </>}
          </View>
          { radioCity === undefined ? null : 
          <View style={{borderTopWidth: 1, borderTopColor: '#DFDFDF', paddingTop: 15, marginTop: 15}}>
            <TouchableHighlight underlayColor={Colors.gray}  style={{justifyContent: 'center'}} onPress={e => this.props.navigation.navigate('Delivery')}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{fontSize: 18, color: Colors.black}}>Способ доставки*</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}><Text style={{fontSize: 18, color: '#A8A8A8', marginRight: 15}}>Не выбрано</Text><ArrowRight width={7} height={12} color={'#A8A8A8'}/></View>
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
      <View style={[{paddingLeft: 16, paddingTop: 16, paddingBottom: 16, flexDirection: 'column', marginBottom: 16, backgroundColor: Colors.white, borderRadius: 7}]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 16}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 24, height: 24, backgroundColor: Colors.lightGreen, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}><Text style={{color: Colors.white, fontSize: 14, fontWeight: 'bold'}}>{count}</Text></View>
          <View style={{marginLeft: 10}}>
            <Text style={{ fontSize: 16, color: Colors.black, fontWeight: '600', marginBottom: 3}}>{title}</Text>
            <Text style={{fontSize: 12, color: Colors.gray}}>{subtitle}</Text>
          </View>
        </View>
        <View>
          <View><TouchableHighlight underlayColor={'#EEEEEE'} onPress={this.pressHandler} style={{width: 24, height: 24, backgroundColor: '#EEEEEE', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            { this.state.show ? 
              <ArrowTop width={12} height={7} color={Colors.black}/>
            :
              <ArrowBottom width={12} height={7} color={Colors.black}/>
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

