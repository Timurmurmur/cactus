import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../common/color';


export const NewsBanner:React.FC = () => {
    return(
        <View style={[{backgroundColor: COLOR.WHITE,width: 300,height:150, borderRadius: 3, overflow: 'hidden'}]}>
            <ImageBackground source={require('../../../assets/images/news1.png')} resizeMode="cover" style={{width: '100%', height: '100%',}} >
                <LinearGradient colors={['rgba(54, 54, 54, .1)', 'rgba(54, 54, 54, .8)']} end={[1,1]} start={[1,0]} style={{width: '100%', height: '100%'}}>
                    <View style={{paddingTop: 40, paddingHorizontal: 15}}>
                        <View style={{marginTop: 12}}>
                            <Text style={{fontSize: 10, marginTop: 10, color: COLOR.WHITE }}>22.01.2020</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,marginTop: 5, fontWeight: 'bold',  lineHeight: 18, color: COLOR.WHITE}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на популярные вопросы</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}