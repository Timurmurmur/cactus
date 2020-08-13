import React, { useState } from 'react';
import { View, TouchableHighlight, FlatList, Text, CheckBox, StyleSheet, Animated, Easing, ScrollView, Dimensions } from 'react-native';
import { Slider } from '../Slider/Slider';
import { COLOR } from '../../common/colors';
import { AntDesign } from '@expo/vector-icons';
import { ArrowTop, ArrowBottom } from '../Icons/Icons';

class DropDownFilter extends React.Component<any,any> {
  animatedValue: any;  
  constructor(props: any){
    super(props);

    this.state = {
      show: false
    }
  }

  UNSAFE_componentWillMount(){
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount(){
    
  }

  pressHandler = (e:any) => {
    const { show } = this.state;
    if(show) {
      this.hideContent();
      this.setState({
        show: false
      })
    } else {
      this.showContent();
      this.setState({
        show: true
      })
    }
  } 
  
  showContent = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease
    }).start()
  }

  hideContent = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease
    }).start()
  }

  render() {

    const animatedStyle = {maxHeight: this.animatedValue.interpolate({
      inputRange: [0,1],
      outputRange: [0, 1000]
    })}

    return(
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 20}} onTouchEnd={this.pressHandler}>
          <Text style={{color: COLOR.TEXT_GRAY}}>{this.props.title}</Text>
          <View><TouchableHighlight onPress={this.pressHandler} underlayColor={COLOR.GRAY}  style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text>{
            !this.state.show ? <ArrowBottom width={12} height={7} color={'#CECECE'}/> : <ArrowTop width={12} height={7} color={'#CECECE'}/>}</Text>
          </TouchableHighlight></View>
        </View>
        <Animated.View style={animatedStyle}>
          { this.props.children }
        </Animated.View>
      </View>
    )
  }
}



interface FilterProps {
  showFilterModalHandler: () => void;
  onSliderValueChange: (values: any) => void; 
}

export class Filter extends React.Component<FilterProps, any> {

  render() {

    const { showFilterModalHandler, onSliderValueChange } = this.props;

    return(
        <View style={filterModalStyles.container}>
        <View style={filterModalStyles.wrapper}>
        <ScrollView>
          <View style={[filterModalStyles.item, filterModalStyles.header]}>
            <View style={[filterModalStyles.titleWrapper]}>
              <Text style={filterModalStyles.title}>Фильтры</Text>
            </View>
            <TouchableHighlight underlayColor={COLOR.GREEN} onPress={showFilterModalHandler}>
              <Text style={filterModalStyles.resetBtn}>Сбросить</Text>
            </TouchableHighlight>
          </View>
            <View style={filterModalStyles.item}>
              <View>
                <Text style={{ color: COLOR.TEXT_GRAY }}>Цена</Text>
              </View>
              <Slider onChangeFinish={onSliderValueChange}></Slider>
            </View>
            <View style={filterModalStyles.item}>
              {/* <View style={{marginBottom: 38}}>
                <Text style={{color: COLOR.TEXT_GRAY}}>Бренд</Text>
              </View> */}
              <DropDownFilter title={"Бренд"}>
                <View style={{marginTop: 30}}>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Apple</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Samsung</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Xiaomi</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Meizu</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>OnePlus</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Huawei</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Doogee</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Vernee</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Google Pixel</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Honor</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Картфоны AEKU</Text></View>
                  </TouchableHighlight>
                  <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                      <CheckBox color={COLOR.LIGHT_GREEN}/>
                      <Text style={{width: '80%', fontSize: 16}}>Sony Xperia</Text></View>
                  </TouchableHighlight>
                </View>
              </DropDownFilter>
            </View>
            <View style={filterModalStyles.item}>
            <DropDownFilter title={"Серия"}>
              <View style={{marginTop: 30}}>
                <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckBox/>
                    <Text style={{width: '80%', fontSize: 16}}>iPhone 11</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckBox/>
                    <Text style={{width: '80%', fontSize: 16}}>iPhone 11 Pro</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckBox/>
                    <Text style={{width: '80%', fontSize: 16}}>iPhone 11 Pro Max</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckBox/>
                    <Text style={{width: '80%', fontSize: 16}}>iPhone Xr</Text></View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginBottom: 15}} underlayColor={COLOR.GRAY}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <CheckBox />
                    <Text style={{width: '80%', fontSize: 16}}>iPhone Xs</Text></View>
                </TouchableHighlight>
              </View>
            </DropDownFilter>
            </View>
          </ScrollView>
        </View>
      </View>
  )
  }
}




const filterModalStyles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,.3)', height: '100%', flexDirection: 'row', justifyContent: 'flex-end'},
  wrapper: { width: '75%', backgroundColor: COLOR.WHITE },
  item: { paddingHorizontal: 16,paddingVertical: 12, borderBottomColor: COLOR.GRAY, borderBottomWidth: 1, width: '100%', overflow: 'hidden' },
  header: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  titleWrapper: {  },
  title: {fontSize: 20, fontFamily: 'Roboto-Medium', color: COLOR.BLACK},
  resetBtn: { color: COLOR.LIGHT_GREEN, fontSize: 14, fontFamily: 'Roboto-Medium'}
})