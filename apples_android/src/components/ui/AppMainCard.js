import React from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';
import { AppTextUppercase } from './AppTextUppercase';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const AppMainCard = ({ title, data, onPress, style }) => {


  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.wrapperTitle} onPress={onPress}>
        <AppTextUppercase style={styles.textTitle}>{title}</AppTextUppercase>
        <Ionicons name="ios-arrow-forward" size={24} color="#3A3A3C" />
      </TouchableOpacity>
      <ScrollView horizontal={true}>
        {data.map((item) => {
          return (
            <TouchableOpacity key={item.id}  onPress={onPress} >
              <Image source={item.image} style={{...styles.image, ...style}}/>
            </TouchableOpacity>)
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  textTitle: {
    fontSize: 16,
    color: '#3A3A3C',
    letterSpacing: 2
  },
  image: {
    marginRight: 20
  }
});