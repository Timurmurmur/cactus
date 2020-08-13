import React from 'react';
import { StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import { DATA_NEWS } from '../../assets/data';
import { AppTextMedium } from '../components/ui/AppTextMedium';

export const FullNewsScreen = ({ route }) => {
  const item = route.params.item
  const img_full = item.full
  const id = item.id
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Image source={img_full} style={styles.imgFull} />
        <View>
          <AppTextMedium style={styles.title}>Другие новости:</AppTextMedium>
          {DATA_NEWS.map((item) => {
            if (item.id !== id) {
              return (<Image key={item.id} source={item.image} style={styles.img} />)
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    marginTop: 16,
  },
  imgFull: {
    width: Dimensions.get('window').width,
    height: 1100,
    marginBottom: 30
  },
  title: {
    fontSize: 14,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  img: {
    width: Dimensions.get('window').width,
    height: 180
  }
});