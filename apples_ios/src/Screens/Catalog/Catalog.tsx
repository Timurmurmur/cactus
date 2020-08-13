import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { catalog } from '../Home/Home';
import { CatalogItem } from './CatalogItem';
import { COLOR } from '../../common/color';
import { Route, Navigation } from '../../common/types';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';

interface ICatalogProps {
    navigation: Navigation;
    route: Route;
}

export const Catalog: React.FC<ICatalogProps> = ({ navigation, route }) => {
    const pressHandler = (e: any, title: string) => {
        navigation.navigate('CatalogItemList', { title });
    }

    return(
        <>
        <Header navigation={navigation} route={route} config={{back: false, title: 'Каталог', type: 'DEFAULT', basket: true}}/>
        <ScrollView style={{backgroundColor: COLOR.BACKGROUND,}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16}}>
                {
                    catalog.map((el, index) => (
                        <View key={index} onTouchStart={e => pressHandler(e, el.name)} style={{width: '30%', backgroundColor: COLOR.WHITE, height: 143, borderRadius: 3, marginBottom: 16, justifyContent: 'center', alignItems: 'center'}}>
                            <CatalogItem {...el} key={index}/>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
        </>
    )
}