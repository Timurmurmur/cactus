import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements';

export const CheckBoxCircle = ({ title, onPress }) => {
  const [check, setCheck] = useState(false);

  return (
    <View>
      <CheckBox
        title={title}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        size={25}
        checked={check}
        checkedColor='#60B6FF'
        containerStyle={{ backgroundColor: '#fff', borderColor: '#fff', padding: 0, marginBottom: 25 }}
        textStyle={{ fontWeight: '300', color: '#3A3A3C', fontSize: 16, marginLeft: 22 }}
        onPress={onPress ? onPress : () => {
          setCheck(!check)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
