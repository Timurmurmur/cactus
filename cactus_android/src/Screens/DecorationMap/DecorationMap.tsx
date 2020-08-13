import React from 'react';
import { View, Text, Image, TextInput, Animated, Easing } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { SmallHeader } from '../../Components/Header/SmallHeader';

export interface IDeliveryMapProps {}

interface IDeliveryMapState {
  location: any;
  show: boolean;
}

export class DecorationMap extends React.Component<IDeliveryMapProps, IDeliveryMapState>{
  animatedValue: any;
  constructor(props: IDeliveryMapProps){
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
      show: false
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
    } else if(e.nativeEvent.pageY < 500 && show) {
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
    console.log(e);
    return true;
  }


  render() {
    const animatedStyle = { maxHeight: this.animatedValue.interpolate({
        inputRange: [0,1],
        outputRange: [72, 600]
      }), overflow: 'hidden', zIndex: 1000 }
  

    if(this.state.location === ''){
      return(<Text>Loading</Text>)
    } else {
      const { location } = this.state;
      return(
        <View style={{position: 'relative', flex: 1}}>
          <SmallHeader title="Магазины" back {...this.props}/>
          <MapView 
          provider={PROVIDER_GOOGLE}
          region={location[0]}
          style={{width: '100%', height: '100%'}}>
            { location.map((el: any, index: any) => (
              <Marker coordinate={el}>
                <View>
                  <Image source={require('../../../assets/icons/mapMarker.png')} style={{width: 50, height: 60}}/>
                </View>
              </Marker>
            ))}
          </MapView>
          <Animated.View  style={[{ bottom: 0, position: 'absolute', backgroundColor: Colors.white, width: '100%',  borderTopLeftRadius: 14, borderTopRightRadius: 14,},animatedStyle]}>
            <View style={[{paddingHorizontal: 16,paddingTop: 7, zIndex: 1,paddingBottom: 16 ,position: 'relative', borderBottomColor: '#EBEBEB', borderBottomWidth: .5,}]} onMoveShouldSetResponder={e => this.grandTouchHandler(e)} onResponderMove={e => this.touchHandler(e)} >
              <View style={{width: '100%', alignItems: 'center', marginBottom: 8}} >
                <View style={{width: 36, height: 5, backgroundColor: '#C4C4C4', borderRadius: 5}}></View>
              </View>
              <View style={{position: 'relative', justifyContent :'center'}}>
                <TextInput style={{backgroundColor: '#F2F2F4', paddingVertical: 10, borderRadius: 7, paddingHorizontal: 15}} placeholderTextColor={Colors.gray} placeholder={"Поиск"} />
                <AntDesign style={{position: 'absolute', right: 15, zIndex: 100}} color={Colors.gray} name="search1" size={20}/>
              </View>
            </View>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden'}}>
                <View style={{ paddingBottom: 13}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: .5, width: '100%', paddingBottom: 13}}>
                  <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden'}}>
                <View style={{ paddingBottom: 13}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: .5, width: '100%', paddingBottom: 13}}>
                  <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden'}}>
                <View style={{ paddingBottom: 13}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: .5, width: '100%', paddingBottom: 13}}>
                  <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden'}}>
                <View style={{ paddingBottom: 13}}>
                  <Image source={require('../../../assets/icons/cactus.png')} style={{width: 25, height: 25}}/>
                </View>
                <View style={{ borderBottomColor: '#EBEBEB', borderBottomWidth: .5, width: '100%', paddingBottom: 13}}>
                  <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      )
    }
    }
}