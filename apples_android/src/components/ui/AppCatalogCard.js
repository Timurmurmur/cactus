import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export const AppCatalogCard = ({ onOpen, card, style }) => {

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onOpen}>
      <View style={{ ...styles.container, ...style }}>
        <Image style={styles.image} source={card} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 3,
    marginVertical: 5,
  },
});