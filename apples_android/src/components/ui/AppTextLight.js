import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppTextLight = props => <Text style={{...styles.default, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-light',
    color: '#3A3A3C'
  }
})