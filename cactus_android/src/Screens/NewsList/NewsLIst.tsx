import React from 'react';
import {View, Text, ScrollView, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import Colors from '../../constants/Colors';
import { Header } from '../../Components/Header/Header';

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
      <Header title="Новости" back {...this.props}/>
      <ScrollView style={{backgroundColor: '#FFF', paddingBottom: 10}}>
        <View style={{backgroundColor: Colors.white, paddingHorizontal: 16}}>
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
            <TouchableHighlight underlayColor={Colors.gray} onPress={e => props.navigation.navigate('CurrentNews')}>
              <View style={{paddingVertical: 15,flexDirection: 'row', alignItems: 'center', overflow: 'hidden'}}>
                <View style={{width: '60%', paddingRight: 20}}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{color: '#A8A8A8', fontSize: 10, marginBottom: 8}}>22.02.2020</Text>
                        <Text style={{color: Colors.black, fontSize: 14, fontWeight: 'bold',}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на вопросы</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{color: '#A8A8A8', fontSize: 12, }}>Аккумулятор любого ноутбука требует периодического пополнения энергозапаса. Не исключение и...</Text>
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