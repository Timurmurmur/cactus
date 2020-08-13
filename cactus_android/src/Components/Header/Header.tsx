import React, { useContext } from 'react';
import { View, Image, Text, ColorPropType } from 'react-native';
import colors from '../../constants/Colors';
import { Logo, ShoppingCardIcon, ArrowLeft } from '../Icons/Icons';
import {Search} from '../Search/Search';
import { RootNavigationContext } from '../Navigation/Navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Navigation, Route } from '../../common/types';


interface IHeaderProps {
    logo?: any;
    title?: string;
    back: boolean;
    navigation: Navigation;
    route: Route;
}

export const Header:React.FC<IHeaderProps> = ({ logo, title, back, navigation, route }) => {
    const RootContext = useContext(RootNavigationContext);

    return(
        <View style={{height: 109, backgroundColor: colors.green, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '50%',}}>
                <View style={{width: 24 }}>
                    { back ? <ArrowLeft width={11} height={22} color={Colors.white} underlayColor={Colors.green} onPress={(e) => { navigation.goBack() }}/>: null}
                </View>
                <View style={{}}>
                    { logo ? 
                        logo
                    : <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff', }}>
                        { title }
                    </Text>}
                </View>
                <View style={{ width: 24 }} onTouchStart={e => RootContext.navigation.navigate('Basket')}>
                    <ShoppingCardIcon width={24} height={24} color={colors.white}/>
                    <View style={{position: 'absolute',backgroundColor: colors.noticeBackground, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: -5}}>
                        <Text style={{fontSize: 10, color: colors.noticeText, fontWeight: 'bold'}}>3</Text>
                    </View>
                </View>
            </View>
            <View style={{}}>
                <Search />
            </View>
        </View>
    )
}