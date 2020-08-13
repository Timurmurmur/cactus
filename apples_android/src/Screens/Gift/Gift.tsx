import React from 'react';
import {View, Text} from 'react-native';

export interface IGiftProps {}
interface IGiftState {}

export class Gift extends React.Component<IGiftProps, IGiftState> {
  constructor(props: IGiftProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>Gift</Text>
      </View>
    )
  }
}