import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../common/colors';
import { Input } from '../Input/Input';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import { ShoppingCardIcon, SearchIcon } from '../Icons/Icons';

export interface IHeaderProps {
  navigation: Navigation;
  route: Route;
}

interface IHeaderState {}

export class Header extends React.Component<IHeaderProps, IHeaderState>{
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
  }

  render(){
    return(
      <View style={[HeaderStyles.wrapper]}>
        <View style={{ maxWidth: 35 }}>
          <Ionicons.Button name="ios-menu" size={40} iconStyle={{ color: COLOR.BLACK, marginRight: -5 }} backgroundColor="transparent" underlayColor={COLOR.TINT_COLOR} onPress={(e: any) => {this.props.navigation.openDrawer()}}/>
        </View>
        <View style={{ position: 'relative', width: '75%'}}>
          <View 
          style={{position: 'absolute', right: 15, top: 11, zIndex: 100}}>
            <SearchIcon width={16} height={16} color={COLOR.BLACK}/>
          </View>
          <Input placeholder="Поиск" styles={HeaderStyles.header_input} value="" onChange={(e) => { console.log(e) }} placeholderColor={"#8E8E93"}/>
        </View>
        <View  onTouchStart={(e) => { this.props.navigation.navigate("MainNavigation", { screen: "BasketNavigation" })}} style={{position: 'relative', width: 40}}>
          <View style={{position: 'absolute',backgroundColor: COLOR.TINT_COLOR, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 100, bottom: 0, right: 7}}>
            <Text style={{fontSize: 10, color: COLOR.WHITE, fontWeight: 'bold', fontFamily: 'Roboto'}}>3</Text>
          </View>
          <ShoppingCardIcon color={COLOR.BLACK} width={25} height={25} underlayColor={'transparent'}/>
        </View>
      </View>
    )
  }
}

export const HeaderStyles = StyleSheet.create({
  wrapper: { 
    backgroundColor: COLOR.WHITE,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  header_input: {
    backgroundColor: '#F7F7F7', 
    color: COLOR.BLACK, 
    width: '100%', 
    paddingVertical: 10, 
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3
  }
})