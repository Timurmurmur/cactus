import * as React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableHighlight, Image } from 'react-native';
import Colors from '../../constants/Colors';
import { ArrowRight } from '../../Components/Icons/Icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';


export const More = (props: any) => {
  return (
    <>
    <SmallHeader back={false} title="Ещё" {...props}/>
    <ScrollView style={{backgroundColor: '#F9F9F9'}}>
      <View style={styles.container}>
        <View style={{paddingLeft: 15, backgroundColor: Colors.white, marginBottom: 20, borderRadius: 7}}>
          <TouchableHighlight onPress={e => props.navigation.navigate('Notification')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Notification.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Уведомления
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={e => props.navigation.navigate('Orders')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/myOrders.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Мои заказы
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={e => props.navigation.navigate('Bonus')} style={{paddingVertical: 12, }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/myGifts.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Мои бонусы
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: Colors.white, marginBottom: 20, borderRadius: 7}}>
          <TouchableHighlight  onPress={e => props.navigation.navigate('Liked')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Liked.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Избранное
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={e => props.navigation.navigate('CompareList')} style={{paddingVertical: 12,}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Compare.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Сравнение товаров
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: Colors.white, marginBottom: 20, borderRadius: 7}}>
          <TouchableHighlight onPress={e => props.navigation.navigate('Settings')} style={{paddingVertical: 12, }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Settings.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Настройки
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{paddingLeft: 15, backgroundColor: Colors.white, marginBottom: 20, borderRadius: 7}}>
          <TouchableHighlight onPress={e => props.navigation.navigate('Shops')} style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Shops.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Магазины
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight  onPress={e => props.navigation.navigate('NewsList')}  style={{paddingVertical: 12, borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/News.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Новости
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight  onPress={e => props.navigation.navigate('Feedback')} style={{paddingVertical: 12}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../../assets/images/Menu/Message.png')} style={{width: 28, height: 28, borderRadius: 5, overflow: 'hidden'}}/>
              <Text style={{marginLeft: 16, fontSize: 16, fontWeight: '500', color: Colors.black}}>
              Служба поддержки
              </Text>
              <View style={{right: 16, position: 'absolute'}}>
                <ArrowRight width={7} height={12} color="#CECECE"/>
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