import React from 'react';
import {View, Text,ScrollView, Image, TouchableHighlight, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Route, Navigation } from '../../common/types';
import Colors from '../../constants/Colors';
import { SafeAreaView } from 'react-navigation';
import { ArrowLeft, ArrowRight } from '../../Components/Icons/Icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';

export interface IBonusProps {
  route: Route;
  navigation: Navigation;
}
interface IBonusState {
  modal: boolean;
}

export class Bonus extends React.Component<IBonusProps, IBonusState> {
  constructor(props: IBonusProps){
    super(props);

    this.state = {
      modal: false,
    }
  }

  modalVisibilityHandler = (e: any) => {
    let newState;
    const { modal } = this.state;
    
    if(modal) {
      newState = false;
    } else {
      newState = true;
    }

    this.setState({
      modal: newState
    })
  }



  render() {

    const bonus = true;

    return(
      <>
      <SmallHeader title="Мои бонусы" back {...this.props}/>
      <ScrollView style={{backgroundColor: '#F9F9F9'}}>
        <View style={{padding: 16}}>
          <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 16}}>
            { bonus ? 
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, paddingRight: 16}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Покупок</Text>
                <Text style={{fontWeight: '500', fontSize: 16, color: Colors.gray}}>2</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, paddingRight: 16}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Покупок на сумму</Text>
                <Text style={{fontWeight: '500', fontSize: 16, color: Colors.gray}}>32 233 ₴</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, paddingRight: 16}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Бонусов начислено</Text>
                <Text style={{fontWeight: '500', fontSize: 16, color: Colors.gray}}>322</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12, paddingRight: 16}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Бонусов потрачено</Text>
                <Text style={{fontWeight: '500', fontSize: 16, color: Colors.gray}}>0</Text>
              </View>
            </View> : 
            <View style={{paddingVertical: 46, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: .5, borderBottomColor: '#EBEBEB', backgroundColor: Colors.white}}>
              <View><Image source={require('../../../assets/icons/emptyGift.png')} style={{width: 110, height: 105}}/></View>
              <View style={{paddingHorizontal: 30, marginTop: 40}}>
                <Text style={{textAlign: 'center', color: '#A8A8A8', fontSize: 16, fontWeight: '500'}}>У Вас пока нет бонусов, т.к Вы не совершили ни одной покупки.</Text>
              </View>
            </View>}
            <View style={{paddingVertical: 16, paddingRight: 16}}>
              <TouchableHighlight underlayColor={Colors.white} onPress={e => this.modalVisibilityHandler(e)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: Colors.lightGreen, fontSize: 16, fontWeight: '500',}}>Как получить бонусы?</Text>
                  <ArrowRight width={7} height={12} color={Colors.lightGreen}/>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontWeight: 'bold', marginBottom: 15, fontSize: 16, color: Colors.black}}>История начисления и списания бонусов</Text>
            { bonus ? 
            <View>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
              <BonusHistoryItem date={'14.04.2019'} descr={'Бонусы за первый заказ'} count={'+100'}/>
            </View> :
            <View style={[{ paddingHorizontal: 30, paddingVertical: 60, backgroundColor: Colors.white, borderRadius: 7}]}>
                <Text style={{textAlign: 'center',color: '#A8A8A8', fontSize: 16, fontWeight: '500'}}>У Вас пока нет бонусов, но вы не волнуйтесь! Бонусы можно получить за покупки или же во время акций. Следите за анонсами.</Text>
            </View>}
          </View>
          <Modal visible={this.state.modal} animationType="slide" transparent={false} onRequestClose={e => this.modalVisibilityHandler(e)}>
            <SafeAreaView style={{backgroundColor: Colors.green}}>
                <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
                    <ArrowLeft width={11} height={20} onPress={this.modalVisibilityHandler} color={Colors.white}/>
                    <View style={{width: '100%'}}>
                        <Text style={{textAlign: 'center', color: Colors.white, fontWeight: 'bold', fontSize: 20}}>Как получить бонусы</Text>
                    </View>
                </View>
                <View style={{backgroundColor: Colors.white}}>
                    <View>
                        <Text style={{padding: 16, fontWeight: '500', color: Colors.black, fontSize: 16}}>
                        Бонусы начисляются в размере 1% от суммы успешного заказа без возврата. Бонусами можно оплатить до 50% устройств.{`\n\n`}
                        Бонусы будут начисляться после покупок на зарегистрированную карту участника программы лояльности, которая соответствует номеру телефона. Используйте накопленные бонусы как персональную скидку!
                        </Text>
                    </View>
                </View>

            </SafeAreaView>
          </Modal>
        </View>
      </ScrollView>
      </>
    )
  }
}

const BonusHistoryItem = ({ date, descr, count }: any) => {
    return(
        <View style={[{ marginBottom: 16, backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 16 }]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: .5, borderBottomColor: '#EBEBEB',paddingVertical: 12, paddingRight: 15}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Дата</Text>
                <Text style={{color: Colors.gray, fontWeight: '500', fontSize: 16}}>{date}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: .5, borderBottomColor: '#EBEBEB',paddingVertical: 12, paddingRight: 15}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Описание</Text>
                <Text style={{color: Colors.gray, fontWeight: '500', fontSize: 16}}>{descr}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingRight: 15}}>
                <Text style={{fontWeight: '600', fontSize: 16, color: Colors.black}}>Начислено бонусов</Text>
                <Text style={{color: Colors.gray, fontWeight: '500', fontSize: 16}}>{count}</Text>
            </View>
        </View>
    )
}