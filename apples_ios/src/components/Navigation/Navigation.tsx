import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../../Screens/Home/Home';
import { HomeIcon, CatalogIcon } from '../Icons/Icons';
import { COLOR } from '../../common/color';
import { Catalog } from '../../Screens/Catalog/Catalog';
import { createStackNavigator } from '@react-navigation/stack';
import { CatalogItemList } from '../../Screens/CatalogItemList/CatalogItemList';
import { ProductList } from '../../Screens/ProductList/ProductList';
import { Product } from '../Product/Product';
import { Characters } from '../../Screens/Characters/Characters';
import { Description } from '../../Screens/Description/Description';
import { Profile } from '../../Screens/Profile/Profile';
import Svg, { Path } from 'react-native-svg';
import { Stocks } from '../../Screens/Stocks/Stocks';
import { CurrentStock } from '../../Screens/CurrentStock/CurrentStock';
import { More } from '../../Screens/More/More';
import { Notification } from '../../Screens/Notification/Notification';
import { Orders } from '../../Screens/Orders/Orders';
import { CurrentOrder } from '../../Screens/CurrentOrder/CurrentOrder';
import { Bonus, BonusInfo } from '../../Screens/Bonus/Bonus';
import { Liked } from '../../Screens/Liked/Liked';
import { CompareList } from '../../Screens/CompareList/CompareList';
import { Compare } from '../../Screens/Compare/Compare';
import { Settings, SettingsItem } from '../../Screens/Settings/Settings';
import { NewsList } from '../../Screens/NewsList/NewsList';
import { CurrentNews } from '../../Screens/CurrentNews/CurrentNews';
import { Shops } from '../../Screens/Shops/Shops';

const CatalogNav = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const StockNav = createStackNavigator();
const MenuStack = createStackNavigator();
const CatalogNavigator:React.FC = (props: any) => (
    <CatalogNav.Navigator headerMode="none">
        <CatalogNav.Screen name="Catalog" component={Catalog}/>
        <CatalogNav.Screen name="CatalogItemList" initialParams={{
            title: 'iphone',
            items: [
                {
                    name: 'iPhone SE',
                    image: {
                        src: require('../../../assets/catalog/iphoneSE.png'),
                        width: 100,
                        height: 100,
                    }
                },
                {
                    name: 'iPhone 11 Pro',
                    image: {
                        src: require('../../../assets/catalog/iphone11Pro.png'),
                        width: 80,
                        height: 80,
                    }
                },
                {
                    name: 'iPhone 11 Pro Max',
                    image: {
                        src: require('../../../assets/catalog/iphone11ProMax.png'),
                        width: 95,
                        height: 90,
                    }
                },
                {
                    name: 'iPhone 11',
                    image: {
                        src: require('../../../assets/catalog/iphone.png'),
                        width: 58,
                        height: 80,
                    }
                },
                {
                    name: 'iPhone XR',
                    image: {
                        src: require('../../../assets/catalog/iphoneXr.png'),
                        width: 84,
                        height: 99,
                    }
                },
                {
                    name: 'iPhone 8',
                    image: {
                        src: require('../../../assets/catalog/iphone8.png'),
                        width: 94,
                        height: 94,
                    }
                },
            ]
        }} component={CatalogItemList}/>
        <CatalogNav.Screen name="ProductList" component={ProductList}/>
        <CatalogNav.Screen name="Product" component={Product}/>
        <CatalogNav.Screen name="Characters" initialParams={{
            data: [
                {
                    title: 'Корпус',
                    items: [
                        {title: 'Материалы корпуса', description: 'Металл, стекло'},
                        {title: 'Влагозащита', description: 'IP68'},
                        {title: 'Габариты (ВхШхГ)', description: '150,9 x 75,7 x 8,3 мм'},
                        {title: 'Вес', description: '194 г'},
                        {title: 'Цвет', description: 'Красный'},
                        {title: 'Стилус', description: 'Нет'},
                        ]
                },
                {
                    title: 'Дисплей',
                    items: [
                        {title: 'Тип экрана', description: 'IPS'},
                        {title: 'Размер экрана', description: 'Безрамочный дисплей 6,1"'},
                        {title: 'Соотношение сторон', description: '19,5:9'},
                        {title: 'Разрешение экрана', description: 'Liquid Retina HD'},
                        {title: 'Разрешение экрана, PX', description: '1792 х 828'},
                        {title: 'Плотность пикселей, PPI', description: '326'},
                        {title: 'Количество цветов дисплея', description: '16 млн'},
                        {title: 'Соотношение экран/корпус', description: '79%'},
                        {title: 'Устойчивое к царапинам стекло', description: 'Да'},
                        ]
                },
                {
                    title: 'Камера',
                    items: [
                        {title: 'Основная камера, Мп', description: '12,0 Мп + 12,0 Мп'},
                        {title: 'Диафрагма основной камеры', description: 'f/1,8 + f/2,4'},
                        {title: 'Фронтальная камера, Мп', description: '12,0 Мп'},
                        {title: 'Количество модулей основной камеры', description: '2'},
                        {title: 'Автофокусировка', description: 'Да'},
                        {title: 'Встроенная вспышка', description: 'Да'},
                        {title: 'Стабилизация', description: 'Да'},
                        {title: 'Максимальное разрешение видеосъёмки', description: '4K UHD (3840 x 2160), 60fps'},
                        {title: 'Особенности камеры', description: 'Система двух камер 12 Мп: сверхширокоугольная и широкоугольная; Сверхширокоугольная: диафрагма ƒ/2.4 и угол обзора 120°; Широкоугольная: диафрагма ƒ/1.8; Двукратный оптический зум на уменьшение; цифровой зум (до 5 раз); Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Оптическая стабилизация изображения (широкоугольная камера); Пятилинзовый объектив (сверхширокоугольная камера); шестилинзовый объектив (широкоугольная камера); Более яркая вспышка True Tone с функцией Slow Sync; Панорамная съёмка (с разрешением до 63 Мп); Поддержка Focus Pixels на всей матрице (широкоугольная камера); Ночной режим; Автокоррекция; Функция Smart HDR нового поколения для фото; Широкий цветовой диапазон для фотографий и Live Photos; Передовая система устранения эффекта красных глаз; Автоматическая стабилизация изображения; Привязка фотографий к месту съёмки; Форматы изображений: HEIF и JPEG; Камера TrueDepth: Диафрагма ƒ/2.2; Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Animoji и Memoji; Съёмка видео 4K с частотой 24, 30 или 60 кадров/﻿с; Съёмка HD‑видео 1080p с частотой 30 или 60 кадров/﻿с; Запись замедленного видео 1080р с частотой 120 кадров/﻿с; Функция Smart HDR нового поколения для фото; Расширенный динамический диапазон при съёмке видео с частотой 30 кадров/﻿с; Кинематографическая стабилизация видео (4K, 1080p и 720p); Широкий цветовой диапазон для фотографий и Live Photos; Вспышка Retina Flash; Автоматическая стабилизация изображения; Серийная съёмка; Съёмка видео: Видео 4K с частотой 24, 30 или 60 кадров﻿/﻿с; HD-видео 1080p с частотой 30 или 60 кадров﻿/﻿с; HD‑видео 720p с частотой 30 кадров﻿/﻿с; Расширенный динамический диапазон при съёмке видео с частотой до 60 кадров﻿/﻿с; Оптическая стабилизация изображения при съёмке видео (широкоугольная камера); Двукратный оптический зум на уменьшение; цифровой зум (до 3 раз); Аудиозум; Более яркая вспышка True Tone; Функция QuickTake для быстрого переключения в режим видео с отслеживанием объекта съёмки; Замедленное видео с разрешением 1080р и частотой 120 или 240 кадров﻿/﻿с; Режим «Таймлапс» со стабилизацией изображения; Кинематографическая стабилизация видео (4K, 1080p и 720p); Следящий автофокус; Возможность съёмки фотографий 8 Мп во время записи видео 4К; Увеличение при воспроизведении; Форматы HEVC и H.264; Стереозвук'},
                      ]
                },
                {
                    title: 'Производительность',
                    items: [
                        {title: 'Процессор', description: 'Apple A13'},
                        {title: 'Количество ядер', description: '6 ядер'},
                        {title: 'Частота процессора', description: '1,82 ГГц, 2,66 ГГц'},
                        {title: 'Видеопроцессор', description: 'Собственный графический ускоритель'},
                        {title: 'Смартфон для гейминга', description: 'Да'},
                        ]
                },
                {
                    title: 'Память',
                    items: [
                        {title: 'Объем оперативной памяти', description: '4 Гб'},
                        {title: 'Объем встроенной памяти', description: '64 Гб'},
                        {title: 'Слот для карты памяти', description: 'Нет'},
                        {title: 'Тип карты памяти', description: 'Нет'},
                        {title: 'Максимальный объем карты памяти', description: 'Нет'},
                      ]
                },
                {
                    title: 'Операционная система',
                    items: [
                        {title: 'Платформа', description: 'iOS'},
                        {title: 'Операционная система', description: 'iOS 13'},
                        ]
                },
                {
                    title: 'Связь',
                    items: [
                        {title: 'Тип связи', description: '2G, 3G, 4G (LTE)'},
                        {title: 'Поддерживаемые стандарты связи', description: 'FDD‑LTE (диапазоны 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 66); TD‑LTE (диапазоны 34, 38, 39, 40, 41); UMTS/HSPA+/DC‑HSDPA (850, 900, 1700/2100, 1900, 2100 МГц); GSM/EDGE (850, 900, 1800, 1900 МГц)'},
                        {title: 'Количество SIM-карт', description: '1 SIM'},
                        {title: 'Тип SIM-карты', description: 'Nano-SIM'},
                        {title: 'Гибридный слот SIM-карта/карта памяти', description: 'Нет'},
                        {title: 'Навигационные возможности', description: 'GPS, A-GPS, ГЛОНАСС, iBeacon'},
                      ]
                },
                {
                    title: 'Подключения и датчики',
                    items: [
                        {title: 'Wi-Fi', description: 'Да'},
                        {title: 'Bluetooth', description: 'Да'},
                        {title: 'Стандарт Bluetooth', description: '5,0'},
                        ]
                }
            ],
            product: {
                title: 'Apple iPhone 11 64Gb Red (MWLV2)',
                image: {
                    src: require('../../../assets/images/phone.png'),
                    width: 105,
                    height: 144
                }
            },
            title: 'Характеристики'
        }} component={Characters} />
        <CatalogNav.Screen name="Description" initialParams={{
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

            ],
            title: 'Описание'
        }}  component={Description} />
    </CatalogNav.Navigator>
)

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
        <MenuStack.Screen component={BonusInfo} name="BonusInfo"/>
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
        <MenuStack.Screen component={Shops} name="Shops"/>
        <MenuStack.Screen component={NewsList} name="NewsList"/>
        <MenuStack.Screen component={CurrentNews} name="CurrentNews"/>
      </MenuStack.Navigator>
    )
  }

const StockNavigator:React.FC = (props: any) => (
    <StockNav.Navigator headerMode="none" >
        <StockNav.Screen name="Stocks" initialParams={
                      {title: 'Все'}
                    } component={Stocks}/>
        <StockNav.Screen name="CurrentStock" initialParams={{
          title: 'Успей приобрести новый iPhone 11 по супер выгодной цене',
          text: <Text>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модели iPhone. Количество ограничено.{`\n\n`}Покупай  iPhone 11 в период с <Text style={{color: COLOR.TINT_COLOR}}>01 марта по 01 июня</Text> и получи скидку в <Text style={{color: COLOR.TINT_COLOR}}>2 000 гривен</Text>! Подробности у продавцов-консультантов.</Text>,
        }} component={CurrentStock}/>
    </StockNav.Navigator>
)

export const Navigation :React.FC = () => {
    return(
        <BottomTabNavigator.Navigator screenOptions={{
          unmountOnBlur: true
        }} tabBarOptions={{
            style: { backgroundColor: '#F6F6F6', height: 64, paddingBottom: 2},
            keyboardHidesTabBar: true,
            activeTintColor: COLOR.TINT_COLOR,
            inactiveTintColor: COLOR.GRAY,
        }}>
            <BottomTabNavigator.Screen name="Home" initialParams={{title: 'asd'}} component={Home} options={{
                tabBarLabel: 'Главная',
                tabBarIcon: ({ focused, color }) => (<HomeIcon width={28} height={25} color={color}/>)
            }}/>
            <BottomTabNavigator.Screen name="CatalogNavigator" initialParams={{title: 'asd'}} component={CatalogNavigator} options={{
                tabBarLabel: 'Каталог',
                tabBarIcon: ({ focused, color }) => (<CatalogIcon width={28} height={25} color={color}/>)
            }}/>
            <BottomTabNavigator.Screen name="StockNavigator" initialParams={{title: 'asd'}} component={StockNavigator} options={{
                tabBarLabel: 'Акции',
                tabBarIcon: ({ focused, color }) => (
                <Svg width="27" height="25" viewBox="0 0 27 25" fill="none">
                    <Path d="M23.9166 2.03006C23.9152 0.908671 22.9958 0 21.8616 0H13.2566C12.7116 0 12.1889 0.214051 11.8035 0.595152L0.60213 11.6703C-0.200646 12.464 -0.20071 13.751 0.601937 14.5449L9.20691 23.0547C9.6082 23.4516 10.1342 23.6501 10.6602 23.6501C10.9913 23.6501 11.3188 23.5622 11.6188 23.4049C12.7167 22.5108 11.0924 24.0644 23.3147 11.9796C23.7003 11.5984 23.9169 11.0814 23.9169 10.5423C23.9169 1.91033 23.9169 3.38487 23.9166 2.03006ZM22.8892 10.5422C22.8892 10.8137 22.7823 11.0689 22.5882 11.2609L11.3868 22.3362C11.1927 22.5282 10.9346 22.6339 10.6601 22.6339C10.3856 22.6339 10.1276 22.5281 9.93344 22.3362L1.3286 13.8263C1.13451 13.6344 1.02764 13.3791 1.02764 13.1077C1.02764 12.8362 1.13457 12.581 1.32867 12.3891L12.53 1.31384C12.7241 1.12196 12.9821 1.01627 13.2566 1.01627H21.8617C22.4283 1.01627 22.8893 1.47219 22.8893 2.03254V10.5422H22.8892Z" fill={color}/>
                    <Path d="M25.9726 2.03223V11.5581C25.9726 11.8296 25.8657 12.0848 25.6716 12.2768L13.5308 24.2811L14.2574 24.9998L26.3981 12.9955C26.7837 12.6142 27.0002 12.0972 27.0002 11.5581V2.03223H25.9726Z" fill={color}/>
                    <Path d="M18.2657 3.55713C17.1327 3.55713 16.2104 4.46866 16.2104 5.58967C16.2104 6.71067 17.1327 7.6222 18.2657 7.6222C19.3988 7.6222 20.321 6.71067 20.321 5.58967C20.321 4.46866 19.3987 3.55713 18.2657 3.55713ZM18.2657 6.60593C17.6987 6.60593 17.2381 6.14988 17.2381 5.58967C17.2381 5.02945 17.6987 4.5734 18.2657 4.5734C18.8327 4.5734 19.2934 5.02945 19.2934 5.58967C19.2934 6.14988 18.8327 6.60593 18.2657 6.60593Z" fill={color}/>
                </Svg>
                )
            }}/>
            <BottomTabNavigator.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Профиль',
                tabBarIcon: ({ focused, color }) => (
                <Svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                    <Path d="M0.217135 22.4492C0.408073 22.5533 4.95182 25 10 25C15.4692 25 19.6235 22.5452 19.7977 22.4407C19.8594 22.4037 19.9105 22.3513 19.9459 22.2887C19.9814 22.2261 20 22.1554 20 22.0834C20 18.7193 18.9684 15.6409 17.0953 13.4148C15.7849 11.8575 14.1409 10.7961 12.3276 10.3075C13.4376 9.77925 14.3349 8.88922 14.8721 7.78358C15.4093 6.67795 15.5544 5.42248 15.2836 4.22345C15.0129 3.02442 14.3423 1.95314 13.3821 1.18562C12.4219 0.418106 11.2293 0 10 0C8.77075 0 7.57805 0.418106 6.61787 1.18562C5.65769 1.95314 4.98713 3.02442 4.71637 4.22345C4.4456 5.42248 4.59074 6.67795 5.12793 7.78358C5.66513 8.88922 6.56242 9.77925 7.6724 10.3075C5.85911 10.7961 4.21505 11.8577 2.90474 13.4148C1.03161 15.6409 0 18.7193 0 22.0834C6.06179e-07 22.1583 0.0201649 22.2317 0.0583736 22.2961C0.0965823 22.3605 0.151424 22.4133 0.217135 22.4492ZM5.41667 5.41718C5.41667 4.5107 5.68547 3.62458 6.1891 2.87088C6.69272 2.11717 7.40854 1.52973 8.24603 1.18284C9.08353 0.835946 10.0051 0.745183 10.8942 0.922027C11.7832 1.09887 12.5999 1.53538 13.2409 2.17635C13.8819 2.81733 14.3184 3.63398 14.4953 4.52304C14.6721 5.41209 14.5813 6.33362 14.2344 7.1711C13.8875 8.00857 13.3001 8.72437 12.5464 9.22798C11.7926 9.73159 10.9065 10.0004 10 10.0004C8.78485 9.99901 7.61986 9.5157 6.76062 8.65648C5.90137 7.79725 5.41805 6.6323 5.41667 5.41718ZM3.54234 13.9513C5.23438 11.9409 7.5275 10.8337 10 10.8337C12.4725 10.8337 14.7656 11.9409 16.4577 13.9513C18.1598 15.974 19.1168 18.7678 19.1648 21.8403C18.2732 22.323 14.5681 24.1667 10 24.1667C5.77552 24.1667 1.79688 22.3121 0.835417 21.8305C0.885417 18.7618 1.84203 15.9719 3.54234 13.9513Z" fill={color}/>
                </Svg>
                )
            }}/>
            <BottomTabNavigator.Screen name="MenuStackNavigator" component={MenuStackNavigator} options={{
                tabBarLabel: 'Еще',
                tabBarIcon: ({ focused, color }) => (
                <Svg width="28" height="7" viewBox="0 0 28 7" fill="none">
                    <Path d="M3.45455 0.000366211C1.54996 0.000366211 0 1.57064 0 3.50019C0 5.42974 1.54996 7.00001 3.45455 7.00001C5.35913 7.00001 6.90909 5.42974 6.90909 3.50019C6.90909 1.57064 5.35913 0.000366211 3.45455 0.000366211ZM3.45455 5.83342C2.18441 5.83342 1.1515 4.78697 1.1515 3.50019C1.1515 2.2134 2.18441 1.16695 3.45455 1.16695C4.72468 1.16695 5.75759 2.2134 5.75759 3.50019C5.75759 4.78697 4.72468 5.83342 3.45455 5.83342Z" fill={color}/>
                    <Path d="M14 0C12.0954 0 10.5454 1.57027 10.5454 3.49982C10.5454 5.42937 12.0954 6.99964 14 6.99964C15.9045 6.99964 17.4545 5.42937 17.4545 3.49982C17.4545 1.57027 15.9045 0 14 0ZM14 5.83305C12.7298 5.83305 11.6969 4.78661 11.6969 3.49982C11.6969 2.21303 12.7298 1.16659 14 1.16659C15.2701 1.16659 16.303 2.21303 16.303 3.49982C16.303 4.78661 15.2701 5.83305 14 5.83305Z" fill={color}/>
                    <Path d="M24.5454 0C22.6408 0 21.0908 1.57027 21.0908 3.49982C21.0908 5.42937 22.6408 6.99964 24.5454 6.99964C26.45 6.99964 27.9999 5.42937 27.9999 3.49982C27.9999 1.57027 26.45 0 24.5454 0ZM24.5454 5.83305C23.2752 5.83305 22.2423 4.78661 22.2423 3.49982C22.2423 2.21303 23.2752 1.16659 24.5454 1.16659C25.8155 1.16659 26.8484 2.21303 26.8484 3.49982C26.8484 4.78661 25.8155 5.83305 24.5454 5.83305Z" fill={color}/>
                </Svg>
                )
            }}/>


        </BottomTabNavigator.Navigator>
    )
}