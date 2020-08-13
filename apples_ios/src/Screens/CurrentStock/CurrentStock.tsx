import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { StocksItem } from '../Stocks/Stocks';
import { COLOR } from '../../common/color';
import Svg, { Path } from 'react-native-svg';
import { Header } from '../../components/Header/Header';



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
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: false, title: 'Акции', type: 'SMALL', basket: true, }}/>
      <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }}>
        <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, marginBottom: 16, borderBottomEndRadius: 7, borderBottomStartRadius: 7}]}>
          <Image source={require('../../../assets/images/stock.png')} style={{width: '100%', height: 120}}/>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 20, height: 20, backgroundColor: COLOR.TINT_COLOR, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
                <View><Text style={{color: COLOR.TINT_COLOR, fontSize: 12, fontWeight: '500'}}>СКИДКА</Text></View>
              </View>
              <View>
                <Text style={{color: COLOR.GRAY, fontSize: 12, fontWeight: '300'}}>c 01.03.2020 по 01.06.2020 </Text>
              </View>
            </View>
            <View style={{marginVertical: 15}}>
              <Text style={{color: COLOR.BLACK, fontSize: 20, fontWeight: '600'}}>
                {this.props.route.params.title}
              </Text>
            </View>
            <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 15}}>
              <Text style={{color: COLOR.GRAY, fontSize: 16, lineHeight: 20, fontWeight: '300' }}>
                {this.props.route.params.text}
              </Text>
            </View>
            <View style={{paddingTop: 15}}>
              <TouchableHighlight style={{justifyContent: 'center'}}>
                <>
                  <Text style={{fontSize: 16,color: COLOR.TINT_COLOR}}>Поделиться</Text>
                  <View style={{position: 'absolute', right: 0}}>
                  <Svg width="24" height="26" viewBox="0 0 24 26" fill="none">
                    <Path d="M16.551 18.4788C16.3223 18.7097 16.1255 18.9635 15.9553 19.2319L8.41512 14.6093C8.61453 14.1051 8.72755 13.5568 8.72755 12.9817C8.72755 12.4066 8.61454 11.8583 8.41556 11.3541L15.9575 6.76674C16.7321 7.99546 18.09 8.81431 19.6364 8.81431C22.0425 8.81431 24 6.83726 24 4.40715C24 1.97705 22.0425 0 19.6364 0C17.2304 0 15.2729 1.97705 15.2729 4.40715C15.2729 4.96069 15.3789 5.48867 15.5639 5.97698L8.01193 10.5706C7.23172 9.37005 5.88862 8.57456 4.36356 8.57456C1.95749 8.57456 0 10.5516 0 12.9817C0 15.4118 1.95749 17.3889 4.36356 17.3889C5.88862 17.3889 7.23129 16.5934 8.01149 15.3929L15.5622 20.0217C15.3746 20.5179 15.2724 21.0481 15.2724 21.5951C15.2724 22.7722 15.7263 23.8793 16.5505 24.7113C17.401 25.5703 18.5185 26 19.636 26C20.7535 26 21.871 25.5703 22.7215 24.7113C23.5458 23.8788 23.9996 22.7722 23.9996 21.5951C23.9996 20.4179 23.5458 19.3108 22.7215 18.4788C21.0201 16.76 18.2523 16.76 16.551 18.4788ZM19.6364 0.881431C21.5612 0.881431 23.1273 2.46316 23.1273 4.40715C23.1273 6.35115 21.5612 7.93288 19.6364 7.93288C17.7117 7.93288 16.1456 6.35115 16.1456 4.40715C16.1456 2.46316 17.7112 0.881431 19.6364 0.881431ZM4.36399 16.5074C2.43923 16.5074 0.873148 14.9257 0.873148 12.9817C0.873148 11.0377 2.43923 9.45599 4.36399 9.45599C6.28876 9.45599 7.85484 11.0377 7.85484 12.9817C7.85484 14.9257 6.28876 16.5074 4.36399 16.5074ZM22.1045 24.0882C20.7435 25.4628 18.529 25.4628 17.168 24.0882C16.5086 23.4223 16.1456 22.5364 16.1456 21.5951C16.1456 20.6537 16.5086 19.7678 17.168 19.1019C17.8487 18.4144 18.7423 18.0711 19.6364 18.0711C20.5305 18.0711 21.4242 18.4144 22.1049 19.1019C22.7642 19.7678 23.1273 20.6537 23.1273 21.5951C23.1273 22.5364 22.7642 23.4223 22.1045 24.0882Z" fill="#60B6FF"/>
                  </Svg>
                  </View>
                </>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View>
        <View style={{paddingHorizontal: 16 }}>
          <View style={{marginBottom: 15}}>
            <Text style={{fontSize: 16, color: COLOR.BLACK}}>Другие акции</Text>
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