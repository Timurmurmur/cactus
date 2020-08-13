import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppTextRegular = props => <Text style={{...styles.default, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-regular',
    color: '#3A3A3C'
  }
})