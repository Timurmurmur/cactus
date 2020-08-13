import React from 'react';
import {View, Text,ScrollView, Image, TouchableHighlight, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Route, Navigation } from '../../common/types';
import { SafeAreaView } from 'react-navigation';
import { ArrowLeft, ArrowRight } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

export interface IBonusProps {
  route: Route;
  navigation: Navigation;
}
interface IBonusState {
}

export class Bonus extends React.Component<IBonusProps, IBonusState> {
  constructor(props: IBonusProps){
    super(props);

    this.state = {
    }
  }


  render() {
    const bonus = true;

    return(
      <>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Мои бонусы', type: 'SMALL', basket: true, }}/>
      <ScrollView style={{backgroundColor: '#F9F9F9'}}>
        <View style={{padding: 16}}>
          <View style={{backgroundColor: COLOR.WHITE, borderRadius: 3, paddingHorizontal: 16}}>
            { bonus ? 
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12,}}>
                <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Покупок</Text>
                <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.GRAY}}>2</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, }}>
                <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Покупок на сумму</Text>
                <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.GRAY}}>32 233 ₴</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, }}>
                <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Бонусов начислено</Text>
                <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.GRAY}}>322</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12,}}>
                <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Бонусов потрачено</Text>
                <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.GRAY}}>0</Text>
              </View>
            </View> : 
            <View style={{paddingVertical: 46, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: .5, borderBottomColor: '#EBEBEB', backgroundColor: COLOR.WHITE}}>
              <View><Image source={require('../../../assets/icons/emptyGift.png')} style={{width: 110, height: 105}}/></View>
              <View style={{paddingHorizontal: 30, marginTop: 40}}>
                <Text style={{textAlign: 'center', color: '#A8A8A8', fontSize: 16, fontWeight: '300'}}>У Вас пока нет бонусов, т.к Вы не совершили ни одной покупки.</Text>
              </View>
            </View>}
            <View style={{paddingVertical: 16}}>
              <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => {this.props.navigation.navigate('BonusInfo')}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: COLOR.TINT_COLOR, fontSize: 16, }}>Как получить бонусы?</Text>
                  <ArrowRight width={7} height={14} color={COLOR.TINT_COLOR}/>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontWeight: '600', marginBottom: 15, fontSize: 16, color: COLOR.BLACK}}>История начисления и списания бонусов</Text>
            { bonus ? 
            <View>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
            </View> :
            <View style={[{ paddingHorizontal: 30, paddingVertical: 60, backgroundColor: COLOR.WHITE, borderRadius: 7}]}>
                <Text style={{textAlign: 'center',color: COLOR.GRAY, fontSize: 16, fontWeight: '300', lineHeight: 20}}>У Вас пока нет бонусов, но вы не волнуйтесь! Бонусы можно получить за покупки или же во время акций. Следите за анонсами.</Text>
            </View>}
          </View>
        </View>
      </ScrollView>
      </>
    )
  }
}

export const BonusInfo: React.FC = ({ navigation }: any) => {
  return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={{height: 60, backgroundColor: COLOR.WHITE, paddingHorizontal: 16, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
            <ArrowLeft width={11} height={20} onPress={e => navigation.goBack()} color={COLOR.BLACK}/>
            <View style={{width: '100%'}}>
                <Text style={{textAlign: 'center', color: COLOR.BLACK, fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase'}}>Как получить бонусы</Text>
            </View>
        </View>
        <View style={{backgroundColor: COLOR.WHITE}}>
            <View>
                <Text style={{padding: 16, fontWeight: '300', color: COLOR.BLACK, fontSize: 16}}>
                Бонусы начисляются в размере 1% от суммы успешного заказа без возврата. Бонусами можно оплатить до 50% устройств.{`\n\n`}
                Бонусы будут начисляться после покупок на зарегистрированную карту участника программы лояльности, которая соответствует номеру телефона. Используйте накопленные бонусы как персональную скидку!
                </Text>
            </View>
        </View>
      </ScrollView>
  )
}

const BonusHistoryItem = ({ date, descr, count }: any) => {
    return(
      <View style={[{ marginBottom: 16, backgroundColor: COLOR.WHITE, borderRadius: 3, paddingLeft: 16 }]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: .5, borderBottomColor: '#EBEBEB',paddingVertical: 12, paddingRight: 15}}>
              <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Дата</Text>
              <Text style={{color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>{date}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: .5, borderBottomColor: '#EBEBEB',paddingVertical: 12, paddingRight: 15}}>
              <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Описание</Text>
              <Text style={{color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>{descr}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingRight: 15}}>
              <Text style={{ fontSize: 16, color: COLOR.BLACK, }}>Начислено бонусов</Text>
              <Text style={{color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>{count}</Text>
          </View>
      </View>
    )
}