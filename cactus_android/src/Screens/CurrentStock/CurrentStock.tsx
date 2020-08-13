import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import Colors from '../../constants/Colors';
import { StocksItem } from '../Stocks/Stocks';
import { Header } from '../../Components/Header/Header';
import { SmallHeader } from '../../Components/Header/SmallHeader';



export interface ICurrentStockProps {
  route: Route;
  navigation: Navigation;
}

interface ICurrentStockState {
  title: string;
}

export class CurrentStock extends React.Component<ICurrentStockProps, ICurrentStockState> {
  constructor(props: ICurrentStockProps){
    super(props);

    this.state = {
      title: this.props.route.params.title
    }
  }

  componentDidMount() {
    const title = this.props.route.params.title.slice(0, 16) + '...';
    this.setState({
      title
    })
  }

  render(){
    return(
      <>
      <SmallHeader back title={this.state.title} {...this.props}/>
      <ScrollView style={{ backgroundColor: '#F7F7F7' }}>
        <View style={[{backgroundColor: Colors.white, borderRadius: 2, marginBottom: 16, borderBottomEndRadius: 7, borderBottomStartRadius: 7}]}>
          <LinearGradient colors={['#FF7C0A', '#EABD60']}>
            <View style={{flexDirection: 'row', overflow: 'hidden', height: 70}}>
              <View style={{width: '40%', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 17,fontWeight: 'bold', color: Colors.white, marginBottom: 5}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.white}}>от 19 949 грн</Text>
              </View>
              <View style={{width: '25%', position: 'relative'}}>
                <View style={{position: 'absolute',bottom: 0,width: '100%', height: '200%',marginBottom: -30 ,alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, transform: [{ rotateZ: '20deg'}]}}>
                  <Image source={require('../../../assets/images/iphone.png')} style={{width: 54, height: 63}}/>
                </View>
              </View>
              <View style={{justifyContent: 'center', width: '35%', alignItems: 'center'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.white }}>Лучшая цена! </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 20, height: 20, backgroundColor: Colors.tintColor, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: Colors.white, fontWeight: 'bold'}}>%</Text></View>
                <View style={{padding: 8, backgroundColor: Colors.lightGreen, borderRadius: 3}}><Text style={{color: Colors.white, fontSize: 10}}>СКИДКА</Text></View>
              </View>
              <View>
                <Text style={{color: Colors.gray, fontSize: 12}}>еще 12 дней</Text>
              </View>
            </View>
            <View><Text style={{color: Colors.gray, fontSize: 12}}>11.03.2020 - 11.04.2020</Text></View>
            <View style={{marginVertical: 15}}>
              <Text style={{color: Colors.black, fontSize: 20, fontWeight: 'bold'}}>
                {this.props.route.params.title}
              </Text>
            </View>
            <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 15}}>
              <Text style={{color: Colors.gray, fontSize: 16, lineHeight: 20 }}>
                {this.props.route.params.text}
              </Text>
            </View>
            <View style={{paddingTop: 15}}>
              <TouchableHighlight style={{justifyContent: 'center'}}>
                <>
                  <Text style={{fontSize: 16, fontWeight: '500', color: Colors.lightGreen}}>Поделиться</Text>
                  <View style={{position: 'absolute', right: 0}}>
                    <Entypo name="forward" size={20} color={Colors.lightGreen}/>
                  </View>
                </>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View>
        <View style={{padding: 10 }}>
          <View style={{marginBottom: 15}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: Colors.gray}}>Другие акции</Text>
          </View>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
        </View>
        </View>
      </ScrollView>
      </>
    )
  }
}