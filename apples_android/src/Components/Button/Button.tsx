import React from 'react';
import { TextInput, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { COLOR } from '../../common/colors';

interface IButtonProps{
  onPress?: (e: any) => void;
  styles?: any;
  title?: string;
  disabled?: boolean;
  textStyle?: any;
}

export const Button: React.FC<IButtonProps> = ({styles, onPress, title, disabled, textStyle}) => {
  if(disabled){
    return(
      <TouchableHighlight underlayColor={'#ECEDEF'} onPress={onPress} style={[buttonStyles.styles,buttonStyles.disabledStyles]}><Text style={[buttonStyles.textStyle,buttonStyles.disabledTextStyle]}>{title}</Text></TouchableHighlight>
    )
  } else {
    return(
      <TouchableHighlight underlayColor={'#34C678'} onPress={onPress} style={[buttonStyles.styles,styles]}><Text style={[buttonStyles.textStyle,textStyle]}>{title}</Text></TouchableHighlight>
    )
  }
}

const buttonStyles = StyleSheet.create({
  disabledStyles: {
    backgroundColor: '#ECEDEF',
    
  },
  styles: {
    borderRadius: 7, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 15
  },
  disabledTextStyle: {
    color: COLOR.TEXT_GRAY,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium'
  }
})