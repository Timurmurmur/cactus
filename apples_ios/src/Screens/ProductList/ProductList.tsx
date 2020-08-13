import React, { useState, useCallback } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { View, TouchableHighlight, Image, Text, ActionSheetIOS, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLOR } from '../../common/color';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { SortArrows, FilterIcon } from '../../components/Icons/Icons';
import { Filter } from '../../components/Filter/Filter';
import { Header } from '../../components/Header/Header';


export const ProductList = (props: any) => {
    const [filterModal, setFilterModal] = useState(false);

    const sortArray = [
        'Отменить',
        'от дешевых к дорогим', 
        'от дорогих к дешевым',
        'популярные',
        'новинки',
        'акционные',
        'по рейтингу',
        ];
      
    const showFilterModalHandler = useCallback(
        () => {
            let nextState;
            if(filterModal){
            nextState = false;
            } else {
            nextState = true;
            }
            setFilterModal(nextState);
        }, [filterModal]
    )
    
    const sortAlertHandler = () => {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: sortArray,
            cancelButtonIndex: 0,
            tintColor: COLOR.TINT_COLOR
          }, 
          (index: any) => {
            if(index !== 0) {
              
            }
          }
        )
      }

    return(
      <>
        <Header navigation={props.navigation} route={props.route} config={{back: true, title: props.route.params.title, type: 'DEFAULT', basket: true}}/>
        <View style={{flex: 1, paddingTop: 5, backgroundColor: COLOR.BACKGROUND}}>
        <FilterBar sortAlertHandler={sortAlertHandler} showFilterModalHandler={showFilterModalHandler} />
        <ScrollView style={{}}>
            <View style={{paddingHorizontal: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingTop: 5, paddingBottom: 16}}>
                <ProductCard navigation={props.navigation} route={props.route}/>
                <ProductCard navigation={props.navigation} route={props.route}/>
                <ProductCard navigation={props.navigation} route={props.route}/>
                <ProductCard navigation={props.navigation} route={props.route}/>
                <ProductCard navigation={props.navigation} route={props.route}/>
                <ProductCard navigation={props.navigation} route={props.route}/>
            </View>
        </ScrollView>
        <Modal visible={filterModal} presentationStyle="fullScreen" onRequestClose={showFilterModalHandler}>
            <Filter showModalHandler={showFilterModalHandler}/>
        </Modal>
        </View>
      </>
    )
}

const FilterBar = ({ sortAlertHandler, showFilterModalHandler }: any) => {
    return(
      <View style={[{flexDirection: 'row', justifyContent: 'space-between', height: 48, padding: 4}, { backgroundColor: COLOR.WHITE }]}>
          <View style={{width: '50%',  borderRightWidth: .5, borderRightColor: '#EBEBEB'}}>
          <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%'}} onPress={showFilterModalHandler}>
            <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
              <View style={{marginRight: 10}}>
                <FilterIcon width={18} height={19} color={COLOR.BLACK}/>
              </View>
              <View><Text style={{fontSize: 16, color: COLOR.BLACK}}>Фильтры</Text></View>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{width: '50%',  borderRightWidth: .5, borderRightColor: '#EBEBEB'}}>
          <TouchableHighlight underlayColor={'transparent'} style={{width: '100%', height: '100%'}} onPress={sortAlertHandler}>
            <View style={{height: '100%',justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
              <View style={{marginRight: 10}}>
                <SortArrows color={COLOR.BLACK} width={14} height={19}/>
              </View>
              <View><Text style={{fontSize: 16, color: COLOR.BLACK}}>Сортировка</Text></View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
  