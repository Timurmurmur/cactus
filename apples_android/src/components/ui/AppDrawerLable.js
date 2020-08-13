import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const AppDrawerLable = ({ source, children }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginRight: 24
  },
  text: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    color: '#3A3A3C'
  }
});