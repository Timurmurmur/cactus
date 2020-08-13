import React from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Navigation, Route } from '../../common/types';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StocksItem } from '../Stocks/Stocks';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

export interface INotificationProps {
  navigation: Navigation;
  route: Route;
}
interface INotificationState {}

export class Notification extends React.Component<INotificationProps, INotificationState> {
  constructor(props: INotificationProps){
    super(props);

    this.state = {}
  }

  // componentDidMount() {
  //   this.props.navigation.addListener('tabPress', (e: any) => {
  //       RootContext.navigation.setOptions({
  //           headerTitle: <Logo />
  //       });
  //   });
  // }

  render() {
    const exact = true;

    return(
        <>
        <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'уведомления', type: 'SMALL', basket: true, }}/>
        { exact ? 
            <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
                <View style={{padding: 16}}>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                    <StocksItem navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        : 
        <View style={{ flex: 1, paddingBottom: 30, backgroundColor: COLOR.WHITE }}>
        <View style={{flex: 1,paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="notifications" size={120} color={'#EBEBEB'}/>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <Text style={{textAlign: 'center', color: COLOR.GRAY, fontWeight: '300', fontSize: 16}}>Для того, чтобы получать уведомления, активируйте их</Text>
        </View>
        <View style={{flex: 1,paddingHorizontal: 16, justifyContent: 'flex-end'}}>
          {/* <Button styles={{backgroundColor: COLOR.TINT_COLOR}} title="Активировать" textStyle={{textTransform: 'uppercase', color: COLOR.WHITE}}></Button> */}
          <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, paddingVertical: 12, borderRadius: 3}}>
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: COLOR.WHITE}}>Активировать</Text>
          </TouchableHighlight>
        </View>
      </View>}
      </>
    )
  }
}