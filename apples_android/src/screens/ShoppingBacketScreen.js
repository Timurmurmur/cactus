import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { BackedCard } from '../components/BackedCard';
import { AppButton } from "../components/ui/AppButton";
import { AppLine } from "../components/ui/AppLine";
import { AppTextMedium } from '../components/ui/AppTextMedium';



export const ShoppingBacketScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 10}}>
        <BackedCard />
        <BackedCard />
        <BackedCard />
        <BackedCard />
        <BackedCard />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerTitle}>
          <AppTextMedium style={{ fontSize: 16 }}>Итоговая сумма</AppTextMedium>
          <Text>49 198 ₴</Text>
        </View>
        <AppLine />
        <View style={styles.buttonsWrapper}>
          <AppButton
            style={{
              ...styles.button,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#60B6FF'
            }}
            styleText={{
              color: '#60B6FF'
            }}
            onPress={() => navigation.navigate('Installment')}
          >В кредит</AppButton>
          <AppButton style={styles.button}>Оформить</AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    width: Dimensions.get('window').width,
    position: 'relative',
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  footerTitle: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between'
  },
  button: {
    width: '48%'
  }

});