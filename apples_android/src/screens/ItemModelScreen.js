import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, Dimensions, Alert, Button, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';


import { DATA_ITEM } from '../../assets/data';
import { AppCard } from '../components/ui/AppCard';
import { AppCatalogCard } from '../components/ui/AppCatalogCard';
import { AppButton } from '../components/ui/AppButton';
import { AppLine } from '../components/ui/AppLine';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppTextLight } from '../components/ui/AppTextLight';
import { AppSliderBox } from '../components/ui/AppSliderBox';

const image = require('../../assets/img/item_model/model.png')

export const ItemModelScreen = ({ route, navigation }) => {

  const [content, setContent] = useState(true)
  const [colorHeart, setColorHeart] = useState("#8E8E93")
  const [colorBalance, setColorBalance] = useState("#8E8E93")

  const item = route.params.item;
  const img = DATA_ITEM.map((item) => item.image_model)

  const changeContent = () => {
    setContent()
  }


  const handleChangeColorBalance = () => {
    const title = 'Сравнение'
    const nextColor = (colorBalance === "#8E8E93") ? '#27AE60' : "#8E8E93"
    setColorBalance(nextColor)
    if (nextColor == '#27AE60') {
      successAlert(title)
    }
  }

  const handleChangeColorHeart = () => {
    const title = 'Избранное'
    const nextColor = colorHeart === "#8E8E93" ? '#EB5757' : "#8E8E93"
    setColorHeart(nextColor)
    if (nextColor == '#EB5757') {
      successAlert(title)
    }
  }

  const goToScreen = (str) => {
    switch (str) {
      case 'Избранное':
        return 'Избранное'
      case 'Сравнение':
        return 'Сравнение товаров'
      default: return
    }
  }


  const successAlert = (str) => {
    Alert.alert(
      `Добавлен в ${str.toLowerCase()}`,
      `Товар добавлен в ${str.toLowerCase()} и находится в разделе Ещё > ${str} товаров`,
      [
        {
          text: `Перейти в ${str.toLowerCase()}`,
          onPress: () => navigation.navigate(goToScreen(str)),

        },
        {
          text: "OK",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={{
        width: Dimensions.get('window').width,
        height: 98,
        paddingHorizontal: 16,
        paddingTop: 13,
        backgroundColor: 'rgba(255,255,255,1)'
      }}>
        <AppTextMedium style={{ fontSize: 20, marginBottom: 10 }}>{item.label}</AppTextMedium>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <AppTextLight style={{ fontSize: 14 }}>Код: {item.id}</AppTextLight>
          {item.availability == true ?
            <AppTextMedium style={{ fontSize: 14, color: '#60B6FF' }}>
              В наличии
          </AppTextMedium> : <AppTextMedium style={{ fontSize: 14, color: '#EB5757' }}>Ожидается</AppTextMedium>}
        </View>
        <AppLine />
      </View>


      <ScrollView>
        <View>
          <AppSliderBox
            images={img}
            // sliderBoxHeight={100}
            dotColor="#60B6FF"
            inactiveDotColor="#DADADA"
            // paginationBoxVerticalPadding={20}
            autoplay={true}
            circleLoop={true}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: -50,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{
              height: 250,
              width: 174,
              resizeMode: 'contain',
              marginTop: 20
            }}
            imageLoadingColor="#2196F3"
            stylesBg={{ height: 340, backgroundColor: '#fff' }}
          />
          <AppLine />

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: '#fff',
            paddingVertical: 20
          }}>
            <TouchableOpacity onPress={() => handleChangeColorBalance()}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="balance-scale" size={27} color={colorBalance} />
                {colorBalance === '#27AE60' &&
                  <View style={{
                    position: 'relative',
                    top: 14,
                    right: 14,
                    padding: 0,
                    margin: 0
                  }}>
                    <Image source={require('../../assets/icons/checked_green.png')} style={{
                      width: 16, height: 16, position: 'absolute'

                    }} />
                  </View>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChangeColorHeart()}>

              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="heart-o" size={29} color={colorHeart} />
                {colorHeart === '#EB5757' &&
                  <View
                    style={{
                      position: 'relative',
                      top: 12,
                      right: 14,
                      padding: 0,
                      margin: 0
                    }}
                  >
                    <Image
                      source={require('../../assets/icons/checked_red.png')}
                      style={{
                        width: 16,
                        height: 16,
                        position: 'absolute',
                      }} />
                  </View>}
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="share-2" size={26} color="#8E8E93" />
            </TouchableOpacity>
          </View>
        </View>



        {/* <Image source={image} style={styles.image} /> */}
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Цвет</Text>
          <View style={styles.block}>
            {DATA_ITEM.map((item) => <AppCard key={item.id} color={item.color} />)}
          </View>
        </View>
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Память</Text>
          <View style={styles.block}>
            {DATA_ITEM.map((item) => <AppCard key={item.id} memory={item.memory} />)}
          </View>
        </View>
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Основные характеристики</Text>
          <View style={styles.block}>
            <AppCard characteristic={item.characteristic} onPress={() => navigation.navigate('Characteristic', { item, content: content })} full={false} />
          </View>
        </View>
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Описание</Text>
          <View style={styles.block}>
            <AppCard description={item.description} onPress={() => {
              // changeContent()
              navigation.navigate('Characteristic', { item, content: !content })
            }} />
          </View>
        </View>
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Другие модели из этой серии</Text>
          <ScrollView horizontal={true} style={styles.blockRow}>
            {DATA_ITEM.map((item) => {
              return <AppCatalogCard key={item.id} card={item.image} style={{ marginRight: 25 }} />
            })}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.blockFooter}>
        <View>
          <Text style={styles.oldPrice}>23 999 ₴</Text>
          <Text style={styles.newPrice}>23 999 ₴</Text>
        </View>
        <View>
          <AppButton style={styles.button} icon={true} onPress={successAlert}>Купить</AppButton>
          {/* <AppButton style={styles.button} icon={true} onPress={successAlert}>Купить</AppButton> */}
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Dimensions.get('window').width,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    opacity: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: 522
  },
  blockWrapper: {
    width: Dimensions.get('window').width,
    backgroundColor: '#E5E5E5',
    paddingTop: 30
  },
  title: {
    fontSize: 16,
    color: '#3A3A3C',
    marginLeft: 16,
    marginBottom: 12
  },
  block: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  blockRow: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 16
  },
  blockFooter: {
    width: Dimensions.get('window').width,
    // position: 'relative',
    // bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  oldPrice: {
    fontSize: 12,
    color: '#8E8E93'
  },
  newPrice: {
    fontSize: 22,
    color: '#60B6FF'
  },
  button: {
    width: 150,

  }
})