import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../constants/Colors';
import { CloseIcon, ShoppingCardIcon, ArrowLeft } from '../Icons/Icons';
import { RootNavigationContext } from '../Navigation/Navigation';
import { Navigation, Route } from '../../common/types';

interface ISmallHeaderProps {
    title: string;
    logo: any;
    back: boolean;
    navigation: Navigation;
    route: Route;
}

export const SmallHeader:React.FC<ISmallHeaderProps> = ({ title, logo, back, navigation, route }) => {
    const RootContext = useContext(RootNavigationContext);
   return(
    <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
                <View style={{width: 24}}>
                    { !back ? null :  <ArrowLeft underlayColor={Colors.green} onPress={e => navigation.goBack() } width={11} height={20} color="#fff"/>}
                </View>
                <View style={{alignItems: 'center'}}>
                    { logo ? 
                    logo
                    : <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff',  textAlign: 'center' }}>
                    { title }
                </Text>}
                </View>
                <View style={{ width: 24 }} onTouchStart={e => RootContext.navigation.navigate('Basket')}>
                    <ShoppingCardIcon width={24} height={24} color={Colors.white}/>
                    <View style={{position: 'absolute',backgroundColor: Colors.noticeBackground, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: -5}}>
                        <Text style={{fontSize: 10, color: Colors.noticeText, fontWeight: 'bold'}}>3</Text>
                    </View>
                </View>
            </View>
        </View>
   )
}
