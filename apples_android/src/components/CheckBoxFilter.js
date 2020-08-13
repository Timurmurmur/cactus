import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

import { AppTextLight } from './ui/AppTextLight';

export const CheckBoxFilter = ({ label }) => {
  const [checked, setChecked] = useState(false)

  return (
    <View style={{ flexDirection: 'row', paddingLeft: 30, marginVertical: 10 }}>
      <RoundCheckbox
        size={24}
        checked={checked}
        onValueChange={() => setChecked(!checked)}
      />
      <AppTextLight style={styles.labelText}>{label}</AppTextLight>
    </View>
  )
}

const styles = StyleSheet.create({
  labelText: {
    fontSize: 16,
    marginLeft: 12
  }
})