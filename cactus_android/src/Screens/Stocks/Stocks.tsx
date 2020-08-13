import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Switch, TouchableHighlight, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import { commonStyles } from '../../common/styles';
import { SafeAreaView } from 'react-navigation';
import { CheckedIcon } from '../../Components/Icons/Icons';
import { Header } from '../../Components/Header/Header';
import { SmallHeader } from '../../Components/Header/SmallHeader';
import { Route, Navigation } from '../../common/types';

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
      <SmallHeader back={false} title="Акции" {...this.props}/>
      <ScrollView style={{backgroundColor: '#F9F9F9'}}>
        <View style={{marginBottom: 20,marginTop: 16, alignItems: 'center'}}>
          <View style={{width: 278, flexDirection: 'row',height: 38, borderColor: Colors.green, borderRadius: 7, borderWidth: 1, overflow: 'hidden'}}>
            <TouchableHighlight style={{backgroundColor: Colors.green, width: '50%', justifyContent: 'center',}}>
               <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 16, color: Colors.white}}>{this.props.route.params.title}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'transparent'} onPress={this.showModalHandler} style={{backgroundColor: Colors.white ,width: '50%', justifyContent: 'center'}}>
              <Text style={{textAlign: 'center', color: Colors.green, fontWeight: '500', fontSize: 16, }}>Ещё</Text>
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
    <SafeAreaView style={{backgroundColor: Colors.green, flex: 1}}>
      <View style={{height: 60, backgroundColor: Colors.green, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Тип акции</Text>
        <TouchableHighlight underlayColor={'transparent'} style={{position: 'absolute', right: 16}} onPress={modalHandler}>
          <Text style={{fontWeight: '500', fontSize: 16, color: Colors.white }}>Отмена</Text>
        </TouchableHighlight>
      </View>
      <View style={{paddingHorizontal: 16, paddingVertical: 20, backgroundColor: '#F9F9F9', overflow: 'hidden', flex: 1}}>
      <View style={[{backgroundColor: Colors.white, paddingHorizontal: 15 }, ]}>
        { radio.map((el, index) => {
            return(
              <TouchableHighlight underlayColor={Colors.white} onPress={e => radioHandler(el)} style={[{paddingVertical: 12, flexDirection: 'row', alignItems: 'center'}, index !== radio.length - 1 ? { borderBottomColor: '#EBEBEB', borderBottomWidth: .5 } : null]}>
                <>
                <Text style={{color: `${el === selected ? Colors.lightGreen : Colors.gray}`, fontWeight: '500', fontSize: 16, width: '100%'}}>{el}</Text>
                { el === selected ? <View style={{right: 16}}>
                  <CheckedIcon width={12} height={9} color={Colors.lightGreen}/>
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
      text: <Text>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортимент и низкие цены только у нас на последние модели iPhone. Количество ограничено.{`\n\n`}Покупай  <Text style={{color: Colors.lightGreen}}>iPhone 11</Text> в период с <Text style={{fontWeight: '500'}}>11.03.20</Text> по <Text style={{fontWeight: '500'}}>11.04.20</Text> и получи скидку в 2 000 гривен! Подробности у продавцов-консультантов.</Text>,
    })}} style={[{backgroundColor: Colors.white, borderRadius: 7, marginBottom: 16,}, {shadowOffset: {
      width: 2,
      height: 4,
  },
  shadowOpacity: 0.16,
  shadowRadius: 35,
  shadowColor: '#000'}]}>
      <>
      <View style={{borderTopEndRadius: 7, borderTopStartRadius: 7, overflow: "hidden"}}>
      <LinearGradient colors={['#FF7C0A', '#EABD60']}>
        <View style={{flexDirection: 'row', overflow: 'hidden', height: 120}}>
          <View style={{padding: 25, width: '45%'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.white, marginBottom: 15}}>Лучшая цена! </Text>
            <Text style={{fontSize: 13,fontWeight: 'bold', color: Colors.white}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: Colors.white}}><Text style={{fontSize: 12}}>от</Text> 19 949 <Text style={{fontSize: 12}}>грн</Text></Text>
          </View>
          <View style={{width: '40%', position: 'relative'}}>
            <View style={{position: 'absolute',bottom: -10,width: '100%',height: '200%',marginBottom: -50 ,alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, transform: [{ rotateZ: '20deg'}]}}>
              <Image source={require('../../../assets/images/iphone.png')} style={{width: 100, height: 120}}/>
            </View>
          </View>
        </View>
      </LinearGradient>
      </View>
      <View style={{padding: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 20, height: 20, backgroundColor: Colors.tintColor, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: Colors.white, fontWeight: 'bold'}}>%</Text></View>
            <View style={{padding: 8, backgroundColor: Colors.lightGreen, borderRadius: 3}}><Text style={{color: Colors.white, fontSize: 10}}>СКИДКА</Text></View>
          </View>
          <View>
            <Text style={{color: Colors.gray, fontSize: 12}}>еще 12 дней</Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#828282', fontSize: 12}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый большой ассортим...</Text>
        </View>
      </View>
      </>
    </TouchableHighlight>
  )
}

const stocksStyle = StyleSheet.create({
  stocksContainer: {}
})