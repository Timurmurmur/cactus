import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { HomeItem } from '../Home/Home';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

export class CurrentNews extends React.Component<any,any> {

  render(){
    return(
      <>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Новости', type: 'DEFAULT', basket: true, }}/>
      <ScrollView>
        <View style={{backgroundColor: COLOR.WHITE,}}>
          <View style={{padding: 16}}>
            <Text style={{color: COLOR.GRAY, fontSize: 12, fontWeight: '300'}}>22.02.2020</Text>
            <Text style={{fontSize: 18, marginTop: 8, color: COLOR.BLACK, fontWeight: '600'}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на вопросы</Text>
          </View>
          <View>
            <Image source={require('../../../assets/images/news1.png')} style={{width: '100%', height: 180}}/>
          </View>
          <View style={{padding: 16}}>
            <Text style={{lineHeight: 18, fontSize: 16, color: COLOR.BLACK, fontWeight: '300', }}>
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
          <View style={{backgroundColor: COLOR.WHITE, marginBottom: 20}}>
            <HomeItem title="Другие Новости" onPress={e => console.log(1)}>
              <View style={{marginRight: 15}}>
                <NewsBanner />
              </View>
              <View style={{marginRight: 15}}>
                <NewsBanner />
              </View>
              <View style={{marginRight: 15}}>
                <NewsBanner />
              </View>
              <View style={{marginRight: 15}}>
                <NewsBanner />
              </View>
              <View style={{marginRight: 15}}>
                <NewsBanner />
              </View>
            </HomeItem>
          </View>   
        </View>

        
      </ScrollView>
      </>
    )
  }
}