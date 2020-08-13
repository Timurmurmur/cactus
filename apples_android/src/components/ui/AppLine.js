import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppLine = ({ style }) => {

  return (
    <View style={{ ...styles.line, ...style }}></View>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#EBEBEB',
    width: 320,
    height: 0.5
  }
});