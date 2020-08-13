import React, { useCallback, useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { SmallHeader } from '../Header/SmallHeader';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../constants/Colors';
import { Slider } from '../MultiSlider/MultiSlider';
import { RadioButtons } from '../RadioButtons/RadioButtons';
import { DropDown } from '../DropDown/DropDown';
import { CloseIcon } from '../Icons/Icons';

interface IFilterProps{
    showModalHandler: () => void;
}

export const Filter:React.FC<IFilterProps> = ({ showModalHandler, children }) => {
    const [price, setPrice] = useState([0, 60000]);
    const changeFinish = (value: Array<number>) => {
        setPrice(value);
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.green}}>
            <View style={{flex: 1}}>
            
            <View style={{height: 60, backgroundColor: Colors.green, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16, position: 'relative'}}>
                <View style={{position: 'absolute', left: 16, zIndex: 1000, top: 20}}>
                    <CloseIcon onPress={showModalHandler} width={20} height={20} color={Colors.white}/>
                </View>
                <View><Text style={{fontWeight: 'bold', color: Colors.white, fontSize: 20, }}>Фильтр</Text></View>
                <View style={{position: 'absolute', right: 16}}><Text style={{fontSize: 17, color: Colors.white}}>Сбросить</Text></View>
            </View>
            <ScrollView style={{backgroundColor: '#F9F9F9'}}>
                <View style={{padding: 16}}>
                    <FilterItem title="Цена">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, padding: 15}}>
                            <View style={{width: '100%'}}>
                                <Slider onChangeFinish={changeFinish}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Бренд">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <DropDown>
                                    <RadioButtons buttons={[
                                        { title: 'Apple' }, 
                                        { title: 'Samsung' }, 
                                        { title: 'Xiaomi' }, 
                                        { title: 'OnePlus' }, 
                                        { title: 'Huawei' }, 
                                        { title: 'Doogee' }, 
                                        { title: 'Vernee' }, 
                                        { title: 'Google Pixel' }, 
                                        { title: 'Honor' }, 
                                        { title: 'Картфоны AEKU' }, 
                                        { title: 'Sony Xperia' }, 
                                    ]}/>
                                </DropDown>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Серия">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: 'iPhone 11' }, 
                                    { title: 'iPhone 11 Pro' }, 
                                    { title: 'iPhone 11 Pro Max' }, 
                                    { title: 'iPhone Xr' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Объем встроенной памяти">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7,paddingLeft: 15}}>
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
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: 'Белый' }, 
                                    { title: 'Голубой' }, 
                                    { title: 'Желтый' }, 
                                    { title: 'Зеленый' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Тип экрана">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: 'TFT' }, 
                                    { title: 'TFT LCD' }, 
                                    { title: 'IPS' }, 
                                    { title: 'Super IPS+' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Основная камера, Мп">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: 'До 10 Мп' }, 
                                    { title: 'От 10,1 Мп до 16 Мп' }, 
                                    { title: 'От 16,1 Мп до 20 Мп' }, 
                                    { title: 'От 20,1 Мп' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Количество SIM-карт">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: '1 SIM' }, 
                                    { title: '2 SIM' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                    <FilterItem title="Смартфон для гейминга">
                        <View style={{backgroundColor: Colors.white, borderRadius: 7, paddingLeft: 15}}>
                            <View style={{width: '100%', overflow: 'hidden'}}>
                                <RadioButtons buttons={[
                                    { title: 'Да' }, 
                                ]}/>
                            </View>
                        </View>
                    </FilterItem>
                </View>
            </ScrollView>
            <View style={{backgroundColor: '#F9F9F9', paddingVertical: 10, paddingHorizontal: 16, zIndex: 1000, }}>
                <TouchableHighlight style={{backgroundColor: Colors.green, height: 44, justifyContent: 'center', borderRadius: 7}}>
                    <Text style={{textAlign: 'center', color: Colors.white, fontWeight: '500', fontSize: 18}}>Отфильтровать</Text>
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
                <Text style={{color: Colors.black, fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
            </View>
            <View>
                { children }
            </View>
        </View>
    )
}