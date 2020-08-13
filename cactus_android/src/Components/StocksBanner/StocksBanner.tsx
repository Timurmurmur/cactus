import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { commonStyles } from '../../common/styles';

interface IStocksBanner {
    title: any;
    image: any;
}

export const StocksBanner: React.FC<IStocksBanner> = ({ title, image }) => {
    return(
        <View style={[{backgroundColor: Colors.white, borderRadius: 7, paddingTop: 11, paddingHorizontal: 14, flexDirection: 'row', height: 150, width: 250, marginRight: 15}, {
            shadowOffset: {
                width: 2,
                height: 4,
            },
            shadowOpacity: 0.16,
            shadowRadius: 15,
            shadowColor: '#000'
        }]}>
            <View style={{width: '40%'}}>
                <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 10, lineHeight: 16, color: '#000' }}>
                    <FontAwesome name="apple" size={12}/>{'  '}
                    {title}
                </Text>
            </View>
            <View style={{width: '60%'}}>
                <ImageBackground source={image} style={{width: '100%', height: '100%'}}/>
            </View>
        </View>
    )
}