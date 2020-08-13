import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Modal, Dimensions,TouchableHighlight, Alert, ActionSheetIOS, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';
import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import { CompareCardIcon, ArrowRight, Logo, ShareIcon, HeartIcon, HeartEmptyIcon, YouTubeIcon } from '../../Components/Icons/Icons';
import Svg, { Path } from 'react-native-svg';
import { ItemCardBanner } from '../../Components/ItemCardBanner/ItemCardBanner';
import Colors from '../../constants/Colors';
import { Header } from '../../Components/Header/Header';
import { BlurView } from 'expo-blur';
import { FastBuy } from '../../Components/FastBuy/FastBuy';

const swiperLength = [1,2,3];

export interface IPhoneProps {
  navigation: Navigation;
  route: Route;
  rootContext: any;
}

interface IPhoneState {
  compare: boolean;
  favourite: boolean;
  fastBuyModalShow: boolean;
}

export class Phone extends React.Component<IPhoneProps, IPhoneState> {
  constructor(props: IPhoneProps){
    super(props);

    this.state = {
      compare: false,
      favourite: false,
      fastBuyModalShow: false,
    }
  }

  componentDidMount() {}


  changeCompareHandler = (e: any) => {
    const { compare } = this.state;
    let nextState;
    if ( compare ) {
      nextState = false;
    } else {
      nextState = true;
      Alert.alert('Добавлен в сравнение', `Товар добавлен в сравнение и находится в разделе\n Ещё > Сравнение товаров`, [{
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

  onDismissFastBuyModalShow = (e: any) => {
    this.setState({
      fastBuyModalShow: false
    })
  }

  changeFavouriteHandler = (e: any) => {
    const { favourite } = this.state;
    let nextState;
    if ( favourite ) {
      nextState = false;
    } else {
      nextState = true;
      Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе Ещё > Избранное');
    }
    this.setState({
      favourite: nextState
    })
  }


  buyHandler = (e: any) => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          message: `Товар добавлен в корзину,\nтеперь можно:`,
          options: ['Продолжить покупки','Перейти в корзину','Оформить покупку','Быстрая покупка',  ],
          cancelButtonIndex: 0
        },
        (index: number) => {
          if (index === 3) {
            this.setState({
              fastBuyModalShow: true
            })
          } else if (index === 1) {
            this.props.navigation.navigate('Basket')
          } else if (index === 2) {
            this.props.navigation.navigate('Decoration');
          }
        }
      )
  }


  render() {
    return(
      <View style={{flex: 1}}>
      <Modal animated animationType={"slide"} visible={this.state.fastBuyModalShow} transparent>
        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(54, 54, 54, 0.3)'}}>
          <KeyboardAvoidingView behavior="padding">
            <FastBuy onDismiss={this.onDismissFastBuyModalShow}/>
          </KeyboardAvoidingView>

        </View>
      </Modal>
      <Header logo={<Logo />} back {...this.props}/>
      <View style={{flex: 1}}>
      <BlurView intensity={90} style={phoneStyles.header}>
        <View style={{height: 77, paddingTop: 18}}>
        <View>
          <Text style={{fontSize: 20, color: Colors.black, fontWeight: '500' }}>Apple iPhone 11 64Gb Red (MWLV2)</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 7}}>
          <Text style={{fontSize: 16, color: Colors.gray }}>Код: 653220</Text>
          <Text style={{fontSize: 16, color: Colors.lightGreen}}>В наличии</Text>
        </View>
        </View>
      </BlurView>
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{width: '100%', position: 'relative'}}>
          <View style={[{backgroundColor: Colors.white, position: 'relative', marginTop: 77, marginBottom: 25}]}>
            <View style={{height: 330, padding: 30}}>
              <Swiper renderPagination={(index, total, context) => (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View style={{width: total * 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                  {
                    swiperLength.map((el, i) => {
                      if (i === total - 1) {
                        return(
                          <YouTubeIcon width={16} height={11} color={i === index ? Colors.green : '#DADADA'}/>
                        )
                      } else {
                        return(
                          <View style={{width: 11, height: 11, backgroundColor: i === index ? Colors.green : '#DADADA', borderRadius: 50}}>
                          </View>
                        )
                      }
                    })
                  }
                  </View>
                </View>
              )} autoplay={true} showsButtons={false} autoplayTimeout={3} activeDotColor={Colors.lightGreen} paginationStyle={{bottom: 0}}>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/images/phone.png')} style={{width: 177, height: 242}}/>
                </View>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/images/phone.png')} style={{width: 177, height: 242}}/>
                </View>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../../../assets/images/phone.png')} style={{width: 177, height: 242}}/>
                </View>
              </Swiper>
              <View style={{position: 'absolute', right: 15, height: '100%',justifyContent: 'flex-end', alignItems: 'center'}}>
                <View style={{marginBottom: 20}}><FontAwesome5 name="youtube" size={30} color={'#A8A8A8'}/></View>
                <View>
                  <TouchableHighlight>
                    <Svg width={35} height={35} >
                      <Path d="M30.625 13.7893V4.43623C30.625 4.04404 30.4714 3.66792 30.1979 3.3906C29.9244 3.11328 29.5534 2.95749 29.1667 2.95749H15.4846L14.4295 0.817375C14.3083 0.571741 14.1221 0.365166 13.8917 0.220798C13.6613 0.0764302 13.3958 -2.49882e-05 13.125 6.12631e-09H7.29167C7.02082 -2.49882e-05 6.75533 0.0764302 6.52492 0.220798C6.29452 0.365166 6.10832 0.571741 5.98719 0.817375L4.52885 3.77486C4.42779 3.98027 4.37512 4.20667 4.375 4.43623V13.7893C1.54802 15.6654 0 18.095 0 20.7024C0 26.1482 6.7663 30.4865 15.7066 31.0018L13.8804 32.976L16.0074 35L20.113 30.5638C20.3722 30.2837 20.5137 29.9123 20.5077 29.5283C20.5016 29.1442 20.3484 28.7776 20.0805 28.5061L15.7055 24.0699L13.6434 26.1612L15.4777 28.0211C8.48896 27.5046 2.91667 24.3623 2.91667 20.7024C2.91667 19.6255 3.42234 18.5549 4.375 17.5667V20.7024C4.375 21.0946 4.52865 21.4707 4.80214 21.748C5.07563 22.0254 5.44656 22.1811 5.83333 22.1811H29.1667C29.5534 22.1811 29.9244 22.0254 30.1979 21.748C30.4714 21.4707 30.625 21.0946 30.625 20.7024V17.5667C31.5777 18.5549 32.0833 19.6255 32.0833 20.7024C32.0833 23.5675 28.3602 26.3726 23.0296 27.5238L23.637 30.4163C30.5401 28.9253 35 25.1128 35 20.7024C35 18.095 33.452 15.6654 30.625 13.7893ZM27.7083 19.2237H7.29167V4.78521L8.19292 2.95749H12.2238L13.2789 5.0976C13.4 5.34323 13.5862 5.54981 13.8166 5.69417C14.047 5.83854 14.3125 5.915 14.5833 5.91497H27.7083V19.2237Z" fill={'#A8A8A8'}/>
                      <Path d="M23.3327 13.3088C23.3327 12.1389 22.9906 10.9953 22.3496 10.0226C21.7086 9.04988 20.7976 8.29174 19.7317 7.84405C18.6658 7.39636 17.4929 7.27923 16.3613 7.50746C15.2298 7.73569 14.1904 8.29903 13.3746 9.12626C12.5588 9.95348 12.0032 11.0074 11.7781 12.1548C11.553 13.3022 11.6685 14.4915 12.1101 15.5723C12.5516 16.6532 13.2992 17.5769 14.2585 18.2269C15.2178 18.8768 16.3456 19.2237 17.4994 19.2237C19.0459 19.2219 20.5286 18.5981 21.6221 17.4892C22.7157 16.3804 23.3309 14.877 23.3327 13.3088ZM17.4994 16.2663C16.9225 16.2663 16.3586 16.0928 15.8789 15.7678C15.3993 15.4429 15.0255 14.981 14.8047 14.4406C14.5839 13.9001 14.5262 13.3055 14.6387 12.7318C14.7513 12.1581 15.0291 11.6311 15.437 11.2175C15.8449 10.8039 16.3646 10.5222 16.9303 10.4081C17.4961 10.294 18.0826 10.3526 18.6155 10.5764C19.1485 10.8003 19.604 11.1793 19.9245 11.6657C20.245 12.152 20.416 12.7238 20.416 13.3088C20.4152 14.0929 20.1076 14.8446 19.5608 15.3991C19.014 15.9535 18.2726 16.2654 17.4994 16.2663Z" fill={'#A8A8A8'}/>
                    </Svg>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderTopWidth: 1, borderTopColor: '#EBEBEB', alignItems: 'center'}}>
                <View style={{width: 80, justifyContent: 'space-between',alignItems: 'center', height: 66,}} onTouchStart={(e) => this.changeCompareHandler(e)}>
                  <CompareCardIcon width={30} height={26} color={this.state.compare ? Colors.lightGreen : '#A8A8A8'}/>
                  <Text style={{textAlign: 'center', fontSize: 12, color: `${this.state.compare ? Colors.lightGreen : '#A8A8A8'}`}}>{this.state.compare ? 'Добавлено': 'Добавить'} в сравнение</Text>
                </View>
                <View style={{width: 80, justifyContent: 'space-between',alignItems: 'center',height: 66 }} onTouchStart={(e) => this.changeFavouriteHandler(e)}>
                  { !this.state.favourite ? 
                  <Svg width={29} height={26}>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.3789 25.5755C13.6891 25.8493 14.0871 26 14.5 26C14.9126 26 15.3109 25.8493 15.6209 25.5759C16.7951 24.5412 17.9263 23.5695 18.9246 22.7124L18.9251 22.712C21.8461 20.2034 24.3686 18.037 26.1239 15.9025C28.0862 13.5166 29 11.2542 29 8.78268C29 6.38138 28.1831 4.16604 26.6996 2.54444C25.1984 0.903664 23.1384 0 20.8988 0C19.2248 0 17.6918 0.533324 16.3424 1.58503C15.6611 2.11591 15.0441 2.76562 14.5 3.52346C13.9562 2.76562 13.3389 2.11591 12.6579 1.58503C11.3084 0.533324 9.77538 0 8.10138 0C5.86164 0 3.80178 0.903664 2.30058 2.54444C0.817085 4.16604 0 6.38138 0 8.78268C0 11.2542 0.913994 13.5166 2.87628 15.9027C4.6317 18.0371 7.15464 20.2039 10.0763 22.7129L10.0814 22.7173C11.0779 23.5731 12.2074 24.5432 13.3789 25.5755ZM3.54918 3.70423C4.72514 2.41908 6.34161 1.7114 8.10123 1.7114C9.39002 1.7114 10.5735 2.12432 11.6185 2.93858C12.55 3.66454 13.1987 4.58225 13.5788 5.22438C13.7744 5.55458 14.1186 5.75168 14.4998 5.75168C14.8811 5.75168 15.2253 5.55458 15.4209 5.22438C15.8013 4.58225 16.45 3.66454 17.3812 2.93858C18.4262 2.12432 19.6097 1.7114 20.8987 1.7114C22.6581 1.7114 24.2748 2.41908 25.4505 3.70423C26.644 5.00877 27.3013 6.81209 27.3013 8.78218C27.3013 10.8608 26.5347 12.7199 24.816 14.8099C23.1561 16.8284 20.6881 18.9481 17.8303 21.4025L17.8226 21.4092C16.8203 22.2696 15.6847 23.245 14.4974 24.2869C13.3173 23.247 12.1833 22.2731 11.1831 21.4141L11.1777 21.4096L11.1761 21.4082C8.31553 18.9515 5.84501 16.8298 4.18395 14.8099C2.46504 12.7199 1.6984 10.8608 1.6984 8.78218C1.6984 6.81209 2.35574 5.00877 3.54918 3.70423Z" fill="#A8A8A8"/>
                  </Svg>
                  : <AntDesign color={Colors.tintColor} name="heart" size={27}/>}
                  <Text style={{textAlign: 'center', fontSize: 12, color: `${this.state.favourite ? Colors.tintColor : '#A8A8A8'}`}}>{this.state.favourite ? 'Добавлено': 'Добавить'} в избранное</Text>
                </View>
                <View style={{width: 80, justifyContent: 'space-between',alignItems: 'center',height: 66}}>
                  {/* { addedToBag ? 
                  <FontAwesome5 name="shopping-cart" onPress={this.addToBagHandler} color={COLOR.GREEN} size={18}/>
                  : */}
                  <ShareIcon width={27} height={23} color={'#A8A8A8'}/>
                  <Text style={{textAlign: 'center', fontSize: 12, color: '#A8A8A8'}}>Поделиться с друзьями</Text>
                  {/* } */}
                </View>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 25}}>
            <View style={{paddingHorizontal: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.black }}>Модель</Text>
            </View>
            <View style={[ { marginTop: 15, backgroundColor: Colors.white }]}>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#EBEBEB', padding: 16}}>
                <View>
                  <Text style={{fontSize: 14, color: Colors.gray}}>Цвет: <Text style={{fontWeight: 'bold'}}>Red</Text></Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 5 }}>
                  <View style={[{ width: 32, height: 32, backgroundColor: Colors.black, borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5 }]}></View>
                  <View style={[{ width: 32, height: 32, backgroundColor: '#95DA97', borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5 }]}></View>
                  <View style={[{ width: 32, height: 32, backgroundColor: '#B4CAEF', borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5 }]}></View>
                  <View style={[{ width: 32, height: 32, backgroundColor: '#FF0000', borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5, justifyContent: 'center', alignItems: 'center' }]}>
                    <Svg width={18} height={13}>
                      <Path d="M0 7.05301L6.16399 13L18 1.61368L16.3007 0L6.16399 9.74994L1.67572 5.42796L0 7.05301Z" fill="white"/>
                    </Svg>
                  </View>
                  <View style={[{ width: 32, height: 32, backgroundColor: Colors.white, borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5 }]}></View>
                  <View style={[{ width: 32, height: 32, backgroundColor: '#EDEF29', borderRadius: 2, marginRight: 20, borderColor: '#EBEBEB', borderWidth: .5 }]}></View>
                </View>
              </View>
              <View style={{paddingHorizontal: 16, paddingTop: 12, paddingBottom: 3}}>
                <View>
                  <Text style={{fontSize: 14, color: Colors.gray}}>Внутренняя память: <Text style={{fontWeight: 'bold'}}>64 Гб</Text></Text>
                </View>
                <View style={{flexDirection: 'row', paddingVertical: 15 }}>
                  <TouchableHighlight style={{backgroundColor: Colors.lightGreen,borderWidth: 1, borderColor: Colors.lightGreen, padding: 10, borderRadius: 2,marginRight: 10}}>
                    <Text style={{color: Colors.white, fontSize: 16}}>64 Гб</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={{borderWidth: 1, borderColor: '#C5C5C5', padding: 10, borderRadius: 2,marginRight: 10}}>
                    <Text style={{color: Colors.gray, fontSize: 16}}>128 Гб</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={{borderWidth: 1, borderColor: '#C5C5C5', padding: 10, borderRadius: 2,marginRight: 10}}>
                    <Text style={{color: Colors.gray, fontSize: 16}}>256 Гб</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginBottom: 25}}>
            <View style={{paddingHorizontal: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold' }}>Основные характеристики</Text>
            </View>
            <View style={[{ marginTop: 12, }]}>
              <View style={{paddingHorizontal: 16, backgroundColor: Colors.white }}>
                <View style={{}}>
                    <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                        <Text style={{marginBottom: 5, color: Colors.gray}}>Материалы корпуса</Text>
                        <Text style={{ color: Colors.black, fontWeight: '500', fontSize: 16}}>Металл, стекло</Text>
                    </View>
                    <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                        <Text style={{marginBottom: 5, color: Colors.gray}}>Влагозащита</Text>
                        <Text style={{ color: Colors.black, fontWeight: '500', fontSize: 16}}>IP68</Text>
                    </View>
                    <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                        <Text style={{marginBottom: 5, color: Colors.gray}}>Цвет</Text>
                        <Text style={{ color: Colors.black, fontWeight: '500', fontSize: 16}}>Красный</Text>
                    </View>
                    <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                        <Text style={{marginBottom: 5, color: Colors.gray}}>Тип экрана</Text>
                        <Text style={{ color: Colors.black, fontWeight: '500', fontSize: 16}}>IPS</Text>
                    </View>
                    <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5, paddingVertical: 12}}>
                        <Text style={{marginBottom: 5, color: Colors.gray}}>Размер экрана</Text>
                        <Text style={{ color: Colors.black, fontWeight: '500', fontSize: 16}}>Безрамочный дисплей, 6,1”</Text>
                    </View>
                </View>
                <View style={{paddingVertical: 12, marginBottom: 3}}>
                    <TouchableHighlight underlayColor={Colors.white} onPress={e => { this.props.navigation.navigate('Characters') }}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: Colors.lightGreen, fontWeight: '500', fontSize: 16}}>Все характеристики</Text>
                            <View style={{position: 'absolute', right: 0}}>
                                <ArrowRight width={7} height={12} color={'#CECECE'}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
              </View>
              
            </View>
          </View>
          <View style={{marginBottom: 25}}>
            <View style={{paddingHorizontal: 16}}>
              <Text style={{fontSize: 16, fontWeight: 'bold' }}>Описание</Text>
            </View>
            <View style={[ { padding: 16,marginTop: 12, backgroundColor: Colors.white }]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: '#EBEBEB', borderBottomWidth: 1, paddingBottom: 12}}>
                <Text style={{color: Colors.gray, fontWeight: '500', fontSize: 16}}>
                  Новая система двух камер. Можно делать фотоснимки с широким и сверхшироким углом обзора. Обновлённый интерфейс и новая сверхширокоугольная камера позволят увидеть и снять то, что происходит за пределами кадра... 
                </Text>
              </View>
              <View style={{paddingTop: 12}}>
                    <TouchableHighlight underlayColor={Colors.white} onPress={e => { this.props.navigation.navigate('Description') }}>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{color: Colors.lightGreen, fontWeight: '500', fontSize: 16}}>Подробнее</Text>
                            <View style={{position: 'absolute', right: 0}}>
                                <ArrowRight width={7} height={12} color={'#CECECE'}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
          </View>
          <View style={{ backgroundColor: Colors.white, paddingTop: 15}}>
            <View style={{paddingHorizontal: 16}}>
              <Text style={{fontSize: 16, fontWeight: '500', color: Colors.black}}>Другие модели из этой серии</Text>
            </View>
            <View style={{}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{}}>
                <View style={{flexDirection: 'row', overflow: 'scroll', paddingBottom: 15, paddingRight: 16, paddingTop: 15, paddingLeft: 16}}>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                    <ItemCardBanner image={require('../../../assets/images/appleWatch.png')} title="Apple Watch Series 4 (GPS) 44mm Space..." price="6 699 ₴"/>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', height: 52 }]}>
        <View style={{width: '50%', backgroundColor: '#EBEBEB', paddingHorizontal: 15, paddingVertical: 8}}>
          <View style={{position: 'relative', marginBottom: 15}}>
            <View style={{position: 'absolute'}}>
            <Text style={{color: Colors.gray, fontSize: 12,}}>26 499 ₴</Text>
            <View style={{borderBottomColor: Colors.tintColor, borderBottomWidth: 1, position: 'absolute', zIndex: 100, bottom: 7, width: '100%'}}></View>
            </View>
          </View>
          <View style={{}}>
            <Text style={{fontSize: 22, fontWeight: '500', color: Colors.black}}>23 999 ₴</Text>
          </View>
        </View>
        <TouchableHighlight onPress={this.buyHandler} underlayColor={Colors.lightGreen} style={{backgroundColor: Colors.green, padding: 15, flexDirection: 'row', width: '50%', justifyContent: 'center', alignItems: 'center'}}>
            <>
                <FontAwesome5 name="shopping-cart" color={Colors.white} size={18}/>
                <Text style={{fontSize: 18, color: Colors.white, fontWeight: '500', marginLeft: 10}}>
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

const phoneStyles = StyleSheet.create({
  header: { position: 'absolute', top: 0,left: 0, width: '100%',paddingHorizontal: 15, zIndex: 100, backgroundColor: `rgba(255,255,255,1)`, },
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