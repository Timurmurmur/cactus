import React from 'react';
import { View, ScrollView, Text, Image, ListView, FlatList, StyleSheet } from 'react-native';
import { HeaderStyles } from '../../Components/Header/Header';
import { AntDesign, } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { Route, Navigation } from '../../common/types';
import { commonstyles } from '../../common/styles';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

export interface ICreditListProps {
  route: Route;
  navigation: Navigation;
}

interface ICreditListState {}

export class CreditList extends React.Component<ICreditListProps, ICreditListState> {
  constructor(props: ICreditListProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ScrollView>
        <View style={{flex: 1}}>
        <View style={[HeaderStyles.wrapper]}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
            <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => this.props.navigation.goBack()}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>{this.props.route.params.title}</Text>
          </View>
        </View>
        <View style={{padding: 16}}>
          <View style={[commonstyles.shadow, creditStyles.wrapper]}>
            <View style={{ paddingVertical: 12, paddingHorizontal: 16}}>
              <View>
                <Text style={creditStyles.title}>МоноБанк; 4 мес</Text>
                <View style={creditStyles.logo}>
                  <Image source={require('../../../assets/images/monobankLogo.png')} style={{width: 100, height: 40}}/>
                </View>
              </View>
              <View style={pickerStyles.wrapper}>
                <Text style={pickerStyles.title}>Период</Text>
                <Picker mode={"dropdown"} style={{fontSize: 18}}>
                  <Picker.Item label="4 мес." value="4 мес."/>
                  <Picker.Item label="6 мес." value="6 мес."/>
                  <Picker.Item label="10 мес." value="10 мес."/>
                  <Picker.Item label="15 мес." value="15 мес."/>
                </Picker>
              </View>
            </View>
            <View style={creditStyles.priceWrapper}>
              <View style={{width: '60%', justifyContent: 'space-between'}}>
                <Text style={creditStyles.priceText}>по 15 475 ₴</Text>
                <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>переплата 0.01% в мес. = 0 ₴</Text>
              </View>
              <View style={{width: '40%'}}>
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => this.props.navigation.navigate('Credit')} style={{paddingVertical: 15, borderColor: COLOR.GREEN,borderWidth: 1 ,borderRadius: 7, width: '100%'}}>
                  <Text style={{textAlign: 'center', textTransform: 'uppercase', color: COLOR.GREEN}}>выбрать</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={[commonstyles.shadow, creditStyles.wrapper]}>
            <View style={{ paddingVertical: 12, paddingHorizontal: 16}}>
              <View>
                <Text style={creditStyles.title}>МоноБанк; 4 мес</Text>
                <View style={creditStyles.logo}>
                  <Image source={require('../../../assets/images/alphabankLogo.png')} style={{width: 100, height: 40}}/>
                </View>
              </View>
              <View style={pickerStyles.wrapper}>
                <Text style={pickerStyles.title}>Период</Text>
                <Picker mode={"dropdown"} style={{fontSize: 18}}>
                  <Picker.Item label="4 мес." value="4 мес."/>
                  <Picker.Item label="6 мес." value="6 мес."/>
                  <Picker.Item label="10 мес." value="10 мес."/>
                  <Picker.Item label="15 мес." value="15 мес."/>
                </Picker>
              </View>
            </View>
            <View style={creditStyles.priceWrapper}>
              <View style={{width: '60%', justifyContent: 'space-between'}}>
                <Text style={creditStyles.priceText}>по 15 475 ₴</Text>
                <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY}}>переплата 0.01% в мес. = 0 ₴</Text>
              </View>
              <View style={{width: '40%'}}>
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => this.props.navigation.navigate('Credit')} style={{paddingVertical: 15, borderColor: COLOR.GREEN,borderWidth: 1 ,borderRadius: 7, width: '100%'}}>
                  <Text style={{textAlign: 'center', textTransform: 'uppercase', color: COLOR.GREEN}}>выбрать</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
}

const pickerStyles = StyleSheet.create({
  wrapper: {borderWidth:1 ,borderColor: COLOR.GRAY, borderRadius: 7, position: 'relative', marginTop: 17, marginBottom: 10},
  title: {position: 'absolute', fontSize: 12, color: COLOR.TEXT_GRAY, top: -10, left: 15, backgroundColor: COLOR.WHITE, paddingHorizontal: 5},

});

const creditStyles = StyleSheet.create({
  wrapper: { borderRadius: 2, marginBottom: 20 },
  title: {fontSize: 16, fontWeight: 'bold'},
  logo: {marginTop: 7},
  priceWrapper: {padding: 16, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: COLOR.GRAY, alignItems: 'center'},
  priceText: {fontSize: 16, fontWeight: 'bold', color: COLOR.BLACK},

});