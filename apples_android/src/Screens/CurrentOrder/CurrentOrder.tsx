import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { commonstyles } from '../../common/styles';
import { StackHeader } from '../../Components/Header/StackHeader';
import { COLOR } from '../../common/colors';
import { Button } from '../../Components/Button/Button';

export class CurrentOrder extends React.Component{

  render(){
    return(
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <StackHeader navigation={this.props.navigation} route={this.props.route} title={'Заказ'} previous={{}}/>
        <View style={{paddingVertical: 16}}>
          <View style={[commonstyles.shadow, { padding: 16, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }]}>
            <Text style={{fontFamily: 'Roboto-Medium', color: COLOR.BLACK}}>Заказ № 243532243</Text>
            <Text style={{color: COLOR.BLACK}}>от 27.02.2020 14:02</Text>
          </View>
          <View style={[commonstyles.shadow, { marginBottom: 16 }]}>
            <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
              <View style={{width: '20%'}}><Image source={require('../../../assets/images/phone.png')} style={{width: 62, height: 85}}/></View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignItems: 'center'}}>
                <View style={{width: '60%'}}><Text style={{fontWeight: 'bold', color: COLOR.BLACK}}>Apple iPhone 11 64Gb Red (MWLV2)</Text></View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={{color: COLOR.TEXT_GRAY, marginBottom: 8}}>1 шт</Text>
                  <Text style={{fontSize: 16, fontStyle: 'Roboto-Medium', color: COLOR.BLACK}}>29 699 ₴</Text>
                </View>
              </View>
            </View>
            <View style={{padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
              <View style={{width: '20%'}}><Image source={require('../../../assets/images/phone.png')} style={{width: 62, height: 85}}/></View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%', alignItems: 'center'}}>
                <View style={{width: '60%'}}><Text style={{fontWeight: 'bold'}}>Apple iPhone 11 64Gb Red (MWLV2)</Text></View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
                  <Text style={{color: COLOR.TEXT_GRAY, marginBottom: 8}}>1 шт</Text>
                  <Text style={{fontSize: 16, fontStyle: 'Roboto-Medium', color: COLOR.BLACK}}>29 699 ₴</Text>
                </View>
              </View>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: COLOR.GRAY,padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{color: COLOR.BLACK}}>Доставка: </Text>
              <Text style={{fontSize: 16, fontStyle: 'Roboto-Medium', color: COLOR.BLACK}}>200 ₴</Text>
            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: COLOR.GRAY,padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Text style={{color: COLOR.BLACK}}>Сумма заказа: </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>49 198 ₴</Text>
            </View>
          </View>
          <View style={[commonstyles.shadow, {padding: 16, marginBottom: 16}]}>
            <Text style={{fontSize: 16, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>Данные о покупателе</Text>
            <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>Александр Иванов, 0504456655</Text>
          </View>
          <View style={[commonstyles.shadow, {padding: 16, marginBottom: 16}]}>
            <Text style={{fontSize: 16, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>Доставка</Text>
            <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>экспресс-доставка курьером (Харьков)</Text>
          </View>
          <View style={[commonstyles.shadow, {padding: 16, marginBottom: 16}]}>
            <Text style={{fontSize: 16, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>Оплата</Text>
            <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>Наличными при получении</Text>
          </View>
          <View style={{marginVertical: 20}}>
            <Button title="Отменить заказ" styles={{backgroundColor: COLOR.GREEN, marginHorizontal: 20}} textStyle={{textTransform: 'uppercase', color: COLOR.WHITE}}></Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}