import React from 'react';
import { Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

export const AppDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => <Image source={require('../../../assets/logo.png')} />}
        // onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}