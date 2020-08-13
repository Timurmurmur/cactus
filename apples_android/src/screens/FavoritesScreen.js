import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppTextLight } from '../components/ui/AppTextLight';

export const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/heart.png')} style={styles.image} />
      <AppTextLight style={styles.text}>Похоже в этом списке нет товаров. Самое{`\n`} время это исправить и добавить несколько{`\n`} крутых гаджетов!</AppTextLight>
      <AppButton onPress={() => navigation.navigate('Каталог')}>Перейти в каталог</AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40
  },
  text: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 200,
    textAlign: 'center'
  }
});