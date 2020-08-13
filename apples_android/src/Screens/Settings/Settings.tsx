import React from 'react';
import {View, Text, TouchableHighlight, Modal, ScrollView} from 'react-native';
import { StackHeader } from '../../Components/Header/StackHeader';
import { COLOR } from '../../common/colors';
import { commonstyles } from '../../common/styles';

export interface ISettingsProps {}
interface ISettingsState {
  radio: string;
  modal: boolean;
}

export class Settings extends React.Component<ISettingsProps, ISettingsState> {
  constructor(props: ISettingsProps){
    super(props);

    this.state = {
      radio: 'Русский',
      modal: false
    }
  }

  showModalHandler = (e: any) => {
    const { modal } = this.state;
    let newState;
    if( modal ) {
      newState = false;
    } else {
      newState = true
    }

    this.setState({
      modal: newState
    })
  }

  radioHandler = (val: string) => {
    this.setState({
      radio: val
    })
  }

  render() {
    const radioList = ['Русский', 'Украинский']
    const { radio, modal } = this.state;
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
         <View>
        <StackHeader title={'Настройки'} {...this.props}/>
        <View style={{marginVertical: 16}}> 
          <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => this.showModalHandler(e)}>
            <View style={{padding: 16}}>
              <Text style={{fontSize: 16, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>Язык рассылки</Text>
              <Text style={{fontSize: 14, color: COLOR.TEXT_GRAY}}>Русский</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={COLOR.GRAY} onPress={e => this.showModalHandler(e)}>
            <View style={{padding: 16}}>
              <Text style={{fontSize: 16, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>Язык интерфейса</Text>
              <Text style={{fontSize: 14, color: COLOR.TEXT_GRAY}}>Русский</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Modal visible={modal} transparent={true} animationType={'slide'} onRequestClose={this.showModalHandler}>
          <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(54, 54, 54,.3)', justifyContent: 'center', alignItems: 'center'}}>
            <View style={[commonstyles.shadow]}>
              <View style={{padding: 16, width: 270}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Язык рассылки</Text>
                <View style={{paddingVertical: 20}}>
                  { radioList.map((el, index) => {
                      return(
                        <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => this.radioHandler(el)}>
                          <View style={{paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 20, height: 20, borderWidth: 1, borderColor: `${radio === el ? COLOR.LIGHT_GREEN : COLOR.TEXT_GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                              { radio === el ? <View style={{width: 10, height: 10, borderRadius: 50, backgroundColor: COLOR.LIGHT_GREEN}}></View> : null }
                            </View>
                            <Text style={{fontSize: 16, }}>{el}</Text>
                          </View>
                        </TouchableHighlight>
                      )
                    })}
                </View>
                <TouchableHighlight underlayColor={COLOR.WHITE} onPress={e => this.showModalHandler(e)}><Text style={{textAlign: "right", textTransform: 'uppercase', color: COLOR.LIGHT_GREEN, fontWeight: 'bold'}}>Отмена</Text></TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      </ScrollView>
    )
  }
}