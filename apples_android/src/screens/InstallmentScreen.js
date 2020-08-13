import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { BankCard } from '../components/BankCard'

export const InstallmentScreen = ({ navigation }) => {

  const items = [
    { label: '4 мес.', value: '4 мес.' },
    { label: '6 мес.', value: '6 мес.' },
    { label: '12 мес.', value: '12 мес.' },
    { label: '15 мес.', value: '15 мес.' },
  ]

  const img = require('../../assets/alfa_bank.png')

  return (
    <ScrollView style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
      <BankCard image={img} onPress={() => navigation.navigate('Bank', { name: 'Альфа банк;', period: '4 мес.', img: img, items: items })} items={items} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
