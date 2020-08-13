import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';


export const NewsBanner:React.FC = () => {
    return(
        <View style={[{marginRight: 8,backgroundColor: Colors.white,width: 300,height:150, borderRadius: 7, overflow: 'hidden'}]}>
            <ImageBackground source={require('../../../assets/images/news1.png')} resizeMode="cover" style={{width: '100%', height: '100%',}} >
                <LinearGradient colors={['rgba(54, 54, 54, .1)', 'rgba(54, 54, 54, .8)']} end={[1,1]} start={[1,0]} style={{width: '100%', height: '100%'}}>
                    <View style={{paddingTop: 40, paddingHorizontal: 15}}>
                        <View style={{marginTop: 12}}>
                            <Text style={{fontSize: 10, marginTop: 10,color: Colors.white, }}>22.01.2020</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 12,color: Colors.white,marginTop: 5, fontWeight: 'bold',  lineHeight: 18}}>Как правильно заряжать Макбук – 5 полезных советов и ответы на популярные вопросы</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}