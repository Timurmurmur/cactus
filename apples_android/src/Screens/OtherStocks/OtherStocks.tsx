import React from 'react';
import {View, Text} from 'react-native';

export interface IOtherStocksProps {}
interface IOtherStocksState {}

export class OtherStocks extends React.Component<IOtherStocksProps, IOtherStocksState> {
  constructor(props: IOtherStocksProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>OtherStocks</Text>
      </View>
    )
  }
}