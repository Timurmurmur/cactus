import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Modal,TouchableHighlight, TextInput, CheckBox, FlatList, Switch, Alert } from 'react-native';
import { commonstyles } from '../../common/styles';
import { FontAwesome, AntDesign, FontAwesome5, Entypo, Ionicons  } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { modalStyles } from '../SmsVerification/SmsVerification';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import { TextInputMask } from 'react-native-masked-text';
import { Slider } from '../../Components/Slider/Slider';
import { Filter } from '../../Components/Filter/Filter';

export interface ICatalogItemProps {}
interface ICatalogItemState {
  showModal: boolean;
  buyModalShow: boolean;
  phone: string;
  phoneValid: boolean;
  radioKey: number;
  sortModalShow: boolean;
  filterModalShow: boolean;
  sliderValue: Array<number>;
}

export class CatalogItem extends React.Component<ICatalogItemProps, ICatalogItemState> {
  phoneRef:any;
  constructor(props: ICatalogItemProps){
    super(props);

    this.state = {
      showModal: false,
      buyModalShow: false,
      phone: '',
      phoneValid: false,
      radioKey: 2,
      sortModalShow: false,
      filterModalShow: false,
      sliderValue: [0,60000],
    }
    this.phoneNumberChangeHandler = this.phoneNumberChangeHandler.bind(this);

  }

  phoneNumberChangeHandler = (e: any) => {
    if(e.nativeEvent) {
      this.setState({
        phone: e.nativeEvent.text,
        phoneValid: this.phoneNumberValidate(e.nativeEvent.text)
      })
    }
    console.log(this.state.phoneValid)
  }
  
  phoneNumberValidate = (value: string) => {
    let phoneRegexp = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
    return phoneRegexp.test(value);
  }

  showModalHandler = () => {
    const { showModal } = this.state;
    let newState;
    if(showModal){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      showModal: newState
    })
  }
  showFilterModalHandler = () => {
    const { filterModalShow } = this.state;
    let newState;
    if(filterModalShow){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      filterModalShow: newState
    })
  }

  showBuyModalHandler = () => {
    const { buyModalShow } = this.state;
    
    let newState;
    if(buyModalShow){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      buyModalShow: newState
    })
  }
  showSortModalHandler = () => {
    const { sortModalShow } = this.state;
    let newState;
    if(sortModalShow){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      sortModalShow: newState
    })
  }

  radioHandler = (number: number) => {
    this.setState({
      radioKey: number,
      sortModalShow: false
    }) 
  }

  onSliderValueChange = (values: Array<number>) => {
    this.setState({
      sliderValue: values,
    })
  }

  render() {
    const { buyModalShow, showModal,sortModalShow, filterModalShow, phone, radioKey } = this.state;
    return(
      <ScrollView>
        <View style={[{flexDirection: 'row', justifyContent: 'space-between', height: 48}, commonstyles.shadow]}>
          <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: COLOR.GRAY}}>
            <TouchableHighlight underlayColor={COLOR.GRAY} style={{width: '100%', height: '100%'}} onPress={this.showSortModalHandler}>
              <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
                <View style={{marginRight: 10}}>
                  <Image source={require('../../../assets/icons/compareArrows.png')} style={{width: 15, height: 20}}/>
                </View>
                <View><Text style={{fontSize: 14, color: COLOR.BLACK}}>Сортировка</Text></View>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: COLOR.GRAY}}>
            <TouchableHighlight underlayColor={COLOR.GRAY} style={{width: '100%', height: '100%'}} onPress={this.showFilterModalHandler}>
              <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
                <View style={{marginRight: 10}}>
                  <FontAwesome5 name="filter" color={COLOR.LIGHT_GREEN} size={15}/>
                </View>
                <View><Text style={{fontSize: 14, color: COLOR.BLACK}}>Фильтры</Text></View>
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
        <View style={{paddingVertical: 10, flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-evenly', backgroundColor: COLOR.COMP_BG}}>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
          <ItemCard showModalHandler={this.showModalHandler} {...this.props}/>
        </View>
        <View>
          <Modal animationType="slide" visible={showModal} transparent={true} onRequestClose={this.showModalHandler}>
              <View style={modalStyles.modalContainer}>
                <View style={modalStyles.modalWrapper}>
                  <View style={[modalStyles.modalItem]}>
                    <Text style={{fontSize: 16, color: '#828282'}}>Товар добавлен в корзину</Text>
                  </View>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={(e) => console.log('pressed')}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <FontAwesome5 name="clipboard-check" size={25} color={'#828282'}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Оформить покупку</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} >
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <FontAwesome5 name="shopping-cart" size={25} color={'#828282'}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Перейти в корзину</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={() => {this.showModalHandler(); this.showBuyModalHandler()}}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <FontAwesome5 name="shopping-bag" size={25} color={'#828282'}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Быстрая покупка</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={this.showModalHandler}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <AntDesign name="arrowdown" size={25} color={'#828282'}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Продолжить покупку</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
          </Modal>
        </View>
        <View>
          <Modal animationType="slide" visible={buyModalShow} transparent={true} onRequestClose={this.showBuyModalHandler}>
              <View style={[modalStyles.modalContainer, buyModal.container]}>
                <View style={[buyModal.wrapper, commonstyles.shadow, { width: 280, maxHeight: 230}]}>
                  <View>
                    <Text style={{fontSize: 20, fontFamily: 'Roboto-Medium'}}>Быстрая покупка</Text>
                    <Text style={{fontSize: 14, color: COLOR.TEXT_GRAY, marginTop: 10, fontFamily: 'Roboto-Regular'}}>Чтобы оформить быструю покупку, нам нужен Ваш номер телефона</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <TextInputMask type={"cel-phone"}
                      options={{
                        maskType: "BRL",
                        withDDD: true,
                        dddMask: "+38(999)-999-99-99"
                      }}
                      placeholderTextColor={COLOR.BLACK}
                      placeholder={"+38("}
                      value={phone}
                      onChange={this.phoneNumberChangeHandler}
                      style={{borderBottomWidth: 1, borderBottomColor: '#E1E1E1', paddingVertical: 8, fontSize: 16, color: COLOR.BLACK}}
                      keyboardType="phone-pad"
                      ref={(ref) => this.phoneRef = ref}/>
                  </View>
                  <View style={buyModal.buttonContainer}>
                    <TouchableHighlight underlayColor={COLOR.GREEN} onPress={this.showBuyModalHandler}><Text style={buyModal.textButton}>Закрыть</Text></TouchableHighlight>
                    <TouchableHighlight underlayColor={COLOR.GREEN} style={[{ marginLeft: 20 }]}><Text style={buyModal.textButton}>Отправить</Text></TouchableHighlight>
                  </View>
                </View>
              </View>
          </Modal>
        </View>
        <View>
          <Modal animationType="slide" visible={sortModalShow} transparent={true} onRequestClose={this.showSortModalHandler}>
            <View style={modalStyles.modalContainer}>
              <View style={modalStyles.modalWrapper}>
                <View style={[modalStyles.modalItem]}>
                  <Text style={{fontSize: 16, color: '#828282'}}>Сортировать</Text>
                </View>
                <View style={{position: 'relative'}}>
                  <TouchableHighlight underlayColor={COLOR.GRAY} key={0} onPress={(e) => this.radioHandler(0)}>
                    <View style={{marginVertical: 14, position: 'relative'}}>
                      <Text style={{color: `${radioKey === 0 ? COLOR.LIGHT_GREEN : COLOR.BLACK}`, fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: '500'}}>По возрастанию цены</Text>
                      { radioKey === 0 ? <FontAwesome5 style={{position: 'absolute', right: 0}} name="check" size={17} color={COLOR.LIGHT_GREEN}/> : null}
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} key={1} onPress={(e) => this.radioHandler(1)}>
                    <View style={{marginVertical: 14, position: 'relative'}}>
                      <Text style={{color: `${radioKey === 1 ? COLOR.LIGHT_GREEN : COLOR.BLACK}`, fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: '500'}}>По убыванию цены</Text>
                      { radioKey === 1 ? <FontAwesome5 style={{position: 'absolute', right: 0}} name="check" size={17} color={COLOR.LIGHT_GREEN}/> : null}
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} key={2} onPress={(e) => this.radioHandler(2)}>
                    <View style={{marginVertical: 14, position: 'relative'}}> 
                      <Text style={{color: `${radioKey === 2 ? COLOR.LIGHT_GREEN : COLOR.BLACK}`, fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: '500'}}>Популярные</Text>
                      { radioKey === 2 ? <FontAwesome5 style={{position: 'absolute', right: 0}} name="check" size={17} color={COLOR.LIGHT_GREEN}/> : null}
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} key={3} onPress={(e) => this.radioHandler(3)}>
                    <View style={{marginVertical: 14, position: 'relative'}}>
                      <Text style={{color: `${radioKey === 3 ? COLOR.LIGHT_GREEN : COLOR.BLACK}`, fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: '500'}}>Новинки</Text>
                      { radioKey === 3 ? <FontAwesome5 style={{position: 'absolute', right: 0}} name="check" size={17} color={COLOR.LIGHT_GREEN}/> : null}
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} key={4} onPress={(e) => this.radioHandler(4)}>
                    <View style={{marginVertical: 14, position: 'relative'}}>
                      <Text style={{color: `${radioKey === 4 ? COLOR.LIGHT_GREEN : COLOR.BLACK}`, fontSize: 16, fontFamily: 'Roboto-Medium', fontWeight: '500'}}>Акционные</Text>
                      { radioKey === 4 ? <FontAwesome5 style={{position: 'absolute', right: 0}} name="check" size={17} color={COLOR.LIGHT_GREEN}/> : null}
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
        </Modal>
        </View>
        <View>
          <Modal animationType="fade" visible={filterModalShow} transparent={true} onRequestClose={this.showFilterModalHandler}>
            <Filter showFilterModalHandler={this.showFilterModalHandler} onSliderValueChange={this.onSliderValueChange}/>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}

const filterModalStyles = StyleSheet.create({
  container: {backgroundColor: 'rgba(0,0,0,.3)', height: '100%', flexDirection: 'row', justifyContent: 'flex-end'},
  wrapper: { width: 288, backgroundColor: COLOR.WHITE },
  item: { paddingHorizontal: 20,paddingVertical: 12, borderBottomColor: COLOR.GRAY, borderBottomWidth: 1,width: '100%' },
  header: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  titleWrapper: {  },
  title: {fontSize: 20, fontWeight: 'bold', color: COLOR.BLACK},
  resetBtn: { color: COLOR.LIGHT_GREEN, fontSize: 14, fontWeight: 'bold'}
})



export const buyModal = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  wrapper: {
    
    backgroundColor: COLOR.WHITE,
    paddingTop: 24,
    paddingHorizontal: 24
  },
  buttonContainer: { flexDirection:'row', justifyContent: 'flex-end', marginVertical: 12},
  textButton: { fontSize: 14, textTransform: 'uppercase', color: COLOR.LIGHT_GREEN, fontFamily: 'Roboto-Medium' }
})