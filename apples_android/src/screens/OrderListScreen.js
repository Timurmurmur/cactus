import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { BackedCard } from '../components/BackedCard';

export const OrderListScreen = () => {
  return (
    
      <ScrollView style={{ paddingHorizontal: 10}}>
        <BackedCard></BackedCard>
        <BackedCard></BackedCard>
        <BackedCard></BackedCard>
      </ScrollView>
    
  )
}

const styles = StyleSheet.create({})
