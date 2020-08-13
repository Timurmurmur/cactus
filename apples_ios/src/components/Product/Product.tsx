import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Modal, Dimensions,TouchableHighlight, Alert, ActionSheetIOS, KeyboardAvoidingView } from 'react-native';
import { Navigation, Route } from '../../common/types';
import { BlurView } from 'expo-blur';
import { COLOR } from '../../common/color';
import { ItemCardBanner } from '../ItemCardBanner/ItemCardBanner';
import Swiper from 'react-native-swiper';
import {FontAwesome5,AntDesign} from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import { CompareCardIcon, CheckIcon, ArrowRight, ShoppingCardIcon } from '../Icons/Icons';
import { Header } from '../Header/Header';
import { FastBuy } from '../FastBuy/FastBuy';


export interface IProductProps {
  navigation: Navigation;
  route: any;
  rootContext: any;
}

interface IProductState {
  compare: boolean;
  favourite: boolean;
  fastBuyModalShow: boolean;
}

export class Product extends React.Component<IProductProps, IProductState> {
  constructor(props: IProductProps){
    super(props);

    this.state = {
      compare: false,
      favourite: false,
      fastBuyModalShow: false,
    }
  }

  componentDidMount() {
    
  }


  changeCompareHandler = (e: any) => {
    const { compare } = this.state;
    let nextState;
    if ( compare ) {
      nextState = false;
    } else {
      nextState = true;
      Alert.alert('Добавлен в сравнение', 'Товар добавлен в сравнение и находится в разделе\n Ещё > Сравнение товаров', [{
        text: 'Перейти в сравнение',
        onPress: (e) => { 
          this.props.navigation.navigate('MenuStackNavigator', { screen: 'CompareList', initial: false })  
        }
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},  
      ]);
    }
    this.setState({
      compare: nextState
    })
  }

  changeFavouriteHandler = (e: any) => {
    const { favourite } = this.state;
    let nextState;
    if ( favourite ) {
      nextState = false;
    } else {
      nextState = true;
      Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе\nЕщё > Избранное');
    }
    this.setState({
      favourite: nextState
    })
  }


  buyHandler = (e: any) => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          message: 'Товар добавлен в корзину,\nтеперь можно:',
          tintColor: COLOR.TINT_COLOR,
          options: ['Продолжить покупки','Оформить покупку','Перейти в корзину','Быстрая покупка',  ],
          cancelButtonIndex: 0
        },
        (index: number) => {
          if (index === 3) {
            this.setState({
              fastBuyModalShow: true
            })
          } else if (index === 2) {
            this.props.navigation.navigate('Basket')
          } else if (index === 1) {
            this.props.navigation.navigate('Decoration');
          }
        }
      )
  }

  onDismissFastBuyModalShow = (e: any) => {
    this.setState({
      fastBuyModalShow: false
    })
  }


  render() {
    return(
      <View style={{flex: 1, backgroundColor: COLOR.BACKGROUND}}>
      <Modal animated animationType={"slide"} visible={this.state.fastBuyModalShow} transparent>
        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(54, 54, 54, 0.3)'}}>
          <KeyboardAvoidingView behavior="padding">
            <FastBuy onDismiss={this.onDismissFastBuyModalShow}/>
          </KeyboardAvoidingView>

        </View>
      </Modal>
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: this.props.route.params.title, type: 'DEFAULT', basket: true}}/>
      <View style={{flex: 1}}>
      <View style={[phoneStyles.header]}>
          <View style={{height: 77, paddingTop: 18,borderBottomWidth: .5, borderBottomColor: '#EBEBEB',}}>
              <View>
                  <Text style={{fontSize: 20, color: COLOR.BLACK,  }}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 7}}>
                  <Text style={{fontSize: 14, color: COLOR.GRAY }}>Код: 653220</Text>
                  <Text style={{fontSize: 14, color: COLOR.TINT_COLOR, fontWeight: '500'}}>В наличии</Text>
              </View>
          </View>
      </View>
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{width: '100%', position: 'relative'}}>
          <View style={[{backgroundColor: COLOR.WHITE, position: 'relative', marginTop: 77}]}>
            <View style={{height: 330, padding: 30}}>
              <Swiper  autoplay={true} showsButtons={false} autoplayTimeout={3} renderPagination={(selectedIndex, total, swiper) => {
                let arr = new Array(total).fill(0);
                return(
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
                    {
                      arr.map((el, index) => 
                      (
                        <View style={[selectedIndex === index ? { backgroundColor: COLOR.TINT_COLOR, width: 10, height: 10 } : {width: 5, height: 5, backgroundColor: '#DADADA', marginBottom: 2}, { borderRadius: 50, marginHorizontal: 10}]}></View>
                      ))
                    }
                  </View>
                )
              }} dotStyle={{width: 5, height: 5}} activeDotStyle={{width: 10, height: 10, borderRadius: 50}} activeDotColor={COLOR.TINT_COLOR} paginationStyle={{bottom: 0}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/catalog/iphone.png')} style={{width: 173, height: 238}}/>
                </View>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/catalog/iphone.png')} style={{width: 173, height: 238}}/>
                </View>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/catalog/iphone.png')} style={{width: 173, height: 238}}/>
                </View>
              </Swiper>
            </View>
            <View style={{paddingHorizontal: 16, }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', borderTopWidth: .5, borderTopColor: '#EBEBEB', alignItems: 'center',paddingVertical: 20}}>
                <View style={{width: 30, alignItems: 'center'}} onTouchStart={(e) => this.changeCompareHandler(e)}>
                  <Svg width={26} height={26} >
                    <Path d="M25.9567 15.854L25.9606 15.8527L21.6918 6.53876L22.727 6.02353L22.3396 5.24787L21.3304 5.75053L21.1939 5.45284C21.0941 5.2353 20.8369 5.13981 20.6194 5.23953C20.5251 5.28281 20.4494 5.35848 20.4061 5.45284L20.2843 5.7189C19.5498 5.37776 18.7498 5.20075 17.94 5.2002H14.3V4.33355H15.1667V3.46689H14.4218L14.7333 2.2202C14.9725 1.26292 14.3905 0.292969 13.4332 0.053717C12.4759 -0.185481 11.5059 0.396589 11.2667 1.35387C11.1956 1.63824 11.1956 1.93577 11.2667 2.22015L11.5782 3.46683H10.8333V4.33349H11.7V5.20015H8.06217C7.25151 5.2008 6.45071 5.37825 5.71567 5.72014L5.5939 5.45408C5.49418 5.23655 5.23695 5.14105 5.01941 5.24077C4.92505 5.28405 4.84938 5.35972 4.8061 5.45408L4.6696 5.75178L3.66037 5.24695L3.27297 6.02348L4.3082 6.54087L0.0394391 15.8527C0.0131141 15.9093 -0.000319241 15.971 5.7593e-06 16.0334C0.00190159 17.7079 1.35888 19.0648 3.03334 19.0667H7.36667C9.04112 19.0648 10.3981 17.7079 10.4 16.0334C10.3989 15.9712 10.3841 15.9099 10.3567 15.854L6.0762 6.50496C6.69842 6.21614 7.3762 6.06665 8.06217 6.06686H11.7V21.9206L10.2206 23.4H8.66667C7.47067 23.4014 6.50141 24.3707 6.5 25.5667C6.5 25.806 6.69403 26 6.93334 26H19.0667C19.306 26 19.5 25.806 19.5 25.5667C19.4986 24.3707 18.5293 23.4014 17.3333 23.4H15.7794L14.3 21.9206V6.06686H17.94C18.626 6.06665 19.3038 6.21614 19.926 6.50496L15.6394 15.8527C15.6131 15.9093 15.5997 15.971 15.6 16.0334C15.6019 17.7079 16.9589 19.0648 18.6333 19.0667H22.9667C24.6411 19.0648 25.9981 17.7079 26 16.0334C25.999 15.9712 25.9842 15.9099 25.9567 15.854ZM7.36667 18.2001H3.03334C2.00406 18.1989 1.11719 17.475 0.910006 16.4668H9.49C9.28287 17.475 8.39595 18.1989 7.36667 18.2001ZM9.29154 15.6001H1.10847L5.08907 6.91575C5.16176 6.93525 5.23825 6.93525 5.31094 6.91575L9.29154 15.6001ZM12.275 1.22051C12.6125 0.820114 13.2107 0.769143 13.6111 1.1066C13.6522 1.14126 13.6903 1.1794 13.725 1.22051C13.9003 1.44346 13.9622 1.73509 13.8927 2.01004L13.5282 3.46689H12.4718L12.1073 2.01004C12.0378 1.73509 12.0998 1.44346 12.275 1.22051ZM12.5667 5.2002V4.33355H13.4333V5.2002H12.5667ZM13.4333 6.06686V21.6667H12.5667V6.06686H13.4333ZM17.3333 24.2667C17.8841 24.2673 18.3749 24.6143 18.5592 25.1333H7.44077C7.6251 24.6143 8.1159 24.2673 8.66667 24.2667H17.3333ZM14.5539 23.4H11.4461L12.3127 22.5334H13.6873L14.5539 23.4ZM20.6882 6.91705C20.7598 6.94224 20.8382 6.93899 20.9075 6.90795L24.8915 15.6001H16.7085L20.6882 6.91705ZM22.9667 18.2001H18.6333C17.6041 18.1989 16.7172 17.475 16.51 16.4668H25.09C24.8829 17.475 23.9959 18.1989 22.9667 18.2001Z" fill={this.state.compare ? '#27AE60' : COLOR.GRAY}/>
                  </Svg>
                  { this.state.compare ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={'#27AE60'}/></View> : null}
                </View>
                <View style={{width: 31, }} onTouchStart={(e) => this.changeFavouriteHandler(e)}>
                    <Svg width={29} height={26}>
                        <Path d="M28.9521 7.75294C28.5288 3.26015 25.2309 0.000537826 21.1037 0.000537826C18.3541 0.000537826 15.8365 1.42732 14.4199 3.71406C13.0161 1.39775 10.6017 0 7.89618 0C3.76955 0 0.471148 3.25961 0.0483903 7.7524C0.0149266 7.95085 -0.122274 8.99526 0.294906 10.6985C0.896136 13.1552 2.28488 15.3897 4.30999 17.1591L14.4132 26L24.6899 17.1596C26.715 15.3897 28.1038 13.1557 28.705 10.6985C29.1222 8.9958 28.985 7.95139 28.9521 7.75294ZM27.6191 10.4522C27.0703 12.6959 25.7981 14.7401 23.9437 16.3599L14.4199 24.5533L5.05957 16.3621C3.20178 14.739 1.93016 12.6953 1.3808 10.4516C0.98593 8.83984 1.14823 7.92934 1.14879 7.92343L1.15715 7.86911C1.51968 3.93294 4.35349 1.0756 7.89618 1.0756C10.5102 1.0756 12.8114 2.62447 13.9035 5.11718L14.4171 6.2912L14.9308 5.11718C16.0055 2.66265 18.4283 1.07614 21.1043 1.07614C24.6464 1.07614 27.4808 3.93348 27.8506 7.92074C27.8517 7.92934 28.014 8.84038 27.6191 10.4522Z" fill={this.state.favourite ? '#EB5757' : COLOR.GRAY}/>
                    </Svg>
                    { this.state.favourite ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={'#EB5757'}/></View> : null}

                </View>
                <View style={{width: 31,}}>
                    <Svg width={24} height={26}>
                        <Path d="M16.551 18.4788C16.3223 18.7097 16.1255 18.9635 15.9553 19.2319L8.41512 14.6093C8.61453 14.1051 8.72755 13.5568 8.72755 12.9817C8.72755 12.4066 8.61454 11.8583 8.41556 11.3541L15.9575 6.76674C16.7321 7.99546 18.09 8.81431 19.6364 8.81431C22.0425 8.81431 24 6.83726 24 4.40715C24 1.97705 22.0425 0 19.6364 0C17.2304 0 15.2729 1.97705 15.2729 4.40715C15.2729 4.96069 15.3789 5.48867 15.5639 5.97698L8.01193 10.5706C7.23172 9.37005 5.88862 8.57456 4.36356 8.57456C1.95749 8.57456 0 10.5516 0 12.9817C0 15.4118 1.95749 17.3889 4.36356 17.3889C5.88862 17.3889 7.23129 16.5934 8.01149 15.3929L15.5622 20.0217C15.3746 20.5179 15.2724 21.0481 15.2724 21.5951C15.2724 22.7722 15.7263 23.8793 16.5505 24.7113C17.401 25.5703 18.5185 26 19.636 26C20.7535 26 21.871 25.5703 22.7215 24.7113C23.5458 23.8788 23.9996 22.7722 23.9996 21.5951C23.9996 20.4179 23.5458 19.3108 22.7215 18.4788C21.0201 16.76 18.2523 16.76 16.551 18.4788ZM19.6364 0.881431C21.5612 0.881431 23.1273 2.46316 23.1273 4.40715C23.1273 6.35115 21.5612 7.93288 19.6364 7.93288C17.7117 7.93288 16.1456 6.35115 16.1456 4.40715C16.1456 2.46316 17.7112 0.881431 19.6364 0.881431ZM4.36399 16.5074C2.43923 16.5074 0.873148 14.9257 0.873148 12.9817C0.873148 11.0377 2.43923 9.45599 4.36399 9.45599C6.28876 9.45599 7.85484 11.0377 7.85484 12.9817C7.85484 14.9257 6.28876 16.5074 4.36399 16.5074ZM22.1045 24.0882C20.7435 25.4628 18.529 25.4628 17.168 24.0882C16.5086 23.4223 16.1456 22.5364 16.1456 21.5951C16.1456 20.6537 16.5086 19.7678 17.168 19.1019C17.8487 18.4144 18.7423 18.0711 19.6364 18.0711C20.5305 18.0711 21.4242 18.4144 22.1049 19.1019C22.7642 19.7678 23.1273 20.6537 23.1273 21.5951C23.1273 22.5364 22.7642 23.4223 22.1045 24.0882Z" fill="#8E8E93"/>
                    </Svg>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 30}}>
        <ProductItem title="Цвет">
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <RadioButton items={[
              {title: 'Space Grey', color: '#5E5D62' },
              {title: 'Silver', color: '#C0C0C0'},
              {title: 'Midnight Green', color: '#727C71'},
              {title: 'Gold', color: '#F8E5C4'},
            ]} itemWidth={'49%'}/>
          </View>
        </ProductItem>
        </View>
        <View style={{marginTop: 30}}>
        <ProductItem title="Память">
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <RadioButton items={[
              {title: '64 Gb',},
              {title: '256 Gb',},
              {title: '512 Gb',},
            ]} itemWidth={'30%'}/>
          </View>
        </ProductItem>
        </View>
        <View style={{marginTop: 30}}>
        <ProductItem title="Основные характеристики">
          <View style={{backgroundColor: COLOR.WHITE, paddingHorizontal: 16 }}>
            <View style={{}}>
                <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                    <Text style={{marginBottom: 5, color: COLOR.GRAY, fontWeight: '300', }}>Материалы корпуса</Text>
                    <Text style={{ color: COLOR.BLACK, fontSize: 16}}>Металл, стекло</Text>
                </View>
                <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                    <Text style={{marginBottom: 5, color: COLOR.GRAY, fontWeight: '300', }}>Влагозащита</Text>
                    <Text style={{ color: COLOR.BLACK, fontSize: 16}}>IP68</Text>
                </View>
                <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                    <Text style={{marginBottom: 5, color: COLOR.GRAY, fontWeight: '300', }}>Цвет</Text>
                    <Text style={{ color: COLOR.BLACK, fontSize: 16}}>Красный</Text>
                </View>
                <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                    <Text style={{marginBottom: 5, color: COLOR.GRAY, fontWeight: '300', }}>Тип экрана</Text>
                    <Text style={{ color: COLOR.BLACK, fontSize: 16}}>IPS</Text>
                </View>
                <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                    <Text style={{marginBottom: 5, color: COLOR.GRAY, fontWeight: '300', }}>Размер экрана</Text>
                    <Text style={{ color: COLOR.BLACK, fontSize: 16}}>Безрамочный дисплей, 6,1”</Text>
                </View>
            </View>
            <View style={{paddingVertical: 12, marginBottom: 3}}>
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => { this.props.navigation.navigate('Characters') }}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{color: COLOR.TINT_COLOR, fontSize: 16}}>Все характеристики</Text>
                        <View style={{position: 'absolute', right: 0}}>
                          <Svg width={7} height={12}>
                            <Path d="M4.64774 6.00254L0.190257 1.51317C0.0675197 1.38985 0 1.22498 0 1.04917C0 0.873268 0.0675197 0.708488 0.190257 0.584976L0.580846 0.191805C0.70339 0.0680976 0.867201 0 1.04177 0C1.21633 0 1.37995 0.0680976 1.50259 0.191805L6.80993 5.53678C6.93306 5.66068 7.00048 5.82624 7 6.00224C7.00048 6.17902 6.93316 6.34439 6.80993 6.46839L1.50753 11.8082C1.38489 11.9319 1.22127 12 1.04661 12C0.872045 12 0.708427 11.9319 0.58569 11.8082L0.195198 11.415C-0.0588984 11.1591 -0.0588984 10.7425 0.195198 10.4867L4.64774 6.00254Z" fill="#60B6FF"/>
                          </Svg>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
          </View>
        </ProductItem>
        </View>
        <View style={{marginTop: 30}}>
          <ProductItem title="Описание">
          <View style={[ { paddingTop: 15, backgroundColor: COLOR.WHITE, paddingHorizontal: 16 }]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: '#EBEBEB', borderBottomWidth: 1, paddingBottom: 12}}>
                <Text style={{color: COLOR.BLACK, fontSize: 16, lineHeight: 19}}>
                  Новая система двух камер. Можно делать фотоснимки с широким и сверхшироким углом обзора. Обновлённый интерфейс и новая сверхширокоугольная камера позволят увидеть и снять то, что происходит за пределами кадра... 
                </Text>
              </View>
              <View style={{paddingVertical: 12}}>
                    <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => { this.props.navigation.navigate('Description') }}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: COLOR.TINT_COLOR, fontSize: 16}}>Подробнее</Text>
                            <View style={{position: 'absolute', right: 0}}>
                              <Svg width={7} height={12}>
                                <Path d="M4.64774 6.00254L0.190257 1.51317C0.0675197 1.38985 0 1.22498 0 1.04917C0 0.873268 0.0675197 0.708488 0.190257 0.584976L0.580846 0.191805C0.70339 0.0680976 0.867201 0 1.04177 0C1.21633 0 1.37995 0.0680976 1.50259 0.191805L6.80993 5.53678C6.93306 5.66068 7.00048 5.82624 7 6.00224C7.00048 6.17902 6.93316 6.34439 6.80993 6.46839L1.50753 11.8082C1.38489 11.9319 1.22127 12 1.04661 12C0.872045 12 0.708427 11.9319 0.58569 11.8082L0.195198 11.415C-0.0588984 11.1591 -0.0588984 10.7425 0.195198 10.4867L4.64774 6.00254Z" fill="#60B6FF"/>
                              </Svg>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
          </ProductItem>
        </View>
        <View style={{marginTop: 30}}>
          <ProductItem title="Другие модели из этой серии">
            <View style={{}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{}}>
              <View style={{flexDirection: 'row', overflow: 'scroll', paddingBottom: 15, paddingRight: 16, paddingTop: 15, paddingLeft: 16}}>
                <View style={{marginRight: 30}}>
                  <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone11Pro.png'), width: 104, height: 140}} title="Apple iPhone 11 Pro Max Dual SIM 512GB..." price="45 699 ₴"/>
                </View>
                <View style={{marginRight: 30}}>
                  <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone11Pro.png'), width: 104, height: 140}} title="Apple iPhone 11 Pro Max Dual SIM 512GB..." price="45 699 ₴"/>
                </View>
                <View style={{marginRight: 30}}>
                  <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone11Pro.png'), width: 104, height: 140}} title="Apple iPhone 11 Pro Max Dual SIM 512GB..." price="45 699 ₴"/>
                </View>
                <View style={{marginRight: 30}}>
                  <ItemCardBanner image={{ src: require('../../../assets/catalog/iphone11Pro.png'), width: 104, height: 140}} title="Apple iPhone 11 Pro Max Dual SIM 512GB..." price="45 699 ₴"/>
                </View>
              </View>
            </ScrollView>
            </View>
          </ProductItem>
        </View>
      </ScrollView>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', height: 54, borderTopColor: '#DADADA', borderTopWidth: .5 }]}>
        <View style={{width: '50%', backgroundColor: COLOR.WHITE, justifyContent: 'center'}}>
          <View style={{}}>
            <Text style={{fontSize: 22, fontWeight: '500', color: COLOR.TINT_COLOR, textAlign: 'center'}}>23 999 ₴</Text>
          </View>
        </View>
        <TouchableHighlight onPress={this.buyHandler} underlayColor={COLOR.TINT_COLOR} style={{backgroundColor: COLOR.TINT_COLOR, padding: 15, flexDirection: 'row', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
          <>
              <ShoppingCardIcon width={25} height={24} color={COLOR.WHITE}/>
              <Text style={{fontSize: 18, color: COLOR.WHITE, fontWeight: '500', marginLeft: 10}}>
                  Купить
              </Text>
          </>
        </TouchableHighlight>
      </View>
      </View>
      </View>
    )
  }
}


const RadioButton:React.FC = ({ items, itemWidth }: any) => {
  const [selectedItem, setSelectedItem] = useState(items[0].title);

  const radioHandler = useCallback(
    (e, item) => {
      setSelectedItem(item);
    },[selectedItem] 
  )


  return(
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { items.map((el: any, index: number) => (
        <View key={index} style={[{width: itemWidth, marginBottom: 16, flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15, maxWidth: 183, borderRadius: 3}, selectedItem === el.title ? { borderWidth: 1, borderColor: '#3A3A3C'} : {  borderWidth: .5, borderColor: '#DADADA' }]} onTouchStart={e => radioHandler(e, el.title)}>
          { el.color ? <View style={{backgroundColor: el.color, width: 24, height: 24, borderRadius: 3, borderColor: '#D2D5DB', borderWidth: .5, marginRight: 10}}></View> : null}
          <View style={!el.color ? { width: '100%' }: null}>
            <Text style={{fontWeight: '300', fontSize: 16, color: COLOR.BLACK, textAlign: 'center'}}>{el.title}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

const ProductItem: React.FC = ({title, children}: any) => {
  return(
    <View>
      <View style={{marginBottom: 12, paddingLeft: 17}}>
        <Text style={{ fontSize: 16, color: COLOR.BLACK, fontWeight: '600'}}>{title}</Text>
      </View>
      <View style={{backgroundColor: COLOR.WHITE}}>
        { children }
      </View>
    </View>
  )
}

const phoneStyles = StyleSheet.create({
  header: { position: 'absolute', top: 0,left: 0, width: '100%',zIndex: 100, backgroundColor: `rgba(255,255,255,.7)`, paddingHorizontal: 16},
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 2,
  },
})