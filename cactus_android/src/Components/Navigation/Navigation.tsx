import React, { createContext, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../Screens/Home/Home';
import { Logo } from '../Icons/Icons';
import { TabBarLabel } from '../TabBarLabel/TabBarLabel';
import { TabBarIcon } from '../TabBarIcon/TabBarIcon';
import { Catalog } from '../../Screens/Catalog/Catalog';
import { Stocks } from '../../Screens/Stocks/Stocks';
import { Profile } from '../../Screens/Profile/Profile';
import { More } from '../../Screens/More/More';
import { createStackNavigator } from '@react-navigation/stack';
import BrandCards from '../../Screens/BrandCards/BrandCards';
import { CatalogItemList } from '../../Screens/CatalogItemList/CatalogItemList';
import { Phone } from '../../Screens/Phone/Phone';
import { Characters } from '../../Screens/Characters/Characters';
import { Description } from '../../Screens/Description/Description';
import { CurrentStock } from '../../Screens/CurrentStock/CurrentStock';
import { Notification } from '../../Screens/Notification/Notification';
import { Orders } from '../../Screens/Orders/Orders';
import { CurrentOrder } from '../../Screens/CurrentOrder/CurrentOrder';
import { Bonus } from '../../Screens/Bonus/Bonus';
import { Liked } from '../../Screens/Liked/Liked';
import { CompareList } from '../../Screens/CompareList/CompareList';
import { Compare } from '../../Screens/Compare/Compare';
import { Settings, SettingsItem } from '../../Screens/Settings/Settings';
import { Feedback } from '../../Screens/Feedback/Feedback';
import { NewsList } from '../../Screens/NewsList/NewsLIst';
import { CurrentNews } from '../../Screens/CurrentNews/CurrentNews';
import { DecorationMap } from '../../Screens/DecorationMap/DecorationMap';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../constants/Colors';
import { Text } from 'react-native';

export const RootNavigationContext = createContext('');


const BottomTabNavigator = createBottomTabNavigator();
const MenuStack = createStackNavigator();
const CatalogStack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Actions"

function CatalogStackScreen(props: any) {
  const RootContext = React.useContext(RootNavigationContext);
  return(
    <CatalogStack.Navigator headerMode="none" initialRouteName="Catalog">
      <CatalogStack.Screen name="Catalog" component={Catalog} />
      <CatalogStack.Screen name="BrandCards" component={BrandCards} />
      <CatalogStack.Screen name="CatalogItemList" initialParams={{title: 'Смартфоны'}} component={CatalogItemList} />
      <CatalogStack.Screen name="Phone" component={Phone} />
      <CatalogStack.Screen name="Characters" component={Characters} />
      <CatalogStack.Screen name="Description"  initialParams={{
            data: [
                {
                    title: 'Ничего лишнего. Только самое.',
                    description: [{
                        text: 'Новая система двух камер. Можно делать фотоснимки с широким и сверхшироким углом обзора. Обновлённый интерфейс и новая сверхширокоугольная камера позволят увидеть и снять то, что происходит за пределами кадра. Снимать и редактировать видеоролики теперь так же легко, как фотографии. Это по-прежнему невероятно популярная камера, но с совершенно новыми перспективами.'
                    }],
                    image: {
                        src: require('../../../assets/images/phone.png'),
                        width: 310,
                        height: 420,
                    }
                },
                {
                    title: 'Новая сверхширокоугольная камера.',
                    description: [{
                        text: 'Снимайте с размахом - с новой сверхширокоугольной камерой область изображения в четыре раза больше. В кадр поместится всё. Бескрайние пейзажи. Сцена вместе со зрителями на музыкальном фестивале. Вся семья на фоне умопомрачительных видов, ради которых вы пролетели тысячи километров.'
                    }],
                    image: {
                        src: require('../../../assets/images/cameraDescr.png'),
                        width: '100%',
                        height: 160,
                    }
                },
                {
                    title: 'Знакомьтесь. Ночной режим.',
                    description: [{
                        text: 'Плохое освещение не помеха хорошему фото. Ночной режим автоматически включается при низкой освещённости и позволяет делать великолепные фотографии. Вспышка не понадобится. Цвета будут выглядеть естественно, а сами фотографии — ярче.'
                    }],
                    image: {
                        src: require('../../../assets/images/nightDescr.png'),
                        width: '100%',
                        height: 214,
                    }
                },
                {
                    title: 'Снимайте портреты, получайте шедевры.',
                    description: [{
                        text: 'Новые виды портретов, дополнительные варианты освещения и слаженная работа двух камер iPhone 11 — всё это означает только одно: потрясающие фотографии. В портретном режиме теперь отлично получаются не только лица людей, но и мордахи домашних любимцев.'
                    }],
                    image: {
                        src: require('../../../assets/images/portretDescr.png'),
                        width: '100%',
                        height: 150,
                    }
                },
                {
                    title: 'Снимайте видео высочайшего качества. И редактируйте его.',
                    description: [{
                        text: 'На все камеры iPhone 11 можно снимать невероятно чёткое видео 4K с частотой 60 кадров/с. С объективом сверхширокоугольной камеры область изображения в четыре раза больше. Поэтому камера отлично подходит для съёмки сцен с движением — например, как ваша собака гоняется за мячом. А если, скажем, вы записываете выступление ребёнка на концерте и приближаете изображение, звук приближается тоже. Кроме того, редактировать видео теперь так же легко, как фото.'
                    }],
                    image: {
                        src: require('../../../assets/images/videoDescr.png'),
                        width: '100%',
                        height: 150,
                    }
                },
                {
                    title: 'Новое поколение Smart HDR.',
                    description: [{
                        text: 'Благодаря технологиям машинного обучения функция Smart HDR работает эффективнее, чем когда‑либо. Она распознаёт людей и обрабатывает их изображения иначе, чем остальную часть кадра. Благодаря игре света и тени лица выглядят выразительно, а оттенки кожи — естественно. И закат на заднем плане остаётся таким же восхитительным.'
                    }],
                    image: {
                        src: require('../../../assets/images/smartDescr.png'),
                        width: '100%',
                        height: 150,
                    }
                },
                {
                    title: 'Самое прочное стекло iPhone.',
                    description: [{
                        text: 'Передняя и задняя стеклянные панели закалены методом двойного ионного обмена.'
                    }],
                },
                {
                    title: 'Защита от воды. Теперь в два раза глубже.',
                    description: [{
                        text: 'iPhone 11 ещё лучше защищён от воды: он выдерживает погружение на глубину до 2 метров длительностью до 30 минут — вдвое глубже, чем iPhone XR.',
                    }],
                    image: {
                        src: require('../../../assets/images/whaterDescr.png'),
                        width: '100%',
                        height: 170,
                    }
                },
                {
                    title: 'Зима и лето своим цветом.',
                    description: [
                        {
                            title: 'ЖК‑дисплей Liquid Retina.',
                            text: 'Переднюю панель целиком занимает дисплей с невероятно точной цветопередачей, на котором всё выглядит просто превосходно.'
                        },
                        {
                            title: 'Технология True Tone.',
                            text: 'Баланс белого автоматически настраивается в соответствии с цветовой температурой окружающего освещения.'
                        },
                        {
                            title: 'Функция касания или подъёма для активации.',
                            text: 'Ваш iPhone мгновенно готов к работе.'
                        },
                        {
                            title: 'Тактильный отклик при нажатии.',
                            text: 'Контекстные меню и быстрые команды позволяют выполнять все основные действия быстрее.'
                        },
                    ],
                    image: {
                        src: require('../../../assets/images/3dtouchDescr.png'),
                        width: 270,
                        height: 327,
                    }
                },
                {
                    title: 'Выходит на полный рабочий день.',
                    description: [{
                        text: 'Аппаратное и программное обеспечение слаженно работают вместе, поэтому заряд аккумулятора используется с максимальной эффективностью. А возможность быстрой зарядки позволяет быстро вернуть разряженный телефон в строй.'
                    }],
                    image: {
                        src: require('../../../assets/images/bataryDescr.png'),
                        width: '100%',
                        height: 120,
                    }
                },
                {
                    title: 'Процессор - просто Pro.',
                    description: [{
                        text: 'Мощный процессор A13 Bionic выполняет любые задачи быстро и плавно. Кроме того, он работает максимально энергоэффективно, позволяя экономить заряд аккумулятора. По сути, технологии A13 Bionic настолько продвинуты, что их можно назвать технологиями будущего.'
                    }],
                    image: {
                        src: require('../../../assets/images/processorDescr.png'),
                        width: '100%',
                        height: 130,
                    }
                },
                {
                    title: 'Можно без рук. Face ID удобнее и надёжнее, чем Touch ID.',
                    description: [{
                        text: 'Максимально надёжная технология аутентификации по лицу. Face ID позволяет мгновенно разблокировать iPhone и обеспечивает защиту личных данных ещё лучше, чем Touch ID. Одним взглядом вы можете входить в приложения и учётные записи, а также оплачивать покупки с Apple Pay. Настраивается функция легко и быстро.'
                    }],
                },

            ]
        }} component={Description} />
    </CatalogStack.Navigator>
  )
}


const MenuStackNavigator = (props:any) => {
  return(
    <MenuStack.Navigator headerMode="none" initialRouteName="More">
      <MenuStack.Screen component={More} name="More"/>
      <MenuStack.Screen component={Notification} name="Notification"/>
      <MenuStack.Screen component={Orders} initialParams={{title: 'Все', orders: [{
        orderDate: '27.02.2020',
        orderNumber: '245312351',
        orderPrice: '49 198 ₴',
        orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png')]
      }]}} name="Orders"/>
      <MenuStack.Screen component={CurrentOrder} initialParams={{ orders: {
        orderDate: '27.02.2020',
        orderNumber: '245312351',
        orderPrice: '49 198 ₴',
        orderImage: [require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png'),require('../../../assets/images/phone.png')]
      }}} name="CurrentOrder"/>
      <MenuStack.Screen component={Bonus} name="Bonus"/>
      <MenuStack.Screen component={Liked} name="Liked"/>
      <MenuStack.Screen component={CompareList} name="CompareList"/>
      <MenuStack.Screen component={Compare} name="Compare" 
      initialParams={{
        items: [
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
        ]
      }}/>
      <MenuStack.Screen component={Settings} initialParams={{
        selectedSpam: 'Русский',
        selectedInterface: 'Русский'
      }} name="Settings"/>
      <MenuStack.Screen component={SettingsItem} name="SettingsItem"/>
      <MenuStack.Screen component={DecorationMap} name="Shops"/>
      <MenuStack.Screen component={Feedback} name="Feedback"/>
      <MenuStack.Screen component={NewsList} name="NewsList"/>
      <MenuStack.Screen component={CurrentNews} name="CurrentNews"/>
    </MenuStack.Navigator>
  )
}

const StockStack = createStackNavigator();

const StockNavitaior = (props: any) => {
  return(
    <StockStack.Navigator headerMode="none">
      <StockStack.Screen name="Stocks" initialParams={
                      {title: 'Все'}
                    } component={Stocks}/>
      <StockStack.Screen name="CurrentStock" initialParams={{
      title: 'Успей приобрести новый iPhone 11 по супер выгодной цене',
      text: <Text>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модели iPhone. Количество ограничено.{`\n\n`}Покупай <Text style={{color: Colors.lightGreen, fontWeight: "bold"}}>iPhone 11</Text> в период с <Text style={{fontWeight: '500'}}>11.03.20</Text> по <Text style={{fontWeight: '500'}}>11.04.20</Text> и получи скидку в 2 000 гривен! Подробности у продавцов-консультантов.</Text>,
      }} component={CurrentStock}/>
    </StockStack.Navigator>
  )
}


export const Navigation: React.FC = (props: any) => {
    return(
        <RootNavigationContext.Provider value={props}>
          <BottomTabNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{
            }} tabBarOptions={{
                style: { backgroundColor: '#F9F9F9', height: 64, },
                keyboardHidesTabBar: true,
                activeTintColor: Colors.tintColor,
                inactiveTintColor: Colors.gray
            }}>
          <BottomTabNavigator.Screen  name="Home" component={Home} options={{
              tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} name="Главная"/>,
              tabBarIcon: ({ focused, color }) => <Svg width={26} height={25}>
              <Path d="M25.6743 12.1976C26.1456 11.6828 26.1001 10.8937 25.5726 10.4356L13.9529 0.337365C13.4255 -0.120727 12.5799 -0.111131 12.0636 0.358998L0.404373 10.974C-0.111942 11.4441 -0.137283 12.2322 0.348267 12.7335L0.64058 13.0358C1.12554 13.5371 1.90942 13.5969 2.39031 13.1689L3.26165 12.3939V23.7403C3.26165 24.4364 3.82958 25 4.52998 25H9.07478C9.77518 25 10.3431 24.4364 10.3431 23.7403V15.8024H16.14V23.7403C16.13 24.4359 16.6311 24.9995 17.3315 24.9995H22.1479C22.8482 24.9995 23.4162 24.4359 23.4162 23.7398V12.5537C23.4162 12.5537 23.6569 12.7631 23.9538 13.0223C24.2502 13.2809 24.8727 13.0735 25.344 12.5582L25.6743 12.1976Z" fill={color}/>
            </Svg>,
          }}/>
          <BottomTabNavigator.Screen
              name="CatalogStackScreen"
              component={CatalogStackScreen}
              options={{
              tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} name='Каталог' />,
              tabBarIcon: ({ focused, color }) => <Svg color={color} width={25} height={25}>
                <Path d="M25 12.9464H0V23.6607C0 24.0159 0.141103 24.3565 0.392268 24.6077C0.643433 24.8589 0.984085 25 1.33929 25H23.6607C24.0159 25 24.3566 24.8589 24.6077 24.6077C24.8589 24.3565 25 24.0159 25 23.6607V12.9464ZM16.7455 15.9076L16.2545 17.3875C16.1655 17.6546 15.9947 17.8868 15.7662 18.0513C15.5377 18.2157 15.2632 18.304 14.9817 18.3036H10.0183C9.73761 18.3031 9.46416 18.2145 9.23658 18.0502C9.009 17.8859 8.83879 17.6542 8.75 17.3879L8.25446 15.9071C8.20977 15.7729 8.19759 15.63 8.21894 15.4902C8.24029 15.3504 8.29454 15.2177 8.37724 15.1029C8.45994 14.9882 8.56872 14.8947 8.69461 14.8303C8.8205 14.7658 8.9599 14.7322 9.10134 14.7321H15.8987C16.0403 14.7319 16.1799 14.7654 16.306 14.8298C16.4321 14.8942 16.5411 14.9877 16.6239 15.1025C16.7068 15.2173 16.7612 15.3502 16.7825 15.4902C16.8039 15.6302 16.7917 15.7732 16.7469 15.9076H16.7455Z" fill={"currentColor"}/>
                <Path d="M9.59531 17.1054C9.62491 17.1942 9.6817 17.2715 9.75765 17.3263C9.83361 17.3811 9.92487 17.4106 10.0185 17.4107H14.9819C15.0756 17.4106 15.1668 17.3811 15.2428 17.3263C15.3187 17.2715 15.3755 17.1942 15.4051 17.1054L15.8984 15.625H9.10156L9.59531 17.1054Z" fill={"currentColor"}/>
                <Path d="M20.1731 1.78574H4.8231L4.20703 4.01788H20.7892L20.1731 1.78574Z" fill="currentColor"/>
                <Path d="M21.196 1.62488e-10H3.8058C3.7081 -2.63513e-06 3.61309 0.03205 3.53535 0.0912407C3.45761 0.150431 3.40144 0.233491 3.37545 0.327679L0.140625 12.0536H24.8612L21.6263 0.327679C21.6004 0.233491 21.5442 0.150431 21.4664 0.0912407C21.3887 0.03205 21.2937 -2.63513e-06 21.196 1.62488e-10ZM23.4571 10.9848C23.4153 11.0398 23.3612 11.0843 23.2993 11.1148C23.2373 11.1453 23.1691 11.161 23.1 11.1607H1.89955C1.8308 11.1607 1.76297 11.1448 1.70135 11.1143C1.63974 11.0838 1.58602 11.0394 1.54436 10.9847C1.50271 10.93 1.47425 10.8664 1.46121 10.7989C1.44817 10.7314 1.45091 10.6618 1.4692 10.5955L4.05536 1.22054C4.08135 1.12635 4.13752 1.04329 4.21526 0.984098C4.293 0.924907 4.38801 0.892855 4.48571 0.892857H20.5161C20.6138 0.892855 20.7088 0.924907 20.7865 0.984098C20.8643 1.04329 20.9204 1.12635 20.9464 1.22054L23.5326 10.5955C23.5509 10.6618 23.5535 10.7315 23.5405 10.799C23.5274 10.8665 23.4989 10.9301 23.4571 10.9848Z" fill={"currentColor"}/>
                <Path d="M2.48438 10.2679H22.5147L21.8991 8.03574H3.1L2.48438 10.2679Z" fill={"currentColor"}/>
                <Path d="M3.34766 7.14288H21.6539L21.0383 4.91074H3.96328L3.34766 7.14288Z" fill={"currentColor"}/>
            </Svg>,
              }}
          />
          <BottomTabNavigator.Screen
              name="StockNavitaior"
              component={StockNavitaior}
              options={{
              tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} name='Акции' />,
              tabBarIcon: ({ focused,color }) => 
              <Svg width={24} height={25}>
                <Path d="M21.4431 3.31769H14.3281C13.6446 3.31769 13.0022 3.57653 12.519 4.04655L2.45641 13.8336C1.97316 14.3036 1.70703 14.9284 1.70703 15.5931C1.70703 16.2577 1.97316 16.8826 2.45641 17.3525L9.5714 24.2725C10.0701 24.7575 10.7253 25 11.3804 25C12.0355 25 12.6906 24.7575 13.1893 24.2724L23.2521 14.4853C23.7353 14.0152 24.0014 13.3904 24.0014 12.7258V5.80587C24.0014 4.4339 22.8538 3.31769 21.4431 3.31769ZM18.032 11.6118C16.6214 11.6118 15.4737 10.4956 15.4737 9.12359C15.4737 7.75157 16.6214 6.63536 18.032 6.63536C19.4427 6.63536 20.5903 7.75157 20.5903 9.12359C20.5903 10.4956 19.4427 11.6118 18.032 11.6118Z" fill={color}/>
                <Path d="M19.7361 0H12.621C11.9376 0 11.2952 0.258838 10.812 0.728857L0.749382 10.5159C0.266127 10.9859 0 11.6107 0 12.2754C0 12.7953 0.163461 13.2904 0.465684 13.7065C0.666447 13.3252 0.928507 12.9722 1.249 12.6605L11.3116 2.87349C12.1169 2.09023 13.1876 1.65884 14.3266 1.65884H21.4416C21.6897 1.65884 21.9326 1.68071 22.1692 1.72051C21.8357 0.723144 20.8713 0 19.7361 0Z" fill={color}/>
              </Svg>,
              }}
          />
          <BottomTabNavigator.Screen
              name="Profile"
              component={Profile}
              options={{
              tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} name='Профиль' />,
              tabBarIcon: ({ focused, color }) => <Svg width={24} height={25} color={color}>
                <Path d="M10.3399 12.0425C12.0057 12.0425 13.4481 11.4492 14.6266 10.2784C15.8051 9.1079 16.4026 7.67569 16.4026 6.02107C16.4026 4.36703 15.8051 2.93462 14.6264 1.76371C13.4477 0.593372 12.0055 0 10.3399 0C8.67403 0 7.23202 0.593372 6.05349 1.7639C4.87496 2.93443 4.27734 4.36684 4.27734 6.02107C4.27734 7.67569 4.87496 9.10809 6.05368 10.2786C7.23241 11.449 8.6746 12.0425 10.3399 12.0425Z" fill="currentColor"/>
                <Path d="M20.9491 19.2236C20.9151 18.7365 20.8464 18.2051 20.7452 17.644C20.643 17.0786 20.5115 16.5442 20.354 16.0557C20.1913 15.5509 19.9701 15.0523 19.6966 14.5745C19.4128 14.0786 19.0794 13.6468 18.7054 13.2914C18.3142 12.9197 17.8352 12.6208 17.2814 12.4028C16.7295 12.186 16.1178 12.0761 15.4636 12.0761C15.2066 12.0761 14.9581 12.1808 14.4782 12.4911C14.1829 12.6824 13.8374 12.9037 13.4518 13.1484C13.1221 13.3571 12.6754 13.5526 12.1237 13.7296C11.5854 13.9026 11.0389 13.9903 10.4994 13.9903C9.95999 13.9903 9.41365 13.9026 8.87479 13.7296C8.32365 13.5527 7.87697 13.3572 7.54763 13.1486C7.16566 12.9062 6.82 12.6849 6.52023 12.4909C6.0409 12.1806 5.79222 12.0759 5.53527 12.0759C4.88081 12.0759 4.26936 12.186 3.71764 12.403C3.16419 12.6206 2.68506 12.9195 2.2935 13.2916C1.9196 13.6472 1.58603 14.0788 1.30259 14.5745C1.02932 15.0523 0.808091 15.5507 0.645244 16.0559C0.487966 16.5444 0.35642 17.0786 0.254257 17.644C0.153053 18.2044 0.0843042 18.7359 0.0503137 19.2242C0.0168992 19.7026 0 20.199 0 20.7005C0 22.0055 0.41768 23.062 1.24133 23.8411C2.05479 24.6099 3.13116 25 4.44008 25H16.5599C17.8688 25 18.9448 24.6101 19.7585 23.8411C20.5823 23.0625 21 22.0059 21 20.7003C20.9998 20.1966 20.9827 19.6997 20.9491 19.2236Z" fill="currentColor"/>

              </Svg>,
              }}
          />
          <BottomTabNavigator.Screen
              name="MenuStackNavigator"
              component={MenuStackNavigator}
              options={{
              tabBarLabel: ({ focused }) => <TabBarLabel focused={focused} name='Ещё' />,
              tabBarIcon: ({ focused, color }) => (
                <Svg width="28" height="7" color={color} viewBox="0 0 28 7" fill="none">
                  <Path d="M17.4999 3.5C17.4999 5.43307 15.933 7 13.9999 7C12.0669 7 10.4999 5.43307 10.4999 3.5C10.4999 1.56693 12.0669 0 13.9999 0C15.933 0 17.4999 1.56693 17.4999 3.5Z" fill="currentColor"/>
                  <Path d="M7 3.5C7 5.43307 5.43307 7 3.5 7C1.56693 7 0 5.43307 0 3.5C0 1.56693 1.56693 0 3.5 0C5.43307 0 7 1.56693 7 3.5Z" fill="currentColor"/>
                  <Path d="M28.0001 3.5C28.0001 5.43307 26.4331 7 24.5001 7C22.567 7 21.0001 5.43307 21.0001 3.5C21.0001 1.56693 22.567 0 24.5001 0C26.4331 0 28.0001 1.56693 28.0001 3.5Z" fill="currentColor"/>
                </Svg>
              ),
              }}
          />
            </BottomTabNavigator.Navigator>
        </RootNavigationContext.Provider>
    )
}