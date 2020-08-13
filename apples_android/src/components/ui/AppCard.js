import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';

import { AppTextUppercase } from './AppTextUppercase';

export const AppCard = ({ color, memory, characteristic, description, onPress, full }) => {

  return (

    <View>
      {color && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.containerColor}>
            <View style={styles.colorSquare}></View>
            <Text>{color}</Text>
          </View>
        </TouchableOpacity>
      )}
      {memory && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.containerMemory}>
            <Text>{memory}</Text>
          </View>
        </TouchableOpacity>
      )}
      {characteristic && (
        <View style={styles.containerCharacteristic}>
          <View style={styles.containerSection}>
            <Text style={styles.title}>Материалы корпуса</Text>
            <Text style={styles.text}>{characteristic.material}</Text>
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.title}>Влагозащита</Text>
            <Text style={styles.text}>{characteristic.protection}</Text>
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.title}>Цвет</Text>
            <Text style={styles.text}>{characteristic.size}</Text>
          </View>
          <View style={styles.containerSection}>
            <Text style={styles.title}>Размер экрана</Text>
            <Text style={styles.text}>{characteristic.screen}</Text>
          </View>
          {full == false && <View style={styles.link}>
            <TouchableOpacity onPress={onPress}>
              <AppTextUppercase style={styles.textLink}>Подробнее</AppTextUppercase>
            </TouchableOpacity>
          </View>}
        </View>
      )}
      {description && (
        <View style={styles.containerDescription}>
          <View style={styles.containerSection}>
            <Text style={{ ...styles.text, fontSize: 14 }}>{description}</Text>
          </View>
          <View style={styles.link}>
            <TouchableOpacity onPress={onPress}>
              <AppTextUppercase style={styles.textLink}>Подробнее</AppTextUppercase>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerColor: {
    width: 158,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 3,
    marginVertical: 12,
    borderColor: '#DADADA',
    borderWidth: 0.5,
    marginHorizontal: 8
  },
  containerMemory: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginVertical: 16,
    borderColor: '#DADADA',
    borderWidth: 0.5,
    marginHorizontal: 8
  },
  containerCharacteristic: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSquare: {
    backgroundColor: '#000',
    width: 24,
    height: 24,
    borderRadius: 3,
    marginHorizontal: 12
  },
  containerSection: {
    width: '90%',
    paddingVertical: 16,
    marginHorizontal: 10,
    borderColor: '#EBEBEB',
    borderBottomWidth: 0.5
  },
  title: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 7
  },
  text: {
    fontSize: 16,
    color: '#3A3A3C'
  },
  link: {
    width: Dimensions.get('window').width,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textLink: {
    fontSize: 14,
    color: '#60B6FF'
  }
});