import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { Navigation, Route } from '../../common/types';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { StackHeader } from '../../Components/Header/StackHeader';
import { Button } from '../../Components/Button/Button';
import { commonstyles } from '../../common/styles';
import { LinearGradient } from 'expo-linear-gradient';

export interface INotificationProps {
  navigation: Navigation;
  route: Route;
}
interface INotificationState {}

export class Notification extends React.Component<INotificationProps, INotificationState> {
  constructor(props: INotificationProps){
    super(props);

    this.state = {}
  }

  render() {
    const exact = true;

    return(
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <StackHeader title={'Уведомления'} {...this.props}/>
        { exact ? 
        <View style={{paddingVertical: 16}}>
          <View style={[{ elevation: 3, backgroundColor: COLOR.WHITE}, { padding: 16, marginBottom: 16, position: 'relative' }]}>
          <View style={{position: 'absolute', right: 16, top: 16}}>
            <AntDesign name="close" size={25} color={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
              <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
            </View>
            <View>
              <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12, marginLeft: 10}}>22.02.2020 15:12</Text>
            </View>
          </View>
          <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, flexDirection: 'row'}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
              <View style={{width: '100%', padding: 10}}>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
                <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
              </View>
            </LinearGradient>
            <View style={{paddingHorizontal: 15, width: '80%'}}>
              <View>
                <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium', marginBottom: 10}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
                <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый...</Text>
              </View>
            </View>
          </View>
          </View>
          <View style={[{ elevation: 3, backgroundColor: COLOR.WHITE}, { padding: 16, marginBottom: 16, position: 'relative' }]}>
          <View style={{position: 'absolute', right: 16, top: 16}}>
            <AntDesign name="close" size={25} color={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
              <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
            </View>
            <View>
              <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12, marginLeft: 10}}>22.02.2020 15:12</Text>
            </View>
          </View>
          <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, flexDirection: 'row'}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
              <View style={{width: '100%', padding: 10}}>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
                <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
              </View>
            </LinearGradient>
            <View style={{paddingHorizontal: 15, width: '80%'}}>
              <View>
                <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium', marginBottom: 10}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
                <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый...</Text>
              </View>
            </View>
          </View>
          </View>
          <View style={[{ elevation: 3, backgroundColor: COLOR.WHITE}, { padding: 16, marginBottom: 16, position: 'relative' }]}>
          <View style={{position: 'absolute', right: 16, top: 16}}>
            <AntDesign name="close" size={25} color={COLOR.TEXT_GRAY}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 20, height: 20, backgroundColor: COLOR.ORANGE, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginRight: 15}}><Text style={{color: COLOR.WHITE, fontWeight: 'bold'}}>%</Text></View>
              <View style={{padding: 8, backgroundColor: COLOR.LIGHT_GREEN, borderRadius: 3}}><Text style={{color: COLOR.WHITE, fontSize: 10}}>СКИДКА</Text></View>
            </View>
            <View>
              <Text style={{color: COLOR.TEXT_GRAY, fontSize: 12, marginLeft: 10}}>22.02.2020 15:12</Text>
            </View>
          </View>
          <View style={[{backgroundColor: COLOR.WHITE, borderRadius: 2, flexDirection: 'row'}]}>
            <LinearGradient colors={['#FF7C0A', '#EABD60']} style={{height: 80}}>
              <View style={{width: '100%', padding: 10}}>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE, marginBottom: 10}}>Лучшая цена! </Text>
                <Text style={{fontSize: 8,fontWeight: 'bold', color: COLOR.WHITE}}><FontAwesome name="apple" size={15}/>  iPhone 11</Text>
                <Text style={{fontSize: 8, fontWeight: 'bold', color: COLOR.WHITE}}>от 19 949 грн</Text>
              </View>
            </LinearGradient>
            <View style={{paddingHorizontal: 15, width: '80%'}}>
              <View>
                <Text style={{color: COLOR.BLACK, fontSize: 16, fontFamily: 'Roboto-Medium', marginBottom: 10}}>Успей приобрести новый iPhone 11 по выгодной цене</Text>
                <Text style={{color: '#828282'}}>Успей приобрести новый iPhone 11 по супер выгодной цене. Самый...</Text>
              </View>
            </View>
          </View>
          </View>
          
        </View>
        : 
        <View>
        <View style={{paddingTop: 60, paddingBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="notifications" size={120} color={COLOR.TEXT_GRAY}/>
        </View>
        <View style={{paddingHorizontal: 40}}>
          <Text style={{textAlign: 'center', color: COLOR.TEXT_GRAY}}>Для того, чтобы получать уведомления, активируйте их</Text>
        </View>
        <View style={{paddingHorizontal: 16, marginTop: 200}}>
          <Button styles={{backgroundColor: COLOR.GREEN}} title="Активировать" textStyle={{textTransform: 'uppercase', color: COLOR.WHITE}}></Button>
        </View>
      </View>}
      </ScrollView>
    )
  }
}