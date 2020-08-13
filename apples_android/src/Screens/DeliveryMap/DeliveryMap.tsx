import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Input } from '../../Components/Input/ResultInput';
import { COLOR } from '../../common/colors';
import { HeaderStyles } from '../../Components/Header/Header';
import { AntDesign } from '@expo/vector-icons';

export interface IDeliveryMapProps {}

interface IDeliveryMapState {
  location: any;
}

export class DeliveryMap extends React.Component<IDeliveryMapProps, IDeliveryMapState>{
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
    }
  }

  async componentDidMount(){
    // let { status } = await Location.requestPermissionsAsync();
    // if(status !== 'granted'){
    //   console.log('not granted');
    // }

    // let location = await Location.getCurrentPositionAsync({});
    // this.setState({location})
    // 49.987786, 49.987786
  }

  render() {
    if(this.state.location === ''){
      return(<Text>Loading</Text>)
    } else {
      const { location } = this.state;
      return(
        <View style={{position: 'relative', flex: 1}}>
          <View style={[HeaderStyles.wrapper]}>
            <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
              <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN}/>
            </View>
            <View style={{flex: 5}}>
              <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>Город</Text>
            </View>
          </View>
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
          <View style={{ bottom: 0, position: 'absolute',width: '100%'}}>
            <View style={{padding: 16,backgroundColor: COLOR.WHITE, zIndex: 1, position: 'relative' }}>
              <AntDesign style={{position: 'absolute', left: 25, top: 30, zIndex: 100}} color={COLOR.TEXT_GRAY} name="search1" size={20}/>
              <TextInput style={{backgroundColor: COLOR.GRAY, paddingVertical: 10, borderRadius: 7, paddingLeft: 40}} placeholderTextColor={COLOR.TEXT_GRAY} placeholder={"Поиск"} />
            </View>
          </View>
        </View>
      )
    }
    }
}