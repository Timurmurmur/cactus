import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { AppTextMedium } from '../components/ui/AppTextMedium'
import { AppCard } from '../components/ui/AppCard';
import { AppTextLight } from '../components/ui/AppTextLight';

export const CharacteristicScreen = ({ route }) => {

  const item = route.params.item
  const img = item.image_model
  const content = route.params.content

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        paddingVertical: 7,
        paddingHorizontal: 16,
        justifyContent: 'flex-start'
      }}>
        <Image
          source={img}
          style={{
            width: 25,
            height: 36,
            resizeMode: 'contain',
            marginRight: 20
          }} />
        <AppTextMedium>{item.label}</AppTextMedium>
      </View>
      <ScrollView>
        {
          content && <AppCard characteristic={item.characteristic} full={true}></AppCard>
        }
        {
          !content && (
            <View>
              <View style={{ backgroundColor: '#fff', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 16 }}>
                <AppTextMedium style={{ marginBottom: 20 }}>Ничего лишнего. Только самое.</AppTextMedium>
                <AppTextLight style={{ marginBottom: 30 }}>{item.description}</AppTextLight>
                <Image source={item.image_model} style={{ width: 140, height: 220 }} />
              </View>
              <View style={{ backgroundColor: '#fff', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 16 }}>
                <AppTextMedium style={{ marginBottom: 20 }}>Ничего лишнего. Только самое.</AppTextMedium>
                <AppTextLight style={{ marginBottom: 30 }}>{item.description}</AppTextLight>
                <Image source={item.image_model} style={{ width: 140, height: 220 }} />
              </View>
              <View style={{ backgroundColor: '#fff', alignItems: 'center', paddingVertical: 30, paddingHorizontal: 16 }}>
                <AppTextMedium style={{ marginBottom: 20 }}>Ничего лишнего. Только самое.</AppTextMedium>
                <AppTextLight style={{ marginBottom: 30 }}>{item.description}</AppTextLight>
                <Image source={item.image_model} style={{ width: 140, height: 220 }} />
              </View>
            </View>
          )
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
});