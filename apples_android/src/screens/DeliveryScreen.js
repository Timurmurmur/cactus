import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppTextRegular } from '../components/ui/AppTextRegular';


const postOffices = [
  {
    id: 1,
    label: 'Магазин Apple’s',
    image: require('../../assets/icons/apples.png'),
    courier: true,
    pickup: true,
    markers: [
      {
        latitude: 48.986552130506126,
        longitude: 34.22192382812501,
        title: '1',
      },
      {
        latitude: 49.986552130506176,
        longitude: 36.22192382812501,
        title: '2',
      },
      {
        latitude: 47.986552130506166,
        longitude: 35.22192382812501,
        title: '3',
      },
    ]
  },
  {
    id: 2,
    label: 'Отделение Новой почты',
    image: require('../../assets/icons/new_post.png'),
    courier: true,
    pickup: true,
  },
  {
    id: 3,
    label: 'Отделение Укрпошты',
    image: require('../../assets/icons/ukr_post.png'),
    courier: false,
    pickup: true,
  },
  {
    id: 4,
    label: 'Отделение Justin',
    image: require('../../assets/icons/justin.png'),
    courier: false,
    pickup: true,
  },
  {
    id: 5,
    label: 'Отделение Meest Express',
    image: require('../../assets/icons/meest.png'),
    courier: false,
    pickup: true,
  }
]

const AppRadioButton = ({ label, image, navigate, onPress }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 8 }}>
          <RadioButton value={label} color={'#60B6FF'} />
        </View>
        {image && (<Image source={image} style={{ width: 26, height: 26, resizeMode: 'contain', marginRight: 10 }} />)}
        <AppTextRegular style={{ fontSize: 16 }}>{label}</AppTextRegular>
      </View>
      {navigate && (<TouchableOpacity onPress={onPress}>
        <View style={{ width: 12, height: 12 }}>
          <Image source={require('../../assets/icons/arrow_right.png')} style={{ width: 6, height: 12, resizeMode: 'contain' }} />
        </View>
      </TouchableOpacity>)}
    </View>
  )
}

export const DeliveryScreen = ({ navigation }) => {
  const [valueDelivery, setValueDelivery] = React.useState('pickup')
  const [value, setValue] = React.useState('Магазин Apple’s')


  return (
    <View style={{ padding: 16 }}>
      <View>
        <RadioButton.Group onValueChange={value => setValueDelivery(value)} value={valueDelivery}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 30 }}>
            <View style={{ marginRight: 12 }}>
              <RadioButton value="pickup" color={'#60B6FF'} />
            </View>
            <AppTextRegular style={{ fontSize: 16 }}>Самовывоз</AppTextRegular>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 30 }}>
            <View style={{ marginRight: 12 }}>
              <RadioButton value="courier" color={'#60B6FF'} />
            </View>
            <AppTextRegular style={{ fontSize: 16 }}>Курьер</AppTextRegular>
          </View>
        </RadioButton.Group>
      </View>
      <AppTextMedium style={{ fontSize: 16, marginLeft: 10, marginBottom: 30 }}>Способ самовывоза</AppTextMedium>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        {postOffices.map((el) => {
          const label = el.label
          const image = el.image
          const markers = el.markers
          if (valueDelivery === 'pickup' && el.pickup) {
            return (<AppRadioButton key={el.id} label={label} image={image} navigate={true} onPress={() => navigation.navigate('Map', { label, image, markers, title: 'Карта' })} />)
          }
          else if (valueDelivery === 'courier' && el.courier) {
            return (<AppRadioButton key={el.id} label={label} image={image} navigate={false} />)
          }
          else {
            return
          }
        }
        )}
      </RadioButton.Group>
    </View>
  )
}

const styles = StyleSheet.create({})
