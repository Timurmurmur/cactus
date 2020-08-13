import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { Link } from '../../Components/Link/Link';
import { dataBrands } from '../../../assets/data/dataBrands';
import Colors from '../../constants/Colors';
import { Header } from '../../Components/Header/Header';

export default function BrandCards({ navigation, route } : any) {

  // const { props } = route.params;
  // const title = props.text;

  // navigation.setOptions({
  //   headerTitle: title,
  // });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={route.params.title} back navigation={navigation} route={route}/>
      <ScrollView style={{backgroundColor: Colors.white}}>
        {dataBrands.map((item, index: any) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('CatalogItemList', { title: item.label })}>
              <Link styleImage={styles.styleImage} {...item}></Link>
            </TouchableOpacity>
          );
        }
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: 50,
    height: 45,
    marginRight: 22,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
});