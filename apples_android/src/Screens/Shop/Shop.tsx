import React from 'react';
import { View, Text, Image, TextInput, Modal, Dimensions, Animated, Easing } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { COLOR } from '../../common/colors';
import { AntDesign } from '@expo/vector-icons';
import { StackHeader } from '../../Components/Header/StackHeader';
import axios from 'axios';

export interface IShopProps {}

interface IShopState {
  location: any;
  show: boolean;
}

export class Shop extends React.Component<IShopProps, IShopState>{
  animatedValue: any;
  constructor(props: IShopProps){
    super(props);

    this.state = {
      location: [{
        latitude: 49.987786,
        longitude: 36.231700,
        longitudeDelta: 1,
        latitudeDelta: 1
      },
      {
        latitude: 49.946104,
        longitude: 36.260697,
        longitudeDelta: 1,
        latitudeDelta: 1
      }],
      show: false,
    }
  }

  UNSAFE_componentWillMount(){
    this.animatedValue = new Animated.Value(0);
  }

  touchHandler = (e: any) => {
    const { show } = this.state; 
    if (e.nativeEvent.pageY > 500 && !show){
      this.setState({
        show: true
      })
      this.openItem();
    } else if( e.nativeEvent.pageY < 500 && show) {
      this.setState({
        show: false
      });
      this.hideItem();
    }
  }

  hideItem = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease
    }).start()
  }

  openItem = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease
    }).start()
  }

  grandTouchHandler = (e: any) => {
    return true;
  }

  async componentDidMount(){
    // let myLocation = await Location.getCurrentPositionAsync();
    // let resp = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=41.13694,-73.359778&destination=41.13546,-73.35997&mode=driver&sensor=true&key=AIzaSyAOr2st31-EF0qlUhk38KM0nv_kIkkLnLY`)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
    // console.log(myLocation)
  }

  render() {

    const animatedStyle = { height: this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: ['12%', '90%']
    }), overflow: 'hidden' }

    if(this.state.location === ''){
      return(<Text>Loading</Text>)
    } else {
      const { location } = this.state;
      return(
        <View style={{position: 'relative', flex: 1}}>
          <StackHeader previous={{}} title="Карта" {...this.props}/>
          <MapView 
          provider={PROVIDER_GOOGLE}
          region={location[0]}
          style={{width: '100%', height: '100%'}}>
            { location.map((el: any, index: any) => (
              <Marker coordinate={el} key={index}>
                <View>
                  <Image source={require('../../../assets/icons/mapMarker.png')} style={{width: 50, height: 60}}/>
                </View>
              </Marker>
            ))}
              <Polyline  coordinates={this.state.location}/>
          </MapView>
          <Animated.View  style={[{ bottom: 0, position: 'absolute', backgroundColor: COLOR.WHITE, width: '100%'},animatedStyle]}>
            <View style={[{padding: 16, zIndex: 1,borderTopLeftRadius: 14, borderTopRightRadius: 14, position: 'relative', minHeight: 100,}]} onMoveShouldSetResponder={e => this.touchHandler(e)} onResponderMove={e => this.touchHandler(e)} >
              <View style={{width: '100%', alignItems: 'center', marginBottom: 10}} >
                <View style={{width: 36, height: 5, backgroundColor: COLOR.TEXT_GRAY, borderRadius: 5}}></View>
              </View>
              <View style={{position: 'relative'}}>
                { this.state.show ? 
                <AntDesign style={{position: 'absolute', left: 15, top: 14, zIndex: 100}} color={COLOR.TEXT_GRAY} name="arrowleft" size={20}/>
                : 
                <AntDesign style={{position: 'absolute', left: 15, top: 14, zIndex: 100}} color={COLOR.TEXT_GRAY} name="search1" size={20}/>}
                <TextInput style={{backgroundColor: '#F2F2F4', paddingVertical: 10, borderRadius: 7, paddingLeft: 40}} placeholderTextColor={COLOR.TEXT_GRAY} placeholder={"Поиск"} />
              </View>
            </View>
            <View>
              <View style={{padding: 16, flexDirection: 'row', alignItems: 'center', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <View style={{marginRight: 25}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <Text style={{fontSize: 16}}>пл. Павловская, 8</Text>
              </View>
              <View style={{padding: 18, flexDirection: 'row', alignItems: 'center', borderBottomColor: COLOR.GRAY, borderBottomWidth: 1}}>
                <View style={{marginRight: 25}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <Text style={{fontSize: 16}}>пр. Гагарина, 181б</Text>
              </View>
            </View>
          </Animated.View>
        </View>
      )
    }
    }
}