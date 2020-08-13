import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonstyles } from '../../common/styles';
import { COLOR } from '../../common/colors';


export const ItemBanner: React.FC<any> = ({ image, title, price }: any) => {
    return(
        <View style={{width: 130, alignItems: 'center'}}>
            <View style={{marginBottom: 11}}>
                <Image source={image.src} style={{width: image.width, height: image.height}}/>
            </View>
            <View style={{marginBottom: 10, width: '100%'}}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: COLOR.BLACK, lineHeight: 15, fontFamily: "Roboto-Light"}}>{title}</Text>
            </View>
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 12, fontWeight: '600', color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>{price}</Text>
            </View>
        </View>
    )
}