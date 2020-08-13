import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';
import { LinearGradient } from 'expo-linear-gradient';

export interface IStocksProps {}
interface IStocksState {}

export class Stocks extends React.Component<IStocksProps, IStocksState> {
  constructor(props: IStocksProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{padding: 16}}>
          <View onTouchStart={e => this.props.navigation.navigate('MainNavigation', { screen: 'CurrentStock' })} style={[commonstyles.shadow,{backgroundColor: COLOR.WHITE, borderRadius: 2,overflow: 'hidden', marginBottom: 16}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']}>
              <View style={{flexDirection: 'row', overflow: 'hidden', height: 120}}>
                <View style={{padding: 25, width: '45%'}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 15}}>Лучшая цена! </Text>
                  <Text style={{fontSize: 13,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
                </View>
                <View style={{width: '40%', position: 'relative'}}>
                  <View style={{position: 'absolute',bottom: -10,width: '100%',height: '200%',marginBottom: -50 ,alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, transform: [{ rotateZ: '20deg'}]}}>
                    <Image source={require('../../../assets/images/iphone.png')} style={{width: 100, height: 120}}/>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={{padding: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
                  <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
                </View>
                <View>
                  <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>еще 12 дней</Text>
                </View>
              </View>
              <View>
                <Text style={{color: '#828282', fontSize: 14}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортим...</Text>
              </View>
            </View>
          </View>
          <View style={[commonstyles.shadow,{backgroundColor: COLOR.WHITE, borderRadius: 2,overflow: 'hidden', marginBottom: 16}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']}>
              <View style={{flexDirection: 'row', overflow: 'hidden', height: 120}}>
                <View style={{padding: 25, width: '45%'}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 15}}>Лучшая цена! </Text>
                  <Text style={{fontSize: 13,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
                </View>
                <View style={{width: '40%', position: 'relative'}}>
                  <View style={{position: 'absolute',bottom: -10,width: '100%',height: '200%',marginBottom: -50 ,alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, transform: [{ rotateZ: '20deg'}]}}>
                    <Image source={require('../../../assets/images/iphone.png')} style={{width: 100, height: 120}}/>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={{padding: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
                  <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
                </View>
                <View>
                  <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>еще 12 дней</Text>
                </View>
              </View>
              <View>
                <Text style={{color: '#828282', fontSize: 14}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортим...</Text>
              </View>
            </View>
          </View>
          <View style={[commonstyles.shadow,{backgroundColor: COLOR.WHITE, borderRadius: 2,overflow: 'hidden', marginBottom: 16}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']}>
              <View style={{flexDirection: 'row', overflow: 'hidden', height: 120}}>
                <View style={{padding: 25, width: '45%'}}>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 15}}>Лучшая цена! </Text>
                  <Text style={{fontSize: 13,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
                </View>
                <View style={{width: '40%', position: 'relative'}}>
                  <View style={{position: 'absolute',bottom: -10,width: '100%',height: '200%',marginBottom: -50 ,alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, transform: [{ rotateZ: '20deg'}]}}>
                    <Image source={require('../../../assets/images/iphone.png')} style={{width: 100, height: 120}}/>
                  </View>
                </View>
              </View>
            </LinearGradient>
            <View style={{padding: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
                  <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
                </View>
                <View>
                  <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>еще 12 дней</Text>
                </View>
              </View>
              <View>
                <Text style={{color: '#828282', fontSize: 14}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортим...</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const stocksStyle = StyleSheet.create({
  stocksContainer: {}
})