import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../common/color';
import { FontAwesome } from "@expo/vector-icons";
import { Navigation, Route } from '../../common/types';
import { ArrowRight } from '../../components/Icons/Icons';
import { CatalogItem } from '../Catalog/CatalogItem';
import { ItemCardBanner } from '../../components/ItemCardBanner/ItemCardBanner';
import { StocksBanner } from '../../components/StocksBanner/StocksBanner';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { Contact } from '../../components/Contact/Contact';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';

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

interface IHomeProps {
    navigation: Navigation;
    route: Route;
}

export const Home:React.FC<IHomeProps> = ({ navigation, route }) => {
    return(
        <>
        <Header navigation={navigation} route={route} config={{back: false, title: 'Logo', type: 'DEFAULT', basket: true}}/>
        <ScrollView style={{flex: 1, backgroundColor: COLOR.BACKGROUND}}>
            <HomeSwiper banners={[{ title: <Text>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')},{ title: <Text>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')},{ title: <Text>Apple Watch Series 5 {`\n`}<Text style={{fontWeight: '300'}}>от</Text> 8 999 <Text style={{fontWeight: '300'}}>грн</Text></Text>, image: require('../../../assets/images/appleWatch.png')}]}/>
            <HomeItem onPress={(e) => {}} title="Каталог">
                {
                    catalog.map((el, index) => (
                        <View key={index} style={{marginRight: 30}}>
                            <CatalogItem {...el} key={index}/>
                        </View>
                    ))
                }
            </HomeItem>
            <HomeItem onPress={(e) => {}} title="Новинки">
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
            </HomeItem>
            <HomeItem onPress={(e) => {}} title="Лидеры продаж">
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
            </HomeItem>
            <HomeItem onPress={(e) => {}} title="Акции">
                <View style={{marginRight: 15}}>
                    <StocksBanner/>
                </View>
                <View style={{marginRight: 15}}>
                    <StocksBanner/>
                </View>
                <View style={{marginRight: 15}}>
                    <StocksBanner/>
                </View>
            </HomeItem>
            <HomeItem onPress={(e) => {}} title="Скоро в продаже">
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
                <View style={{marginRight: 25}}>
                    <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone.png'), width: 69, height: 95}} title="Apple iPhone 11 64GB Product Red" price="20 549 ₴"/>
                </View>
            </HomeItem>
            <HomeItem  onPress={(e) => {}} title="Новости">
                <View style={{marginRight: 16}}>
                    <NewsBanner />
                </View>
                <View style={{marginRight: 16}}>
                    <NewsBanner />
                </View>
                <View style={{marginRight: 16}}>
                    <NewsBanner />
                </View>
                <View style={{marginRight: 16}}>
                    <NewsBanner />
                </View>
                <View style={{marginRight: 16}}>
                    <NewsBanner />
                </View>
            </HomeItem>
            <View style={{marginTop: 16}}>
            <Contact />
            </View>
            <View style={{padding: 16,}}>
                <Text style={{fontWeight: '300', fontSize: 12, color: COLOR.BLACK}}>© Интернет-магазин Cactus - гаджеты и аксессуары 2020</Text>
            </View>
        </ScrollView>
        </>
    )
}

interface IHomeItemProps {
    title: string;
    onPress: (e: any) => void;
}

export const HomeItem:React.FC<IHomeItemProps> = ({ title, children, onPress }) => (
    <View style={{paddingTop: 16, backgroundColor: COLOR.WHITE, marginTop: 16}}>
        <View style={{width: '100%',flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative'}}>
        <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.BLACK, paddingHorizontal: 16, textTransform: 'uppercase', letterSpacing: 2, lineHeight: 19}}>{title}</Text>
        <View  style={{position: 'absolute', right: 16, top: 0}}>
            <ArrowRight onPress={onPress} underlayColor={COLOR.WHITE} width={7} height={14} color={COLOR.BLACK} />
        </View>
        </View>
        <ScrollView style={{ zIndex: 100 }} horizontal>
            <View style={{paddingTop: 19, paddingHorizontal: 16,paddingBottom: 16, flexDirection: 'row'}}>
                {children}
            </View>
        </ScrollView>
    </View> 
)