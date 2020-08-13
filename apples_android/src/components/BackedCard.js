import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Swipeout from 'react-native-swipeout'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export const BackedCard = () => {
  const [count, setCount] = useState(0)



  const prewCount = (count) => count > 0 ? setCount(count - 1) : setCount(0)

  const swipeStyle = {
    // autoClose,
    right: [{
      // text: 'delete',
      backgoundColor: '#fff',
      onPress: () => console.log('Pressed'),
      component: (
        <View style={{ backgroundColor: '#fff', height: '100%', alignItems: 'center', flex: 1, justifyContent: 'center', padding: 0, margin: 0, flexDirection: 'row' }}>
          <FontAwesome name="heart-o" size={29} color={'#8E8E93'} style={{ marginRight: 40 }} />
          <AntDesign name="delete" size={25} color={'#8E8E93'} />
        </View>
      ),
    }],
    buttonWidth: 150,
    style: {
      width: '100%',
      marginVertical: 8,
      backgroundColor: '#fff',
      borderRadius: 2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  }
  return (
    <Swipeout {...swipeStyle}>
      <View style={styles.card}>
        <Image source={require('../../assets/img/iPhone/i11_red.png')} style={styles.image} />
        <View>
          <Text style={styles.title}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
          <Text style={styles.price}>29 699 ₴</Text>
          <View style={styles.action}>
            <View style={styles.wrapperBtn}>
              <TouchableOpacity onPress={() => prewCount(count)}>
                <Image style={styles.btn} source={require('../../assets/icons/prew.png')} />
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Image style={styles.btn} source={require('../../assets/icons/next.png')} />
              </TouchableOpacity>
            </View>
            <Text>29 699 ₴</Text>
          </View>
        </View>
      </View>
    </Swipeout>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  image: {
    width: 50,
    height: 120,
    resizeMode: 'contain',
    marginRight: 25,
    marginLeft: 13
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4
  },
  title: {
    marginBottom: 8
  },
  price: {
    marginBottom: 8
  },
  actionButton: {

  },
  wrapperBtn: {
    flexDirection: 'row',
    width: 88,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    width: 24,
    height: 24
  }
})
