import React, { useState } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLOR } from '../../common/color';


interface IRadiuButtonsProps {
    buttons: {
        title: string;
    }[],
}

export const RadioButtons: React.FC<IRadiuButtonsProps> = ({ buttons }) => {
    const [selectedItem, setSelectedItem] = useState(buttons[0].title);
    
    const radioButtonHandler = (title: string) => {
        setSelectedItem(title);
    }

    return(
        <View>
            { buttons.map((el: any, index) => {
                return(
                  <TouchableHighlight underlayColor={COLOR.WHITE} key={index} onPress={e => radioButtonHandler(el.title)}>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', position: 'relative', width: '100%', padding: 16}, buttons.length - 1 !== index ? { borderBottomColor: '#EBEBEB', borderBottomWidth: .5 } : null]}>
                      <View style={{width: 20, height: 20, borderWidth: .5, borderColor: `${selectedItem === el.title ? COLOR.TINT_COLOR : COLOR.GRAY}`, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                        { selectedItem === el.title ? <View style={{width: '100%', height: '100%', borderRadius: 50, backgroundColor: COLOR.TINT_COLOR, justifyContent: 'center', alignItems: 'center'}}>
                            <Svg width={12} height={9}>
                                <Path d="M0 4.88285L4.10933 9L12 1.11716L10.8672 0L4.10933 6.74996L1.11715 3.75782L0 4.88285Z" fill="white"/>
                            </Svg>
                        </View> : null }
                      </View>
                      <View style={[{ width: '100%'}]}>
                        <Text style={{fontSize: 16, color: COLOR.BLACK}}>{el.title}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                  )
                })}
        </View>
    )
}