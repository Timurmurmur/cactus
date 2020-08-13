import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Colors from '../../constants/Colors';
import { TextInputMask } from 'react-native-masked-text';


export const FastBuy: React.FC<{ onDismiss: (e: any) => void}> = ({ onDismiss }) => {
    let phoneRef: any;
    const [phone, setPhone] = useState('');
    const [phoneValid, setPhoneValid] = useState<boolean>(false);


    const phoneNumberChangeHandler = (e: any) => {
        if(e.nativeEvent) {
            const { text } = e.nativeEvent
            setPhone(text);
            setPhoneValid(phoneNumberValidate(text))
            if (text.length === 18) {
                phoneRef._inputElement._inputRef.blur();
            }
        }
    }

    const phoneNumberValidate = (value: string) => {
        let phoneRegexp = /^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/;
        return phoneRegexp.test(value);
    }

    return(
        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{width: 270, height: 209, backgroundColor: '#EEEEEF', borderRadius: 14}}>
                <View style={{paddingVertical: 17, paddingHorizontal: 15}}>
                    <Text style={{fontWeight: '600', fontSize: 17, color: Colors.black, textAlign: 'center', marginBottom: 10}}>Быстрая покупка</Text>
                    <Text style={{fontSize: 13, lineHeight: 15, textAlign: 'center', color: Colors.black, marginBottom: 20}}>Чтобы оформить быструю покупку, введите номер телефона, на который нужно оформить заказ.</Text>
                    <TextInputMask type={"cel-phone"}
                        options={{
                            maskType: "BRL",
                            withDDD: true,
                            dddMask: "+38(999)-999-99-99"
                        }}
                        placeholderTextColor={Colors.gray}
                        placeholder={"Номер телефона"}
                        value={phone}
                        onChange={phoneNumberChangeHandler}
                        style={{
                            backgroundColor: Colors.white,
                            padding: 8,
                            borderRadius: 7,

                        }}
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                        maxLength={18}
                        clearButtonMode="while-editing"
                        ref={(ref) => phoneRef = ref}
                    />
                </View>
                <View style={{borderTopColor: '#B3B3B3', borderTopWidth: .5, flexDirection: 'row', justifyContent: 'space-between', height: 44}}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={onDismiss} style={{width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center', borderRightColor: '#B3B3B3', borderRightWidth: .5}}>
                        <Text style={{color: '#007AFF', fontSize: 17, fontWeight: '600', textAlign: 'center'}}>Отмена</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'transparent'} onPress={onDismiss} disabled={phoneValid ? false : true} style={{width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: phoneValid ? '#007AFF' : '#A4A2A3', fontSize: 17, }}>Купить</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}