import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Alert, ActionSheetIOS, Modal, KeyboardAvoidingView} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation, Route } from '../../common/types';
import { HeartIcon, ShoppingCardIcon, CompareIcon, CompareCardIcon, CheckedIcon, CheckIcon } from '../Icons/Icons';
import Svg, { Path } from 'react-native-svg';
import { COLOR } from '../../common/color';
import { FastBuy } from '../FastBuy/FastBuy';

export interface IProductCardProps {
  navigation: Navigation;
  route: any;
}
interface IProductCardState {
  addedToBag: boolean;
  compare: boolean;
  favourite: boolean;
  showFavouriteItem: boolean;
  isFastBuyModalVisible: boolean;
}

export class ProductCard extends React.Component<IProductCardProps, IProductCardState> {
  constructor(props: IProductCardProps){
    super(props);

    this.state = {
      addedToBag: false,
      favourite: false,
      showFavouriteItem: false,
      compare: false,
      isFastBuyModalVisible: false
    }
  }

  addToBagHandler = (e: any) => {
    let newState;
    const {addedToBag} = this.state;
    if(addedToBag) {
      newState = false;
    } else {
      newState = true;
      ActionSheetIOS.showActionSheetWithOptions({
        title: 'Товар добавлен в корзину, теперь можно:',
        options: ['Продолжить покупки','Оформить покупку','Перейти в корзину', 'Быстрая покупка'],
        cancelButtonIndex: 0,
        tintColor: COLOR.TINT_COLOR
      },
      (index) => { 
        
          if (index === 1) {
            this.props.navigation.navigate('Decoration');
          } else if (index === 2) {
            this.props.navigation.navigate('Basket');
          } else if (index === 3 ){
            this.setState({
              isFastBuyModalVisible: true
            })
          }
       });
    }
    this.setState({
      addedToBag: newState,
    })
  }

  compareChangeHandler = (e: any) => {
    let newState;
    const {compare} = this.state;
    if(compare) {
      newState = false;
    } else {
      Alert.alert('Добавлен в сравнение', 'Товар добавлен в сравнение и находится в разделе Ещё > Сравнение товаров', [{
        text: 'Перейти в сравнение',
        onPress: (e) => { console.log('Go to compare') }
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},  
      ]);
      newState = true;
    }
    this.setState({
      compare: newState,
    })
  }

  addToFavouriteHandler = (e: any) => {
    const { favourite } = this.state;
    if(favourite) {
      this.showFavouriteItemHandler(e);
    } else {
      Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе Ещё > Избранное');
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
  onDismissFastBuyModalShow = (e: any) => {
    this.setState({
      isFastBuyModalVisible: false
    })
  }

  render() {
    const { addedToBag, favourite } = this.state;
    return(
      <View style={[cardItem.wrapper]}>
        { this.state.showFavouriteItem ? 
        <View style={{ backgroundColor: COLOR.WHITE, height: 304, alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ height: '60%', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', fontSize: 16, color: COLOR.GRAY, fontWeight: '300'}}>
               Убрать товар из избранного?
              </Text>
            </View>
            <View style={{height: '40%', width: '100%'}}>
            <View style={{ borderTopWidth: .5, borderTopColor: '#EBEBEB', width: '100%', paddingVertical: 17}}>
              <TouchableHighlight underlayColor={'transparent'} onPress={(e) => { this.showFavouriteItemHandler(e); this.setState({ favourite: false })}}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: COLOR.TINT_COLOR}}>Убрать</Text>
              </TouchableHighlight>
            </View>
            <View style={{ borderTopWidth: .5, borderTopColor: '#EBEBEB', width: '100%', paddingVertical: 17}}>
              <TouchableHighlight underlayColor={'transparent'} onPress={(e) => { this.showFavouriteItemHandler(e) }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: COLOR.TINT_COLOR}}>Отмена</Text>
              </TouchableHighlight>
            </View>
            </View>
        </View>
        :
        <>
        <TouchableHighlight underlayColor={'#FFF'} onPress={(e) => this.props.navigation.navigate('Product', { title : this.props.route.params.title })}>
          <View style={cardItem.header}>
            <View style={cardItem.discountIcon}><Text style={{fontSize: 12, color: COLOR.WHITE, fontWeight: '600'}}>- 9%</Text></View>
            <View style={cardItem.imageWrapper}>
              <View style={cardItem.image}>
                <ImageBackground source={require('../../../assets/catalog/iphone.png')} style={{width: 96, height: 134, position: 'relative'}}>
                </ImageBackground>
              </View>
              <View style={{position: 'absolute', right: 10, top: 16, alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                <View>
                  <View style={{width: 10, height: 10, backgroundColor: COLOR.BLACK, borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#5E5D62', borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#D2D5DB', borderRadius: 2, marginBottom: 5}}></View>
                  <View style={{width: 10, height: 10, backgroundColor: '#FF0000', borderRadius: 2, marginBottom: 5}}></View>
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
          <View style={{width: 31}}>
            <TouchableHighlight onPress={e => this.compareChangeHandler(e)} underlayColor={COLOR.WHITE}>
              <>
                <CompareCardIcon width={25} height={25} color={this.state.compare ? '#27AE60' : COLOR.GRAY}/>
                { this.state.compare ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={'#27AE60'}/></View> : null}
              </>
            </TouchableHighlight>
          </View>
          <View style={{width: 31}}>
            <HeartIcon underlayColor={COLOR.WHITE} onPress={e => this.addToFavouriteHandler(e)} width={25} height={23} color={this.state.favourite ? '#EB5757' : COLOR.GRAY}/>
            { this.state.favourite ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={'#EB5757'}/></View> : null}
          </View>
          <View style={{width: 31}}>
            <TouchableHighlight onPress={(e: any) => { this.addToBagHandler(e) }} underlayColor={COLOR.WHITE}>
              <>
              <ShoppingCardIcon width={25} height={24} color={this.state.addedToBag ? COLOR.TINT_COLOR : COLOR.GRAY}/>
              { this.state.addedToBag ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={COLOR.TINT_COLOR}/></View> : null}
              </>
            </TouchableHighlight>
          </View>
        </View>
        </>}
        <Modal animated animationType={"slide"} visible={this.state.isFastBuyModalVisible} transparent>
          <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(54, 54, 54, 0.3)'}}>
            <KeyboardAvoidingView behavior="padding">
              <FastBuy onDismiss={this.onDismissFastBuyModalShow}/>
            </KeyboardAvoidingView>

          </View>
        </Modal>
      </View>
    )
  }
}


export const cardItem = StyleSheet.create({
  wrapper: {borderRadius: 3, width: '48%',maxWidth: 186, marginBottom: 8, backgroundColor: COLOR.WHITE, minHeight: 304, },
  header: {flex: 3, paddingVertical: 10},
  imageWrapper: {flex: 1,padding: 10, position: 'relative'},
  infoWrapper: {flex: 1,paddingHorizontal: 16},
  image: { flex: 1,height: '100%',width: '100%', alignItems: 'center'},
  discountIcon: {zIndex: 20, left: 10, top: 10,position: 'absolute', paddingHorizontal: 5, paddingVertical: 2, backgroundColor: COLOR.TINT_COLOR, borderRadius: 3},
  infoTitle: { fontSize: 12, fontWeight: '300', color: COLOR.BLACK},
  priceWrapper: {flexDirection: 'row', marginTop: 13, alignItems: 'center'},
  discountPriceWrapper: { position: 'relative', marginRight: 10 },
  discountPrice: {fontSize: 12, fontWeight: '300', color: COLOR.GRAY},
  discountPriceLine: { borderBottomWidth: 1, position: 'absolute', zIndex: 100, bottom: '40%', width: '100%', borderColor: '#EB5757'},
  price: {color: COLOR.BLACK, fontSize: 14, fontWeight: '600'},
  optionsWrapper: {flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, paddingVertical: 16, borderTopWidth: .5, borderColor: '#EBEBEB', alignItems: 'center'},
})