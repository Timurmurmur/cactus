import React from 'react';
import { View, Dimensions} from 'react-native';


export const AppHorizontalLine = () => {
  return (
    <View style={{ width: Dimensions.get('window').width, height: 1, backgroundColor: '#EBEBEB', }}></View>
  )
}
