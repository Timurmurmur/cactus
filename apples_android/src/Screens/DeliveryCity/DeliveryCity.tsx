import React from 'react';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { COLOR } from '../../common/colors';
import { HeaderStyles } from '../../Components/Header/Header';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

export const DeliveryCity:React.FC<{selectedItem: string | undefined, onChange: (el: string) => void, visibilityHandler: () => void}> = ({selectedItem, onChange, visibilityHandler}) => {
  
  const cities = ['Киев', 'Одесса', 'Харьков', 'Днепр', 'Львов']

  return(
    <>
      <ScrollView>
        <View style={[HeaderStyles.wrapper]}>
          <View style={{ flex: 1, maxWidth: 35, marginRight: 20, zIndex: 30 }}>
            <AntDesign.Button onPress={visibilityHandler} name="arrowleft" size={30} iconStyle={{ color: COLOR.WHITE, marginRight: -5}} backgroundColor="transparent" underlayColor={COLOR.GREEN}/>
          </View>
          <View style={{flex: 5}}>
            <Text style={{ fontSize: 19, color: COLOR.WHITE, fontWeight: 'bold'}}>Город</Text>
          </View>
        </View>
        <View style={{padding: 16}}>
          <View>
            <TextInput style={{backgroundColor: COLOR.GRAY, paddingVertical: 10, borderRadius: 3, paddingLeft: 15}} placeholderTextColor={COLOR.TEXT_GRAY} placeholder={"Поиск по городам"} />
          </View>
          { cities.map((el, index) => {
            return(
              <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => onChange(el)}>
                <View style={{paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${selectedItem === el ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                    { selectedItem === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                  </View>
                  <Text style={{fontSize: 16, }}>{el}</Text>
                </View>
              </TouchableHighlight>
            )
          })}
          <View style={{marginTop: 30}}>
            <TouchableHighlight style={{paddingVertical: 10,width: '100%', backgroundColor: COLOR.WHITE, borderRadius: 7, borderWidth: 1, borderColor: COLOR.GREEN}}>
              <Text style={{textAlign: 'center',fontFamily: 'Roboto-Medium', color: COLOR.GREEN, fontWeight: '500'}}>ВСЕ НАСЕЛЁННЫЕ ПУНКТЫ</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>)
}