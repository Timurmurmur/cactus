import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Header } from '../../Components/Header/Header';
import { commonstyles } from '../../common/styles';
import { COLOR } from '../../common/colors';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesome, AntDesign, FontAwesome5, Entypo} from '@expo/vector-icons';
import { Icons } from '../../common/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ActionBanner } from '../../Components/ActionBanner/ActionBanner';
import { ItemBanner } from '../../Components/ItemBanner/ItemBanner';
import { NewsBanner } from '../../Components/NewsBanner/NewsBanner';
import { ArrowRight } from '../../Components/Icons/Icons';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { CatalogCard } from '../Catalog/CatalogCard';
import { Contact } from '../../Components/Contact/Contact';

const HomeSwiper: React.FC<{banners: Array<{title: any, image: any}>}> = ({ banners }) => {
  return(
      <View style={{height: 200}}>
          <LinearGradient start={[1,1]} end={[.2,.5]} colors={['rgba(111, 195, 212, 0.81)','#fff', '#0196B4']} style={{flex: 1}}>
              <Swiper autoplay={true} showsButtons={false} autoplayTimeout={3} activeDotStyle={{ width: 8, height: 8}} dotStyle={{width: 4, height: 4}} dotColor={'#fff'} activeDotColor={'#fff'} paginationStyle={{bottom: 11}}>
                  {
                      banners.map((el, index: number) => (
                          <View key={index} style={{paddingHorizontal: 16, flexDirection: 'row', height: 200, alignItems: 'center'}}>
                              <View style={{zIndex: 2, width: 150}}>
                                  <Text style={{fontSize: 14, fontWeight: '600', lineHeight: 34, color: '#fff'}}>
                                      {el.title}
                                  </Text>
                              </View>
                              <View style={{zIndex: 1, width: '50%'}}>
                                  <Image source={el.image} style={{width: 211, height: 138}}/>
                              </View>
                          </View>
                      ))
                  }
              </Swiper>
          </LinearGradient>

      </View>
  )
}

interface IMainProps {
  navigation: Navigation;
  route: Route;
}

interface IMainState {}
export const catalog = [
  {
      name: 'iPhone',
      image: {
          src: require('../../../assets/catalog/iphone.png'),
          width: 58,
          height: 79
      }
  },
  {
      name: 'iPad',
      image: {
          src: require('../../../assets/catalog/iPad.png'),
          width: 77,
          height: 91
      }
  },
  {
      name: 'Mac',
      image: {
          src: require('../../../assets/catalog/mac.png'),
          width: 94,
          height: 59
      }
  },
  {
      name: 'Watch',
      image: {
          src: require('../../../assets/catalog/watch.png'),
          width: 76,
          height: 99
      }
  },
  {
      name: 'TV&Music',
      image: {
          src: require('../../../assets/catalog/headPhones.png'),
          width: 103,
          height: 103
      }
  },
  {
      name: 'Аксессуары',
      image: {
          src: require('../../../assets/catalog/accesories.png'),
          width: 66,
          height: 80
      }
  },
  {
      name: 'Другое',
      image: {
          src: require('../../../assets/catalog/other.png'),
          width: 86,
          height: 86
      }
  }
]

export class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ScrollView>
        <View style={[commonstyles.container, {backgroundColor: '#FAFAFA'}]}>
          <Header {...this.props}/>
          <View style={{flex: 10}}>
            <HomeSwiper banners={[{ title: <Text style={{fontFamily: 'Roboto-Medium', fontWeight: '600'}}>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')},{ title: <Text>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')},{ title: <Text>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')}]}/>
            <MainItem title={"Каталог"} onPressNavigate={(e: any) => { this.props.navigation.navigate("StackNavigator")}}>
              {
                catalog.map((el, index) => (
                    <View key={index} style={{marginRight: 30}}>
                      <CatalogCard {...el} key={index}/>
                    </View>
                ))
              }
            </MainItem> 
            <MainItem title={"Новинки"} onPressNavigate={(e: any) => { }}>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
            </MainItem>
            <MainItem title={"Лидеры продаж"} onPressNavigate={(e: any) => { }}>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
            </MainItem>
            <MainItem title="Акции" onPressNavigate={(e: any) => { this.props.navigation.navigate("TopTabNavigator") }}>
                <View style={{marginRight: 15}}>
                  <ActionBanner/>
                </View>
                <View style={{marginRight: 15}}>
                  <ActionBanner/>
                </View>
                <View style={{marginRight: 15}}>
                  <ActionBanner/>
                </View>
            </MainItem>
            <MainItem title="Новости" onPressNavigate={(e: any) => { this.props.navigation.navigate('NewsNavigation')}}>
              <NewsBanner/>
              <NewsBanner/>
              <NewsBanner/>
              <NewsBanner/>
              <NewsBanner/>
              <NewsBanner/>
              <NewsBanner/>
            </MainItem>
            <View>
              <Contact />
              </View>
              <View style={{padding: 16,}}>
                  <Text style={{fontWeight: '300', fontSize: 12, color: COLOR.BLACK}}>© Интернет-магазин Cactus - гаджеты и аксессуары 2020</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

interface IMainItemProps {
  onPressNavigate: (e: any) => void;
  title: string;
}

const MainItem :React.FC<IMainItemProps> = ({ children, onPressNavigate, title }) => {
  return(
    <View style={{backgroundColor: COLOR.WHITE, marginBottom: 16, paddingTop: 15, elevation: 1}}>
      <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingHorizontal: 16}}>
      <Text style={{fontFamily: "Roboto-Light", fontWeight: '300', fontSize: 16, color: COLOR.BLACK, textTransform: 'uppercase', letterSpacing: 2, lineHeight: 19}}>{title}</Text>
        <View  style={{position: 'absolute', right: 0, top: -8}}>
          <FontAwesome.Button onPress={onPressNavigate}  name="angle-right" size={24} backgroundColor="transparent" color="#CECECE"/>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={{flexDirection: 'row', overflow: 'scroll', paddingBottom: 16, paddingRight: 16, paddingTop: 15, paddingLeft: 16}}>
          {children}
        </View>
      </ScrollView>
    </View>
  )
}

export const SwiperStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  text: {
    fontFamily: "Popins",
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  left: {
    width: '60%',
  },
  right: {
    width: '40%',
    padding: 10
  }
})

// const catalogItem = StyleSheet.create({
//   container: {flexDirection: 'row', overflow: 'scroll', width: '100%'},
//   wrapper: { width: 80, alignItems: 'center', },
//   image: {backgroundColor: COLOR.GREEN, width: 68, height: 68, justifyContent: 'center', alignItems: 'center', borderRadius: 7},

// })