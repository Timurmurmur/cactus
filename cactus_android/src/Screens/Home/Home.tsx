import React, { useEffect, createRef, createContext, useContext } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Navigation, Route } from '../../common/types';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/Colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Icons } from '../../common/icons';
import { StocksBanner } from '../../Components/StocksBanner/StocksBanner';
import { NewsBanner } from '../../Components/NewsBanner/NewsBanner';
import { ItemCardBanner } from '../../Components/ItemCardBanner/ItemCardBanner';
import { commonStyles } from '../../common/styles';
import { RootNavigationContext } from '../../Components/Navigation/Navigation';
import { Logo } from '../../Components/Icons/Icons';
import { Header } from '../../Components/Header/Header';


const SwiperComponent: React.FC<{ banners: Array<{ title: string; image: any; }>}> = ({ banners }) => {
    return(
        <View style={[{backgroundColor: '#FAFAFA', height: 200, shadowColor: "#000", }, {
            shadowOffset: {
                width: 2,
                height: 4,
            },
            shadowOpacity: 0.16,
            shadowRadius: 25,
            shadowColor: '#000'
        }]}>
            <Swiper autoplay={true} showsButtons={false} autoplayTimeout={3} activeDotColor={'#149751'} paginationStyle={{bottom: 11}}>
                {
                    banners.map((el, index: number) => (
                        <View key={index} style={{paddingVertical: 17, paddingHorizontal: 24, flexDirection: 'row'}}>
                            <View style={{width: '75%', zIndex: 2}}>
                                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 20, fontWeight: 'bold', lineHeight: 34}}>
                                    <FontAwesome name="apple" size={18}/>{'  '}{el.title}
                                </Text>
                            </View>
                            <View style={{position: 'absolute', right: 0, bottom: -80, zIndex: 1}}>
                                <Image source={el.image} style={{width: 211, height: 138}}/>
                            </View>
                        </View>
                    ))
                }
            </Swiper>
        </View>
    )
}


export const HomeItem:React.FC = (props: any) => {
    return(
        <View style={{paddingTop: 16}}>
            <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: Colors.black, paddingHorizontal: 16}}>{props.title}</Text>
            <View  style={{position: 'absolute', right: 0, top: -10}}>
                <FontAwesome.Button onPress={props.onPress} underlayColor={'transparent'} backgroundColor="#fff" name="angle-right" size={24} color="#CECECE"/>
            </View>
            </View>
            <ScrollView indicatorStyle={"default"} style={{ zIndex: 1000 }} horizontal>
                <View style={{paddingTop: 19, paddingHorizontal: 16,paddingBottom: 16, flexDirection: 'row'}}>
                    {props.children}
                </View>
            </ScrollView>
        </View> 
    )
}

const CatalogItem = StyleSheet.create({
    container: {flexDirection: 'row', overflow: 'scroll'},
    wrapper: { width: 85, alignItems: 'center', marginRight: 10},
    image: {backgroundColor: Colors.green, width: 68, height: 68, justifyContent: 'center', alignItems: 'center', borderRadius: 7},
})

interface IHomeProps {
    navigation: Navigation;
    route: Route;
    descriptor: any
}

export const Home: React.FC<IHomeProps> = (props) => {
    const RootContext = useContext(RootNavigationContext);
    useEffect(() => {
        
    }, [])
    return(
        <>
        <Header logo={<Logo />} back={false} {...props}/>
        <ScrollView style={{backgroundColor: '#F9F9F9'}}>
            <View style={{ marginBottom: 20 }}>
                <SwiperComponent banners={[{ title: `Apple Watch Series 5\nот 8 999 грн`, image: require('../../../assets/images/homeSwiperBanner.png')},{ title: `Apple Watch Series 5\nот 8 999 грн`, image: require('../../../assets/images/homeSwiperBanner.png')},{ title: `Apple Watch Series 5\nот 8 999 грн`, image: require('../../../assets/images/homeSwiperBanner.png')}]}/>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title={'Каталог'} onPress={e => props.navigation.navigate('CatalogStackScreen')}>
                    <View style={CatalogItem.container}>
                        <View style={[CatalogItem.wrapper, { width: 68 }]}>
                        <View style={{backgroundColor: Colors.green, width: 68, height: 68, justifyContent: 'center', alignItems: 'center', borderRadius: 7}}>
                            <Image source={Icons.phone} style={{width: 24, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 11, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Смартфоны</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            <Image source={Icons.computer} style={{width: 42, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 11, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Планшеты, ноутбуки и ПК</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            <Image source={Icons.clock} style={{width: 26, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10,  fontWeight: '500', color: Colors.gray}}>Умные часы</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            <Image source={Icons.mouse} style={{width: 41, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Аксессуары</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            <Image source={Icons.home} style={{width: 41, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Умный дом</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.powerBank} style={{width: 25, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Портативные батареи</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.dumble} style={{width: 42, height: 28}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Фитнес и здоровье</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.gamepad} style={{width: 42, height: 35}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Game Zone</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.headPhones} style={{width: 42, height: 39}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10,fontWeight: '500', color: Colors.gray}}>Sound Bar</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.tv} style={{width: 42, height: 42}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Фото, видео и ТВ</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.arrows} style={{width: 42, height: 38}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>CACTUS обмен</Text>
                        </View>
                        </View>
                        <View style={CatalogItem.wrapper}>
                        <View style={CatalogItem.image}>
                            {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
                            <Image source={Icons.gift} style={{width: 42, height: 37}}/>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize: 12, textAlign: "center", marginTop: 10, fontWeight: '500', color: Colors.gray}}>Подарочные сертификаты</Text>
                        </View>
                        </View>
                    </View>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Идеи подарков" onPress={e => { props.navigation.navigate('CatalogStackScreen', { screen: 'CatalogItemList', initial: false, params: { title: 'Идеи подарков' }})}}>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Акции" onPress={e => props.navigation.navigate('StockNavitaior')}>
                    <StocksBanner title={<Text style={{ fontSize: 13, }}>iPhone 11{`\n`} <Text style={{fontSize: 8}}>от</Text> 19 949 <Text style={{fontSize: 8}}>грн</Text></Text>} image={require('../../../assets/images/stocksBanner.png')}/>
                    <StocksBanner title={<Text style={{ fontSize: 13, }}>iPhone 11{`\n`} <Text style={{fontSize: 8}}>от</Text> 19 949 <Text style={{fontSize: 8}}>грн</Text></Text>} image={require('../../../assets/images/stocksBanner.png')}/>
                    <StocksBanner title={<Text style={{ fontSize: 13, }}>iPhone 11{`\n`} <Text style={{fontSize: 8}}>от</Text> 19 949 <Text style={{fontSize: 8}}>грн</Text></Text>} image={require('../../../assets/images/stocksBanner.png')}/>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Лидеры продаж" onPress={e => { props.navigation.navigate('CatalogStackScreen', { screen: 'CatalogItemList', initial: false, params: { title: 'Лидеры продаж' }})}}>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Новинки" onPress={e => { props.navigation.navigate('CatalogStackScreen', { screen: 'CatalogItemList', initial: false, params: { title: 'Новинки' }})}}>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Скоро в продаже" onPress={e => { props.navigation.navigate('CatalogStackScreen', { screen: 'CatalogItemList', initial: false, params: { title: 'Скоро в продаже' }})}}>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Новости" onPress={e => props.navigation.navigate('MenuStackNavigator', { screen: 'NewsList', initial: false })}>
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                </HomeItem>
            </View>
            <View style={{backgroundColor: Colors.white, paddingTop: 15}}>
              <View style={{paddingHorizontal: 16, paddingBottom: 15}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#363636'}}>Контакты</Text>
              </View>
              <View style={{backgroundColor: Colors.white, padding: 15}}>
                <View style={{flexDirection: 'row',}}>
                  <View style={{marginTop: 25, marginRight: 15, alignItems: 'center'}}>
                    <FontAwesome5 name="phone" size={24} color={'#36D47F'} style={{transform: [{ rotate: '90deg'}]}}/>
                  </View>
                  <View>
                    <Text style={{fontSize: 12,fontWeight: 'bold', marginBottom: 8, color: Colors.black}}>Оформить заказ</Text>
                    <Text style={{fontSize: 26,fontWeight: '500', color: Colors.black}}>044 334 77 77</Text>
                    <Text style={{fontSize: 12, marginBottom: 10, color: Colors.black, marginTop: 5}}>Без выходных с 9:00 до 21:00</Text>
                    <View style={{marginBottom: 15}}>
                      <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={Colors.blue} underlayColor={Colors.gray} style={{padding: 12, justifyContent: 'center'}}><Text style={{fontSize: 14,fontWeight: "500", color: Colors.white}}>Заказы в Telegram</Text></FontAwesome5.Button>
                    </View>
                    <View>
                      <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={Colors.blue} underlayColor={Colors.gray} style={{padding: 12, justifyContent: 'center'}}><Text style={{fontSize: 14,fontWeight: "500", color: Colors.white}}>Сервис в Telegram</Text></FontAwesome5.Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{padding: 16}}>
              <Text style={{color: '#828282', fontSize: 12, textAlign: 'center'}}>© Интернет-магазин Cactus - гаджеты и аксессуары 2016-2020</Text>
            </View>
        </ScrollView>
        </>
    )
}