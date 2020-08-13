import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { AppTextMedium } from './ui/AppTextMedium';
import { color } from 'react-native-reanimated';


export const CheckBoxSort = ({ label, onPress, active }) => {
  const[checked, setChecked] = useState(false)

  return (
    <TouchableOpacity onPress={() => setChecked(!checked)}>
      <View style={styles.wrapper}>
        <AppTextMedium style={checked ? { color: '#60B6FF', fontSize: 16, marginLeft: 12 } : { color: '#3A3A3C', fontSize: 16, marginLeft: 12 }}>{label}</AppTextMedium>
        {/* {active && <Image style={{ ...styles.image }} source={require('../../assets/icons/arrow_checkd.png')} />} */}
        <CheckBox
          checkedIcon={<Image source={require('../../assets/icons/arrow_checkd.png')} style={styles.image} />}
          uncheckedIcon={null}
          checked={checked}
          containerStyle={{width:0, height:0}}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginLeft: 12,
  },
  image: {
    width: 17,
    height: 13
  }
})