import React from 'react';
import { View, TouchableHighlight, Text, ScrollView, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { Search } from '../../Components/Search/Search';
import { ShoppingCardIcon, ArrowRight } from '../../Components/Icons/Icons';
import Svg, { Path } from 'react-native-svg';

export const DeliveryCity:React.FC<{selectedItem: string | undefined, onChange: (el: string) => void, visibilityHandler: () => void}> = ({selectedItem, onChange, visibilityHandler}) => {
  
  const cities = ['Киев', 'Одесса', 'Харьков', 'Днепр', 'Львов']

  return(
    <SafeAreaView style={{backgroundColor: Colors.green}}>
      <View style={{height: 109, backgroundColor: Colors.green, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '50%'}}>
            <View style={{width: 60}}>
              <TouchableHighlight onPress={visibilityHandler}>
                <Svg width={11} height={20}>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.291995 10.7138L9.27619 19.7048C9.67041 20.0984 10.3091 20.0984 10.7043 19.7048C11.0986 19.3111 11.0986 18.6717 10.7043 18.2781L2.43275 10.0005L10.7033 1.72293C11.0976 1.32928 11.0976 0.689887 10.7033 0.295239C10.3091 -0.0984129 9.66942 -0.0984129 9.2752 0.295239L0.290999 9.28611C-0.0971655 9.67569 -0.0971655 10.3251 0.291995 10.7138Z" fill="white"/>
                </Svg>
              </TouchableHighlight>
            </View>
            <View style={{}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', }}>
              Город
              </Text>
            </View>
            <View style={{width: 60}} onTouchStart={visibilityHandler}>
              <Text style={{fontWeight: '500', fontSize: 18, color: Colors.white}}>
                Готово
              </Text>
            </View>
          </View>
          <View>
              <Search />
          </View>
      </View>
      <ScrollView style={{backgroundColor: Colors.white}}>
        <View style={{padding: 16}}>
          
          { cities.map((el, index) => {
            return(
              <TouchableHighlight underlayColor={Colors.white} key={index} onPress={e => onChange(el)}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${selectedItem === el ? Colors.lightGreen : Colors.gray}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: `${selectedItem === el ? Colors.lightGreen: '#FFF'}`, }}>
                    { selectedItem === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: Colors.white}}></View> : null }
                  </View>
                  <View style={{borderBottomWidth: .5, borderBottomColor: '#EBEBEB',}}>
                    <Text style={{fontSize: 16, width: Dimensions.get('screen').width - 32 - 20 - 20,  paddingVertical: 12}}>{el}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )
          })}
          <TouchableHighlight underlayColor={Colors.white} style={{width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 20, height: 20, marginRight: 20,}}>
              </View>
              <View style={{ width: Dimensions.get('screen').width - 32 - 20 - 20, borderBottomWidth: .5, borderBottomColor: '#EBEBEB', justifyContent: 'center', paddingVertical: 12}}>
                <Text style={{fontSize: 16, color: Colors.lightGreen,}}>Все города</Text>
                <View style={{position: 'absolute', right: 0}}>
                  <ArrowRight color={Colors.lightGreen} width={7} height={12}/>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>)
}