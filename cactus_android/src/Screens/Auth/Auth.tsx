import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Icons } from '../../common/icons';
import { TextInputMask } from 'react-native-masked-text';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

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
        const { text } = e.nativeEvent
        this.setState({
            phone: text,
            phoneValid: this.phoneNumberValidate(text)
        })
        if ( text.length === 18) {
            this.phoneRef._inputElement._inputRef.blur();
        }
    }
  }

  phoneNumberValidate = (value: string) => {
    let phoneRegexp = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
    return phoneRegexp.test(value);
  }


  render() {
    return(
        <View style={AuthStyle.container}>
          <View style={AuthStyle.titleWrapper}>
            <Text style={AuthStyle.title}>Телефон</Text>
            <Text style={AuthStyle.subTitle}>Пожалуйста, введите номер Вашего телефона</Text>
          </View>
          <View style={authStyle.inputWrapper}>
            <TextInputMask type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "+38(999)-999-99-99"
              }}
              placeholderTextColor={Colors.gray}
              placeholder={"Номер телефона"}
              value={this.state.phone}
              onChange={this.phoneNumberChangeHandler}
              style={authStyle.input}
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              maxLength={18}
              clearButtonMode="while-editing"
              ref={(ref) => this.phoneRef = ref}/>
            <Text style={{color: '#A8A8A8', fontSize: 12, marginTop: 10}}>При авторизации или регистрации Вы соглашаетесь с </Text>
            <Text style={{fontSize: 14, color: Colors.lightGreen, lineHeight: 20}}>Политикой конфиденциальности</Text>
          </View>
          <View>
              <View>
                    <TouchableHighlight style={{backgroundColor: Colors.green, height: 40, justifyContent: 'center', borderRadius: 7}}>
                        <Text style={{textAlign: 'center', color: Colors.white, fontSize: 18, fontWeight: '500'}}>Далее</Text>
                    </TouchableHighlight>
                </View>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text style={{color: Colors.gray, fontSize: 14, textAlign: 'center', textTransform: 'uppercase'}}>или</Text>
            <View style={{position: 'relative', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
              <View style={[authStyle.line]}></View>
              <Text style={{textAlign: 'center', fontSize: 14, fontWeight: '500', lineHeight: 14}}>Войти через соцсети</Text>
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
    )
  }
}

export const AuthStyle = StyleSheet.create({
  title: { textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: Colors.black },
  subTitle: { textAlign: 'center', color: '#A8A8A8', fontSize: 16 },
  container: { flex: 1, padding: 15, position: 'relative', backgroundColor: '#FFFFFF' },
  goBack: { position: 'absolute', left: 10, top: 15},
  titleWrapper: { marginTop: 40 },
})

const authStyle = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 7,
    fontSize: 14,
    backgroundColor: '#F2F2F4'
  },
  inputWrapper: { marginTop: 35, marginBottom: 35 },
  line: {width: '25%', borderBottomColor: '#DEDEDE', borderBottomWidth: 1, height: 1 },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 30 },
  socialWrapper: { width: '35%',flexDirection: 'row',justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderWidth: 1, borderColor: '#DEDEDE', borderRadius: 7 },
  socialText: {fontSize: 14, fontWeight: '500', color: Colors.black},
  
})