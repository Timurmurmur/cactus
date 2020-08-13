import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, ScrollView } from 'react-native';
import { CatalogItem } from '../Catalog/CatalogItem';
import { COLOR } from '../../common/color';
import { UPDATE_HEADER_CONFIG } from '../../components/Header/actions';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';

interface ICatalogItemListRouteProps extends Route{
    params: {
        title: string;
        items: [
            {
                name: string;
                image: {
                    src: string;
                    width: number;
                    height: number;
                }
            }
        ]
    }
}

interface ICatalogItemListProps {
    navigation: Navigation;
    route: ICatalogItemListRouteProps;
}

export const CatalogItemList:React.FC<ICatalogItemListProps> = ({ route, navigation }) => {
    const pressHandler = (e: any, title: string) => {
        navigation.navigate('ProductList', { title });
    }
    return(
        <>
        <Header navigation={navigation} route={route} config={{back: true, title: route.params.title, type: 'DEFAULT', basket: true}}/>
        <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16}}>
            {
                route.params.items.map((el, index) => (
                    <View key={index} onTouchStart={e => pressHandler(e, el.name)} style={{width: '30%', backgroundColor: COLOR.WHITE, height: 143, borderRadius: 3, marginBottom: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <CatalogItem {...el}/>
                    </View>
                ))
            }
            </View>
        </ScrollView>
        </>
    )
}