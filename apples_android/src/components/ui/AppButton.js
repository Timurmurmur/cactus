import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableNativeFeedback, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AppTextUppercase } from './AppTextUppercase';
import { AppTextMedium } from './AppTextMedium';

export const AppButton = ({ children, onPress, style, styleText, styleImage, icon, image, price }) => {

  return (
    <TouchableNativeFeedback onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, ...style }}>
        {icon && (<AntDesign name='shoppingcart' size={25} color={'#fff'}></AntDesign>)}
        {image && (<View><Image source={image} style={{...styles.image, ...styleImage}} /></View>)}
        <AppTextMedium style={{ ...styles.text, ...styleText, }}><AppTextUppercase>{children}</AppTextUppercase></AppTextMedium>
        {price && (<View><AppTextMedium style={{...styleText}}>{price}</AppTextMedium></View>)}
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  button: {
    // width: Dimensions.get('window').width > 400 ? 400 : 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#60B6FF',
  },
  image: {
    width: 26,
    height: 26,
    marginRight: 8
  },
  text: {
    color: '#fff',
    // marginLeft: 12
  }
})