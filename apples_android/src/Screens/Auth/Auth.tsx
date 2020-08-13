import React from 'react';
import { Navigation, Route } from '../../common/types';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input } from '../../Components/Input/Input';
import { COLOR } from '../../common/colors';
import { Button } from '../../Components/Button/Button';
import { Entypo } from '@expo/vector-icons';
import { Icons } from '../../common/icons';
import { TextInputMask } from 'react-native-masked-text';
import { Ionicons } from '@expo/vector-icons';

export interface IAuthProps {
  navigation: Navigation;
  route: Route;
}

interface IAuthState {
  phone: string;
  phoneValid: boolean;
}

export class Auth extends React.Component<IAuthProps, IAuthState> {
  phoneRef:any;
  constructor(props: IAuthProps) {
    super(props);

    this.state = {
      phone: '',
      phoneValid: false,
    }

    this.phoneNumberChangeHandler = this.phoneNumberChangeHandler.bind(this);
  }

  phoneNumberChangeHandler = (e: any) => {
    if(e.nativeEvent) {
      this.setState({
        phone: e.nativeEvent.text,
        phoneValid: this.phoneNumberValidate(e.nativeEvent.text)
      })
    }
    console.log(this.state.phoneValid)
  }

  phoneNumberValidate = (value: string) => {
    let phoneRegexp = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
    return phoneRegexp.test(value);
  }


  render() {
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={AuthStyle.container}>
          <View style={AuthStyle.goBack}>
            <Ionicons.Button onPress={() => this.props.navigation.goBack()}  name="md-arrow-round-back" size={30} underlayColor="#fff" color={COLOR.TINT_COLOR} backgroundColor={'transparent'}/>
          </View>
          <View style={AuthStyle.titleWrapper}>
            <Text style={AuthStyle.title}>Телефон</Text>
            <Text style={AuthStyle.subTitle}>Пожалуйста, введите номер Вашего телефона</Text>
          </View>
          <View style={authStyle.inputWrapper}>
            {/* <Input keyboardType="phone-pad" placeholder={'Номер телефона'} value={this.state.phone}  onChange={this.phoneNumberChangeHandler} styles={authStyle.input} placeholderColor={COLOR.TEXT_GRAY}/> */}
            <TextInputMask type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "+38(999)-999-99-99"
              }}
              placeholderTextColor={COLOR.TEXT_GRAY}
              placeholder={"Номер телефона"}
              value={this.state.phone}
              onChange={this.phoneNumberChangeHandler}
              style={authStyle.input}
              keyboardType="phone-pad"
              ref={(ref) => this.phoneRef = ref}/>
            <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12, marginTop: 10}}>При авторизации или регистрации Вы соглашаетесь с </Text>
            <Text style={{fontSize: 12, color: COLOR.TINT_COLOR}}>Политикой конфиденциальности</Text>
          </View>
          <View>
            {/* <Button title="ДАЛЕЕ" onPress={(e) => {this.props.navigation.navigate("SmsVerification")}} disabled={!this.state.phoneValid} styles={{backgroundColor: COLOR.GREEN}} textStyle={{color: COLOR.WHITE}}/> */}
          </View>
          <View style={{paddingVertical: 20}}>
            <Text style={{color: COLOR.TEXT_GRAY, fontSize: 14, textAlign: 'center', textTransform: 'uppercase'}}>ИЛИ</Text>
            <View style={{position: 'relative', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
              <View style={[authStyle.line]}></View>
              <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 16}}>Войти через соцсети</Text>
              <View style={[authStyle.line]}></View>
            </View>
          </View>
          <View style={authStyle.socialContainer}>
            <View style={authStyle.socialWrapper}>
              <View style={{marginRight: 10}}>
                <Entypo name="facebook-with-circle" size={30} color={'#3b5998'}/>
              </View>
              <Text style={authStyle.socialText}>Facebook</Text>
            </View>
            <View style={authStyle.socialWrapper}>
              <View style={{marginRight: 10}}>
                <Image source={Icons.google} style={{width: 26, height: 26}}/>
              </View>
              <Text style={authStyle.socialText}>Google</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export const AuthStyle = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: COLOR.BLACK },
  subTitle: { textAlign: 'center', marginHorizontal: 40, color: COLOR.TEXT_GRAY },
  container: { flex: 1, padding: 15, position: 'relative' },
  goBack: { position: 'absolute', left: 10, top: 15},
  titleWrapper: { marginTop: 70 },
})

const authStyle = StyleSheet.create({
  input: {
    borderColor: COLOR.TEXT_GRAY,
    borderWidth: 1,
    padding: 15,
    borderRadius: 7,
    fontSize: 14,
  },
  inputWrapper: { marginTop: 35, marginBottom: 90 },
  line: {width: '25%', borderBottomColor: '#DEDEDE', borderBottomWidth: 1, height: 1 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  socialWrapper: { width: '45%',flexDirection: 'row',justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 7 },
  socialText: {fontSize: 14, fontWeight: 'bold', color: COLOR.BLACK},
  
})