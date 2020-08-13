import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Switch, TouchableHighlight, Modal, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import { CheckedIcon } from '../../components/Icons/Icons';
import { Route, Navigation } from '../../common/types';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

export interface IStocksProps {
  navigation: Navigation;
  route: Route;
  
}
interface IStocksState {
  modal: boolean;
}

export class Stocks extends React.Component<IStocksProps, IStocksState> {
  constructor(props: IStocksProps){
    super(props);

    this.state = {
      modal: false
    }
  }

  showModalHandler = (e: any) => {
    let nextState;
    const { modal } = this.state;
    if (modal) {
      nextState = false;
    } else {
      nextState = true;
    }
    this.setState({
      modal: nextState
    })
  }

  render() {
    const { modal } = this.state;

    return(
      <>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: false, title: 'Акции', type: 'SMALL', basket: true, }}/>
      <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
        <View style={{marginBottom: 20,marginTop: 16, alignItems: 'center'}}>
          <View style={{width: 278, flexDirection: 'row',height: 38, borderColor: COLOR.TINT_COLOR, borderRadius: 3, borderWidth: 1, overflow: 'hidden'}}>
            <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, width: '50%', justifyContent: 'center',}}>
              <Text style={{textAlign: 'center', fontWeight: '300', fontSize: 16, color: COLOR.WHITE}}>{this.props.route.params.title}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'transparent'} onPress={this.showModalHandler} style={{backgroundColor: COLOR.WHITE ,width: '50%', justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', color: COLOR.TINT_COLOR, fontWeight: '300', fontSize: 16, }}>Ещё</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Modal visible={modal} onRequestClose={this.showModalHandler}>
          <StocksTypeModal modalHandler={this.showModalHandler} navigation={this.props.navigation} selectedElement={this.props.route.params.title}/>
        </Modal>
        <View style={{paddingHorizontal: 16}}>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
          <StocksItem navigation={this.props.navigation}/>
        </View>
      </ScrollView>
      </>
    )
  }
}


const StocksTypeModal: React.FC = ({ modalHandler, navigation, selectedElement }: any) => {
  const [selected, setSelected] = useState(selectedElement);

  const radio = ['Все', 'Конкурс', 'Розыгрыш', 'Подарки', 'Скидка'];


  const radioHandler = (element: string) => {
    setSelected(element);
    console.log(navigation);
    navigation.setParams({
      title: element
    })
    modalHandler();
  }

  return(
    <SafeAreaView style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <View style={{height: 60, backgroundColor: COLOR.WHITE, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: COLOR.BLACK, fontSize: 20, fontWeight: '300', letterSpacing: 2, textTransform: 'uppercase'}}>Тип акции</Text>
        <TouchableHighlight underlayColor={'transparent'} style={{position: 'absolute', right: 16}} onPress={modalHandler}>
          <Text style={{fontWeight: '600', fontSize: 17, color: COLOR.TINT_COLOR }}>Отмена</Text>
        </TouchableHighlight>
      </View>
      <View style={{paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#F9F9F9', overflow: 'hidden', flex: 1}}>
      <View style={[{backgroundColor: COLOR.WHITE, paddingHorizontal: 15 }, ]}>
        { radio.map((el, index) => {
            return(
              <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => radioHandler(el)} style={[{paddingVertical: 12, flexDirection: 'row', alignItems: 'center'}, index !== radio.length - 1 ? { borderBottomColor: '#EBEBEB', borderBottomWidth: .5 } : null]}>
                <>
                <Text style={[{ fontSize: 16, width: '100%'}, el === selected ? { fontWeight: 'normal', color: COLOR.TINT_COLOR} : { color: COLOR.GRAY, fontWeight: '300'}]}>{el}</Text>
                { el === selected ? <View style={{right: 16}}>
                  <CheckedIcon width={12} height={9} color={COLOR.TINT_COLOR}/>
                </View>: null}
                </>
              </TouchableHighlight>
            )
          })
        }
        </View>
      </View>
    </SafeAreaView>
  )
}


export const StocksItem:React.FC = (props: any) => {
  return(
    <TouchableHighlight underlayColor={'transparent'} onPress={e => { props.navigation.navigate('CurrentStock', {
      title: 'Успей приобрести новый iPhone 11 по супер выгодной цене',
      text: <Text>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модели iPhone. Количество ограничено.{`\n\n`}Покупай  iPhone 11 в период с <Text style={{color: COLOR.TINT_COLOR}}>01 марта по 01 июня</Text> и получи скидку в <Text style={{color: COLOR.TINT_COLOR}}>2 000 гривен</Text>! Подробности у продавцов-консультантов.</Text>,
    })}} style={[{backgroundColor: COLOR.WHITE, borderRadius: 3, marginBottom: 16,}]}>
      <>
      <View style={{borderTopEndRadius: 3, borderTopStartRadius: 3, overflow: "hidden"}}>
        <ImageBackground source={require('../../../assets/images/stock.png')} resizeMode="cover" style={{width: 392, height: 132}}/>
      </View>
      <View style={{padding: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 20, height: 20, backgroundColor: COLOR.TINT_COLOR, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
            <View style={{}}><Text style={{color: COLOR.TINT_COLOR, fontSize: 12, fontWeight: '500'}}>СКИДКА</Text></View>
          </View>
          <View>
            <Text style={{color: COLOR.GRAY, fontSize: 12, fontWeight: '300'}}>c 01.03.2020 по 01.06.2020 </Text>
          </View>
        </View>
        <View>
          <Text style={{color: COLOR.GRAY, fontSize: 12, fontWeight: '300'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортим...</Text>
        </View>
      </View>
      </>
    </TouchableHighlight>
  )
}

const stocksStyle = StyleSheet.create({
  stocksContainer: {}
})