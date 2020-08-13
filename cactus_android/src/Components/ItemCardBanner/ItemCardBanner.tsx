import React from 'react';
import { View, Image, Text } from 'react-native';
import Colors from '../../constants/Colors';

interface IItemCardProps {
    image: any;
    title: string;
    price: string;
    discountPrice?: string;
}

export const ItemCardBanner: React.FC<IItemCardProps> = ({image, title, price, discountPrice}) => {
    return(
        <View style={{width: 130, alignItems: 'center', marginRight: 30}}>
            <View style={{marginBottom: 11}}>
                <Image source={image} style={{width: 80, height: 95}}/>
            </View>
            <View style={{marginBottom: 10, width: '100%'}}>
                <Text style={{ fontSize: 12, color: Colors.gray, fontWeight: '500'}}>{title}</Text>
            </View>
            <View style={{width: '100%'}}>
                <Text style={{color: Colors.black, fontSize: 12, fontWeight: '500'}}>{price}</Text>
            </View>
        </View>
    )
}