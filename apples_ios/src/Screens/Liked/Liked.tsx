import React from 'react';
import {View, Text, ScrollView, Dimensions, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../common/color';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Header } from '../../components/Header/Header';
import { Navigation, Route } from '../../common/types';

export interface ILikedProps {
  navigation: Navigation;
  route: Route;
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
      <>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Избранное', type: 'SMALL', basket: true, }}/>
      <View style={{flex: 1, backgroundColor: COLOR.BACKGROUND}}>
          { bol ? 
            <ScrollView>
                <View style={{paddingVertical: 16,flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                  <ProductCard {...this.props}/>
                  <ProductCard {...this.props}/>
                  <ProductCard {...this.props}/>
                  <ProductCard {...this.props}/>
                  <ProductCard {...this.props}/>
                  <ProductCard {...this.props}/>
                </View>
            </ScrollView>
          :
          <View style={{flex: 1, position: 'relative' }}>
            <View style={{flex: 3}}>
                <View style={{paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
                <AntDesign name="heart" size={150} color={'#EBEBEB'}/>
                </View>
                <View style={{paddingHorizontal: 30}}>
                <Text style={{textAlign: 'center', color: COLOR.GRAY, fontWeight: '300', fontSize: 16, }}>Похоже в этом списке нет товаров. Самое время это исправить и добавить несколько крутых гаджетов!</Text>
                </View>
            </View>
            <View style={{width: '100%', paddingHorizontal: 16, flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
                <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, paddingVertical: 12, borderRadius: 3}}>
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: COLOR.WHITE}}>Перейт в каталог</Text>
                </TouchableHighlight>
            </View>
          </View> }
      </View>
      </>
    )
  }
}