import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppModalSettings from '../components/ui/AppModalSettings';

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AppModalSettings />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 25,
    paddingHorizontal: 16
  },
});