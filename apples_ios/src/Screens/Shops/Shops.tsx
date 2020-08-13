import React, { useState } from 'react';
import { View, Text, Image, TextInput, Animated, Easing } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../common/color';
import Backdrop from '../../components/Backdrop/Backdrop';
import { SearchIcon } from '../../components/Icons/Icons';
import { Header } from '../../components/Header/Header';
import { Navigation, Route } from '../../common/types';

export interface IDeliveryMapProps {
  navigation: Navigation;
  route: any;
}

interface IDeliveryMapState {
  location: any;
  show: boolean;
}

export class Shops extends React.Component<IDeliveryMapProps, IDeliveryMapState>{
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
    }
  }

  

  UNSAFE_componentWillMount(){
  }


  render() {
    if(this.state.location === ''){
      return(<Text>Loading</Text>)
    } else {
      const { location } = this.state;
      return(
        <>
        <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Магазины', type: 'SMALL', basket: false, }}/>
        <View style={{ flex: 1}}>
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
          <MapBackDrop></MapBackDrop>
        </View>
        </>
      )
    }
    }
}


const MapBackDrop = () => {
  const [show, setShow] = useState(true)
  const touchHandler = (e: any) => {
    setShow(true);
  }

  return(
    <Backdrop closedHeight={85} handleOpen={touchHandler} visible={show}>
      <View style={[{zIndex: 1,position: 'relative', borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingBottom: 10, paddingHorizontal: 16}]}>
        <View style={{position: 'relative', justifyContent :'center'}}>
          <TextInput style={{backgroundColor: '#F7F7F7', paddingVertical: 15, borderRadius: 3, paddingHorizontal: 15, fontWeight: '300'}} placeholderTextColor={COLOR.GRAY} placeholder={"Поиск"}/>
          <View  style={{position: 'absolute', right: 15, zIndex: 100}}>
            <SearchIcon color={COLOR.GRAY} width={16} height={16}/>
          </View>
        </View>
      </View>
      <View style={{}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden', padding: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
          <View style={{  }}>
            <Image source={require('../../../assets/images/apples.png')} style={{width: 22, height: 26}}/>
          </View>
          <View style={{ width: '100%', }}>
            <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden', padding: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
          <View style={{  }}>
            <Image source={require('../../../assets/images/apples.png')} style={{width: 22, height: 26}}/>
          </View>
          <View style={{ width: '100%', }}>
            <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden', padding: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
          <View style={{  }}>
            <Image source={require('../../../assets/images/apples.png')} style={{width: 22, height: 26}}/>
          </View>
          <View style={{ width: '100%', }}>
            <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, overflow: 'hidden', padding: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
          <View style={{  }}>
            <Image source={require('../../../assets/images/apples.png')} style={{width: 22, height: 26}}/>
          </View>
          <View style={{ width: '100%', }}>
            <Text style={{ fontSize: 16, paddingLeft: 20 }}>пл. Павловская, 8</Text>
          </View>
        </View>
        
        
      </View>
    </Backdrop>
  )
}