import React from 'react';
import {View, Text} from 'react-native';

export interface IRaffleProps {}
interface IRaffleState {}

export class Raffle extends React.Component<IRaffleProps, IRaffleState> {
  constructor(props: IRaffleProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>Raffle</Text>
      </View>
    )
  }
}