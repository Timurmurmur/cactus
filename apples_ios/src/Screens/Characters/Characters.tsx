import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLOR } from '../../common/color';
import { Navigation } from '../../common/types';
import { Header } from '../../components/Header/Header';


interface ICharacterRouteProps {
  params: {
    data: {
      title: string;
      items: {
        title: string;
        description: string;
      }[]
    }[],
    product: {
      title: string;
      image: {
        src: any,
        width: number;
        height: number;
      }
    },
    title: string;
  }
}

interface ICharacterProps {
  navigation: Navigation;
  route: ICharacterRouteProps;
}

export const Characters: React.FC<ICharacterProps> = ({route, navigation}) => {
  return(
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <Header navigation={navigation} route={route} config={{back: true, title: route.params.title, type: 'SMALL', basket: true}}/>
      <ScrollView>
        <View style={[{paddingVertical: 7, paddingHorizontal: 20, alignItems: 'center', marginTop: 25}]}>
          <Image source={route.params.product.image.src} style={{width: route.params.product.image.width, height: route.params.product.image.height, marginBottom: 20}}/>
          <Text style={{fontWeight: '600', fontSize: 20, color: COLOR.BLACK}}>{route.params.product.title}</Text>
        </View>
        <View style={characterStyles.container}>
          {
            route.params.data.map((el, index: any) => (
              <CharacterItem items={el.items} title={el.title} key={index}/>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const CharacterItem: React.FC = ({ items, title }: any) => {
  return(
    <View style={characterStyles.wrapper}>
      <View style={{ marginBottom: 10 }}>
        <Text style={characterStyles.title}>{title}</Text>
      </View>
      { items.map((el: any, index: number) => {
        return(
          <View style={{flexDirection: 'row', marginVertical: 5}} key={index}>
            <View style={{ marginRight: 15, width: '50%'}}>
              <Text style={{ fontSize: 13, color:COLOR.GRAY, textAlign: 'right', fontWeight: '300' }}>{el.title}</Text>
            </View>
            <View style={{ width: '50%'}}>
              <Text style={{color: COLOR.BLACK, fontSize: 13  }}>{el.description}</Text>
            </View>
          </View>
        )
      }) }
    </View>
  )
}

const characterStyles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  wrapper: { paddingVertical: 15, alignItems: 'center',},
  title: { fontSize: 16, color: COLOR.BLACK, fontWeight: 'bold'},
  description: { color: COLOR.BLACK, fontSize: 14 }
})