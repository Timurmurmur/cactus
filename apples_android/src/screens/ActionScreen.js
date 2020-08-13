import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { AppCardNotifications } from '../components/ui/AppCardNotifications';

export const ActionScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <AppCardNotifications />
        <AppCardNotifications />
        <AppCardNotifications />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
});