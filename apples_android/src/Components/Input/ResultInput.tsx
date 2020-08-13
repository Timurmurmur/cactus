import React, { useState } from 'react';
import { TextInput, StyleSheet, KeyboardType, View, Text } from 'react-native';
import { COLOR } from '../../common/colors';
import { TextInputMask } from 'react-native-masked-text';

interface IInputProps{
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
  placeholderColor?: string;
  keyboardType?: KeyboardType;
  ref?: any;
  containerStyle?: any;
}

export const Input: React.FC<IInputProps> = ({placeholder, onChange, value, placeholderColor, keyboardType, ref, containerStyle}) => {
  const [focused, setFocused] = useState(false);

  const focusHandler = (e: any) => {
    if(focused) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  }

  if(keyboardType === 'phone-pad') {
    return(
      <View style={[{ position: 'relative'}, containerStyle]}>
        { focused && placeholder !== undefined ? <Text style={{fontSize: 12, position: 'absolute', backgroundColor: COLOR.WHITE, top: -10, left: 20, zIndex: 100, paddingHorizontal: 3}}>{placeholder}</Text> : null}
        <TextInputMask 
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "+38(999)-999-99-99"
          }}
          placeholderTextColor={'#B4B4B4'}
          placeholder={"Номер телефона"}
          value={value}
          style={[inputStyles.input, { borderColor: `${focused ? COLOR.LIGHT_GREEN : COLOR.GRAY}`}]}
          onChange={onChange}
          onFocus={focusHandler}
          onBlur={focusHandler}
          keyboardType={keyboardType}
          ref={ref}/>
      </View>
    )
  } else {
    return(
      <View style={[{ position: 'relative'}, containerStyle]}>
        { focused && placeholder !== undefined ? <Text style={{fontSize: 12, position: 'absolute', backgroundColor: COLOR.WHITE, top: -10, left: 20, zIndex: 100, paddingHorizontal: 3}}>{placeholder}</Text> : null}
        <TextInput value={value} onChange={onChange} keyboardType={keyboardType} onBlur={focusHandler} onFocus={focusHandler} placeholderTextColor={placeholderColor} placeholder={placeholder} style={[inputStyles.input, { borderColor: `${focused ? COLOR.LIGHT_GREEN : COLOR.GRAY}` }]}></TextInput>
      </View>
    )
  }
}

const inputStyles = StyleSheet.create({
  input: {color: COLOR.BLACK,paddingLeft: 20, borderWidth: 1, padding: 14, borderRadius: 3, fontSize: 14}
})