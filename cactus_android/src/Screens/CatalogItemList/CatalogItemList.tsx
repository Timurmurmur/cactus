import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Modal,TouchableHighlight, Alert, ActionSheetIOS, Settings, Dimensions } from 'react-native';
import {  FontAwesome5, Entypo, } from '@expo/vector-icons';
import { ItemCard } from '../../Components/ItemCard/ItemCard';
import Colors from '../../constants/Colors';
import { Filter } from '../../Components/Filter/Filter';
import { Header } from '../../Components/Header/Header';
import { Logo } from '../../Components/Icons/Icons';
import { Route, Navigation } from '../../common/types';


export interface ICatalogItemProps {
  route: Route;
  navigation: Navigation;
}
interface ICatalogItemState {
  sort: string;
  filterModal: boolean;
}

export class CatalogItemList extends React.Component<ICatalogItemProps, ICatalogItemState> {
  sortArray = [
    'Отменить',
    'от дешевых к дорогим', 
    'от дорогих к дешевым',
    'популярные',
    'новинки',
    'акционные',
    'по рейтингу',
    ];
  constructor(props: ICatalogItemProps){
    super(props);

    this.state = {
      sort: '',
      filterModal: false
    }
  }
  
  showFilterModalHandler = () => {
    const { filterModal } = this.state;
    let nextState;
    if(filterModal){
      nextState = false;
    } else {
      nextState = true;
    }
    this.setState({
      filterModal: nextState
    })
  }

  sortAlertHandler = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: this.sortArray,
        cancelButtonIndex: 0,
      }, 
      (index: any) => {
        if(index !== 0) {
          this.setState({
            sort: this.sortArray[index]
          })
        }
      }
    )
  }


  componentDidMount() {
  }
  render() {
    return(
      <>
      <Header title={this.props.route.params?.title} {...this.props} back/>
      <ScrollView style={{backgroundColor: '#F9F9F9', paddingHorizontal: 16, paddingTop: 2}}>
        
        <View style={{backgroundColor: Colors.white, borderRadius: 3, overflow: 'hidden'}}>
          <FilterBar sortAlertHandler={this.sortAlertHandler} showFilterModalHandler={this.showFilterModalHandler}/>
        </View>
        <View style={{paddingVertical: 10, flexDirection :'row', flexWrap: 'wrap', justifyContent: 'space-between', backgroundColor: '#F9F9F9'}}>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
          <ItemCard onPress={e => this.props.navigation.navigate('Phone')} {...this.props}/>
        </View>
        <View>
        </View>
        <Modal visible={this.state.filterModal} presentationStyle="fullScreen" onRequestClose={this.showFilterModalHandler}>
          <Filter showModalHandler={this.showFilterModalHandler}/>
        </Modal>
      </ScrollView>
      </>
    )
  }
}

const FilterBar = ({ sortAlertHandler, showFilterModalHandler }: any) => {
  return(
    <View style={[{flexDirection: 'row', justifyContent: 'space-between', height: 48, padding: 4}, { elevation: 2, backgroundColor: Colors.white }]}>
      <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: '#EBEBEB'}}>
        <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%'}} onPress={sortAlertHandler}>
          <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
            <View style={{marginRight: 10}}>
              <Image source={require('../../../assets/icons/compareArrows.png')} style={{width: 15, height: 20}}/>
            </View>
            <View><Text style={{fontSize: 14, color: Colors.gray, fontWeight: '500'}}>Сортировка</Text></View>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{width: '40%',  borderRightWidth: .5, borderRightColor: '#EBEBEB'}}>
        <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%'}} onPress={showFilterModalHandler}>
          <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
            <View style={{marginRight: 10}}>
              <FontAwesome5 name="filter" color={Colors.lightGreen} size={15}/>
            </View>
            <View><Text style={{fontSize: 14, color: Colors.gray, fontWeight: '500'}}>Фильтры</Text></View>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{width: '20%'}}>
        <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Entypo name="forward" size={25} color={Colors.lightGreen}/>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}
