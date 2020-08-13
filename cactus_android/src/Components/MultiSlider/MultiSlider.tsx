import React, { useCallback, useState } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { SmallHeader } from '../Header/SmallHeader';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../constants/Colors';
import { TextInput } from 'react-native-gesture-handler';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


const sliderLengthValue = (Dimensions.get('window').width) - 90;
interface SliderProps {
  onChangeFinish: (values: Array<number>) => void;
}


export const Slider:React.FC<SliderProps> = ({ onChangeFinish }) => {
    const [values, setValues] = useState([0,60000])
    const changeValue = useCallback((values) => {
        setValues(values)
    }, [values])

    return(
        <>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '45%'}}>
                <TextInput value={`${values[0]} ₴`} style={{borderWidth: 1, borderColor: '#C5C5C5', width: '100%', fontSize: 18, fontWeight: '500', textAlign: 'center', paddingVertical: 7, borderRadius: 7, color: Colors.black}}/>
            </View>
            <View style={{width: '45%'}}>
                <TextInput value={`${values[1]} ₴`} style={{borderWidth: 1, borderColor: '#C5C5C5', width: '100%', fontSize: 18, fontWeight: '500', textAlign: 'center', paddingVertical: 7, borderRadius: 7, color: Colors.black}}/>
            </View>
        </View>
        <View style={{width: sliderLengthValue, paddingHorizontal: 15}}>
            <MultiSlider sliderLength={sliderLengthValue} containerStyle={{}} selectedStyle={{backgroundColor: Colors.lightGreen}} markerStyle={{padding: 12, backgroundColor: Colors.lightGreen, borderColor: Colors.lightGreen, shadowColor: 'rgba(0,0,0,.5)' }} step={1} min={0} max={60000} values={values} onValuesChange={changeValue} onValuesChangeFinish={onChangeFinish}/>
        </View>
        </>
    )
}