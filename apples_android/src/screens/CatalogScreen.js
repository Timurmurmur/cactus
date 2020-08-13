import React from 'react';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import { AppCatalogCard } from '../components/ui/AppCatalogCard';
import { DATA_CATALOG } from '../../assets/data';

export const CatalogScreen = ({ navigation }) => {

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA_CATALOG}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (<AppCatalogCard card={item.image} onOpen={() => navigation.navigate('Items', { item })} />)}
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