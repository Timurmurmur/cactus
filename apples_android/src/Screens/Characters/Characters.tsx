import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { commonstyles } from '../../common/styles';
import { COLOR } from '../../common/colors';
import { FontAwesome5 } from '@expo/vector-icons';

export const Characters = (props: any) => {
  return(
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <View style={[{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7, paddingHorizontal: 20, alignItems: 'center'}, commonstyles.shadow]}>
        <Image source={require('../../../assets/images/phone.png')} style={{width: 25, height: 36}}/>
        <Text style={{fontWeight: 'bold', fontSize: 14, width: '85%'}}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
      </View>
      <ScrollView>
        <View style={characterStyles.container}>
          { props.route.params.characters.map((el: any,index: number) => (
            <CharacterItem {...el}/>
          ))}
        </View>
      </ScrollView>
      <View style={[commonstyles.shadow, { padding: 15, flexDirection: 'row', justifyContent: 'space-between' }]}>
        <View style={{width: '50%'}}>
          <View style={{position: 'relative', marginBottom: 20}}>
            <View style={{position: 'absolute'}}>
            <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12, textDecorationLine: 'line-through'}}>26 499 ₴</Text>
            <View style={{borderBottomColor: COLOR.ORANGE, borderBottomWidth: 1, position: 'absolute', zIndex: 100, bottom: 7, width: '100%'}}></View>
            </View>
          </View>
          <View style={{marginTop: 4}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>23 999 ₴</Text>
          </View>
        </View>
        <View style={{width: '40%', alignItems: 'flex-end'}}>
          <TouchableHighlight style={{backgroundColor: COLOR.GREEN, padding: 20, borderRadius: 7, flexDirection: 'row', width: 130}}>
            <>
            <FontAwesome5 name="shopping-cart" color={COLOR.WHITE} size={18}/>
            <Text style={{fontSize: 14, color: COLOR.WHITE, textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 10}}>
              Купить
            </Text></>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

interface ICharacterItemProps {
  title: string;
  character: string;
}

const CharacterItem: React.FC<ICharacterItemProps> = ({ title, character }) => (
  <View style={characterStyles.wrapper}>
    <View style={{marginBottom: 5}}>
      <Text style={characterStyles.title}>{title}</Text>
    </View>
    <View>
      <Text style={characterStyles.description}>{character}</Text>
    </View>
  </View>
)

const characterStyles = StyleSheet.create({
  container: {paddingHorizontal: 20, paddingBottom: 10},
  wrapper: { borderBottomWidth:1, borderBottomColor: COLOR.GRAY, paddingVertical: 16, },
  title: { fontSize: 14, color: COLOR.TEXT_GRAY },
  description: { color: COLOR.BLACK, fontSize: 14 }
})