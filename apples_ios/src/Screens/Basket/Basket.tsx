import React from 'react';
import {View, Text, Image, StyleSheet,Animated, I18nManager } from 'react-native';
import { Navigation, Route } from '../../common/types';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import Svg, { Path, Rect } from 'react-native-svg';
import { COLOR } from '../../common/color';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { Header } from '../../components/Header/Header';

export interface IBasketProps {
  navigation: Navigation;
  route: Route;
}

interface IBasketState {}

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
      <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Корзина', type: 'SMALL', basket: false}}/>
      <View style={{backgroundColor: COLOR.BACKGROUND, height: '100%', flex: 1}}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={basketStyles.container}>
              <View style={{marginBottom: 16}}>
                <BasketItem />
              </View>
              <View style={{marginBottom: 16}}>
                <BasketItem />
              </View>
              <View style={{marginBottom: 16}}>
                <BasketItem />
              </View>
              <View style={{marginBottom: 16}}>
                <BasketItem />
              </View>
            </View>
          </ScrollView>
        </View>
        
        <View style={basketStyles.footerWrapper}>
          <View style={basketStyles.footerHeader}>
            <View><Text style={basketStyles.footerTitle}>Итоговая сумма</Text></View>
            <View><Text style={basketStyles.totalPrice}>49 198 ₴</Text></View>
          </View>
          <View style={basketStyles.navigationWrapper}>
            <View style={{width: '45%'}}>
              <TouchableHighlight underlayColor={COLOR.WHITE} style={basketStyles.navigationBtn} onPress={e => this.props.navigation.navigate('CreditList')}>
              <Text style={{textAlign: 'center',fontSize: 18,fontWeight: '500', color:COLOR.TINT_COLOR}}>Купить в кредит</Text>
              </TouchableHighlight>
            </View>
            <View style={{width: '45%'}}>
              <TouchableHighlight underlayColor={COLOR.TINT_COLOR} onPress={e => this.props.navigation.navigate('Decoration')} style={[{backgroundColor:COLOR.TINT_COLOR}, basketStyles.navigationBtn ]}
              ><Text style={{textAlign: 'center',fontSize: 18, fontWeight: '500', color: COLOR.WHITE}}>Оформить</Text>
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
      <SwipeableRow>
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
      </SwipeableRow>
    </>
  )
}

export const basketItem = StyleSheet.create({
  wrapper: {paddingLeft: 25, paddingVertical: 12, flexDirection: 'row', width: '100%',height: 135, backgroundColor: COLOR.WHITE, borderRadius: 7},
  title: {fontSize: 18, color: COLOR.BLACK},
  price: {fontSize: 14, color: COLOR.GRAY, paddingTop: 4, paddingBottom: 8, },
  countWrapper: {flexDirection: 'row', alignItems: 'center', width: '35%', justifyContent: 'space-between'},
  countContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  countBtn: {backgroundColor: '#ECEDEF',width: 25, height: 25, borderRadius: 50, alignItems: 'center', justifyContent: 'center'},
  count: {fontSize: 18, color: COLOR.BLACK, fontWeight: '600'},
  countPrice: {fontSize: 18, color: COLOR.BLACK, fontWeight: '600'}
})

export const basketStyles = StyleSheet.create({
  container: {padding: 16, width: '100%',},
  buttonWrapper: {width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'},
  footerWrapper: { backgroundColor: COLOR.WHITE, width: '100%', padding: 16},
  footerHeader: {flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 16,},
  footerTitle: {fontSize: 18, color: COLOR.BLACK, },
  totalPrice: {fontSize: 20, fontWeight: '600', color: COLOR.BLACK},
  navigationWrapper: { flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  navigationBtn: {paddingVertical: 15, borderColor: COLOR.TINT_COLOR, borderWidth: 1 ,borderRadius: 3, width: '100%'}
}) 

class SwipeableRow extends React.Component {
  _swipeableRow: any;
  renderRightAction = (text: any, color: any, x: any, progress: any) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction]}
          onPress={pressHandler}>
          {text}
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = (progress: any) => (
    <View style={{ width: 192, flexDirection: I18nManager.isRTL? 'row-reverse' : 'row' }}>
      {this.renderRightAction(
      <Svg width="29" height="26" viewBox="0 0 29 26" fill="none">
        <Path d="M28.9521 7.75294C28.5288 3.26015 25.2309 0.000537826 21.1037 0.000537826C18.3541 0.000537826 15.8365 1.42732 14.4199 3.71406C13.0161 1.39775 10.6017 0 7.89618 0C3.76955 0 0.471148 3.25961 0.0483903 7.7524C0.0149266 7.95085 -0.122274 8.99526 0.294906 10.6985C0.896136 13.1552 2.28488 15.3897 4.30999 17.1591L14.4132 26L24.6899 17.1596C26.715 15.3897 28.1038 13.1557 28.705 10.6985C29.1222 8.9958 28.985 7.95139 28.9521 7.75294ZM27.6191 10.4522C27.0703 12.6959 25.7981 14.7401 23.9437 16.3599L14.4199 24.5533L5.05957 16.3621C3.20178 14.739 1.93016 12.6953 1.3808 10.4516C0.98593 8.83984 1.14823 7.92934 1.14879 7.92343L1.15715 7.86911C1.51968 3.93294 4.35349 1.0756 7.89618 1.0756C10.5102 1.0756 12.8114 2.62447 13.9035 5.11718L14.4171 6.2912L14.9308 5.11718C16.0055 2.66265 18.4283 1.07614 21.1043 1.07614C24.6464 1.07614 27.4808 3.93348 27.8506 7.92074C27.8517 7.92934 28.014 8.84038 27.6191 10.4522Z" fill="#8E8E93"/>
      </Svg>, '#ffab00', 128, progress)}
      {this.renderRightAction(
      <Svg width="22" height="27" viewBox="0 0 22 27" fill="none">
        <Path d="M14.7428 9.78223C14.3924 9.78223 14.1084 10.0653 14.1084 10.4145V22.3654C14.1084 22.7144 14.3924 22.9977 14.7428 22.9977C15.0932 22.9977 15.3771 22.7144 15.3771 22.3654V10.4145C15.3771 10.0653 15.0932 9.78223 14.7428 9.78223Z" fill="#8E8E93"/>
        <Path d="M7.25741 9.78223C6.90703 9.78223 6.62305 10.0653 6.62305 10.4145V22.3654C6.62305 22.7144 6.90703 22.9977 7.25741 22.9977C7.6078 22.9977 7.89178 22.7144 7.89178 22.3654V10.4145C7.89178 10.0653 7.6078 9.78223 7.25741 9.78223Z" fill="#8E8E93"/>
        <Path d="M1.8017 8.03816V23.6171C1.8017 24.5379 2.14044 25.4027 2.73219 26.0231C3.3212 26.6453 4.14092 26.9985 4.9988 27H17.0012C17.8593 26.9985 18.679 26.6453 19.2678 26.0231C19.8596 25.4027 20.1983 24.5379 20.1983 23.6171V8.03816C21.3746 7.72694 22.1368 6.59421 21.9795 5.39108C21.8219 4.18819 20.7938 3.28838 19.5766 3.28813H16.3287V2.49773C16.3324 1.83306 16.0687 1.19482 15.5967 0.725271C15.1246 0.255974 14.4833 -0.00535089 13.8165 8.30812e-05H8.18352C7.51669 -0.00535089 6.87539 0.255974 6.40333 0.725271C5.93127 1.19482 5.66761 1.83306 5.67133 2.49773V3.28813H2.42343C1.20624 3.28838 0.178122 4.18819 0.0205221 5.39108C-0.13683 6.59421 0.625399 7.72694 1.8017 8.03816ZM17.0012 25.7354H4.9988C3.91419 25.7354 3.07043 24.8067 3.07043 23.6171V8.09373H18.9296V23.6171C18.9296 24.8067 18.0858 25.7354 17.0012 25.7354ZM6.94006 2.49773C6.93585 2.16848 7.0657 1.85158 7.30011 1.61916C7.53428 1.38673 7.85295 1.25904 8.18352 1.26472H13.8165C14.147 1.25904 14.4657 1.38673 14.6999 1.61916C14.9343 1.85134 15.0642 2.16848 15.0599 2.49773V3.28813H6.94006V2.49773ZM2.42343 4.55276H19.5766C20.2072 4.55276 20.7184 5.06232 20.7184 5.69093C20.7184 6.31954 20.2072 6.8291 19.5766 6.8291H2.42343C1.79278 6.8291 1.28157 6.31954 1.28157 5.69093C1.28157 5.06232 1.79278 4.55276 2.42343 4.55276Z" fill="#8E8E93"/>
        <Path d="M10.9996 9.78223C10.6492 9.78223 10.3652 10.0653 10.3652 10.4145V22.3654C10.3652 22.7144 10.6492 22.9977 10.9996 22.9977C11.35 22.9977 11.634 22.7144 11.634 22.3654V10.4145C11.634 10.0653 11.35 9.78223 10.9996 9.78223Z" fill="#8E8E93"/>
      </Svg>
      , '#dd2c00', 64, progress)}
    </View>
  );
  updateRef = (ref: any) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});