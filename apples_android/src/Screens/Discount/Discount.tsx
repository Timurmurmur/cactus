import React from 'react';
import {View, Text} from 'react-native';

export interface IDiscountProps {}
interface IDiscountState {}

export class Discount extends React.Component<IDiscountProps, IDiscountState> {
  constructor(props: IDiscountProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>Discount</Text>
      </View>
    )
  }
}