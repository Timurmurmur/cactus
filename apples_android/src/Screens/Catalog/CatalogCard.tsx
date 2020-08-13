import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLOR } from '../../common/colors';

interface ICatalogItemProps {
    name: string;
    image: {
        src: any,
        width: number;
        height: number;
    }
}

export const CatalogCard: React.FC<ICatalogItemProps> = ({ image, name }) => {
    return(
        <View style={{height: 114, justifyContent: 'space-between', alignItems: 'center',width: '100%'}}>
            <View style={{ justifyContent: 'center', height: '80%', width: '100%', alignItems: 'center'}}>
                <Image source={image.src} style={{width: image.width, height: image.height}}/>
            </View>
            <View style={{justifyContent: 'flex-end', width: '100%'}}>
                <Text style={{fontSize: 12, fontWeight: '500', color: COLOR.BLACK, textAlign: 'center', fontFamily: 'Roboto-Medium'}}>
                    {name}
                </Text>
            </View>
        </View>
    )
}