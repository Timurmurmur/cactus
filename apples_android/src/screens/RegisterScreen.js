import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { TextInput, Switch } from 'react-native-paper';


import { AppAccordion } from '../components/ui/AppAccordion';
import { AppButton } from '../components/ui/AppButton';
import { AppTextLight } from '../components/ui/AppTextLight';
import { AppTextMedium } from '../components/ui/AppTextMedium';
import { CheckBoxCircle } from '../components/CheckBoxCircle';


export const RegisterScreen = ({ navigation, route }) => {

  console.log(route)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [comment, setComment] = useState('')
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOnCall, setIsSwitchOnCall] = useState(false);
  const [cityView, setCityView] = useState(false)

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitchCall = () => setIsSwitchOnCall(!isSwitchOnCall);

const goToSoppingBacket = () => {
  navigation.navigate('OrderList')
}

  const mainContent = () => {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ marginVertical: 8, backgroundColor: '#fff', padding: 16, marginHorizontal: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <AppTextMedium style={{ fontSize: 16 }}>Состав заказа</AppTextMedium>
              {/* <TouchableOpacity onPress={() => console.log('Pressed')}> */}
                <TouchableOpacity onPress={() => goToSoppingBacket()}>
                <Image source={require('../../assets/icons/arrow_right_rownd.png')} style={{ width: 24, height: 24 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
              <Image source={require('../../assets/img/iPhone/i11_red.png')} style={{ width: 46, height: 64, marginRight: 30, resizeMode: 'contain' }} />
              <Image source={require('../../assets/img/iPhone/i11_pro.png')} style={{ width: 46, height: 64, marginRight: 30, resizeMode: 'contain' }} />
            </View>
          </View>
          <View style={{ marginVertical: 8 }}>
            <AppAccordion
              content={(
                <View style={{ backgroundColor: '#fff', paddingHorizontal: 16 }}>
                  <AppButton style={{ width: '100%', height: 48, marginBottom: 12 }}>Войти</AppButton>
                  <View style={{ alignItems: 'center', marginBottom: 12 }}>
                    <AppTextLight style={{}}>Или стать новым пользователм</AppTextLight>
                  </View>

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
                </View>
              )}
              title={'Данные о покупателе*'}
              info={'Имя и фамилия, номер телефона'}
              num={'1'} />
          </View>

          <View style={{ marginVertical: 8 }}>
            <AppAccordion
              content={(
                <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 16 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }}>
                    <AppTextLight style={{ fontSize: 16 }}>Город*</AppTextLight>
                    <TouchableOpacity onPress={() => setCityView(!cityView)}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppTextLight style={{ fontSize: 16, color: '#C5C6C7', marginRight: 10 }}>Не выбрано</AppTextLight>
                        <Image source={require('../../assets/icons/arrow_right.png')} style={{ width: 6, height: 12 }} />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 25 }}>
                    <AppTextLight style={{ fontSize: 16 }}>Я получатель</AppTextLight>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'#60B6FF'} />
                  </View>
                  {!isSwitchOn && (<View>
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
                  </View>
                  )}

                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AppTextLight style={{ fontSize: 16 }}>Способ доставки</AppTextLight>
                    <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AppTextLight style={{ fontSize: 16, color: '#C5C6C7', marginRight: 10 }}>Не выбрано</AppTextLight>
                        <Image source={require('../../assets/icons/arrow_right.png')} style={{ width: 6, height: 12 }} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              title={'Доставка*'}
              num={'2'}
              info={'Не выбрано'} />
          </View>

          <View style={{ marginVertical: 8 }}>
            <AppAccordion
              content={(
                <View style={{ backgroundColor: '#fff', paddingHorizontal: 16 }}>
                  <CheckBoxCircle title={'Наличными (в магазине при получении)'} />
                  <CheckBoxCircle title={'Наложенный платеж'} />
                  <CheckBoxCircle title={'LiqPay (оплата картой онлайн)'} />
                  <CheckBoxCircle title={'Оплата картой в магазине'} />
                  <CheckBoxCircle title={'Apple Pay'} />
                  <CheckBoxCircle title={'Google Pay'} />
                  <CheckBoxCircle title={'На карту Приват Банка'} />
                  <CheckBoxCircle title={'Кредит онлайн'} />
                </View>
              )}
              title={'Оплата*'}
              num={'3'}
              info={'Способ оплаты'} />
          </View>


          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginVertical: 8,
            marginHorizontal: 16
          }}>
            <View>
              <AppTextMedium style={{ fontSize: 16, fontWeight: '500' }}>Не перезванивать</AppTextMedium>
              <AppTextLight style={{ fontSize: 12 }}>Я уверен в заказе</AppTextLight>
            </View>
            <Switch value={isSwitchOnCall} onValueChange={onToggleSwitchCall} color={'#60B6FF'} />
          </View>

          <View style={{
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginVertical: 8,
            marginHorizontal: 16
          }}>
            <TextInput
              value={comment}
              onChangeText={text => setComment(text)}
              style={styles.input}
              label={'Комментарий к заказу'}
              mode={'outlined'}
            />
          </View>
        </ScrollView>
        <View style={{
          position: 'relative',
          bottom: 0,
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 10,
          alignItems: 'center',
        }}>
          <AppButton style={{
            backgroundColor: isSwitchOn && isSwitchOnCall ? '#60B6FF' : '#ECEDEF',
            justifyContent: 'space-between',
            paddingVertical: 16
          }}
            price={'58 998 ₴'}
            styleText={{ color: isSwitchOn && isSwitchOnCall ? '#fff' : '#8E8E93' }}
          >Оформить заказ</AppButton>

        </View>
      </View>
    )
  }

  const cityContent = () => {
    return (
      <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, height: '100%' }}>
        <Text>City Content</Text>
        <TouchableOpacity onPress={() => setCityView(!cityView)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AppTextLight style={{ fontSize: 16, color: '#C5C6C7', marginRight: 10 }}>Не выбрано</AppTextLight>
            <Image source={require('../../assets/icons/arrow_right.png')} style={{ width: 6, height: 12 }} />
          </View>
        </TouchableOpacity>
        <CheckBoxCircle title={'Киев'} onPress={() => setCityView(!cityView)} />
        <CheckBoxCircle title={'Одесса'} onPress={() => setCityView(!cityView)} />
        <CheckBoxCircle title={'Харьков'} onPress={() => setCityView(!cityView)} />
        <CheckBoxCircle title={'Днепр'} onPress={() => setCityView(!cityView)} />
        <CheckBoxCircle title={'Львов'} onPress={() => setCityView(!cityView)} />
      </View>
    )
  }

  if (cityView) {
    return (
      <View style={styles.container}>
        {cityContent()}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {mainContent()}
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#fff',
  },
})
