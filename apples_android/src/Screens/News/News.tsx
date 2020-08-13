import React from 'react';
import {View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../common/colors';
import { FontAwesome } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';

export interface INewsProps {
  navigation: Navigation;
  route: Route;
}
interface INewsState {}

export class News extends React.Component<INewsProps, INewsState> {
  constructor(props: INewsProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{paddingVertical: 16}}>
          <NewsItem {...this.props}/> 
          <NewsItem {...this.props}/> 
          <NewsItem {...this.props}/> 
          <NewsItem {...this.props}/> 
        </View>
      </ScrollView>
    )
  }
}

interface INewsItemProps {
    navigation: Navigation;
    route: Route;
}

const NewsItem: React.FC<INewsItemProps> = ({ navigation }) => {
  return(
    <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, marginBottom: 16, elevation: 3}]}>
      <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => navigation.navigate('CurrentNews')}>
        <View style={{padding: 16, }}>
          <View style={{ flexDirection: 'row'}}>
          <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
            <View style={{width: '100%', padding: 10}}>
              <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
              <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
              <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
            </View>
          </LinearGradient>
          <View style={{paddingHorizontal: 15, width: '80%', justifyContent: 'space-between'}}>
            <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>22.02.2020</Text>
            <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium'}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
          </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модел...</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}