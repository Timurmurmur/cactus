import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AppButton } from './AppButton'
import { AppTextLight } from './AppTextLight'

export const AppCardNotifications = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        source={require('../../../assets/action.png')}
        style={{
          height: 132,
          width: '100%',
          resizeMode: 'contain',
          marginBottom: 16
        }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <AppButton
          image={require('../../../assets/icons/precent.png')}
          styleImage={{ width: 15, height: 15 }}
          style={{ backgroundColor: '#fff',paddingHorizontal: 0 }}
          styleText={{ color: '#60B6FF' }}
        >Скидка</AppButton>
        <AppTextLight>c 01.03.2020 по 01.06.2020 </AppTextLight>
      </View>
      <AppTextLight style={{ marginBottom: 16, paddingHorizontal: 16, fontSize: 12 }}>Успей приобрести новый iPhone 11 Pro Max по супер выгодной цене. Самый большой ассортимент и низ...</AppTextLight>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})
