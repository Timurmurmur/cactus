import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';
import { FontAwesome, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { HeaderStyles, Header } from '../../Components/Header/Header';
import { StackHeader } from '../../Components/Header/StackHeader';
import { ItemCard } from '../../Components/ItemCard/ItemCard';



export interface ICurrentStockProps {
  route: Route;
  navigation: Navigation;
}

interface ICurrentStockState {
  title: string;
}

export class CurrentStock extends React.Component<ICurrentStockProps, ICurrentStockState> {
  constructor(props: ICurrentStockProps){
    super(props);

    this.state = {
      title: this.props.route.params.title
    }
  }

  componentDidMount() {
    const title = this.props.route.params.title.slice(0, 13) + '...';
    this.setState({
      title
    })
    console.log(this.props);
  }

  render(){
    return(
      <ScrollView style={{ backgroundColor: '#F7F7F7' }}>
        <StackHeader navigation={this.props.navigation} route={this.props.route} title={this.state.title} previous={{}}/>
        <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, marginBottom: 16}, { elevation: 2 }]}>
          <LinearGradient colors={['#FF7C0A', '#EABD60']}>
            <View style={{flexDirection: 'row', overflow: 'hidden', height: 120}}>
              <View style={{padding: 25, width: '45%'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 15}}>Лучшая цена! </Text>
                <Text style={{fontSize: 13,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
              </View>
              <View style={{width: '40%', position: 'relative'}}>
                <View style={{position: 'absolute',bottom: -10,width: '100%',height: '200%',marginBottom: -50 ,alignItems: 'center', justifyContent: 'center', backgroundColor: COLOR.WHITE, transform: [{ rotateZ: '20deg'}]}}>
                  <Image source={require('../../../assets/images/iphone.png')} style={{width: 100, height: 120}}/>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
                <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
              </View>
              <View>
                <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>еще 12 дней</Text>
              </View>
            </View>
            <View><Text style={{color: COLOR.TEXT_GRAY, fontSize: 12}}>11.03.2020 - 11.04.2020</Text></View>
            <View style={{marginVertical: 15}}>
              <Text style={{color: COLOR.BLACK, fontSize: 20, fontFamily: 'Roboto-Medium'}}>
                {this.props.route.params.title}
              </Text>
            </View>
            <View>
              <Text style={{color: '#828282', fontSize: 16, lineHeight: 20 }}>
                {this.props.route.params.text}
              </Text>
            </View>
          </View>
        </View>
        <View>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between', height: 48}, { elevation: 1, backgroundColor: COLOR.WHITE }]}>
          <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: COLOR.GRAY}}>
            <TouchableHighlight underlayColor={COLOR.GRAY} style={{width: '100%', height: '100%'}}>
              <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
                <View style={{marginRight: 10}}>
                  <Image source={require('../../../assets/icons/compareArrows.png')} style={{width: 15, height: 20}}/>
                </View>
                <View><Text style={{fontSize: 14, color: '#828282'}}>Сортировка</Text></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: COLOR.GRAY}}>
            <TouchableHighlight underlayColor={COLOR.GRAY} style={{width: '100%', height: '100%'}}>
              <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
                <View style={{marginRight: 10}}>
                  <FontAwesome5 name="filter" color={COLOR.LIGHT_GREEN} size={15}/>
                </View>
                <View><Text style={{fontSize: 14, color: '#828282'}}>Фильтры</Text></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{width: '20%'}}>
            <TouchableHighlight underlayColor={COLOR.GRAY} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Entypo name="forward" size={25} color={COLOR.LIGHT_GREEN}/>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{padding: 10,flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
          <ItemCard showModalHandler={e => console.log(e)} {...this.props}/>
        </View>
        </View>
      </ScrollView>
    )
  }
}