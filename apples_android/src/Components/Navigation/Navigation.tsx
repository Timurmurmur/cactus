import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from 'react-native';

import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { commonstyles } from '../../common/styles';
import { Header } from '../Header/Header';
import { COLOR } from '../../common/colors';
import { FontAwesome5, MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Main } from '../../Screens/Main/Main';
import { Auth } from '../../Screens/Auth/Auth';
import { Settings } from '../../Screens/Settings/Settings';
import { Feedback } from '../../Screens/Feedback/Feedback';
import { News } from '../../Screens/News/News';
import { Shop } from '../../Screens/Shop/Shop';
import { Notification } from '../../Screens/Notification/Notification';
import { Liked } from '../../Screens/Liked/Liked';
import { Bonus } from '../../Screens/Bonus/Bonus';
import { Orders } from '../../Screens/Orders/Orders';
import { CompareList } from '../../Screens/CompareList/CompareList';
import { Stocks } from '../../Screens/Stocks/Stocks';
import { Catalog } from '../../Screens/Catalog/Catalog';
import { SmsVerification } from '../../Screens/SmsVerification/SmsVerification';
import { createStackNavigator } from '@react-navigation/stack';
import { StackHeader } from '../Header/StackHeader';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Gift } from '../../Screens/Gift/Gift';
import { Discount } from '../../Screens/Discount/Discount';
import { Contest } from '../../Screens/Contest/Contest';
import { Raffle } from '../../Screens/Raffle/Raffle';
import { OtherStocks } from '../../Screens/OtherStocks/OtherStocks';
import { CatalogItemList } from '../../Screens/CatalogItemList/CatalogItemList';
import { CatalogItem } from '../../Screens/CatalogItem/CatalogItem';
import { Phone } from '../../Screens/Phone/Phone';
import { Characters } from '../../Screens/Characters/Characters';
import { Description } from '../../Screens/Description/Description';
import { Basket } from '../../Screens/Basket/Basket';
import { CreditList } from '../../Screens/CreditList/CreditList';
import { Credit } from '../../Screens/Credit/Credit';
import { Decoration } from '../../Screens/Decoration/Decoration';
import { Delivery } from '../../Screens/Delivery/Delivery';
import { DeliveryMap } from '../../Screens/DeliveryMap/DeliveryMap';
import { CurrentStock } from '../../Screens/CurrentStock/CurrentStock';
import { Compare } from '../../Screens/Compare/Compare';
import { CurrentOrder } from '../../Screens/CurrentOrder/CurrentOrder';
import { CurrentNews } from '../../Screens/CurrentNews/CurrentNews';
import { Profile } from '../../Screens/Profile/Profile';
import { HomeIcon, CatalogIcon, StockIcon, CompareIcon, OrderIcon, BonusIcon, HeartIcon, NotificationIcon, ShopsIcon, NewsIcon, FeedbackIcon, GearIcon, LogoutIcon } from '../Icons/Icons';
import { DecorationConsist } from '../../Screens/DecorationConsist/DecorationConsist';
import { Icons } from '../../common/icons';
import Svg, { Path } from 'react-native-svg';
import { Logo } from '../Logo/Logo';

const TopTabNavigator = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const CompareStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BasketNav = createStackNavigator();
const OrderNav = createMaterialTopTabNavigator();
const NewsNav = createStackNavigator();
const MainNav = createStackNavigator();

interface INavigationProps {
}

interface INavigationState {}

export class Navigation extends React.Component<INavigationProps, INavigationState> {
  constructor(props: INavigationProps){
    super(props);
    this.state = {}
  }

  componentDidMount(){
  }

  render(){
    return(
      <View style={[commonstyles.container]}>
        <Drawer.Navigator
          initialRouteName="MainNavigation"
          drawerContent={customDrawerContent}
          drawerStyle={{
            width: '80%',
            backgroundColor: COLOR.WHITE,
          }}
          drawerContentOptions={{
            activeBackgroundColor: '#FFF',
            inactiveBackgroundColor: COLOR.WHITE,
            activeTintColor: COLOR.TINT_COLOR,
            inactiveTintColor: COLOR.BLACK
          }}>
          {/* <Drawer.Screen name="Profile" component={Profile} options={{
            drawerIcon: ({color, focused}) => {
              return <FontAwesome5 name="home" size={20} style={[drawerStyle.listItemIcon, { color: `${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}]}/>
            },
            title: "Профиль",
          }}/> */}
          <Drawer.Screen name="MainNavigation" component={MainNavigation} options={{
            drawerIcon: ({color, focused}) => {
              return <HomeIcon width={20} height={18} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: "Главная",
          }}/>
          <Drawer.Screen name="StackNavigator" component={StackNavigator} options={{
            drawerIcon :({color, focused}) => {
              return(<><CatalogIcon width={20} height={12} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/><View style={{position: 'absolute',width: 500, top: 0,borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}></View></>)
            },
            title: "Каталог",
          }}/>
          <Drawer.Screen name="TopTabNavigator" component={MaterialTopTab} options={{
            drawerIcon: ({color, focused}) => {
              return <StockIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: 'Акции',
          }}/>
          <Drawer.Screen name="CompareNavigation"  component={CompareNavigation} options={{
            drawerIcon: ({color, focused}) => {
              return <CompareIcon width={20} height={17} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: 'Сравнение товаров',
          }}/>
          <Drawer.Screen name="OrderNavigation" component={OrderNavigation} options={{
            drawerIcon: ({color, focused}) => {
              return(<><OrderIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/><View style={{position: 'absolute',width: 500, top: 0,borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}></View></>)
            },
            title: "Мои заказы"
          }}/>
          <Drawer.Screen name="Bonus" component={Bonus} initialParams={{title: 'Мои бонусы'}} options={{
            drawerIcon: ({color, focused}) => {
              return <BonusIcon width={20} height={19} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: "Мои бонусы"
          }}/>
          <Drawer.Screen name="Liked" component={Liked} options={{
            drawerIcon: ({color, focused}) => {
              return <HeartIcon width={20} height={17} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: "Избранное"
          }}/>
          <Drawer.Screen name="Notification" component={Notification} options={{
            drawerIcon:({color, focused}) => {
              return <NotificationIcon width={20} height={22} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: "Уведомления",
          }}/>
          <Drawer.Screen name="Shop" component={Shop} options={{
            drawerIcon:({color, focused}) => {
              return(<><ShopsIcon width={20} height={25} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/><View style={{position: 'absolute',width: 500, top: 0,borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}></View></>)
            },
            title: "Магазины"
          }}/>
          <Drawer.Screen name="NewsNavigation" component={NewsNavigation} options={{
            drawerIcon:({color, focused}) => {
              return <NewsIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
            },
            title: "Новости"
          }}/>
          <Drawer.Screen name="Feedback" component={Feedback} options={{
            drawerIcon:({color, focused}) => {
              return(<><FeedbackIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/>
              <View style={{position: 'absolute',width: 500, top: 0,borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}></View></>)
            },
            title: "Служба поддержки"
          }}/>
          <Drawer.Screen name="Settings" component={Settings} options={{
            drawerIcon:({color, focused}) => {
              return (
              <><GearIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/><View style={{position: 'absolute',width: 500, bottom: 0,borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}></View></>
              )
            },
            title: "Настройки"
          }}/>
          <Drawer.Screen name="LogOut" component={() => (<View><Text>Logout</Text></View>)} options={{
            drawerIcon:({color, focused}) => {
              return (
              <><LogoutIcon width={20} height={20} color={`${focused ? COLOR.TINT_COLOR : COLOR.ICONGRAY}`}/></>
              )
            },
            title: "Выйти"
          }}/>
        </Drawer.Navigator>
      </View>
    )
  }
}


class MainNavigation extends React.Component{
  render(){
    return(
      <MainNav.Navigator headerMode="none" initialRouteName="Main">
        <MainNav.Screen name="Main" component={Main} />
        <MainNav.Screen name="SmsVerification" component={SmsVerification} options={{title: ''}} />
        <MainNav.Screen name="Auth" component={Auth} options={{title: ''}} />
        <MainNav.Screen name="CurrentStock" initialParams={
          {
            title: 'Успей приобрести новый iPhone 11 по супер выгодной цене',
            text: `Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модели iPhone. Количество ограничено.\n\nПокупай  iPhone 11 в период с 11.03.20 по 11.04.20 и получи скидку в 2 000 гривен! Подробности у продавцов-консультантов. `,

          }
        } component={CurrentStock} options={{title: ''}} />
        <MainNav.Screen name="CurrentOrder" component={CurrentOrder} options={{title: ''}} />
        <MainNav.Screen initialParams={{ title: 'Корзина' }} name="BasketNavigation" component={BasketNavigation} options={{title: ''}} />
      </MainNav.Navigator>
    )
  }
}

class NewsNavigation extends React.Component {
  render(){
    return(
      
      <NewsNav.Navigator initialRouteName="News" screenOptions={{ header: (props) => <StackHeader title={props.scene.route.params.title} {...props}/>}}>
        <NewsNav.Screen name="News" initialParams={{title: "Новости"}} component={News} options={{}}/>
        <NewsNav.Screen initialParams={{ title: 'Новость' }} name="CurrentNews" component={CurrentNews} options={{title: ''}} />
      </NewsNav.Navigator>
    )
  }
}

class OrderNavigation extends React.Component {
  render(){
    return(
      <>
      <StackHeader title="Мои заказы" {...this.props}/>
      <OrderNav.Navigator  swipeEnabled tabBarOptions={{
        activeTintColor: COLOR.WHITE,
        scrollEnabled: true,
        style: {backgroundColor: COLOR.TINT_COLOR},
        pressColor: COLOR.BLUE,
        tabStyle: {
          marginVertical: 8,
          maxWidth: 150
        },
        labelStyle: {
          color: COLOR.WHITE,
          fontSize: 14,
          fontWeight: 'normal'
        },
        indicatorStyle: {
          backgroundColor: COLOR.WHITE
        }
      }} initialLayout={{width: Dimensions.get('window').width }}>
        <TopTabNavigator.Screen name="AllOrders" component={Orders} options={{
          title: 'Все'
        }}/>
        <TopTabNavigator.Screen name="InWorkOrders" initialParams={{orders: [{
            orderNumber: '243532243',
            orderDate: 'от 27.02.2020 14:02',
            orderPrice: '49 198 ₴',
            orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),]
          },
          {
            orderNumber: '243532243',
            orderDate: 'от 27.02.2020 14:02',
            orderPrice: '49 198 ₴',
            orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),]
          }]}} component={Orders} options={{
          title: 'В РАБОТЕ'
        }}/>
        <TopTabNavigator.Screen name="CompleteOrders" initialParams={
          { orders: [{
            orderNumber: '243532243',
            orderDate: 'от 27.02.2020 14:02',
            orderPrice: '49 198 ₴',
            orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),]
          }]}
        } component={Orders} options={{
          title: 'ЗАВЕРШЕННЫЕ'
        }}/>
        <TopTabNavigator.Screen name="PreOrders" initialParams={
          {orders: [{
            orderNumber: '243532243',
            orderDate: 'от 27.02.2020 14:02',
            orderPrice: '49 198 ₴',
            orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),]
          }]}
        } component={Orders} options={{
          title: 'ПРЕДЗАКАЗ'
        }}/>
      </OrderNav.Navigator>
      </>
    )
  }
}
class BasketNavigation extends React.Component {
  render(){
    return(
      <>
      <BasketNav.Navigator initialRouteName="Basket" headerMode="none">
        <BasketNav.Screen name="Basket" initialParams={{title: "Корзина"}} component={Basket} options={{}}/>
        <BasketNav.Screen initialParams={{ title: 'Выбор рассрочки' }} name="CreditList" component={CreditList} options={{title: ''}} />
        <BasketNav.Screen initialParams={{ title: 'Альфа Бакн; 4 мес.' }} name="Credit" component={Credit} options={{title: ''}} />
        <BasketNav.Screen initialParams={{ title: 'Оформление заказа' }} name="Decoration" component={Decoration} options={{title: ''}} />
        <BasketNav.Screen initialParams={{ title: 'Способ доставки' }} name="Delivery" component={Delivery} options={{title: ''}} />
        <BasketNav.Screen initialParams={{ title: 'Карта' }} name="DeliveryMap" component={DeliveryMap} options={{title: ''}} />
        <BasketNav.Screen initialParams={{ title: 'Состав заказа' }} name="DecorationConsist" component={DecorationConsist} options={{title: ''}} />
      </BasketNav.Navigator>
      </>
    )
  }
}
class MaterialTopTab extends React.Component {
  render(){
    return(
      <>
      <StackHeader title="Акции" {...this.props}/>
      <TopTabNavigator.Navigator  swipeEnabled tabBarOptions={{
        activeTintColor: COLOR.WHITE,
        scrollEnabled: true,
        style: {backgroundColor: COLOR.TINT_COLOR},
        pressColor: COLOR.BLUE,
        tabStyle: {
          marginVertical: 8,
          width: 120
        },
        labelStyle: {
          color: COLOR.WHITE,
          fontSize: 14,
          fontWeight: 'normal'
        },
        indicatorStyle: {
          backgroundColor: COLOR.WHITE
        }
      }} initialLayout={{width: Dimensions.get('window').width }}>
        <TopTabNavigator.Screen name="Stocks" component={Stocks} options={{
          title: 'Акции',
          back: false
        }}/>
        <TopTabNavigator.Screen name="Gift" component={Gift} options={{
          title: 'Подарки'
        }}/>
        <TopTabNavigator.Screen name="Discount" component={Discount} options={{
          title: 'Скидки'
        }}/>
        <TopTabNavigator.Screen name="Contest" component={Contest} options={{
          title: 'Конкурс'
        }}/>
        
        <TopTabNavigator.Screen name="Raffle" component={Raffle} options={{
          title: 'Розыгрыш'
        }}/>
        <TopTabNavigator.Screen name="OtherStocks" component={OtherStocks} options={{
          title: 'Прочие'
        }}/>
      </TopTabNavigator.Navigator>
      </>
    )
  }
}

class StackNavigator extends React.Component {

  render() {
    return(
      <Stack.Navigator initialRouteName="Catalog" screenOptions={{ header: (props: any) => (<StackHeader title={props.scene.route.params.title} {...props}/>), animationEnabled: true,animationTypeForReplace: 'pop', headerTitleAllowFontScaling: true}}>
        <Stack.Screen name="Catalog" initialParams={{title: "Каталог", items: [
          {
            title: 'Смартфоны',
            image: {
              src: Icons.phone,
              width: 16,
              height: 28,
            }
          },
          {
            title: 'Планшеты, ноутбуки и ПК',
            image: {
              src: Icons.computer,
              width: 29,
              height: 29
            }
          },
          {
            title: 'Умные часы',
            image: {
              src: Icons.clock,
              width: 18,
              height: 29
            }
          },
          {
            title: 'Аксессуары',
            image: {
              src: Icons.mouse,
              width: 28,
              height: 29
            }
          },
          {
            title: 'Умный дом',
            image: {
              src: Icons.home,
              width: 29,
              height: 29
            }
          },
          {
            title: 'Портативные батареи',
            image: {
              src: Icons.powerBank,
              width: 17,
              height: 29
            }
          },
          {
            title: 'Фитнес и здоровье',
            image: {
              src: Icons.dumble,
              width: 29,
              height: 19
            }
          },
          {
            title: 'Game Zone',
            image: {
              src: Icons.gamepad,
              width: 29,
              height: 24
            }
          },
          {
            title: 'Sound Bar',
            image: {
              src: Icons.headPhones,
              width: 29,
              height: 28
            }
          },
          {
            title: 'Фото, видео и ТВ',
            image: {
              src: Icons.tv,
              width: 29,
              height: 29
            }
          },
          {
            title: 'CACTUS обмен',
            image: {
              src: Icons.arrows,
              width: 23,
              height: 21
            }
          },
          {
            title: 'Подарочные сертификаты',
            image: {
              src: Icons.gift,
              width: 29,
              height: 23
            }
          }
        ]}} component={Catalog} options={{title: 'Каталог'}}/>
        <Stack.Screen name="CatalogItemList" component={CatalogItemList}/>
        <Stack.Screen name="CatalogItem" initialParams={{title: "Каталог"}} component={CatalogItem} />
        <Stack.Screen name="Phone" initialParams={{title: "Каталог"}} component={Phone} />
        <Stack.Screen name="Characters" initialParams={{title: "Характеристики", 
      characters: [
        {
          title: 'Материалы корпуса',
          character: 'Металл, стекло'
        },
        {
          title: 'Влагозащита',
          character: 'IP68'
        },
        {
          title: 'Габариты (ВхШхГ)',
          character: '150,9 x 75,7 x 8,3 мм'
        },
        {
          title: 'Вес',
          character: '194 г'
        },
        {
          title: 'Цвет',
          character: 'Красный'
        },
        {
          title: 'Основная камера, Мп',
          character: '12,0 Мп + 12,0 Мп'
        },
        {
          title: 'Максимальное разрешение видеосъёмки',
          character: '4K UHD (3840 x 2160), 60fps'
        },
        {
          title: 'Особенности камеры',
          character: 'Система двух камер 12 Мп: сверхширокоугольная и широкоугольная; Сверхширокоугольная: диафрагма ƒ/2.4 и угол обзора 120°; Широкоугольная: диафрагма ƒ/1.8; Двукратный оптический зум на уменьшение; цифровой зум (до 5 раз); Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Оптическая стабилизация изображения (широкоугольная камера); Пятилинзовый объектив (сверхширокоугольная камера); шестилинзовый объектив (широкоугольная камера); Более яркая вспышка True Tone с функцией Slow Sync; Панорамная съёмка (с разрешением до 63 Мп); Поддержка Focus Pixels на всей матрице (широкоугольная камера); Ночной режим; Автокоррекция; Функция Smart HDR нового поколения для фото; Широкий цветовой диапазон для фотографий и Live Photos; Передовая система устранения эффекта красных глаз; Автоматическая стабилизация изображения; Привязка фотографий к месту съёмки; Форматы изображений: HEIF и JPEG; Камера TrueDepth: Диафрагма ƒ/2.2; Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Animoji и Memoji; Съёмка видео 4K с частотой 24, 30 или 60 кадров/﻿с; Съёмка HD‑видео 1080p с частотой 30 или 60 кадров/﻿с; Запись замедленного видео 1080р с частотой 120 кадров/﻿с; Функция Smart HDR нового поколения для фото; Расширенный динамический диапазон при съёмке видео с частотой 30 кадров/﻿с; Кинематографическая стабилизация видео (4K, 1080p и 720p); Широкий цветовой диапазон для фотографий и Live Photos; Вспышка Retina Flash; Автоматическая стабилизация изображения; Серийная съёмка; Съёмка видео: Видео 4K с частотой 24, 30 или 60 кадров﻿/﻿с; HD-видео 1080p с частотой 30 или 60 кадров﻿/﻿с; HD‑видео 720p с частотой 30 кадров﻿/﻿с; Расширенный динамический диапазон при съёмке видео с частотой до 60 кадров﻿/﻿с; Оптическая стабилизация изображения при съёмке видео (широкоугольная камера); Двукратный оптический зум на уменьшение; цифровой зум (до 3 раз); Аудиозум; Более яркая вспышка True Tone; Функция QuickTake для быстрого переключения в режим видео с отслеживанием объекта съёмки; Замедленное видео с разрешением 1080р и частотой 120 или 240 кадров﻿/﻿с; Режим «Таймлапс» со стабилизацией изображения; Кинематографическая стабилизация видео (4K, 1080p и 720p); Следящий автофокус; Возможность съёмки фотографий 8 Мп во время записи видео 4К; Увеличение при воспроизведении; Форматы HEVC и H.264; Стереозвук'
        },
        {
          title: 'Поддерживаемые стандарты связи',
          character: 'FDD‑LTE (диапазоны 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 66); TD‑LTE (диапазоны 34, 38, 39, 40, 41); UMTS/HSPA+/DC‑HSDPA (850, 900, 1700/2100, 1900, 2100 МГц); GSM/EDGE (850, 900, 1800, 1900 МГц)'
        },
        {
          title: 'Автономная работа',
          character: 'Воспроизведение видео по беспроводной сети: до 17 часов; Просмотр видео в режиме стриминга (по беспроводной сети): до 10 часов; Воспроизведение аудио по беспроводной сети: до 65 часов'
        },
      ]}} component={Characters} />
        <Stack.Screen name="Description" initialParams={{title: "Описание"}} component={Description} />
      </Stack.Navigator>
    )
  }
}

class CompareNavigation extends React.Component {
  render() {
    return(
      <CompareStack.Navigator initialRouteName="CompareList" screenOptions={{ header: (props: any) => (<StackHeader title={props.scene.route.params.title} {...props} previous={{}} />), animationEnabled: true,animationTypeForReplace: 'pop', headerTitleAllowFontScaling: true}}>
        <CompareStack.Screen name="CompareList" initialParams={{title: "Сравнение товаров"}} component={CompareList} />
        <CompareStack.Screen name="Compare" initialParams={{title: "Сравнение товаров", items: [
          {
            title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
            price: '29 699 ₴',
            image: {
              src: require('../../../assets/images/phone.png'),
              width: 62,
              height: 85
            },
          },
          {
            title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
            price: '23 499 ₴',
            image: {
              src: require('../../../assets/images/iphoneX.png'),
              width: 57,
              height: 85
            },
          }
        ],
        compareItems: [
          {
            optionTitle: 'Стандат связи',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: '3G (WCDMA/UMTS/HSPA), 2G (GPRS/EDGE), 4G (LTE)'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: '3G (WCDMA/UMTS/HSPA), 2G (GPRS/EDGE), 4G (LTE)'
              }
            ]
          },
          {
            optionTitle: 'Диагональ экрана',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: '6.1'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: '6.5'
              }
            ]
          },
          {
            optionTitle: 'Разрешение дисплея',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: '1792 х 828'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: '2688 х 1242'
              }
            ]
          },
          {
            optionTitle: 'Тип матрицы',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: 'IPS'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: 'OLED'
              }
            ]
          },
          {
            optionTitle: 'Количество точек касания',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: '10'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: '10'
              }
            ]
          },
          {
            optionTitle: 'Количество контактов в телефонной книге',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: 'Ограничено памятью самого устройста'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: 'Ограничено памятью самого устройста'
              }
            ]
          },
          {
            optionTitle: 'Операционная система',
            option: [
              {
                title: `Apple iPhone 11 \n64Gb Red (MWLV2)`,
                price: '29 699 ₴',
                image: {
                  src: require('../../../assets/images/phone.png'),
                  width: 42,
                  height: 58
                },
                option: 'iOS'
              },
              {
                title: `Apple iPhone Xr 64Gb\nBlack (MRY42)`,
                price: '23 499 ₴',
                image: {
                  src: require('../../../assets/images/iphoneX.png'),
                  width: 42,
                  height: 63
                },
                option: 'iOS'
              }
            ]
          },
        ]}} component={Compare} />
      </CompareStack.Navigator>
    )
  }
}

const customDrawerContent = (props: any) => {
  return(
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: COLOR.WHITE, flex: 1, zIndex: 1000, marginHorizontal: 18, borderBottomColor: '#EBEBEB', borderBottomWidth: .5 }}>
          <View style={{paddingTop: 30, flex: 1, paddingBottom: 20}} >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Logo />
              <Text style={{fontWeight: '200', fontSize: 34, lineHeight: 41, letterSpacing: 0.04, color: COLOR.BLACK, fontFamily: "SF"}}>Apple’s</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, paddingHorizontal: 8}} onTouchStart={(e) => { props.navigation.navigate("Auth") }}>
              <Svg width="16" height="19" viewBox="0 0 16 19" fill="none">
                <Path d="M7.99973 8.8116C10.4374 8.8116 12.4135 6.83905 12.4135 4.4058C12.4135 1.97254 10.4374 0 7.99973 0C5.56206 0 3.58594 1.97254 3.58594 4.4058C3.58594 6.83905 5.56206 8.8116 7.99973 8.8116Z" fill={"#C5C6C7"}/>
                <Path d="M8 11.0144C3.58172 11.0144 0 14.5896 0 18.9999H16C16 14.5896 12.4183 11.0144 8 11.0144Z" fill={"#C5C6C7"}/>
              </Svg>
              <Text style={{marginLeft: 20, color: COLOR.BLACK, fontSize: 14}}>Войти в личный кабинет</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'column', flex: 5, paddingBottom: 20}}>
          <View style={drawerStyle.listItemWrapper}>
            <DrawerItemList {...props} labelStyle={{fontFamily: 'Roboto-Medium'}}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const drawerStyle = StyleSheet.create({
  listItemWrapper: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    // borderTopColor: '#EBEBEB',
    // borderTopWidth: 1,
    flex: 1
  },
  listItem: {
    borderRadius: 4,
    // flexDirection: 'row',
    // paddingVertical: 12,
    // paddingHorizontal: 8,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // flex: 1,
  },
  listItemChecked: {
    backgroundColor: COLOR.GRAY, 
  },
  listItemCheckedText: { color: COLOR.GREEN },
  listItemCheckedIcon: {color: COLOR.GREEN },
  listItemText: { 
    fontSize: 14, 
    color: COLOR.BLACK, 
    fontWeight: 'bold',
  },
  listItemIcon: { 
    color: '#949DA6',
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  listItemIconWrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'}
});


