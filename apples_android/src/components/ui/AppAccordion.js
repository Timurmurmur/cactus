import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { AppTextMedium } from './AppTextMedium'
import { AppTextLight } from './AppTextLight'


export const AppAccordion = ({ content, title, info, num }) => {
  const [visible, setVisible] = useState(true)
  
  return (

    <View style={{ paddingHorizontal: 16,  }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ backgroundColor: '#60B6FF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, color: '#fff', marginRight: 10 }}>{num}</Text>
          <View>
            <AppTextMedium style={{ fontSize: 16 }}>{title}</AppTextMedium>
            <AppTextLight style={{ fontSize: 12, color: '#8E8E93' }}>{info}</AppTextLight>
          </View>
        </View>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image source={ visible ?
            require('../../../assets/icons/arrow_down_round.png') :
            require('../../../assets/icons/arrow_up_round.png')
            } style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
      <View>
        {!visible && (content)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
