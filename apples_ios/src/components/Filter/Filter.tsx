import React, { useCallback, useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableHighlight, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { DropDown } from '../DropDown/DropDown';
import { CloseIcon } from '../Icons/Icons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { COLOR } from '../../common/color';

interface IFilterProps{
    showModalHandler: () => void;
}

export const Filter:React.FC<IFilterProps> = ({ showModalHandler, children }) => {
    const [price, setPrice] = useState([0, 60000]);
    const changeFinish = (value: Array<number>) => {
        setPrice(value);
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLOR.BACKGROUND}}>
            <View style={{flex: 1}}>
            
            <View style={{height: 60, backgroundColor: COLOR.WHITE, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16, position: 'relative'}}>
                <View style={{position: 'absolute', left: 16, zIndex: 1000, top: 20}}>
                    <CloseIcon onPress={showModalHandler} width={20} height={20} color={COLOR.BLACK}/>
                </View>
                <View><Text style={{fontWeight: '300', color: COLOR.BLACK, fontSize: 20, textTransform: 'uppercase', letterSpacing: 2}}>Фильтры</Text></View>
                <View style={{position: 'absolute', right: 16}}><Text style={{fontSize: 17, color: COLOR.TINT_COLOR, fontWeight: '600'}}>Сбросить</Text></View>
            </View>
            <ScrollView style={{}}>
                <View style={{padding: 16}}>
                    <FilterItem title="Цена">
                        <View style={{backgroundColor: COLOR.WHITE, borderRadius: 3, padding: 15}}>
                            <View style={{width: '100%'}}>
                                <Slider onChangeFinish={changeFinish}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Серия">
                        <View style={{backgroundColor: COLOR.WHITE, borderRadius: 3,}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <DropDown>
                                    <RadioButtons buttons={[
                                        { title: 'iPhone 11' }, 
                                        { title: 'iPhone 11 Pro' }, 
                                        { title: 'iPhone 11 Pro Max' }, 
                                        { title: 'iPhone Xr' }, 
                                        { title: 'iPhone XR' }, 
                                        { title: 'iPhone 8' }, 
                                        { title: 'iPhone SE' }, 
                                    ]}/>
                                </DropDown>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Объем встроенной памяти">
                        <View style={{backgroundColor: COLOR.WHITE, borderRadius: 3}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: '8 Гб' }, 
                                    { title: '16 Гб' }, 
                                    { title: '32 Гб' }, 
                                    { title: '64 Гб' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Цвет">
                        <View style={{backgroundColor: COLOR.WHITE, borderRadius: 3}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <DropDown>
                                    <RadioButtons buttons={[
                                        { title: 'Зелёный' }, 
                                        { title: 'Золотой' }, 
                                        { title: 'Серебро' }, 
                                        { title: 'Серый' }, 
                                        { title: 'Черный' }, 
                                        { title: 'Белый' }, 
                                    ]}/>
                                </DropDown>
                            </View>
                        </View>
                    </FilterItem>
                </View>
            </ScrollView>
            <View style={{backgroundColor: '#F9F9F9', paddingVertical: 10, paddingHorizontal: 16, zIndex: 1000, }}>
                <TouchableHighlight style={{backgroundColor: COLOR.TINT_COLOR, height: 44, justifyContent: 'center', borderRadius: 3}}>
                    <Text style={{textAlign: 'center', color: COLOR.WHITE, fontWeight: '500', fontSize: 18}}>Отфильтровать</Text>
                </TouchableHighlight>
            </View>
        </View>
        </SafeAreaView>
    )
}

interface IFilterItemProps {
    title:string;

}

const FilterItem: React.FC<IFilterItemProps> = ({title, children}) => {
    return(
        <View style={{marginBottom: 18}}>
            <View style={{marginBottom: 8}}>
                <Text style={{color: COLOR.BLACK, fontSize: 16, fontWeight: '600'}}>{title}</Text>
            </View>
            <View>
                { children }
            </View>
        </View>
    )
}



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
                <TextInput value={`${values[0] < 10000 ? values[0].toString().slice(0, 1) : values[0].toString().slice(0, 2)} ${values[0] < 10000 ? values[0].toString().slice(1) : values[0].toString().slice(2)} ₴`} style={{borderWidth: .5, borderColor: '#3A3A3C', width: '100%', fontSize: 18, fontWeight: '300', textAlign: 'center', paddingVertical: 7, borderRadius: 3, color: COLOR.BLACK}}/>
            </View>
            <View style={{width: '45%'}}>
                <TextInput value={`${values[1] < 10000 ? values[1].toString().slice(0, 1) : values[1].toString().slice(0, 2)} ${values[1] < 10000 ? values[1].toString().slice(1) : values[1].toString().slice(2)} ₴`} style={{borderWidth: .5, borderColor: '#3A3A3C', width: '100%', fontSize: 18, fontWeight: '300', textAlign: 'center', paddingVertical: 7, borderRadius: 3, color: COLOR.BLACK}}/>
            </View>
        </View>
        <View style={{width: sliderLengthValue, paddingHorizontal: 15}}>
            <MultiSlider sliderLength={sliderLengthValue} containerStyle={{}} selectedStyle={{backgroundColor:COLOR.TINT_COLOR}} markerStyle={{padding: 12, backgroundColor:COLOR.TINT_COLOR, borderColor:COLOR.TINT_COLOR, shadowColor: 'rgba(0,0,0,.5)' }} step={1} min={0} max={60000} values={values} onValuesChange={changeValue} onValuesChangeFinish={onChangeFinish}/>
        </View>
        </>
    )
}