import React from 'react';
import { View, Animated, Easing, TouchableHighlight, Text } from "react-native";
import { ArrowBottom, ArrowTop } from '../Icons/Icons';
import Colors from '../../constants/Colors';

export interface IDropDownProps {
}
  
interface IDropDownState {
    show: boolean;
}

export class DropDown extends React.Component<IDropDownProps, IDropDownState> {
    animatedValue: any;  
    constructor(props: IDropDownProps){
      super(props);
  
      this.state = {
        show: false
      }
    }
  
    UNSAFE_componentWillMount(){
      this.animatedValue = new Animated.Value(0);
    }
  
    componentDidMount(){
      
    }
  
    pressHandler = (e:any) => {
      const { show } = this.state;
      if(show) {
        this.hideContent();
        this.setState({
          show: false
        })
      } else {
        this.showContent();
        this.setState({
          show: true
        })
      }
    } 
    
    showContent = () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start()
    }
  
    hideContent = () => {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease
      }).start()
    }
    
    render() {
      const {  children} = this.props;
  
      const animatedStyle = { maxHeight: this.animatedValue.interpolate({
        inputRange: [0,1],
        outputRange: [220, 1000]
      }), overflow: 'hidden'}
  
      return(
        <View>
            <Animated.View style={animatedStyle}>
                {children}
            </Animated.View>
            <View>
                <TouchableHighlight underlayColor={'transparent'} onPress={this.pressHandler}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12}}>
                        <View style={{width: 22, height: 22, justifyContent: 'center', alignItems: 'center', marginRight: 20}}>
                            {
                                this.state.show ? <ArrowTop width={12} height={7} color={Colors.lightGreen}/> : <ArrowBottom width={12} height={7} color={Colors.lightGreen}/>
                            }
                        </View>
                          <Text style={{fontWeight: '500', fontSize: 16, color: Colors.lightGreen}}>{this.state.show ? "Свернуть" : "Показать все"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
      )
    }
  }