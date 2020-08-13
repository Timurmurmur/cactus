import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import { StackHeader } from '../../Components/Header/StackHeader';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { Button } from '../../Components/Button/Button';
import { ItemCard } from '../../Components/ItemCard/ItemCard';


export interface ILikedProps {}
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
        <ScrollView>
          <StackHeader title={'Избранное'} {...this.props}/>
          { bol ? 
          <View style={{paddingVertical: 10,flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
            <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          </View>
          :
          <View style={{flex: 1, position: 'relative' }}>
            <View style={{paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
              <AntDesign name="heart" size={150} color={COLOR.TEXT_GRAY}/>
            </View>
            <View style={{paddingHorizontal: 30}}>
              <Text style={{textAlign: 'center', color: COLOR.TEXT_GRAY}}>Похоже в этом списке нет товаров. Самое время это исправить и добавить несколько крутых гаджетов!</Text>
            </View>
            <View style={{width: '100%', marginTop: 150, paddingHorizontal: 16}}>
              <Button styles={{backgroundColor: COLOR.GREEN}} title={'ПЕРЕЙТИ В КАТАЛОГ'} textStyle={{color: COLOR.WHITE}}></Button>
            </View>
          </View> }
        </ScrollView>
      </View>
    )
  }
}