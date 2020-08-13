import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icons } from '../../common/icons';
import Colors from '../../constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { SmallHeader } from '../../Components/Header/SmallHeader';


export const Feedback: React.FC = (props) => {
    return(
        <View style={{backgroundColor: '#F9F9F9', flex: 1}}>
            <SmallHeader title="Служба поддержки" back {...props}/>
            <View style={{backgroundColor: '#F9F9F9', marginTop: 20}}>
                <View style={{paddingHorizontal: 15}}>
                    <Text style={{fontSize: 16 ,fontWeight: 'bold', marginBottom: 8, color: Colors.black}}>Оформить заказ</Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30, backgroundColor: Colors.white, paddingVertical: 16}}>
                    <View style={{marginRight: 11, marginLeft: 16, alignItems: 'center', marginTop: 5}}>
                        <FontAwesome5 name="phone" size={20} color={'#36D47F'} style={{transform: [{ rotate: '90deg'}]}}/>
                    </View>
                    <View>
                    <Text style={{fontSize: 26, fontWeight: '500', color: Colors.black}}>044 334 77 77</Text>
                    <Text style={{fontSize: 14, marginBottom: 15, color: Colors.black, marginTop: 15, }}>Без выходных с 9:00 до 21:00</Text>
                    <View>
                        <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={Colors.blue} underlayColor={Colors.gray} style={{padding: 12, justifyContent: 'center'}}><Text style={{fontSize: 16,  fontWeight: "500", color: Colors.white}}>Заказы в Telegram</Text></FontAwesome5.Button>
                    </View>
                    <View style={{marginTop: 15}}>
                        <FontAwesome5.Button name="telegram-plane" size={20} backgroundColor={Colors.blue} underlayColor={Colors.gray} style={{padding: 12, justifyContent: 'center'}}><Text style={{fontSize: 16, fontWeight: "500", color: Colors.white}}>Сервис в Telegram</Text></FontAwesome5.Button>
                    </View>
                    </View>
                </View>
            </View>
        </View>
    )
}