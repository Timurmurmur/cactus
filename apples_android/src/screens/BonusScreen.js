import React from 'react';
import { StyleSheet, ScrollView, View, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppTextLight } from '../components/ui/AppTextLight';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppLine } from '../components/ui/AppLine';

export const BonusScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerNavigation}>
          <Image style={styles.image} source={require('../../assets/bonus.png')} />
          <AppTextLight style={styles.text}>У Вас пока нет бонусов, т.к Вы не{`\n`} совершили ни одной покупки.</AppTextLight>
          <AppLine style={styles.line}></AppLine>
          <TouchableOpacity style={styles.wrapperTitle} onPress={console.log('pressed')}>
            <AppTextMedium style={styles.textTitle}>Как получить бонусы?</AppTextMedium>
            <Ionicons name="ios-arrow-forward" size={22} color="#60B6FF" />
          </TouchableOpacity>
        </View>
        <AppTextMedium style={styles.titleHistory}>История начисления и списания бонусов</AppTextMedium>
        <View style={styles.wrapperHistory}>
          <AppTextLight style={styles.textHistory}>У Вас пока нет бонусов, но вы не волнуйтесь! Бонусы можно получить за покупки или же во время акций. Следите за анонсами.</AppTextLight>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNavigation: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 45,
    marginTop: 13,
    marginBottom: 30
  },
  image: {
    marginBottom: 40
  },
  text: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
    marginBottom: 44
  },
  line: {
    backgroundColor: '#EBEBEB',
    width: 320,
    height: 0.5
  },
  wrapperTitle: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  textTitle: {
    fontSize: 14,
    color: '#60B6FF',
    letterSpacing: 2
  },
  titleHistory: {
    fontSize: 14,
    color: '#3A3A3C',
    marginBottom: 16,
    paddingHorizontal: 16
  },
  wrapperHistory: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingHorizontal: 21,
    paddingTop: 67,
    paddingBottom: 81,
    marginBottom: 10
  },
  textHistory: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center'
  }
});