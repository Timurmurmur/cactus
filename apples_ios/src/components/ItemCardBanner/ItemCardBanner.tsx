import React from 'react';
import { View, Image, Text } from 'react-native';
import { COLOR } from '../../common/color';
interface IItemCardProps {
    image: {
        src: any,
        width: number,
        height: number,
    };
    title: string;
    price: string;
    discountPrice?: string;
}

export const ItemCardBanner: React.FC<IItemCardProps> = ({image, title, price, discountPrice}) => {
    return(
        <View style={{width: 130, alignItems: 'center'}}>
            <View style={{marginBottom: 11}}>
                <Image source={image.src} style={{width: image.width, height: image.height}}/>
            </View>
            <View style={{marginBottom: 10, width: '100%'}}>
                <Text style={{ fontSize: 12, fontWeight: '300', color: COLOR.BLACK, lineHeight: 15}}>{title}</Text>
            </View>
            <View style={{width: '100%'}}>
                <Text style={{fontSize: 12, fontWeight: '600', color: COLOR.BLACK}}>{price}</Text>
            </View>
        </View>
    )
}