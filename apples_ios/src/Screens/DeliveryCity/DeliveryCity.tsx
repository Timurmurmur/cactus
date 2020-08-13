import React from 'react';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Search } from '../../components/Search/Search';
import { ShoppingCardIcon } from '../../components/Icons/Icons';
import Svg, { Path } from 'react-native-svg';
import { COLOR } from '../../common/color';

export const DeliveryCity:React.FC<{selectedItem: string | undefined, onChange: (el: string) => void, visibilityHandler: () => void}> = ({selectedItem, onChange, visibilityHandler}) => {
  
  const cities = ['Киев', 'Одесса', 'Харьков', 'Днепр', 'Львов']

  return(
    <SafeAreaView style={{backgroundColor: COLOR.WHITE}}>
      <View style={{height: 109, backgroundColor: COLOR.WHITE, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '50%'}}>
            <View style={{width: 60}}>
              <TouchableHighlight onPress={visibilityHandler}>
                <Svg width={11} height={20}>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.291995 10.7138L9.27619 19.7048C9.67041 20.0984 10.3091 20.0984 10.7043 19.7048C11.0986 19.3111 11.0986 18.6717 10.7043 18.2781L2.43275 10.0005L10.7033 1.72293C11.0976 1.32928 11.0976 0.689887 10.7033 0.295239C10.3091 -0.0984129 9.66942 -0.0984129 9.2752 0.295239L0.290999 9.28611C-0.0971655 9.67569 -0.0971655 10.3251 0.291995 10.7138Z" fill={COLOR.BLACK}/>
                </Svg>
              </TouchableHighlight>
            </View>
            <View style={{}}>
              <Text style={{fontWeight: '300', fontSize: 20, color: COLOR.BLACK, textTransform: 'uppercase', letterSpacing: 2}}>
              Город
              </Text>
            </View>
            <View style={{width: 60}} onTouchStart={visibilityHandler}>
              <Text style={{fontWeight: '600', fontSize: 17, color: COLOR.TINT_COLOR}}>
                Готово
              </Text>
            </View>
          </View>
          <View>
              <Search />
          </View>
      </View>
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={{}}>
          
          { cities.map((el, index) => {
            return(
              <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => onChange(el)}>
                <View style={{padding: 16, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .5, borderBottomColor: '#EBEBEB'}}>
                  <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${selectedItem === el ? COLOR.TINT_COLOR : COLOR.GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20, backgroundColor: selectedItem === el ? COLOR.TINT_COLOR : COLOR.WHITE}}>
                    { selectedItem === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.WHITE}}></View> : null }
                  </View>
                  <Text style={{fontSize: 16, }}>{el}</Text>
                </View>
              </TouchableHighlight>
            )
          })}
          <View style={{}}>
            <TouchableHighlight style={{width: '100%', backgroundColor: COLOR.WHITE, padding: 16, paddingLeft: 55, borderBottomWidth: .5, borderBottomColor: '#EBEBEB', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <>
              <Text style={{color: COLOR.TINT_COLOR, fontSize: 16}}>Все города</Text>
              <View>
                <Svg width={7} height={12}>
                  <Path d="M4.64774 6.00254L0.190257 1.51317C0.0675197 1.38985 0 1.22498 0 1.04917C0 0.873268 0.0675197 0.708488 0.190257 0.584976L0.580846 0.191805C0.70339 0.0680976 0.867201 0 1.04177 0C1.21633 0 1.37995 0.0680976 1.50259 0.191805L6.80993 5.53678C6.93306 5.66068 7.00048 5.82624 7 6.00224C7.00048 6.17902 6.93316 6.34439 6.80993 6.46839L1.50753 11.8082C1.38489 11.9319 1.22127 12 1.04661 12C0.872045 12 0.708427 11.9319 0.58569 11.8082L0.195198 11.415C-0.0588984 11.1591 -0.0588984 10.7425 0.195198 10.4867L4.64774 6.00254Z" fill={COLOR.TINT_COLOR}/>
                </Svg>
              </View>
              </>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>)
}