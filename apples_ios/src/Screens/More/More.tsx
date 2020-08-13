import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableHighlight, Image } from 'react-native';
import { ArrowRight } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import Svg, { Path } from 'react-native-svg';
import { Header } from '../../components/Header/Header';


export const More = (props: any) => {
  return (
    <>
    <Header navigation={props.navigation} route={props.route} config={{back: false, title: 'Ещё', type: 'SMALL', basket: true, }}/>
    <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
      <View style={styles.container}>
        <View style={{paddingLeft: 15, backgroundColor: COLOR.WHITE, marginBottom: 20, borderRadius: 3}}>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('Notification')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Notification.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Уведомления
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('Orders')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/myOrders.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Мои заказы
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('Bonus')} style={{paddingVertical: 12, }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/myGifts.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Мои бонусы
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: COLOR.WHITE, marginBottom: 20, borderRadius: 3}}>
          <TouchableHighlight underlayColor={COLOR.WHITE}  onPress={e => props.navigation.navigate('Liked')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Liked.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Избранное
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('CompareList')} style={{paddingVertical: 12,}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Compare.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Сравнение товаров
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: COLOR.WHITE, marginBottom: 20, borderRadius: 3}}>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('Settings')} style={{paddingVertical: 12, }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Settings.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Настройки
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: COLOR.WHITE, marginBottom: 20, borderRadius: 3}}>
          <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.navigate('Shops')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Shops.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Магазины
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={COLOR.WHITE}  onPress={e => props.navigation.navigate('NewsList')}  style={{paddingVertical: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/News.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: COLOR.BLACK}}>
              Новости
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
              <Svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                <Path d="M5.9306 5.82709L0.430562 0.0770383C0.334866 -0.0220799 0.176661 -0.0264862 0.0770506 0.0692336C-0.0225598 0.164695 -0.0259815 0.3229 0.069246 0.422745L5.40374 5.99994L0.0692224 11.5772C-0.0260051 11.677 -0.022583 11.8352 0.0770273 11.9307C0.125379 11.9771 0.187864 12 0.249881 12C0.315811 12 0.381226 11.9741 0.430539 11.9228L5.9306 6.17279C6.0229 6.07611 6.0229 5.92377 5.9306 5.82709Z" fill={COLOR.BLACK}/>
              </Svg>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
    paddingVertical: 20
  },
});