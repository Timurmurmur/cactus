import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';

export const Description = () => {
  return(
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <View style={[{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 7, paddingHorizontal: 20, alignItems: 'center'}, commonstyles.shadow]}>
        <Image source={require('../../../assets/images/phone.png')} style={{width: 25, height: 36}}/>
        <Text style={{fontWeight: 'bold', fontSize: 14, width: '85%'}}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
      </View>
      <ScrollView>
        <View style={descriptionStyles.container}>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Ничего лишнего. Только самое.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>
              Новая система двух камер. Можно делать фотоснимки с широким и сверхшироким углом обзора. Обновлённый интерфейс и новая сверхширокоугольная камера позволят увидеть и снять то, что происходит за пределами кадра. Снимать и редактировать видеоролики теперь так же легко, как фотографии. Это по-прежнему невероятно популярная камера, но с совершенно новыми перспективами.
              </Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/phone.png')} style={{width: 310, height: 420}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Новая сверхширокоугольная камера.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>
              Снимайте с размахом - с новой сверхширокоугольной камерой область изображения в четыре раза больше. В кадр поместится всё. Бескрайние пейзажи. Сцена вместе со зрителями на музыкальном фестивале. Вся семья на фоне умопомрачительных видов, ради которых вы пролетели тысячи километров.
              </Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/cameraDescr.png')} style={{width: '100%', height: 160}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Знакомьтесь. Ночной режим.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Плохое освещение не помеха хорошему фото. Ночной режим автоматически включается при низкой освещённости и позволяет делать великолепные фотографии. Вспышка не понадобится. Цвета будут выглядеть естественно, а сами фотографии — ярче.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/nightDescr.png')} style={{width: '100%', height: 214}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Снимайте портреты, получайте шедевры.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>
              Новые виды портретов, дополнительные варианты освещения и слаженная работа двух камер iPhone 11 — всё это означает только одно: потрясающие фотографии. В портретном режиме теперь отлично получаются не только лица людей, но и мордахи домашних любимцев.
              </Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/portretDescr.png')} style={{width: '100%', height: 150}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Снимайте видео высочайшего качества. И редактируйте его.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>На все камеры iPhone 11 можно снимать невероятно чёткое видео 4K с частотой 60 кадров/с. С объективом сверхширокоугольной камеры область изображения в четыре раза больше. Поэтому камера отлично подходит для съёмки сцен с движением — например, как ваша собака гоняется за мячом. А если, скажем, вы записываете выступление ребёнка на концерте и приближаете изображение, звук приближается тоже. Кроме того, редактировать видео теперь так же легко, как фото.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/videoDescr.png')} style={{width: '100%', height: 150}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Новое поколение Smart HDR.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Благодаря технологиям машинного обучения функция Smart HDR работает эффективнее, чем когда‑либо. Она распознаёт людей и обрабатывает их изображения иначе, чем остальную часть кадра. Благодаря игре света и тени лица выглядят выразительно, а оттенки кожи — естественно. И закат на заднем плане остаётся таким же восхитительным.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/smartDescr.png')} style={{width: '100%', height: 150}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Самое прочное стекло iPhone.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Передняя и задняя стеклянные панели закалены методом двойного ионного обмена.</Text>
            </View>
            
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Защита от воды. Теперь в два раза глубже.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>iPhone 11 ещё лучше защищён от воды: он выдерживает погружение на глубину до 2 метров длительностью до 30 минут — вдвое глубже, чем iPhone XR.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/whaterDescr.png')} style={{width: '100%', height: 170}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Зима и лето своим цветом.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>
                <Text style={descriptionStyles.title}>ЖК‑дисплей Liquid Retina. </Text>
                Переднюю панель целиком занимает дисплей с невероятно точной цветопередачей, на котором всё выглядит просто превосходно.
              </Text>
              <Text style={descriptionStyles.text}>
                <Text style={descriptionStyles.title}>Технология True Tone. </Text>
                Баланс белого автоматически настраивается в соответствии с цветовой температурой окружающего освещения.
              </Text>
              <Text style={descriptionStyles.text}>
                <Text style={descriptionStyles.title}>Функция касания или подъёма для активации. </Text>
                Ваш iPhone мгновенно готов к работе.
              </Text>
              <Text style={descriptionStyles.text}>
                <Text style={descriptionStyles.title}>Тактильный отклик при нажатии. </Text>
                Контекстные меню и быстрые команды позволяют выполнять все основные действия быстрее.
              </Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/3dtouchDescr.png')} style={{width: 270, height: 327}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Выходит на полный рабочий день.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Аппаратное и программное обеспечение слаженно работают вместе, поэтому заряд аккумулятора используется с максимальной эффективностью. А возможность быстрой зарядки позволяет быстро вернуть разряженный телефон в строй.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/bataryDescr.png')} style={{width: '100%', height: 120}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Процессор - просто Pro.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Мощный процессор A13 Bionic выполняет любые задачи быстро и плавно. Кроме того, он работает максимально энергоэффективно, позволяя экономить заряд аккумулятора. По сути, технологии A13 Bionic настолько продвинуты, что их можно назвать технологиями будущего.</Text>
            </View>
            <View style={descriptionStyles.image}>
              <Image source={require('../../../assets/images/processorDescr.png')} style={{width: '100%', height: 130}}/>
            </View>
          </View>
          <View style={descriptionStyles.wrapper}>
            <View>
              <Text style={descriptionStyles.title}>Можно без рук. Face ID удобнее и надёжнее, чем Touch ID.</Text>
            </View>
            <View>
              <Text style={descriptionStyles.text}>Максимально надёжная технология аутентификации по лицу. Face ID позволяет мгновенно разблокировать iPhone и обеспечивает защиту личных данных ещё лучше, чем Touch ID. Одним взглядом вы можете входить в приложения и учётные записи, а также оплачивать покупки с Apple Pay. Настраивается функция легко и быстро.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

interface IDescriptionItemProps {
  title: string;
  description: string;
  image?: {
    src: any,
    width: number,
    height: number,
  }
}

const DescriptionItem:React.FC = ({}) => (
  <View style={descriptionStyles.wrapper}>
    <View>
      <Text style={descriptionStyles.title}>Ничего лишнего. Только самое.</Text>
    </View>
    <View>
      <Text style={descriptionStyles.text}>
      Новая система двух камер. Можно делать фотоснимки с широким и сверхшироким углом обзора. Обновлённый интерфейс и новая сверхширокоугольная камера позволят увидеть и снять то, что происходит за пределами кадра. Снимать и редактировать видеоролики теперь так же легко, как фотографии. Это по-прежнему невероятно популярная камера, но с совершенно новыми перспективами.
      </Text>
    </View>
    <View style={descriptionStyles.image}>
      <Image source={require('../../../assets/images/phone.png')} style={{width: 310, height: 420}}/>
    </View>
  </View>
)

const descriptionStyles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: 16, paddingVertical: 30},
  wrapper: { alignItems: 'center'},
  title: { textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 20},
  text: { fontSize: 14, lineHeight: 22, textAlign: 'center', marginBottom: 40},
  image: { marginBottom: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }
})