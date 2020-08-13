import React from 'react';
import { StyleSheet, FlatList, View, Dimensions, Text } from 'react-native';
import { AppCatalogCard } from '../components/ui/AppCatalogCard';
import { DATA_ITEMS } from '../../assets/data';

export const ItemsScreen = ({ navigation }) => {

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA_ITEMS}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (<AppCatalogCard card={item.image} onOpen={() => navigation.navigate('Item', { item })} />)}
        horizontal={false}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  }
})