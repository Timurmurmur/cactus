import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { AppMainCard } from '../components/ui/AppMainCard';
import { DATA_CATALOG, DATA_ITEMS, DATA_ITEM, DATA_SCROLL, DATA_NEWS } from '../../assets/data';
import { AppSliderBox } from '../components/ui/AppSliderBox';
import { AppButton } from '../components/ui/AppButton';
import { AppTextUppercase } from '../components/ui/AppTextUppercase';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppTextLight } from '../components/ui/AppTextLight';


export const MainScreen = ({ navigation }) => {

  const img = DATA_SCROLL.images

  return (
    <View style={styles.container}>
      <ScrollView>
        <AppSliderBox images={img} sliderBoxHeight={200} />
        <AppMainCard
          title={'Каталог'}
          data={DATA_CATALOG}
          onPress={() => navigation.navigate('Каталог')}
          style={styles.image}
        ></AppMainCard>
        <AppMainCard
          title={'Новинки'}
          data={DATA_ITEM}
          onPress={() => navigation.navigate('Каталог')}
        ></AppMainCard>
        <AppMainCard
          title={'Лидеры продаж'}
          data={DATA_ITEM}
          onPress={() => navigation.navigate('Каталог')}
        ></AppMainCard>
        <AppMainCard
          title={'Акции'}
          data={DATA_NEWS}
          style={styles.imageBig}
          onPress={() => navigation.navigate('Акции')}
        ></AppMainCard>
        <AppMainCard title={'Скоро в продаже'} data={DATA_ITEM}></AppMainCard>
        <AppMainCard 
        title={'Новости'} 
        data={DATA_NEWS} 
        style={styles.imageBig}
        onPress={() => navigation.navigate('Новости')}
        ></AppMainCard>


        <View style={{ backgroundColor: '#fff', marginVertical: 15, padding: 16 }}>
          <AppTextUppercase style={styles.textTitle}>Контакты</AppTextUppercase>
          <AppTextLight style={styles.textAdress}>г.Харьков, ул. Сумская 22</AppTextLight>
          <View style={styles.textWrapper}>
            <AppTextLight style={styles.textAdress}>С 9-00 до 21-00</AppTextLight>
            <AppTextLight style={styles.textAdress}>Без перерывов и выходных</AppTextLight>
          </View>
          <AppTextMedium style={{ fontSize: 16, color: '#3A3A3C', marginTop: 25 }}>Есть вопросы?</AppTextMedium>
          <AppButton style={{ width: 230, marginTop: 12 }}>Отправить письмо</AppButton>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <AppTextLight style={{ fontSize: 12, paddingBottom: 16, color: '#3A3A3C' }}>© Интернет-магазин Cactus - гаджеты и аксессуары 2020</AppTextLight>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
  },
  image: {
    marginRight: 5
  },
  imageBig: {

  },
  textTitle: {
    fontSize: 16,
    color: '#3A3A3C',
    letterSpacing: 2
  },
  textWrapper: {
    marginTop: 8
  },
  textAdress: {
    fontSize: 14,
    marginTop: 12
  }
});
