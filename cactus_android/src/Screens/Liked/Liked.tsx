import React from 'react';
import {View, Text, ScrollView, Dimensions, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import Colors from '../../constants/Colors';
import { SmallHeader } from '../../Components/Header/SmallHeader';
import { Navigation } from '../../common/types';

export interface ILikedProps {
  navigation: Navigation;
}
interface ILikedState {}

export class Liked extends React.Component<ILikedProps, ILikedState> {
  constructor(props: ILikedProps){
    super(props);

    this.state = {}
  }

  showModalHandler = (e: any) => {
    console.log(1);
  }

  render() {
    const bol = true;


    return(
      <View style={{flex: 1}}>
          <SmallHeader title="Избранное" back {...this.props}/>
          { bol ? 
            <ScrollView>
                <View style={{paddingVertical: 16,flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) }  {...this.props}/>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) } {...this.props}/>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) } {...this.props}/>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) } {...this.props}/>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) } {...this.props}/>
                <ItemCard onPress={e => this.props.navigation.navigate('CatalogStackScreen', { screen: 'Phone', initial: false}) } {...this.props}/>
                </View>
            </ScrollView>
          :
          <View style={{flex: 1, position: 'relative' }}>
            <View style={{flex: 3}}>
                <View style={{paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name="heart" size={150} color={'#D8D8D8'}/>
                </View>
                <View style={{paddingHorizontal: 30}}>
                <Text style={{textAlign: 'center', color: '#A8A8A8', fontWeight: '500', fontSize: 16, }}>Похоже в этом списке нет товаров. Самое время это исправить и добавить несколько крутых гаджетов!</Text>
                </View>
            </View>
            <View style={{width: '100%', paddingHorizontal: 16, flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
                <TouchableHighlight style={{backgroundColor: Colors.green, paddingVertical: 12, borderRadius: 7}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: Colors.white}}>Перейт в каталог</Text>
                </TouchableHighlight>
            </View>
          </View> }
      </View>
    )
  }
}