import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { commonstyles } from '../../common/styles';
import { COLOR } from '../../common/colors';


export const ActionBanner: React.FC = () => {
    return(
        <View style={[{ flexDirection: 'row', height: 146, width: 250, backgroundColor: COLOR.WHITE, borderRadius: 3, overflow: 'hidden'}, {
            elevation: 6
        }]}>
            <View style={{overflow: 'hidden', width: '100%', height: '100%'}}>
                <View style={{position: 'absolute', left: -5, top: 0, height: '100%', width: 437}}>
                    <ImageBackground source={require('../../../assets/images/stock.png')} resizeMode="contain" style={{width: '100%', height: '100%'}}/>
                </View>
            </View>
        </View>
    )
}