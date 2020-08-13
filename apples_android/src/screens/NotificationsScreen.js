import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import { AppButton } from '../components/ui/AppButton';
import { AppTextLight } from '../components/ui/AppTextLight';
import { AppCardNotifications } from '../components/ui/AppCardNotifications';



export const NotificationsScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState(false)

  if (notifications) {
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

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/bell.png')} style={styles.image} />
      <AppTextLight style={styles.text}>Для того, чтобы получать уведомления,{`\n`} активируйте их</AppTextLight>
      <AppButton onPress={() => setNotifications(true)}>Активировать</AppButton>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    marginBottom: 40
  },
  text: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 200,
    textAlign: 'center'
  }
});