import React from 'react';
import {View, Text, ScrollView, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import { Header } from '../../components/Header/Header';
import { COLOR } from '../../common/color';

export interface INewsListProps {
  navigation: Navigation;
  route: Route;
}
interface INewsListState {}

export class NewsList extends React.Component<INewsListProps, INewsListState> {
  constructor(props: INewsListProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Новости', type: 'DEFAULT', basket: true, }}/>
      <ScrollView style={{backgroundColor: '#FFF', paddingBottom: 10}}>
        <View style={{backgroundColor: COLOR.WHITE, paddingHorizontal: 16}}>
            <View style={[{borderRadius: 2, borderBottomColor: '#EBEBEB', borderBottomWidth: .5}]}>
              <NewsListItem {...this.props}/>
            </View>
            <View style={[{borderRadius: 2, borderBottomColor: '#EBEBEB', borderBottomWidth: .5}]}>
              <NewsListItem {...this.props}/>
            </View>
            <View style={[{borderRadius: 2}]}>
              <NewsListItem {...this.props}/>
            </View>
        </View>
      </ScrollView>
      </>
    )
  }
}

const NewsListItem = (props: any) => {
    return(
      <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => props.navigation.navigate('CurrentNews')}>
        <View style={{paddingVertical: 15, flexDirection: 'row', alignItems: 'center', overflow: 'hidden'}}>
          <View style={{width: '60%', paddingRight: 20}}>
              <View style={{ marginBottom: 10 }}>
                <Text style={{color: COLOR.GRAY, fontSize: 10, marginBottom: 8, fontWeight: '300'}}>22.02.2020</Text>
                <Text style={{color: COLOR.BLACK, fontSize: 14, fontWeight: '600',}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на вопросы</Text>
              </View>
              <View style={{}}>
                <Text style={{color: COLOR.GRAY, fontSize: 12, fontWeight: '300'}}>Аккумулятор любого ноутбука требует периодического пополнения энергозапаса. Не исключение и...</Text>
              </View>
          </View>
          <View style={{width: '40%'}}>
            <View>
              <ImageBackground resizeMode="cover" source={require('../../../assets/images/news2.png')} style={{width: '100%', height: 134, borderRadius: 7, overflow: 'hidden'}}/>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
}