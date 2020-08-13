import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { COLOR } from '../../common/colors';



export const Contact: React.FC = () => (
    <View style={{padding: 16, backgroundColor: COLOR.WHITE, paddingBottom: 20}}>
        <View style={{marginBottom: 15}}>
            <Text style={{textTransform: 'uppercase', fontWeight: '300', fontSize: 16, letterSpacing: 2, lineHeight: 19, color: COLOR.BLACK}}>
            Контакты
            </Text>
        </View>
        <View style={{marginBottom: 25}}>
            <Text style={{fontWeight: '300', fontSize: 14, lineHeight: 18, color: COLOR.BLACK}}>
                {
                    `г.Харьков, ул. Сумская 22\n\nС 9-00 до 21-00\nБез перерывов и выходных`
                }
            </Text>
        </View>
        <View style={{marginBottom: 12}}>
            <Text style={{fontWeight: '600', fontSize: 16, lineHeight: 20, color: COLOR.BLACK}}>Есть вопросы?</Text>
        </View>
        <View>
            <TouchableHighlight style={{width: 230, height: 50, backgroundColor: COLOR.TINT_COLOR, justifyContent: 'center', borderRadius: 3}}>
                <Text style={{textAlign: 'center', fontWeight: '500', color: COLOR.WHITE, letterSpacing: .3, fontSize: 16}}>Отправить письмо</Text>
            </TouchableHighlight>
        </View>
    </View>
)