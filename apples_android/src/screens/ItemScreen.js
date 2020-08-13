import React, { useState, useDispatch } from 'react';
import {
  StyleSheet,
  FlatList,
  Modal,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';


import { AppCatalogCard } from '../components/ui/AppCatalogCard';
import { DATA_ITEM } from '../../assets/data';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { AppTextLight } from '../components/ui/AppTextLight';
import { AppTextUppercase } from '../components/ui/AppTextUppercase';
import { AppHorizontalLine } from '../components/ui/AppHorizontalLine';
import { CheckBoxFilter } from '../components/CheckBoxFilter';
import { CheckBoxSort } from '../components/CheckBoxSort';
import { AppButton } from '../components/ui/AppButton';
import { ScrollView } from 'react-native-gesture-handler';

const LABEL_SORT = [
  {
    id: 1,
    label: 'По возрастанию цены'
  },
  {
    id: 2,
    label: 'По убыванию цены'
  },
  {
    id: 3,
    label: 'Популярные'
  },
  {
    id: 4,
    label: 'Новинки'
  },
  {
    id: 5,
    label: 'Акционные'
  },
]

export const ItemScreen = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  const [modalSortVisible, setModalSortVisible] = useState(false);

  const AppHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableHighlight style={styles.topButtons} onPress={() => { setModalFilterVisible(true); }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/filter.png')} style={styles.headerImage} />
            <AppTextMedium style={styles.headerText}>Фильтры</AppTextMedium>
          </View>
        </TouchableHighlight>
        <View style={{ height: 40, width: 1, backgroundColor: '#EBEBEB' }}></View>
        <TouchableHighlight style={styles.topButtons} onPress={() => { setModalSortVisible(true); }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/sort.png')} style={styles.headerImage} />
            <AppTextMedium style={styles.headerText}>Сортировка</AppTextMedium>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  const AppModalFilter = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalFilterVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.centeredElemsModalFilter}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 11 }}>
                <AppTextLight style={styles.titleStyle}><AppTextUppercase>Фильтры</AppTextUppercase></AppTextLight>
                <TouchableHighlight onPress={() => { setModalFilterVisible(!modalFilterVisible) }}>
                  <AppTextMedium style={{ color: '#60B6FF', fontSize: 17 }}>Сбросить</AppTextMedium>
                </TouchableHighlight>
              </View>

              <AppHorizontalLine />
              <ScrollView>
                <View>
                  <AppTextMedium style={{ fontSize: 16, paddingHorizontal: 16 }}>Цена</AppTextMedium>

                  


                </View>

                <AppHorizontalLine />

                <View>
                  <AppTextMedium style={{ fontSize: 16, paddingHorizontal: 16, marginVertical: 10 }}>Серия</AppTextMedium>
                  {DATA_ITEM.map((item) => <CheckBoxFilter key={item.id} label={item.label} />)}
                </View>
                <AppButton
                  image={require('../../assets/icons/arrow_down.png')}
                  style={{ backgroundColor: '#fff' }}
                  styleText={{ color: '#60B6FF' }}
                  styleImage={{ width: 12, height: 7 }}
                >Показать все</AppButton>
                <AppHorizontalLine />

                <View>
                  <AppTextMedium style={{ fontSize: 16, paddingHorizontal: 16, marginVertical: 10 }}>Объем встроенной памяти</AppTextMedium>
                  {DATA_ITEM.map((item) => item.memory ? <CheckBoxFilter key={item.id} label={item.memory} /> : null)}
                </View>

                <AppHorizontalLine />

                <View>
                  <AppTextMedium style={{ fontSize: 16, paddingHorizontal: 16, marginVertical: 10 }}>Цвет</AppTextMedium>
                  {DATA_ITEM.map((item) => item.characteristic.color ? <CheckBoxFilter key={item.id} label={item.characteristic.color} /> : null)}
                </View>

                <AppButton
                  image={require('../../assets/icons/arrow_up.png')}
                  style={{ backgroundColor: '#fff' }}
                  styleText={{ color: '#60B6FF' }}
                  styleImage={{ width: 12, height: 7 }}
                >Свернуть</AppButton>
              </ScrollView>
            </View>

          </View>

        </Modal>
      </View>
    )
  }

  const AppModalSort = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalSortVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.centeredElemsModalSort}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingTop: 27, paddingBottom: 22 }}>
                <AppTextLight style={{ fontSize: 16, color: '#828282' }}>Сортировать</AppTextLight>
                <TouchableHighlight onPress={() => { setModalSortVisible(!modalSortVisible) }}>
                  <AppTextMedium style={{ color: '#60B6FF', fontSize: 17 }}>Сбросить</AppTextMedium>
                </TouchableHighlight>
              </View>
              {LABEL_SORT.map((item) =>
                <View key={item.id}>
                  <CheckBoxSort label={item.label} />

                </View>
              )}

            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <AppModalFilter />
      <AppModalSort />
      <AppHeader />
      <FlatList
        data={DATA_ITEM}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (<AppCatalogCard card={item.image_item} onOpen={() => navigation.navigate('ItemModel', { item })} />)}
        horizontal={false}
        numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  topButtons: {
    width: '45%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 20,
    height: 19,
    resizeMode: 'contain',
    marginRight: 10
  },
  headerText: {
    fontSize: 16
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  centeredElemsModalFilter: {
    backgroundColor: '#fff',
    width: 310,
    height: '100%',
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredElemsModalSort: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: 330,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  titleStyle: {
    fontSize: 20,
    letterSpacing: 2,
  },
})