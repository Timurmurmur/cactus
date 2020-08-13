import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const AppTextUppercase = props => {
  let text = props.children.toUpperCase()
  return <Text style={{ ...props.style }}>{text}</Text>
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-medium',
  }
})