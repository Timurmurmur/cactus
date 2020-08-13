import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { AppTextMedium } from './ui/AppTextMedium';
import { AppLine } from './ui/AppLine';
import { AppButton } from './ui/AppButton';

export const BankCard = ({onPress, items, image}) => {

  // const items = [
  //   { label: '4 мес.', value: '4 мес.' },
  //   { label: '6 мес.', value: '6 мес.' },
  //   { label: '12 мес.', value: '12 мес.' },
  //   { label: '15 мес.', value: '15 мес.' },
  // ]

  return (
    <View style={{ backgroundColor: 'white', marginVertical: 8 }}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <AppTextMedium style={{ fontSize: 16 }}>Альфа Банк; 4 мес</AppTextMedium>
          <Image source={image} style={{ width: 69, height: 39 }} />
          <View style={{ position: 'relative', top: 20 }}>
            <Text style={styles.titleSelect}>Период</Text>
            <View style={styles.containerSelect}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={items}
                useNativeAndroidPickerStyle={false}
              />
            </View>
          </View>
        </View>
      </View>
      <AppLine style={{ marginTop: 30, width: '100%' }} />
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View>
            <AppTextMedium style={{ fontSize: 16 }}>по 15 475 ₴</AppTextMedium>
            <AppTextMedium style={{ fontSize: 12, color: '#8E8E93' }}>переплата 0.01% в мес. = 0 ₴</AppTextMedium>
          </View>
          <AppButton
            onPress={onPress}
            style={{
              width: '40%',
              paddingHorizontal: 0,
              paddingVertical: 12
            }}>Выбрать</AppButton>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  containerSelect: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 3,
    backgroundColor: 'white',
    color: 'black',
  },
  titleSelect: {
    position: 'absolute',
    color: '#8E8E93',
    zIndex: 100,
    bottom: 51,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 12
  }
})
