import React from 'react';
import {View, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import { Navigation, Route } from '../../common/types';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import { StocksItem } from '../Stocks/Stocks';
import { Header } from '../../Components/Header/Header';
import { SmallHeader } from '../../Components/Header/SmallHeader';

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
        <SmallHeader back title="Уведомления" {...this.props}/>
        { exact ? 
            <ScrollView style={{backgroundColor: '#F7F7F7'}}>
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
        <View style={{ flex: 1, paddingBottom: 30 }}>
        <View style={{flex: 1,paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="notifications" size={120} color={'#D8D8D8'}/>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <Text style={{textAlign: 'center', color: '#D8D8D8'}}>Для того, чтобы получать уведомления, активируйте их</Text>
        </View>
        <View style={{flex: 1,paddingHorizontal: 16, justifyContent: 'flex-end'}}>
          {/* <Button styles={{backgroundColor: Colors.green}} title="Активировать" textStyle={{textTransform: 'uppercase', color: Colors.white}}></Button> */}
          <TouchableHighlight style={{backgroundColor: Colors.green, paddingVertical: 12, borderRadius: 7}}>
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '500', color: Colors.white}}>Активировать</Text>
          </TouchableHighlight>
        </View>
      </View>}
      </>
    )
  }
}