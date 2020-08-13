import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { SmallHeader } from '../../Components/Header/SmallHeader';

export const Characters: React.FC = (props) => {
  return(
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <SmallHeader title="Характеристики" back {...props}/>
      <ScrollView>
        <View style={[{paddingVertical: 7, paddingHorizontal: 20, alignItems: 'center', marginTop: 25}]}>
          <Image source={require('../../../assets/images/phone.png')} style={{width: 105, height: 144, marginBottom: 20}}/>
          <Text style={{fontWeight: '500', fontSize: 20, color: Colors.black}}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
        </View>
        <View style={characterStyles.container}>
          <CharacterItem items={[
            {title: 'Материалы корпуса', description: 'Металл, стекло'},
            {title: 'Влагозащита', description: 'IP68'},
            {title: 'Габариты (ВхШхГ)', description: '150,9 x 75,7 x 8,3 мм'},
            {title: 'Вес', description: '194 г'},
            {title: 'Цвет', description: 'Красный'},
            {title: 'Стилус', description: 'Нет'},
            ]} title="Корпус"/>
          <CharacterItem items={[
            {title: 'Тип экрана', description: 'IPS'},
            {title: 'Размер экрана', description: 'Безрамочный дисплей 6,1"'},
            {title: 'Соотношение сторон', description: '19,5:9'},
            {title: 'Разрешение экрана', description: 'Liquid Retina HD'},
            {title: 'Разрешение экрана, PX', description: '1792 х 828'},
            {title: 'Плотность пикселей, PPI', description: '326'},
            {title: 'Количество цветов дисплея', description: '16 млн'},
            {title: 'Соотношение экран/корпус', description: '79%'},
            {title: 'Устойчивое к царапинам стекло', description: 'Да'},
            ]} title="Дисплей"/>
          <CharacterItem items={[
            {title: 'Основная камера, Мп', description: '12,0 Мп + 12,0 Мп'},
            {title: 'Диафрагма основной камеры', description: 'f/1,8 + f/2,4'},
            {title: 'Фронтальная камера, Мп', description: '12,0 Мп'},
            {title: 'Количество модулей основной камеры', description: '2'},
            {title: 'Автофокусировка', description: 'Да'},
            {title: 'Встроенная вспышка', description: 'Да'},
            {title: 'Стабилизация', description: 'Да'},
            {title: 'Максимальное разрешение видеосъёмки', description: '4K UHD (3840 x 2160), 60fps'},
            {title: 'Особенности камеры', description: 'Система двух камер 12 Мп: сверхширокоугольная и широкоугольная; Сверхширокоугольная: диафрагма ƒ/2.4 и угол обзора 120°; Широкоугольная: диафрагма ƒ/1.8; Двукратный оптический зум на уменьшение; цифровой зум (до 5 раз); Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Оптическая стабилизация изображения (широкоугольная камера); Пятилинзовый объектив (сверхширокоугольная камера); шестилинзовый объектив (широкоугольная камера); Более яркая вспышка True Tone с функцией Slow Sync; Панорамная съёмка (с разрешением до 63 Мп); Поддержка Focus Pixels на всей матрице (широкоугольная камера); Ночной режим; Автокоррекция; Функция Smart HDR нового поколения для фото; Широкий цветовой диапазон для фотографий и Live Photos; Передовая система устранения эффекта красных глаз; Автоматическая стабилизация изображения; Привязка фотографий к месту съёмки; Форматы изображений: HEIF и JPEG; Камера TrueDepth: Диафрагма ƒ/2.2; Режим «Портрет» с улучшенным эффектом боке и функцией «Глубина»; Портретное освещение (шесть вариантов: Дневной свет, Студийный свет, Контурный свет, Сценический свет, Сценический свет — ч/б, Светлая тональность — ч/б); Animoji и Memoji; Съёмка видео 4K с частотой 24, 30 или 60 кадров/﻿с; Съёмка HD‑видео 1080p с частотой 30 или 60 кадров/﻿с; Запись замедленного видео 1080р с частотой 120 кадров/﻿с; Функция Smart HDR нового поколения для фото; Расширенный динамический диапазон при съёмке видео с частотой 30 кадров/﻿с; Кинематографическая стабилизация видео (4K, 1080p и 720p); Широкий цветовой диапазон для фотографий и Live Photos; Вспышка Retina Flash; Автоматическая стабилизация изображения; Серийная съёмка; Съёмка видео: Видео 4K с частотой 24, 30 или 60 кадров﻿/﻿с; HD-видео 1080p с частотой 30 или 60 кадров﻿/﻿с; HD‑видео 720p с частотой 30 кадров﻿/﻿с; Расширенный динамический диапазон при съёмке видео с частотой до 60 кадров﻿/﻿с; Оптическая стабилизация изображения при съёмке видео (широкоугольная камера); Двукратный оптический зум на уменьшение; цифровой зум (до 3 раз); Аудиозум; Более яркая вспышка True Tone; Функция QuickTake для быстрого переключения в режим видео с отслеживанием объекта съёмки; Замедленное видео с разрешением 1080р и частотой 120 или 240 кадров﻿/﻿с; Режим «Таймлапс» со стабилизацией изображения; Кинематографическая стабилизация видео (4K, 1080p и 720p); Следящий автофокус; Возможность съёмки фотографий 8 Мп во время записи видео 4К; Увеличение при воспроизведении; Форматы HEVC и H.264; Стереозвук'},
          ]} title="Камера"/>
          <CharacterItem items={[
            {title: 'Процессор', description: 'Apple A13'},
            {title: 'Количество ядер', description: '6 ядер'},
            {title: 'Частота процессора', description: '1,82 ГГц, 2,66 ГГц'},
            {title: 'Видеопроцессор', description: 'Собственный графический ускоритель'},
            {title: 'Смартфон для гейминга', description: 'Да'},
            ]} title="Производительность"/>
          <CharacterItem items={[
            {title: 'Объем оперативной памяти', description: '4 Гб'},
            {title: 'Объем встроенной памяти', description: '64 Гб'},
            {title: 'Слот для карты памяти', description: 'Нет'},
            {title: 'Тип карты памяти', description: 'Нет'},
            {title: 'Максимальный объем карты памяти', description: 'Нет'},
          ]} title="Память"/>
          <CharacterItem items={[
            {title: 'Платформа', description: 'iOS'},
            {title: 'Операционная система', description: 'iOS 13'},
            ]} title="Операционная система"/>
          <CharacterItem items={[
            {title: 'Тип связи', description: '2G, 3G, 4G (LTE)'},
            {title: 'Поддерживаемые стандарты связи', description: 'FDD‑LTE (диапазоны 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20, 25, 26, 28, 29, 30, 32, 66); TD‑LTE (диапазоны 34, 38, 39, 40, 41); UMTS/HSPA+/DC‑HSDPA (850, 900, 1700/2100, 1900, 2100 МГц); GSM/EDGE (850, 900, 1800, 1900 МГц)'},
            {title: 'Количество SIM-карт', description: '1 SIM'},
            {title: 'Тип SIM-карты', description: 'Nano-SIM'},
            {title: 'Гибридный слот SIM-карта/карта памяти', description: 'Нет'},
            {title: 'Навигационные возможности', description: 'GPS, A-GPS, ГЛОНАСС, iBeacon'},
          ]} title="Связь"/>
          <CharacterItem items={[
            {title: 'Wi-Fi', description: 'Да'},
            {title: 'Bluetooth', description: 'Да'},
            {title: 'Стандарт Bluetooth', description: '5,0'},
            ]} title="Подключения и датчики"/>
         
        </View>
      </ScrollView>
    </View>
  )
}

const CharacterItem: React.FC = ({ items, title }: any) => {
  return(
    <View style={characterStyles.wrapper}>
      <View style={{ marginBottom: 10 }}>
        <Text style={characterStyles.title}>{title}</Text>
      </View>
      { items.map((el: any, index: number) => {
        return(
          <View style={{flexDirection: 'row', marginVertical: 5}} key={index}>
            <View style={{ marginRight: 15, width: '50%'}}>
              <Text style={{ fontSize: 13, color: Colors.gray, textAlign: 'right' }}>{el.title}</Text>
            </View>
            <View style={{ width: '50%'}}>
              <Text style={{color: Colors.black, fontSize: 13, fontWeight: '500' }}>{el.description}</Text>
            </View>
          </View>
        )
      }) }
    </View>
  )
}

const characterStyles = StyleSheet.create({
  container: {paddingHorizontal: 20},
  wrapper: { paddingVertical: 15, alignItems: 'center',},
  title: { fontSize: 16, color: Colors.black, fontWeight: 'bold'},
  description: { color: Colors.black, fontSize: 14 }
})