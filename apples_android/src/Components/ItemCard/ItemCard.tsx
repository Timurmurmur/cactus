import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ActionSheetIOS, Alert} from 'react-native';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, Ionicons  } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation, Route } from '../../common/types';
import { PhotoIcon, YouTubeIcon, HeartEmptyIcon, ShoppingCardIcon, CompareCardIcon, HeartIcon } from '../Icons/Icons';
import Svg, { Path, SvgXml } from 'react-native-svg';

export interface IItemCardProps {
  showModalHandler: (e: any) => void;
  navigation: Navigation;
  route: Route;
}
interface IItemCardState {
  addedToBag: boolean;
  favourite: boolean;
  showFavouriteItem: boolean;
  compare: boolean;
}

export class ItemCard extends React.Component<IItemCardProps, IItemCardState> {
  constructor(props: IItemCardProps){
    super(props);

    this.state = {
      addedToBag: false,
      favourite: false,
      showFavouriteItem: false,
      compare: false,
    }
  }

  addToBagHandler = (e: any) => {
    this.props.showModalHandler(e);
    // Alert.prompt('asd')
    let newState;
    const {addedToBag} = this.state;
    if(addedToBag) {
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      addedToBag: newState,
    })
  }

  compareHandler = (e: any) => {
    const { compare } = this.state;
    let newState;
    if(compare) {
      newState = false;
    } else {
      Alert.alert('Добавлен в сравнение', 'Товар добавлен в сравнение и находится в разделе Ещё > Сравнение товаров', [{
        style: 'default',
        text: 'Перейти в сравнение',
        onPress: (e) => {}
      },
      {
        style: 'cancel',
        text: 'ОК',
        onPress: (e) => {}
      }], {
        cancelable: true
      });
      newState = true;
    }
    this.setState({
      compare: newState
    })
  }

  addToFavouriteHandler = (e: any) => {
    const { favourite } = this.state;
    if(favourite) {
      
      this.showFavouriteItemHandler(e);
    } else {
      Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе Ещё > Избранное', [{
        style: 'default',
        text: 'Перейти в избранное',
        onPress: (e) => {}
      },
      {
        style: 'cancel',
        text: 'ОК',
        onPress: (e) => {}
      }], {
        cancelable: true
      });
      this.setState({
        favourite: true,
      })
    }
    
  }

  showFavouriteItemHandler = (e: any) => {
    const { showFavouriteItem } = this.state;
    let newState;
    if(showFavouriteItem) {
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      showFavouriteItem: newState,
    })
  }

  render() {
    const { addedToBag, favourite } = this.state;
    return(
      <View style={[cardItem.wrapper, commonstyles.shadow]}>
        { this.state.showFavouriteItem ? 
        <View style={{ backgroundColor: COLOR.WHITE, height: 266, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{marginBottom: 68}}>
              <Text style={{color: COLOR.TEXT_GRAY, textAlign: 'center'}}>
              Убрать товар из избранного?
              </Text>
            </View>
            <View style={{marginBottom: 30}}>
              <TouchableHighlight underlayColor={'transparent'} onPress={(e) => { this.showFavouriteItemHandler(e); this.setState({ favourite: false })}}>
                <Text style={{color: COLOR.LIGHT_GREEN, textTransform: 'uppercase'}}>Убрать</Text>
              </TouchableHighlight>
            </View>
            <View style={{}}>
              <TouchableHighlight underlayColor={'transparent'} onPress={(e) => { this.showFavouriteItemHandler(e) }}>
                <Text style={{color: COLOR.LIGHT_GREEN, textTransform: 'uppercase'}}>Отмена</Text>
              </TouchableHighlight>
            </View>
        </View>
        :
        <>
        <TouchableHighlight underlayColor={COLOR.GRAY} onPress={(e) => this.props.navigation.navigate('Phone')}>
          <View style={cardItem.header}>
            <View style={cardItem.discountIcon}><Text style={{fontSize: 10, color: COLOR.WHITE}}>- 9%</Text></View>
            <View style={cardItem.imageWrapper}>
              <View style={cardItem.image}>
                <ImageBackground source={require('../../../assets/images/iphone1.png')} style={{width: 107, height: 130, position: 'relative'}}>
                </ImageBackground>
              </View>
              <View style={{position: 'absolute', right: 10, top: 16, alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                <View>
                  <View style={{width: 10, height: 10, backgroundColor: COLOR.BLACK, borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#000AFF', borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#FF7461', borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#FF0000', borderRadius: 2, marginBottom: 5}}></View>
                </View>
                <View>
                  <View style={{marginBottom: 8}}><PhotoIcon width={16} height={16} color={COLOR.TEXT_GRAY}/></View>
                  <View><YouTubeIcon width={16} height={11} color={COLOR.TEXT_GRAY}/></View>
                </View>
              </View>
            </View>
            <View style={cardItem.infoWrapper}>
              <View>
                <Text style={cardItem.infoTitle}>Apple iPhone Xr 64Gb Black (MRY42)</Text>
              </View>
              <View style={cardItem.priceWrapper}>
                <View style={cardItem.discountPriceWrapper}>
                  <Text style={cardItem.discountPrice}>21 499 ₴</Text>
                  <View style={cardItem.discountPriceLine}></View>
                </View>
                <Text style={cardItem.price}>19 499 ₴</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        <View style={cardItem.optionsWrapper}>
          <TouchableHighlight onPress={(e: any) => { this.compareHandler(e) }} underlayColor={'transparent'}>
            <Svg width={21} height={18} viewBox={`0 0 ${21} ${18}`} fill={"none"}>
              <Path d="M20.9949 9.59975L18.11 2.66297C18.167 2.50593 18.1999 2.33664 18.1999 2.15955C18.1999 1.36397 17.5725 0.71948 16.7994 0.71948C16.3313 0.71948 15.9184 0.956337 15.6643 1.31942H12.4353C12.1166 0.544251 11.3695 0 10.4996 0C9.62942 0 8.88301 0.544251 8.56466 1.32016H5.33572C5.08126 0.957079 4.66799 0.720223 4.19986 0.720223C3.42673 0.720223 2.80014 1.36471 2.80014 2.1603C2.80014 2.33738 2.83299 2.5063 2.89002 2.66371L0.00505311 9.59975H0C0 11.8525 1.88084 13.6798 4.20022 13.6798C6.52032 13.6798 8.40007 11.8525 8.40007 9.59975H8.39502L5.65046 3.00006H8.56466C8.72528 3.39062 8.99453 3.72251 9.33309 3.95566V14.6398H5.13324V15.5999C5.13324 16.92 6.1832 18 7.46669 18H13.5333C14.8168 18 15.8668 16.92 15.8668 15.5999V14.6398H11.6665V3.95529C12.0051 3.72177 12.2744 3.39024 12.435 3.00006H15.3488L12.6003 9.59975H12.5999V9.60012L12.5985 9.60347L12.6003 9.60421C12.6028 11.8551 14.4822 13.6798 16.8001 13.6798C19.1202 13.6798 21 11.8525 21 9.59975C21 9.60012 20.9949 9.60012 20.9949 9.59975ZM7.12597 9.59975H1.27411L3.79488 3.538C3.92302 3.57772 4.05873 3.59963 4.19949 3.59963C4.34026 3.59963 4.47669 3.57773 4.60519 3.53763L7.12597 9.59975ZM13.869 9.59975L16.3937 3.538C16.5222 3.5781 16.6583 3.6 16.7994 3.6C16.9405 3.6 17.0766 3.5781 17.2051 3.538L19.7263 9.59975H13.869Z" fill={this.state.compare ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}/>
            </Svg>
          </TouchableHighlight>
          { this.state.favourite ? <HeartIcon onPress={e => this.addToFavouriteHandler(e)} width={20} height={18} color={COLOR.ORANGE}/>
          :
          <HeartEmptyIcon onPress={e => this.addToFavouriteHandler(e)} width={20} height={18} color={COLOR.TEXT_GRAY}/>}
          <TouchableHighlight onPress={(e: any) => { this.addToBagHandler(e) }} underlayColor={'transparent'}>
            <Svg width={18} height={18} viewBox={`0 0 ${18} ${18}`} fill={"none"}>
              <Path d="M16.6825 1.63638H3.27273C3.23234 1.63638 3.19549 1.65157 3.15763 1.66296L2.82803 0.57985C2.72321 0.235407 2.4055 0 2.04545 0H0.409105C0.183171 0 0 0.183171 0 0.409105V1.22728C0 1.45321 0.183171 1.63638 0.409105 1.63638H1.43944L3.99548 10.0359L3.04085 11.1497C2.66354 11.5898 2.49364 12.1963 2.6673 12.7495C2.8894 13.4569 3.51373 13.9091 4.23357 13.9091H15.9546C16.1805 13.9091 16.3637 13.7259 16.3637 13.5V12.6818C16.3637 12.4559 16.1805 12.2727 15.9546 12.2727H4.23353L5.53034 10.7598C5.56294 10.7218 5.58691 10.6788 5.61165 10.6364H13.5392C14.1733 10.6364 14.7503 10.2702 15.0203 9.69645L17.875 3.63025C17.9569 3.45567 18.0001 3.26191 18.0001 3.06973V2.95387C18.0001 2.22628 17.4102 1.63638 16.6825 1.63638Z" fill={this.state.addedToBag ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}/>
              <Path d="M4.90933 18.0001C5.81308 18.0001 6.54572 17.2674 6.54572 16.3637C6.54572 15.4599 5.81308 14.7273 4.90933 14.7273C4.00558 14.7273 3.27295 15.4599 3.27295 16.3637C3.27295 17.2674 4.00558 18.0001 4.90933 18.0001Z" fill={this.state.addedToBag ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}/>
              <Path d="M14.7272 18.0001C15.631 18.0001 16.3636 17.2674 16.3636 16.3637C16.3636 15.4599 15.631 14.7273 14.7272 14.7273C13.8235 14.7273 13.0908 15.4599 13.0908 16.3637C13.0908 17.2674 13.8235 18.0001 14.7272 18.0001Z" fill={this.state.addedToBag ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}/>
            </Svg>
          </TouchableHighlight>
        </View>
        </>}
      </View>
    )
  }
}


export const cardItem = StyleSheet.create({
  wrapper: {borderRadius: 2, width: 168, marginBottom: 10},
  header: {flex: 3, paddingVertical: 10},
  imageWrapper: {flex: 1,padding: 10, position: 'relative'},
  infoWrapper: {flex: 1,paddingHorizontal: 16},
  image: { flex: 1,height: '100%',width: '100%', alignItems: 'center'},
  discountIcon: {zIndex: 20,left: 10, top: 10, position: 'absolute', paddingHorizontal: 5, paddingVertical: 2, backgroundColor: COLOR.ORANGE, borderRadius: 3},
  infoTitle: {color: COLOR.TEXT_GRAY, fontSize: 12},
  priceWrapper: {flexDirection: 'row', marginTop: 13, alignItems: 'center'},
  discountPriceWrapper: { position: 'relative', marginRight: 10 },
  discountPrice: {color: COLOR.TEXT_GRAY, fontSize: 10},
  discountPriceLine: {borderBottomColor: COLOR.ORANGE, borderBottomWidth: 1, position: 'absolute', zIndex: 100, bottom: 5, width: '100%'},
  price: {color: '#363636', fontSize: 14, fontWeight: 'bold'},
  optionsWrapper: {flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, paddingVertical: 12, borderTopWidth: .5, borderColor: '#EBEBEB', alignItems: 'center'},
})