import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SearchIcon } from '../Icons/Icons';
import { COLOR } from '../../common/color';

export class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search: any) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.containerStyle}>
        <TextInput style={styles.inputContainerStyle} placeholder="Поиск" placeholderTextColor={COLOR.GRAY}>
        </TextInput>
        <View style={{position: 'absolute', right: 15, top: 11}}>
          <SearchIcon width={16} height={16} color={'#8E8E93'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: COLOR.INPUT_BACKGROUND,
    position: 'relative',
    borderRadius: 3,
    overflow: 'hidden'
  },
  inputContainerStyle: {
    backgroundColor: COLOR.INPUT_BACKGROUND,
    color: COLOR.GRAY,
    paddingHorizontal: 15,
    paddingVertical: 11,
    height: 39,
    fontWeight: '300'
  },
  inputStyle: {
    color: COLOR.GRAY,
  },
});

// import { StyleSheet } from 'react-native';
// import { Searchbar } from 'react-native-paper';

// export default class Search extends React.Component {
//   state = {
//     firstQuery: '',
//   };

//   render() {
//     const { firstQuery } = this.state;
//     return (
//       <Searchbar
//         placeholder="Поиск"
//         onChangeText={query => { this.setState({ firstQuery: query }); }}
//         value={firstQuery}
//         style={styles.searchBar}
//         inputStyle={{ backgroundColor: '#1EA65D', borderRadius: 3, color: '#fff', placeholderTextColor: '#fff' }}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   searchBar: {
//     backgroundColor: '#149751',
//     padding: 8,
//     borderRadius: 0,
//   },
// });