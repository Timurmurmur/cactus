import React, { useCallback, useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { View, TextInput, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';


const sliderLengthValue = (Dimensions.get('window').width * 0.7) - 40;
interface SliderProps {
  onChangeFinish: (values: Array<number>) => void;
}

export const Slider:React.FC<SliderProps> = ({ onChangeFinish }) => {
  const [values, setValues] = useState([0,60000])
  const changeValue = useCallback((values) => {
      setValues(values)
  }, [values])


  const minInputHandler = (e : any) => {

  }

  const maxInputHandler = (e: any) => {
    let num = e.nativeEvent.text.split(' ')[0]
    console.log(num)
    if (num > values[1] || num < 0) {
      
    } else {
      setValues([num, values[1]])
    }
  }

  return (
    <View style={{flex: 1, maxWidth: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '100%', flex: 1}}>
        <View style={{width: '45%'}}>
          <TextInput value={`${String(values[0])} ₴`} keyboardType="number-pad" style={{borderRadius: 3,borderColor: '#C5C5C5', borderWidth: 1, paddingVertical: 10, fontSize: 18, color: Colors.black, paddingHorizontal: 25}} placeholderTextColor={Colors.black} placeholder="1 999 ₴"/>
        </View>
        <View style={{width: '45%'}}>
          <TextInput value={`${String(values[1])} ₴`} keyboardType="number-pad" style={{borderRadius: 3,borderColor: '#C5C5C5', borderWidth: 1, paddingVertical: 10, fontSize: 18, color: Colors.black, paddingHorizontal: 25}} placeholderTextColor={Colors.black} placeholder="56 999 ₴"/>
        </View>
      </View>
      <View>
        <View style={{paddingHorizontal: 16}}>
          <MultiSlider sliderLength={sliderLengthValue} containerStyle={{}} selectedStyle={{backgroundColor: Colors.green}} markerStyle={{padding: 12, backgroundColor: Colors.lightGreen}} step={1} min={0} max={60000} values={values} onValuesChange={changeValue} onValuesChangeFinish={onChangeFinish}/>
        </View>
      </View>
    </View>
  )
}