import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';


export const IconRight = ({ onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ marginTop: 14}}>
        <Image
          source={require('../../assets/icons/shopping_backet.png')}
          style={{ width: 25, height: 24, marginRight: 19 }} />
        <Badge
          value='3'
          badgeStyle={{
            width: 16,
            height: 16,
            borderRadius: 10,
            backgroundColor: '#60B6FF',
          }}
          containerStyle={{
            position: 'relative',
            bottom: 15,
            left: 3,
          }}
          textStyle={{
            color: '#fff',
            fontSize: 10
          }}
          />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});