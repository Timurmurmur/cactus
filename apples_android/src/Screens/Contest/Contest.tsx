import React from 'react';
import {View, Text} from 'react-native';

export interface IContestProps {}
interface IContestState {}

export class Contest extends React.Component<IContestProps, IContestState> {
  constructor(props: IContestProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <View>
        <Text>Contest</Text>
      </View>
    )
  }
}