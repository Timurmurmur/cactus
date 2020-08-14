import React from 'react';
import { TextInput, StyleSheet, KeyboardType } from 'react-native';

interface IInputProps{
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
  styles?: any;
  placeholderColor?: string;
  keyboardType?: KeyboardType;
}

export const Input: React.FC<IInputProps> = ({placeholder, onChange, value, styles, placeholderColor, keyboardType}) => {
  return(
    <TextInput keyboardType={keyboardType} style={[inputStyles.input, styles]} placeholder={placeholder} onChange={onChange} value={value} placeholderTextColor={placeholderColor}/>
  )
}

const inputStyles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontFamily: 'Roboto',
  }
})