import React from 'react';
import {View, Text, Image} from 'react-native';
import { StackHeader, HeaderStyles } from '../../Components/Header/StackHeader';
import { COLOR } from '../../common/colors';
import { Icons } from '../../common/icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { commonstyles } from '../../common/styles';
import { Ionicons } from '@expo/vector-icons';

export interface IFeedbackProps {}
interface IFeedbackState {}

export class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {
  constructor(props: IFeedbackProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View style={{}}>
        <View style={[HeaderStyles.wrapper, { paddingHorizontal: 16 }]}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
          <Ionicons.Button name="ios-menu" size={40} iconStyle={{ color: '#fff', marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => {this.props.navigation.openDrawer()}}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold', letterSpacing: .5}}>Служба поддержки</Text>
          </View>
        </View>
        <View>
          <View>
            <View style={{}}>
              <Text style={{fontSize: 14, color: COLOR.BLACK, fontWeight: 'bold', marginTop: 18, marginBottom: 10, paddingHorizontal: 16}}>Оформить заказ</Text>
              <View style={[{flexDirection: 'row', marginBottom: 20, padding: 15}, { elevation: 2, backgroundColor: COLOR.WHITE}]}>
                <View style={{marginTop: 10, marginRight: 15, alignItems: 'center'}}>
                  <FontAwesome5 name="phone" size={25} color={'#36D47F'} style={{transform: [{ rotate: '90deg'}]}}/>
                </View>
                <View>
                  <Text style={{fontSize: 26, fontFamily: 'Roboto-Medium', color: COLOR.BLACK}}>044 334 77 77</Text>
                  <Text style={{fontSize: 12, marginBottom: 10, color: COLOR.BLACK}}>Без выходных с 9:00 до 21:00</Text>
                  <View style={{marginBottom: 15}}>
                    <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={COLOR.BLUE} underlayColor={COLOR.GRAY} style={{fontSize: 12, padding: 12}}>Заказы в Telegram</FontAwesome5.Button>
                  </View>
                  <View>
                    <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={COLOR.BLUE} underlayColor={COLOR.GRAY} style={{fontSize: 12, padding: 12}}>Сервис в Telegram</FontAwesome5.Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}