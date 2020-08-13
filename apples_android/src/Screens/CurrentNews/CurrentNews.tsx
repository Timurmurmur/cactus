import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export class CurrentNews extends React.Component {

  render(){
    return(
      <ScrollView>
        <View style={[commonstyles.shadow]}>
          <View style={{padding: 16}}>
            <Text style={{color: COLOR.TEXT_GRAY}}>22.02.2020</Text>
            <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium', marginTop: 10}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на вопросы</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/news1.png')} style={{width: '100%', height: 180}}/>
          </View>
          <View style={{padding: 16}}>
            <Text style={{lineHeight: 18}}>
            Аккумулятор любого ноутбука требует периодического пополнения энергозапаса. Не исключение и эпловские MacBook. Как же нужно заряжать Макбук Про, Эйр и другие разновидности «яблочных» гаджетов? Есть ли рабочие приемы для увеличения «жизни» батареи? Об этом и прочих нюансах зарядки эпловских портативных гаджетов пойдет речь в статье.
            {`\n\n`}
            Заряжать прибор можно при любом количестве заряда, хоть 20%, хоть 50%. Только не стоит забывать о цикличности Li-pol. Чем чаще подзаряжать лэптоп, тем больше дней понадобится на истечение 1 цикла перезарядки.
            {`\n\n`}
            Эпл, конечно же, рекомендует пользоваться только фирменными расходниками (кабели, адаптеры и пр.). А что же делать, если «родная» зарядка Mac вышла из строя, и нет возможности в данный момент приобрести новое оригинальное приспособление?
            {`\n\n`}
            Есть вариант, как зарядить Макбук без «родной» зарядки. Просто воспользоваться адаптером и кабелем от другого Mac (например, попросить у друга или соседа). Стоит учесть, что мощность разных моделей отличается, например, для 13-дюймовой нужна 61-ваттная зарядка или 15” – 87 Ватт. Зарядка с низкой мощностью не «напитает» Мак, рассчитанный на большее количество Ватт.
            {`\n\n`}
            А если нужно пополнить энергетические запасы батареи, а рядом нет розетки, что тогда делать? Можно ли и как зарядить Макбук от внешнего аккумулятора? «Яблочный» бренд выпускает специальные адаптеры питания (например, для Pro 15). Эти приспособления можно использовать, как от сети, так и в качества повербанка, заряжая ноут в пути. Зарядный блок соединяется с Мак при помощи шнура USB.
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          <Text style={{fontWeight: 'bold', paddingHorizontal: 16, marginBottom: 15}}>Другие новости компании Cactus</Text>
          <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, marginBottom: 16, elevation: 3}]}>
            <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => this.props.navigation.navigate('CurrentNews')}>
              <View style={{padding: 16, }}>
                <View style={{ flexDirection: 'row'}}>
                <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
                  <View style={{width: '100%', padding: 10}}>
                    <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
                    <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                    <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
                  </View>
                </LinearGradient>
                <View style={{paddingHorizontal: 15, width: '80%', justifyContent: 'space-between'}}>
                  <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>22.02.2020</Text>
                  <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium'}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
                </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модел...</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, marginBottom: 16, elevation: 3}]}>
            <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => this.props.navigation.navigate('CurrentNews')}>
              <View style={{padding: 16, }}>
                <View style={{ flexDirection: 'row'}}>
                <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
                  <View style={{width: '100%', padding: 10}}>
                    <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
                    <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                    <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
                  </View>
                </LinearGradient>
                <View style={{paddingHorizontal: 15, width: '80%', justifyContent: 'space-between'}}>
                  <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>22.02.2020</Text>
                  <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium'}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
                </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модел...</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        
        </View>

        
      </ScrollView>
    )
  }
}