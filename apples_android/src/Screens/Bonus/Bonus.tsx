import React from 'react';
import {View, Text,ScrollView, Image, TouchableHighlight, Modal} from 'react-native';
import { commonstyles } from '../../common/styles';
import { COLOR } from '../../common/colors';
import { AntDesign } from '@expo/vector-icons';
import { HeaderStyles } from '../../Components/Header/Header';
import { StackHeader } from '../../Components/Header/StackHeader';
import { Route, Navigation } from '../../common/types';

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
      <ScrollView>
        <StackHeader title={this.props.route.params.title} {...this.props}/>
        <View style={{padding: 16}}>
          <View style={[commonstyles.shadow]}>
            { bonus ? 
            <View>
              <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <Text>Покупок</Text>
                <Text>2</Text>
              </View>
              <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <Text>Покупок на сумму</Text>
                <Text>32 233 ₴</Text>
              </View>
              <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <Text>Бонусов начислено</Text>
                <Text>322</Text>
              </View>
              <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <Text>Бонусов потрачено</Text>
                <Text>2</Text>
              </View>
            </View> : 
            <View style={{paddingVertical: 46, justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
              <View><Image source={require('../../../assets/icons/emptyGift.png')} style={{width: 110, height: 105}}/></View>
              <View style={{paddingHorizontal: 30, marginTop: 40}}>
                <Text style={{textAlign: 'center', color: COLOR.TEXT_GRAY}}>У Вас пока нет бонусов, т.к Вы не совершили ни одной покупки.</Text>
              </View>
            </View>}
            <View style={{padding: 16}}>
              <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => this.modalVisibilityHandler(e)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{color: COLOR.LIGHT_GREEN, fontSize: 14}}>Как получить бонусы?</Text>
                  <AntDesign name="right" size={16} color={COLOR.LIGHT_GREEN}/>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontWeight: 'bold', marginBottom: 15}}>История начисления и списания бонусов</Text>
            { bonus ? 
            <View>
              <View style={[commonstyles.shadow, { marginBottom: 16 }]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Дата</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>14.04.2019</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Описание</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>Бонусы за первый заказ</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                  <Text>Начислено бонусов</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>+100</Text>
                </View>
              </View>
              <View style={[commonstyles.shadow, { marginBottom: 16 }]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Дата</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>14.04.2019</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Описание</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>Бонусы за первый заказ</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                  <Text>Начислено бонусов</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>+100</Text>
                </View>
              </View>
              <View style={[commonstyles.shadow, { marginBottom: 16 }]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Дата</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>14.04.2019</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
                  <Text>Описание</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>Бонусы за первый заказ</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 16}}>
                  <Text>Начислено бонусов</Text>
                  <Text style={{color: COLOR.TEXT_GRAY}}>+100</Text>
                </View>
              </View>
            </View> :
            <View style={[commonstyles.shadow, { paddingHorizontal: 30, paddingVertical: 60}]}>
            <Text style={{textAlign: 'center', color: COLOR.TEXT_GRAY}}>У Вас пока нет бонусов, но вы не волнуйтесь! Бонусы можно получить за покупки или же во время акций. Следите за анонсами.</Text>
          </View>}
          </View>
          <Modal visible={this.state.modal} animationType="slide" transparent={false} onRequestClose={e => this.modalVisibilityHandler(e)}>
            <View style={[HeaderStyles.wrapper]}>
              <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
                <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e: any) => this.modalVisibilityHandler(e)}/>
              </View>
              <View style={{flex: 5}}>
                <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>{'Как получить бонусы'}</Text>
              </View>
            </View>
            <View>
              <Text style={{padding: 16}}>
              Бонусы начисляются в размере 1% от суммы успешного заказа без возврата. Бонусами можно оплатить до 50% устройств.{`\n\n`}
              Бонусы будут начисляться после покупок на зарегистрированную карту участника программы лояльности, которая соответствует номеру телефона. Используйте накопленные бонусы как персональную скидку!
              </Text>
            </View>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}