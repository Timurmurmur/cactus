import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Picker, Alert, Modal } from 'react-native';
import { Route, Navigation } from '../../common/types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { ArrowRight, ArrowBottom, ArrowLeft } from '../../Components/Icons/Icons';

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
        <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
                <View style={{width: 24}} onTouchStart={e => this.props.navigation.goBack()}>
                    <ArrowLeft width={11} height={20} color="#fff" />
                </View>
                <View style={{width: '70%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', textAlign: 'center' }}>
                    { 'Выбор рассрочки' }
                    </Text>
                </View>
                <View style={{ width: 24 }}>
                    
                </View>
            </View>
        </View>
        <ScrollView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
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
    const [value, setValue] = useState("4 пл");


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
                <Text style={{fontSize: 16, color: Colors.gray}}>Период</Text>
                <View style={{marginRight: 16, flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 10, fontSize: 16, fontWeight: '500', color: Colors.black}}>{value}</Text>
                    <ArrowBottom width={12} height={7} color="#CECECE"/>
                </View>
            </View>
            </View>
            <View style={creditStyles.priceWrapper}>
            <View style={{width: '60%', justifyContent: 'space-between'}}>
                <Text style={creditStyles.priceText}>по 15 475 ₴</Text>
                <Text style={{fontSize: 12, color: Colors.gray}}>переплата 0.01% в мес. = 0 ₴</Text>
            </View>
            <View style={{width: '40%'}}>
                <TouchableHighlight underlayColor={Colors.white} onPress={e => props.navigation.goBack()} style={{paddingVertical: 10, borderColor: Colors.green,borderWidth: 1 ,borderRadius: 7, width: '100%', backgroundColor: Colors.green }}>
                <Text style={{textAlign: 'center', color: Colors.white, fontWeight: '500', fontSize: 16}}>Выбрать</Text>
                </TouchableHighlight>
            </View>
            </View>
            <Modal transparent visible={showModal} onRequestClose={showModalHandler}>
                <View style={{position: 'absolute', width: '100%', bottom: 0, backgroundColor: 'rgba(239, 239, 244, 0.94)'}}>
                    <View style={{backgroundColor: '#F9F9F9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50,paddingHorizontal: 16}}>
                        <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: Colors.lightGreen}}>Отмена</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'transparent'} onPress={showModalHandler}>
                            <Text style={{fontSize: 18, fontWeight: '500', color: Colors.lightGreen}}>Выбрать</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{padding: 16}}>
                        <Picker onValueChange={changeValueHandler} selectedValue={value}>
                            <Picker.Item label="ПриватБанк Оплата Частями до 4 пл.; ОЧ..." value="4 пл"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 6 пл.; ОЧ..." value="6 пл"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 10 пл..." value="10 пл"/>
                            <Picker.Item label="ПриватБанк Оплата Частями до 15 пл.; ОЧ..." value="15 пл"/>
                            <Picker.Item label="ПриватБанк Мгновенная Рассрочка; МР" value="1 пл"/>
                        </Picker>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const pickerStyles = StyleSheet.create({
  wrapper: { position: 'relative', paddingVertical: 12, borderTopColor: '#EBEBEB', borderTopWidth: .5, borderBottomColor: '#EBEBEB', borderBottomWidth: .5, flexDirection: 'row', justifyContent: 'space-between'},
  title: {position: 'absolute', fontSize: 12, color: Colors.gray, top: -10, left: 15, backgroundColor: Colors.white, paddingHorizontal: 5},
});

const creditStyles = StyleSheet.create({
  wrapper: { borderRadius: 7, marginBottom: 20, backgroundColor: Colors.white, paddingVertical: 16, paddingLeft: 16 },
  title: {fontSize: 16, fontWeight: '500', },
  logo: {marginTop: 7},
  priceWrapper: {flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', paddingRight: 16, marginTop: 15},
  priceText: {fontSize: 16, fontWeight: '500', color: Colors.black, marginBottom: 5},

});