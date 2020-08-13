import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';

export const ShopScreen = ({ navigation }) => {

  const markers = [
    {
      latitude: 48.986552130506126,
      longitude: 34.22192382812501,
      title: '1',
    },
    {
      latitude: 49.986552130506176,
      longitude: 36.22192382812501,
      title: '2',
    },
    {
      latitude: 47.986552130506166,
      longitude: 35.22192382812501,
      title: '3',
    },
  ]

  const ItemMini = () => {
    return (
      <View style={{ height: 50, width: '100%', backgroundColor: '#000' }}>
        <Text>itemMini</Text>
      </View>
    )
  }
  const ItemFull = () => {
    return (
      <View style={{ width: Dimensions.get('window').width,
      height: Dimensions.get('window').height, backgroundColor: '#000' }}>
        <Text>itemFull</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        region={{
          latitude: 49.986552130506176,
          longitude: 36.22192382812501,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >{markers.map((el) => {
        const lat = el.latitude
        const long = el.longitude
        return (
          <Marker
            key={el.title} image={require('../../assets/marker.png')}
            coordinate={{
              latitude: lat,
              longitude: long,
            }}
            title={'Магазин Apple’s'}
          />)
      })}
      </MapView>
      <View>
        <SwipeUpDown
          itemMini={<ItemMini />} // Pass props component when collapsed
          itemFull={<ItemFull />} // Pass props component when show full
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          onMoveDown={() => console.log('down')}
          onMoveUp={() => console.log('up')}
          disablePressToShow={false} // Press item mini to show full
          style={{ backgroundColor: 'green', width: '100%', position: 'absolute', zIndex: 100 }} // style for swipe
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});