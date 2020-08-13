import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { commonstyles } from '../../common/styles';
import { TextInput } from 'react-native-gesture-handler';
import { COLOR } from '../../common/colors';
import { Input } from '../Input/Input';
import { Ionicons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import { ShoppingCardIcon } from '../Icons/Icons';


interface IHeaderRouteProps extends Route{
  params: {
    title: string
  }
}
export interface IHeaderProps {
  title: string;
  navigation: Navigation;
  route: IHeaderRouteProps;
  previous: object | undefined;
}

interface IHeaderState {
  showSearch: boolean;
  title: string;
}

export class StackHeader extends React.Component<IHeaderProps, IHeaderState>{
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      showSearch: false,
      title: this.props.title.length > 17 ? this.props.title.slice(0, 15) + '...' : this.props.title
    }
  }

  componentDidMount() {
    
  }

  showSearchHandler = (e: any) => {
    const { showSearch } = this.state;
    let newState;
    if(showSearch){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      showSearch: newState
    })
  }

  render(){
    const { showSearch } = this.state;
    return(
      // <View style={[HeaderStyles.wrapper]}>
      //   
      //   <View style={{flexDirection: 'row',alignItems: 'center',paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between', height: 60}}>
      //     
      //     </View>
      //   </View>
      //   }
      // </View>
      <View style={{height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, backgroundColor: COLOR.GREEN, alignItems: 'center', width: '100%'}}>
      { showSearch ? 
          <>
            <View style={{ position: 'absolute', flexDirection: 'row', left: 16, right: 16, backgroundColor: COLOR.WHITE, zIndex: 1000, borderRadius: 3, height: 45, alignItems: 'center'}}>
              <AntDesign.Button name="arrowleft" size={28} iconStyle={{ color: COLOR.GREEN,  }} backgroundColor="transparent" underlayColor={COLOR.WHITE} onPress={(e: any) => this.showSearchHandler(e)}/>
              <Input placeholder="Поиск по товарам" styles={HeaderStyles.header_input} placeholderColor={COLOR.TEXT_GRAY}/>
            </View>
          </> :
          <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{ width: 40, marginRight: 20}}>
                { this.state.showSearch === undefined ? <Ionicons.Button name="ios-menu" size={40} iconStyle={{ color: COLOR.WHITE}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => {this.props.navigation.openDrawer()}}/>
                      :
                <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN} onPress={(e) => this.props.navigation.goBack()}/>}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold', letterSpacing: .5, textAlign: 'left'}}>{this.state.title}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', width: 80}}>
              <View style={{width: 40}}>
                <Feather name="search" size={25} style={{color: COLOR.WHITE}} onPress={this.showSearchHandler}/>
              </View>
              <View style={{position: 'relative', width: 40}}>
                <View style={{position: 'absolute',backgroundColor: COLOR.ORANGE, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, top: -5, right: 10}}>
                  <Text style={{fontSize: 10, color: COLOR.WHITE, fontWeight: 'bold', fontFamily: 'Roboto'}}>3</Text>
                </View>
                <ShoppingCardIcon color={"#fff"} width={25} height={25} onPress={(e) => { this.props.navigation.navigate("MainNavigation", { screen: "BasketNavigation", initial: false })}} underlayColor={'transparent'}/>
              </View>
            </View>
          </>
      }
      </View>
    )
  }
}

export const HeaderStyles = StyleSheet.create({
  wrapper: { 
    backgroundColor: COLOR.GREEN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    position: 'relative',
    width: '100%'
  },
  header_input: {
    backgroundColor: COLOR.WHITE, 
    color: COLOR.TEXT_GRAY,
    zIndex: 100,
    
  }
})