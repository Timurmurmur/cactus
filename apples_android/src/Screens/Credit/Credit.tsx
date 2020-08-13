import React from 'react';
import { View, Text,ScrollView, Image,  StyleSheet } from 'react-native';
import { HeaderStyles } from '../../Components/Header/Header';
import { AntDesign, } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { Input } from '../../Components/Input/ResultInput';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation, Route } from '../../common/types';
import { Picker } from '@react-native-community/picker'

export interface ICreditProps {
  navigation: Navigation;
  route: Route;
}

interface ICreditState {
  
}

export class Credit extends React.Component<ICreditProps, ICreditState> {

  constructor(props: ICreditProps){
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
  }

  UNSAFE_componentWillUpdate(){
  }

  

  render() {
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={[HeaderStyles.wrapper]}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
            <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => this.props.navigation.goBack()}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>{this.props.route.params.title}</Text>
          </View>
        </View>
        <View style={creditStyles.container}>
          <View style={creditStyles.headerWrapper}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Image source={require('../../../assets/images/alphabankLogo.png')} style={{width: 100, height: 50}}/>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: COLOR.BLACK}}>по 15 475 ₴</Text>
                <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>переплата 0.01% в мес. = 0 ₴</Text>
              </View>
            </View>
            <View style={{borderWidth:1 ,borderColor: COLOR.GRAY, borderRadius: 7, position: 'relative', marginTop: 25, marginBottom: 10}}>
              <Text style={{position: 'absolute', fontSize: 12, color: COLOR.TEXT_GRAY, top: -10, left: 15, backgroundColor: COLOR.WHITE, paddingHorizontal: 5}}>Период</Text>
              <Picker mode={"dropdown"} style={{fontSize: 18}}>
                <Picker.Item label="4 мес." value="4 мес."/>
                <Picker.Item label="6 мес." value="6 мес."/>
                <Picker.Item label="10 мес." value="10 мес."/>
                <Picker.Item label="15 мес." value="15 мес."/>
              </Picker>
            </View>
            <Text style={{color: COLOR.TEXT_GRAY, fontSize: 14, lineHeight: 16, marginTop: 16}}>Уважаемый клиент! Напоминаем Вам, что формы нужно заполнять только на украинском языке. В противном случае банк не примет эту информацию.</Text>
          </View>
          <View style={creditStyles.titleWrapper}>
            <View>
              <Text style={{fontSize: 14, }}>Заполните инфоомацию о себе</Text>
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Input placeholder="Имя" value="" placeholderColor={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{marginBottom: 15}}>
            <Input placeholder="Фамилия" value="" placeholderColor={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{marginBottom: 15}}>
            <Input placeholder="Отчество" value="" placeholderColor={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{marginBottom: 15}}>
            <Input placeholder="Идентификационный код" value="" placeholderColor={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{marginBottom: 15}}>
            <Input placeholder="Телефон для связи банка с вами" value="" placeholderColor={COLOR.TEXT_GRAY}/>
          </View>
          <View>
            <View style={{borderWidth:1 ,borderColor: COLOR.GRAY, borderRadius: 3, position: 'relative', marginBottom: 10}}>
              <Picker mode={"dropdown"} itemStyle={{fontSize: 8}} style={{color: COLOR.TEXT_GRAY, fontSize: 8}}>
                <Picker.Item label="Вид трудоустройства" value="Вид трудоустройства"/>
              </Picker>
            </View>
          </View>
          <TouchableHighlight underlayColor={COLOR.LIGHT_GREEN} style={creditStyles.submitButton} onPress={e => this.props.navigation.navigate('Decoration')}>
            <Text style={{textAlign: 'center', color: COLOR.WHITE, textTransform: 'uppercase', fontFamily: 'Roboto-Medium'}}>Оформить</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

const creditStyles = StyleSheet.create({
  container: {paddingVertical: 10, paddingHorizontal: 16},
  headerWrapper: {paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY},
  titleWrapper: {marginVertical: 16},
  submitButton: {backgroundColor: COLOR.GREEN, paddingVertical: 10, borderRadius: 7, marginTop: 20}

})