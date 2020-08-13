import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { HomeItem } from '../Home/Home';
import { NewsBanner } from '../../Components/NewsBanner/NewsBanner';
import { Header } from '../../Components/Header/Header';

export class CurrentNews extends React.Component {

  render(){
    return(
      <>
      <Header title="Новости" back/>
      <ScrollView>
        <View style={{backgroundColor: Colors.white,}}>
          <View style={{padding: 16}}>
            <Text style={{color: '#A8A8A8', fontSize: 12, }}>22.02.2020</Text>
            <Text style={{fontSize: 18, marginTop: 8, color: Colors.black, fontWeight: 'bold'}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на вопросы</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/news1.png')} style={{width: '100%', height: 180}}/>
          </View>
          <View style={{padding: 16}}>
            <Text style={{lineHeight: 18, fontSize: 16, color: Colors.black}}>
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
            <View style={{backgroundColor: Colors.white, marginBottom: 20}}>
                <HomeItem title="Новости">
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                    <NewsBanner />
                </HomeItem>
            </View>   
        </View>

        
      </ScrollView>
      </>
    )
  }
}