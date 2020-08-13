import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLOR } from '../../common/color';

interface ICatalogItemProps {
    name: string;
    image: {
        src: any,
        width: number;
        height: number;
    }
}

export const CatalogItem: React.FC<ICatalogItemProps> = ({ image, name }) => {
    return(
        <View style={{height: 114, justifyContent: 'space-between', alignItems: 'center',width: '100%'}}>
            <View style={{ justifyContent: 'center', height: '80%', width: '100%', alignItems: 'center'}}>
                <Image source={image.src} style={{width: image.width, height: image.height}}/>
            </View>
            <View style={{justifyContent: 'flex-end', width: '100%'}}>
                <Text style={{fontSize: 12, fontWeight: '600', color: COLOR.BLACK, textAlign: 'center'}}>
                    {name}
                </Text>
            </View>
        </View>
    )
}