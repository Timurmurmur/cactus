import React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions } from 'react-native';
import { DATA_NEWS } from '../../assets/data';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const NewsScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA_NEWS}
        keyExtractor={i => i.id.toString()}
        renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate('FullNews', { item })}>
          <Image source={item.image} />
        </TouchableOpacity>)}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  }
});