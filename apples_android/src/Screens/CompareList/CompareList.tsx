import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { commonstyles } from '../../common/styles';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { Navigation, Route } from '../../common/types';
import { TouchableHighlight } from 'react-native-gesture-handler';

export interface ICompareListProps {
  navigation: Navigation;
  route: Route;
}
interface ICompareListState {}

export class CompareList extends React.Component<ICompareListProps, ICompareListState> {
  constructor(props: ICompareListProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{padding: 16}}>
          <TouchableHighlight onPress={e => this.props.navigation.navigate('Compare', { title: 'Смартфоны' })} underlayColor={COLOR.WHITE} style={[commonstyles.shadowCardItem, { borderRadius: 2, marginBottom: 20 }]}>
            <View>
              <View style={{padding: 16, borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Roboto-Medium', color: COLOR.BLACK }}>Смартфоны</Text>
                  <AntDesign name="close" color={COLOR.TEXT_GRAY} size={20}/>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                </View>
              </View>
              <View style={{padding: 16}}>
                <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY }}>В сравнении</Text>
                <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', marginTop: 5, color: COLOR.BLACK}}>3 шт</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={e => this.props.navigation.navigate('Compare', { title: 'Смартфоны'})} underlayColor={COLOR.WHITE} style={[commonstyles.shadowCardItem, { borderRadius: 2, marginBottom: 20 }]}>
            <View>
              <View style={{padding: 16, borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 14, fontFamily: 'Roboto-Medium',color: COLOR.BLACK }}>Смартфоны</Text>
                  <AntDesign name="close" color={COLOR.TEXT_GRAY} size={20}/>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 50, height: 67}}/>
                  </View>
                </View>
              </View>
              <View style={{padding: 16}}>
                <Text style={{fontSize: 12, color: COLOR.TEXT_GRAY }}>В сравнении</Text>
                <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', marginTop: 5, color: COLOR.BLACK}}>3 шт</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}