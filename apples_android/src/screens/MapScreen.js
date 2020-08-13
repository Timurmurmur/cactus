import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export const MapScreen = ({ route }) => {

  // console.log(route)
  const data = route.params
  const title = data.label
  const markers = data.markers

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
            title={title}
          />)
      })}
      </MapView>
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