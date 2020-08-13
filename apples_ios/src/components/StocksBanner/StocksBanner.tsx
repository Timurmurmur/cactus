import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLOR } from '../../common/color';

interface IStocksBanner {
}

export const StocksBanner: React.FC<IStocksBanner> = ({  }) => {
    return(
        <View style={[{ flexDirection: 'row', height: 146, width: 250, backgroundColor: COLOR.WHITE, borderRadius: 7}, {
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.08,
            shadowRadius: 18,
            shadowColor: '#000'
        }]}>
            <View style={{overflow: 'hidden', width: '100%', height: '100%'}}>
                <View style={{position: 'absolute', left: -5, top: 0, height: '100%', width: 437}}>
                    <ImageBackground source={require('../../../assets/images/stock.png')} resizeMode="contain" style={{width: '100%', height: '100%'}}/>
                </View>
            </View>
        </View>
    )
}