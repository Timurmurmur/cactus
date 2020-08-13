import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, TouchableHighlight,ScrollView, Dimensions} from 'react-native';
import { AuthStyle } from '../Auth/Auth';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { Navigation, Route } from '../../common/types';

const CODE_LENGTH = new Array(4).fill(0);

export interface ISmsVerificationProps {
  navigation: Navigation;
  route: Route;
}
interface ISmsVerificationState {
  value: string;
  focused: boolean;
  showModal: boolean;
}

export class SmsVerification extends React.Component<ISmsVerificationProps, ISmsVerificationState> {
  input = React.createRef();
  constructor(props: ISmsVerificationProps){
    super(props);

    this.state = {
      value: "",
      focused: false,
      showModal: false,
    }
  }

  handleClick = () => {
    this.input.current.focus();
  };
  handleFocus = () => {
    this.setState({ focused: true });
  };
  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };
  handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState(state => {
        return {
          value: state.value.slice(0, state.value.length - 1),
        };
      });
    }
  };
  handleChange = (value: any) => {
    this.setState(state => {
      if (state.value.length >= CODE_LENGTH.length) return null;
      return {
        value: (state.value + value).slice(0, CODE_LENGTH.length),
      };
    });
  };

  showModalHandler = (e: any) => {
    e.preventDefault();
    const { showModal } = this.state;
    let newState;
    if(showModal){
      newState = false;
    } else {
      newState = true;
    }
    this.setState({
      showModal: newState
    })
  }

  render() {
    const { value, focused } = this.state;

    const values = value.split("");

    const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

    const hideInput = !(values.length < CODE_LENGTH.length);
    
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE }}>
        <View style={[{ height: Dimensions.get('window').height / 1.1, justifyContent: 'center' }]}>
          <View style={AuthStyle.goBack}>
            <Ionicons.Button onPress={() => this.props.navigation.goBack()}  name="md-arrow-round-back" size={30} color={COLOR.GREEN} backgroundColor={'transparent'}/>
          </View>
          <View>
            <Text style={AuthStyle.title}>+380504432244</Text>
            <Text style={AuthStyle.subTitle}>Введите код проверки из SMS</Text>
          </View>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.handleClick}>
              <View style={styles.wrap}>
                <TextInput
                  value=""
                  ref={this.input}
                  onChangeText={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  keyboardType={"number-pad"}
                  style={[
                    styles.input,
                    {
                      left: selectedIndex * 53,
                      opacity: hideInput ? 0 : 1,
                    },
                  ]}
                />
                {CODE_LENGTH.map((v, index) => {
                  const selected = values.length === index;
                  const filled = values.length === CODE_LENGTH.length && index === CODE_LENGTH.length - 1;

                  return (
                    <View style={[styles.display]} key={index}>
                      <Text style={styles.text}>{values[index] || ""}</Text>
                      {(selected || filled) && focused && <View style={styles.shadows} />}
                    </View>
                  );
                })}
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{marginTop: 110, alignItems: 'center'}}>
            <TouchableHighlight underlayColor={'transparent'} onPress={e => this.showModalHandler(e)}><Text style={{ color: COLOR.LIGHT_GREEN, textTransform: 'uppercase', fontWeight: 'bold' }}>Не получили код?</Text></TouchableHighlight>
          </View>
        </View>
        <View>
          <Modal animationType="slide" visible={this.state.showModal} transparent={true} onRequestClose={this.showModalHandler}>
              <View style={modalStyles.modalContainer}>
                <View style={modalStyles.modalWrapper}>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={(e) => console.log('pressed')}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <AntDesign name="reload1" size={25} color={COLOR.TEXT_GRAY}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Отправить код ещё раз</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={(e) => {this.showModalHandler(e); this.props.navigation.navigate("Auth")}}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <Ionicons name="md-call" size={25} color={COLOR.TEXT_GRAY}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Ввести другой номер</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={COLOR.GRAY} onPress={this.showModalHandler}>
                    <View style={modalStyles.modalItem}>
                      <View style={modalStyles.modalItemIconWrapper}>
                        <Entypo name="cross" size={25} color={COLOR.TEXT_GRAY}/>
                      </View>
                      <View style={modalStyles.modalItemTextWrapper}>
                        <Text style={modalStyles.modalItemText}>Закрыть</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
          </Modal>
        </View>
      </ScrollView>
      
    )
  }
}

export const modalStyles = StyleSheet.create({
  modalContainer: { height: '100%', backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'flex-end', width: '100%' },
  modalWrapper: { width: '100%', backgroundColor: COLOR.WHITE, padding: 20 },
  modalItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14 },
  modalItemIconWrapper: { width: '15%', justifyContent: 'center', alignItems: 'center' },
  modalItemTextWrapper: {width: '80%'},
  modalItemText: {fontSize: 16, fontFamily: 'Roboto-Medium'},

})

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35    
  },
  wrap: {
    position: "relative",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: 200
  },
  input: {
    position: "absolute",
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "transparent",
    width: 40,
    top: 0,
    bottom: 0,
  },
  display: {
    borderWidth: 1,
    borderColor: COLOR.TEXT_GRAY,
    width: 40,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    borderRadius: 7
  },
  text: {
    fontSize: 32,
  },
  shadows: {
    position: "absolute",
    left: -1,
    top: -1,
    bottom: -1,
    right:-1,
    borderColor: COLOR.LIGHT_GREEN,
    borderWidth: 2,
    borderRadius: 7
  },
});