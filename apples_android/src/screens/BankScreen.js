import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-paper';

import { AppLine } from '../components/ui/AppLine'
import { AppButton } from '../components/ui/AppButton';

export const BankScreen = ({ route, navigation }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [code, setCode] = useState('')


  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 16, backgroundColor: '#fff' }}>

        <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image source={route.params.img} style={styles.logo} />
            <View>
              <Text style={{ fontSize: 16, color: '#3A3A3C' }}>по 15 475 ₴</Text>
              <Text style={{ fontSize: 12, color: '#8E8E93' }}>переплата 0.01% в мес. = 0 ₴</Text>
            </View>
          </View>
        </View>

        <View style={{ position: 'relative', top: 20 }}>
          <Text style={styles.titleSelect}>Период</Text>
          <View style={styles.containerSelect}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={route.params.items}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>
        <Text style={{
          fontSize: 14,
          color: '#3A3A3C',
          marginTop: 30,
          marginBottom: 16
        }}>Уважаемый клиент! Напоминаем Вам, что формы нужно заполнять только на украинском языке.
      В противном случае банк не примет эту информацию.</Text>
        <AppLine style={{ marginBottom: 16 }} />
        <Text style={{ marginBottom: 26 }}>Заполните информацию о себе</Text>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
            label={'Имя'}
            mode={'outlined'}
          />
          <TextInput
            value={surname}
            onChangeText={text => setSurname(text)}
            style={styles.input}
            label={'Фамилия'}
            mode={'outlined'}
          />
          <TextInput
            value={patronymic}
            onChangeText={text => setPatronymic(text)}
            style={styles.input}
            label={'Отчество'}
            mode={'outlined'}
          />
          <TextInput
            value={code}
            onChangeText={text => setCode(text)}
            style={styles.input}
            label={'Идентификационный код'}
            mode={'outlined'}
          />
          <TextInput
            value={patronymic}
            onChangeText={text => setPatronymic(text)}
            style={styles.input}
            label={'Телефон для связи банка с Вами'}
            mode={'outlined'}
          />
        </View>
        <View style={styles.containerSelect}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={route.params.items}
            useNativeAndroidPickerStyle={false}
          />
        </View>
        <AppButton
          style={{
            width: '100%',
            height: 48,
            marginTop: 15,
            marginBottom: 16,
            backgroundColor: '#60B6FF'
          }}
          onPress={() => navigation.navigate('Register')}>Оформить</AppButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 95,
    height: 53,
  },
  containerSelect: {
    fontSize: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 3,
    backgroundColor: 'white',
    color: 'black',
  },
  titleSelect: {
    position: 'absolute',
    color: '#8E8E93',
    zIndex: 100,
    bottom: 51,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 12
  },
  input: {
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff'
    // width: Dimensions.get('window').width > 400 ? 360 : 320,

  },
})
