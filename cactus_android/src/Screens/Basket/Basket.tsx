import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { Navigation, Route } from '../../common/types';
import { AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import Swipeable from 'react-native-swipeable';
import Colors from '../../constants/Colors';
import { HeartEmptyIcon, TrashIcon, ArrowLeft } from '../../Components/Icons/Icons';
import Svg, { Path, Rect } from 'react-native-svg';
import { Header } from 'react-native/Libraries/NewAppScreen';


const buttonWidth = (Dimensions.get('screen').width - 32 - 16) / 2;
export interface IBasketProps {
  navigation: Navigation;
  route: Route;
}
interface IBasketState {}

const screenWidth = Dimensions.get('screen').width - 30;

export class Basket extends React.Component<IBasketProps, IBasketState> {
  constructor(props: IBasketProps){
    super(props);

    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return(
      <>
      <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16}}>
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
          <View style={{width: 24}}>
              <ArrowLeft width={11} height={20} color="#fff" underlayColor={Colors.green} onPress={e => this.props.navigation.goBack()} />
          </View>
          <View style={{width: '70%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', textAlign: 'center' }}>Корзина</Text>
          </View>
          <View style={{width: 24}}></View>
        </View>
      </View>
      <View style={{backgroundColor: '#F9F9F9', height: '100%', flex: 1}}>
        <View style={{ }}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
            <AntDesign.Button name="arrowleft" size={30} iconStyle={{ color: Colors.white, marginRight: -5}} backgroundColor="transparent" underlayColor={Colors.green} onPress={(e: any) => this.props.navigation.navigate("MainNavigation", { screen: "Main" })}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: Colors.white, letterSpacing: .5}}></Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={basketStyles.container}>
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
            </View>
          </ScrollView>
        </View>
        <View style={basketStyles.footerWrapper}>
          <View style={basketStyles.footerHeader}>
            <View><Text style={basketStyles.footerTitle}>Итоговая сумма</Text></View>
            <View><Text style={basketStyles.totalPrice}>49 198 ₴</Text></View>
          </View>
          <View style={basketStyles.navigationWrapper}>
            <View style={{width: buttonWidth, marginRight: 16}}>
              <TouchableHighlight underlayColor={Colors.white} style={basketStyles.navigationBtn} onPress={e => this.props.navigation.navigate('CreditList')}>
              <Text style={{textAlign: 'center',fontSize: 18,fontWeight: '500', color: Colors.green}}>Купить в кредит</Text>
              </TouchableHighlight>
            </View>
            <View style={{width: buttonWidth}}>
              <TouchableHighlight underlayColor={Colors.green} onPress={e => this.props.navigation.navigate('Decoration')} style={[{backgroundColor: Colors.green}, basketStyles.navigationBtn ]}
              ><Text style={{textAlign: 'center',fontSize: 18, fontWeight: '500', color: Colors.white}}>Оформить</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
      </>
    )
  }
}

export const BasketItem = () => {
  return(
      <>
      <Swipeable rightButtons={[
        <View style={basketStyles.buttonWrapper}>
            <Svg width={29} height={26}>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.3789 25.5755C13.6891 25.8493 14.0871 26 14.5 26C14.9126 26 15.3109 25.8493 15.6209 25.5759C16.7951 24.5412 17.9263 23.5695 18.9246 22.7124L18.9251 22.712C21.8461 20.2034 24.3686 18.037 26.1239 15.9025C28.0862 13.5166 29 11.2542 29 8.78268C29 6.38138 28.1831 4.16604 26.6996 2.54444C25.1984 0.903664 23.1384 0 20.8988 0C19.2248 0 17.6918 0.533324 16.3424 1.58503C15.6611 2.11591 15.0441 2.76562 14.5 3.52346C13.9562 2.76562 13.3389 2.11591 12.6579 1.58503C11.3084 0.533324 9.77538 0 8.10138 0C5.86164 0 3.80178 0.903664 2.30058 2.54444C0.817085 4.16604 0 6.38138 0 8.78268C0 11.2542 0.913994 13.5166 2.87628 15.9027C4.6317 18.0371 7.15464 20.2039 10.0763 22.7129L10.0814 22.7173C11.0779 23.5731 12.2074 24.5432 13.3789 25.5755ZM3.54918 3.70423C4.72514 2.41908 6.34161 1.7114 8.10123 1.7114C9.39002 1.7114 10.5735 2.12432 11.6185 2.93858C12.55 3.66454 13.1987 4.58225 13.5788 5.22438C13.7744 5.55458 14.1186 5.75168 14.4998 5.75168C14.8811 5.75168 15.2253 5.55458 15.4209 5.22438C15.8013 4.58225 16.45 3.66454 17.3812 2.93858C18.4262 2.12432 19.6097 1.7114 20.8987 1.7114C22.6581 1.7114 24.2748 2.41908 25.4505 3.70423C26.644 5.00877 27.3013 6.81209 27.3013 8.78218C27.3013 10.8608 26.5347 12.7199 24.816 14.8099C23.1561 16.8284 20.6881 18.9481 17.8303 21.4025L17.8226 21.4092C16.8203 22.2696 15.6847 23.245 14.4974 24.2869C13.3173 23.247 12.1833 22.2731 11.1831 21.4141L11.1777 21.4096L11.1761 21.4082C8.31553 18.9515 5.84501 16.8298 4.18395 14.8099C2.46504 12.7199 1.6984 10.8608 1.6984 8.78218C1.6984 6.81209 2.35574 5.00877 3.54918 3.70423Z" fill="#A8A8A8"/>
            </Svg>
        </View>, 
        <View style={basketStyles.buttonWrapper}>
          <View style={{width: 44, height: 44, backgroundColor: Colors.gray, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            <TrashIcon color={Colors.white} width={19} height={24}/>
          </View>
        </View>
      ]}>
        <View style={[basketItem.wrapper]}>
            <View style={{width: '25%'}}>
                <Image source={require('../../../assets/images/phone.png')} style={{width: 77, height: 105}}/>
            </View>
            <View style={{width: '75%', paddingRight: 20, justifyContent: 'space-between', marginLeft: 10}}>
            <View><Text style={basketItem.title}>Apple iPhone 11 64Gb {'\n'}Red (MWLV2)</Text></View>
            <View><Text style={basketItem.price}>29 699 ₴</Text></View>
            <View style={basketItem.countContainer}>
                <View style={basketItem.countWrapper}>
                    <TouchableHighlight style={[basketItem.countBtn, { marginRight: 10 }]}>
                      <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <Rect y="5" width="12" height="2" rx="1" fill="#363636"/>
                      </Svg>
                    </TouchableHighlight>
                <Text style={basketItem.count}>1</Text>
                    <TouchableHighlight style={[basketItem.countBtn, { marginLeft: 10 }]}>
                      <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <Rect y="5" width="12" height="2" rx="1" fill="#363636"/>
                        <Rect x="7" width="12" height="2" rx="1" transform="rotate(90 7 0)" fill="#363636"/>
                      </Svg>
                    </TouchableHighlight>
                </View>
                <View><Text style={basketItem.countPrice}>29 699 ₴</Text></View>
            </View>
            </View>
        </View>
    </Swipeable>
    </>
  )
}

export const basketItem = StyleSheet.create({
  wrapper: {paddingLeft: 25, paddingVertical: 12, flexDirection: 'row', width: '100%', marginBottom: 12,height: 135, backgroundColor: Colors.white, borderRadius: 7},
  title: {fontSize: 18, color: Colors.black, fontWeight: '600'},
  price: {fontSize: 14, color: Colors.gray, paddingTop: 4, paddingBottom: 8, fontWeight: '500' },
  countWrapper: {flexDirection: 'row', alignItems: 'center', width: '35%', justifyContent: 'space-between'},
  countContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  countBtn: {backgroundColor: '#ECEDEF',width: 25, height: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center'},
  count: {fontSize: 18, color: Colors.black},
  countPrice: {fontSize: 18, color: Colors.black, fontWeight: '500'}
})
export const basketStyles = StyleSheet.create({
  container: {padding: 16, width: '100%',},
  buttonWrapper: {width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'},
  footerWrapper: { backgroundColor: Colors.white, width: '100%', padding: 16},
  footerHeader: {flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16,},
  footerTitle: {fontSize: 16, color: Colors.black},
  totalPrice: {fontSize: 20, fontWeight: '500', color: Colors.black},
  navigationWrapper: { flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  navigationBtn: {paddingVertical: 15, borderColor: Colors.green, borderWidth: 1 ,borderRadius: 7, width: '100%'}
}) 