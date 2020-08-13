import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, TouchableHighlight,ScrollView, Dimensions, ActionSheetIOS} from 'react-native';
import { AuthStyle } from '../Auth/Auth';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import Colors from '../../constants/Colors';

const CODE_LENGTH = new Array(4).fill(0);

export interface ISmsVerificationProps {
  navigation: Navigation;
  route: Route;
}
interface ISmsVerificationState {
  value: string;
  focused: boolean;
}

export class SmsVerification extends React.Component<ISmsVerificationProps, ISmsVerificationState> {
  input = React.createRef();
  constructor(props: ISmsVerificationProps){
    super(props);

    this.state = {
      value: "",
      focused: false,
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


  actionHanlder = (e: any) => {
    ActionSheetIOS.showActionSheetWithOptions({
        tintColor: Colors.lightGreen,
        options: ['Отправить код ещё раз', 'Ввести другой номер', 'Отмена'],
        cancelButtonIndex: 2
    }, (index) => { console.log(index) })
  } 

  render() {
    const { value, focused } = this.state;

    const values = value.split("");

    const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;

    const hideInput = !(values.length < CODE_LENGTH.length);
    
    return(
      <ScrollView style={{backgroundColor: Colors.white }}>
        <View style={[{  justifyContent: 'center' }]}>
          <View style={{marginTop: 40}}>
            <Text style={AuthStyle.title}>+38 (066) 432 22 88</Text>
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
            <TouchableHighlight underlayColor={'transparent'} onPress={this.actionHanlder}><Text style={{ color: Colors.lightGreen, fontSize: 16,  }}>Не получили код?</Text></TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      
    )
  }
}

export const modalStyles = StyleSheet.create({
  modalContainer: { height: '100%', backgroundColor: 'rgba(0,0,0,.3)', justifyContent: 'flex-end', width: '100%' },
  modalWrapper: { width: '100%', backgroundColor: Colors.white, padding: 20 },
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
    width: 40,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    borderRadius: 7,
    backgroundColor: '#F2F2F4'
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
    borderColor: Colors.lightGreen,
    borderWidth: 2,
    borderRadius: 7
  },
});