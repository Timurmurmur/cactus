import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Picker, Alert, Modal } from 'react-native';
import { Route, Navigation } from '../../common/types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ArrowRight, ArrowBottom, ArrowLeft } from '../../components/Icons/Icons';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

export interface ICreditListProps {
  route: Route;
  navigation: Navigation;
}

interface ICreditListState {}

export class CreditList extends React.Component<ICreditListProps, ICreditListState> {
  constructor(props: ICreditListProps){
    super(props);

    this.state = {}
  }

  componentDidMount(){
  }

  render() {
    return(
        <>
        <Header navigation={this.props.navigation} route={this.props.route} config={{back: true, title: 'Выбор рассрочки', type: 'SMALL', basket: false}}/>
        <ScrollView style={{flex: 1, backgroundColor: COLOR.BACKGROUND}}>
            <View style={{padding: 16}}>
                <CreditItem {...this.props}/>
                <CreditItem {...this.props}/>
            </View>
        </ScrollView>
        </>
    )
  }
}

const CreditItem: React.FC = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState("4 мес");


    const changeValueHandler = useCallback(
        (value, valueIndex) => {
            setValue(value);
        }, [value]
    )

    const showModalHandler = (e: any) => {
        setShowModal(!showModal);
    }

    return(
        <View style={[creditStyles.wrapper]}>
            <View style={{}}>
            <View>
                <Text style={creditStyles.title}>МоноБанк 4 платежа; 4 мес</Text>
                <View style={creditStyles.logo}>
                <Image source={require('../../../assets/images/monobankLogo.png')} style={{width: 79, height: 27}}/>
                </View>
            </View>
            <View style={pickerStyles.wrapper} onTouchStart={showModalHandler}>
                <Text style={{fontSize: 16, color: COLOR.GRAY, fontWeight: '300'}}>Период</Text>
                <View style={{marginRight: 16, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 10, fontSize: 16, fontWeight: '300', color: COLOR.BLACK}}>{value}</Text>
                    <ArrowBottom width={12} height={7} color="#CECECE"/>
                </View>
            </View>
            </View>
            <View style={creditStyles.priceWrapper}>
            <View style={{width: '60%', justifyContent: 'space-between'}}>
                <Text style={creditStyles.priceText}>по 15 475 ₴</Text>
                <Text style={{fontSize: 12, color: COLOR.GRAY}}>переплата 0.01% в мес. = 0 ₴</Text>
            </View>
            <View style={{width: '40%'}}>
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => props.navigation.goBack()} style={{paddingVertical: 10, borderColor: COLOR.TINT_COLOR,borderWidth: 1 ,borderRadius: 3, width: '100%', backgroundColor: COLOR.TINT_COLOR }}>
                <Text style={{textAlign: 'center', color: COLOR.WHITE, fontWeight: '500', fontSize: 16}}>Выбрать</Text>
                </TouchableHighlight>
            </View>
            </View>
            <Modal transparent visible={showModal} onRequestClose={showModalHandler}>
                <View style={{position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'rgba(239, 239, 244, 0.94)'}}>
                    <View style={{backgroundColor: '#F9F9F9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50,paddingHorizontal: 16}}>
                        <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: COLOR.TINT_COLOR}}>Отмена</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: COLOR.TINT_COLOR}}>Выбрать</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{padding: 16}}>
                        <Picker itemStyle={{fontSize: 14}} onValueChange={changeValueHandler} selectedValue={value}>
                            <Picker.Item  label="ПриватБанк Оплата Частями до 4 пл.; ОЧ..." value="4 мес"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 6 пл.; ОЧ..." value="6 мес"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 10 пл..." value="10 мес"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 15 пл.; ОЧ..." value="15 мес"/>
                            <Picker.Item label="ПриватБанк Мгновенная Рассрочка; МР" value="1 мес"/>
                        </Picker>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const pickerStyles = StyleSheet.create({
  wrapper: { position: 'relative', paddingVertical: 12, borderTopColor: '#EBEBEB', borderTopWidth: .5, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, flexDirection: 'row', justifyContent: 'space-between'},
  title: {position: 'absolute', fontSize: 12, color: COLOR.GRAY, top: -10, left: 15, backgroundColor: COLOR.WHITE, paddingHorizontal: 5},
});

const creditStyles = StyleSheet.create({
  wrapper: { borderRadius: 7, marginBottom: 20, backgroundColor: COLOR.WHITE, paddingVertical: 16, paddingLeft: 16 },
  title: {fontSize: 16, fontWeight: '600', color: COLOR.BLACK},
  logo: {marginTop: 7},
  priceWrapper: {flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', paddingRight: 16, marginTop: 15},
  priceText: {fontSize: 16, color: COLOR.BLACK, marginBottom: 5},
});