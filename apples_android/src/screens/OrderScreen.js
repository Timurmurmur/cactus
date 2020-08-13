import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppTextLight } from '../components/ui/AppTextLight';
import { ScrollView } from 'react-native-gesture-handler';



export const OrderScreen = ({ navigation }) => {
  const [content, setContent] = useState(noneOrder)

  const newContent = () => {
    setContent(inWork)
  }

  const goTo = () => {
    navigation.navigate('Каталог')
  }

  const noneOrder = () => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/order.png')} style={styles.image} />
        <AppTextLight style={styles.text}>У вас пока ещё нет закзов.</AppTextLight>
        <AppTextLight style={styles.text}>Давайте исправим это!{`\n`}Сделайте первую покупку прямо сейчас.</AppTextLight>
        <AppButton onPress={() => goTo()} style={styles.button}>Перейти в каталог</AppButton>
      </View>
    )
  }
  
  const inWork = () => {
    return (
      <ScrollView>
        <Image source={require('../../assets/in_work.png')} />
        <Image source={require('../../assets/in_work.png')} />
        <Image source={require('../../assets/in_work.png')} />
        <Image source={require('../../assets/in_work.png')} />
        <Image source={require('../../assets/in_work.png')} />
      </ScrollView>
    )
  }

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <AppButton style={styles.headerButtons} onPress={() => setContent(noneOrder)}>Все</AppButton>
        <AppButton style={styles.headerButtons} onPress={newContent}>В работе</AppButton>
        <AppButton style={styles.headerButtons} onPress={newContent}>Завершенные</AppButton>
        <AppButton style={styles.headerButtons} onPress={newContent}>Предзаказ</AppButton>
      </ScrollView>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 80,
    marginBottom: 40
  },
  text: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 20,
    textAlign: 'center'
  },
  headerButtons: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 0,
    width: 'auto',
  },
  button: {
    marginTop: 120
  }
});