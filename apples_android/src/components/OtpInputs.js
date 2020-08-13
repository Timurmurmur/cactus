import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, Item, Input } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

class OtpInputs extends React.Component {
  state = { otp: [] };
  otpTextInput = [];

  componentDidMount() {
    this.otpTextInput[0]._root.focus();
  }

  renderInputs() {
    const inputs = Array(4).fill(0);
    const txt = inputs.map(
      (i, j) =>
        <Col key={j} style={styles.txtMargin}>
          <Input
            style={[styles.inputRadius, { borderRadius: 7 }]}
            keyboardType="phone-pad"
            onChangeText={v => this.focusNext(j, v)}
            onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
            ref={ref => this.otpTextInput[j] = ref}
            maxLength={1}
          />
        </Col>
    );
    return txt;
  }

  focusPrevious(key, index) {
    if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1]._root.focus();
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1]._root.focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index]._root.blur();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({ otp });
    this.props.getOtp(otp.join(''));
  }


  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.renderInputs()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // gridPad: { padding: 30 },
  txtMargin: { margin: 3, width: 40, backgroundColor: '#F6F6F6', borderRadius: 7 },
  inputRadius: { textAlign: 'center', }
});

export default OtpInputs;