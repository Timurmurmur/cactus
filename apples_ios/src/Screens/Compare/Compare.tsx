import React, { useState, useCallback } from 'react';
import {View, Text, ScrollView, Image, Switch, TouchableHighlight, Alert, ActionSheetIOS} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { ShoppingCardIcon, HeartEmptyIcon, HeartIcon, CheckIcon, ArrowLeft } from '../../components/Icons/Icons';
import Svg, { Path } from 'react-native-svg';
import { Navigation, Route } from '../../common/types';
import { COLOR } from '../../common/color';
import { Header } from '../../components/Header/Header';

interface ICompareRoute extends Route {
    params: {
        items: [
            {
                title: string;
                price: string;
                image: {
                    src: any;
                    width: number;
                    height: number
                };
            }
        ],
        compareItems: [{
            optionTitle: string;
            option: [
                {
                    title: string;
                    price: string;
                    option: string;
                    image: {
                        src: any;
                        width: number;
                        height: number
                    };
                }
            ]
        }]
    }
}

export interface ICompareProps {
    navigation: Navigation;
    route: ICompareRoute;
}
interface ICompareState {}

export class Compare extends React.Component<ICompareProps, ICompareState> {
  constructor(props: ICompareProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
    <>
    <View style={[{backgroundColor: COLOR.WHITE, paddingHorizontal: 16, paddingVertical: 10, position: 'relative', justifyContent: 'space-between',}, { height: 60 }]}>
        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
            <View style={{width: 70 }}>
              <ArrowLeft width={11} height={22} color={COLOR.BLACK} underlayColor={COLOR.WHITE} onPress={(e) => { this.props.navigation.goBack() }}/>
            </View>
            <View  style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: '300', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase', color: COLOR.BLACK}}>{'IPhONE'}</Text>
            </View>
            <View style={{width: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: 30, justifyContent: 'center'}}>
                    <TouchableHighlight>
                        <Svg width="20" height="20" viewBox="0 0 21 21" fill="none">
                            <Path d="M0.742387 11.2473C0.328762 11.2473 0 10.9081 0 10.4947C0 10.0813 0.328762 9.75267 0.742387 9.75267H9.74659V0.752671C9.74726 0.33927 10.0867 0 10.5003 0C10.914 0 11.2427 0.33927 11.2427 0.752671V9.75267H20.2469C20.6605 9.75267 21 10.0813 21 10.4947C21 10.9081 20.6605 11.2473 20.2469 11.2473H11.2427V20.2473C11.2427 20.6607 10.914 21 10.5003 21C10.0867 21 9.74726 20.6607 9.74726 20.2473V11.2473H0.742387Z" fill="#3A3A3C"/>
                        </Svg>
                    </TouchableHighlight>
                </View>
                <View style={{ width: 30, justifyContent: 'center' }} onTouchStart={e => this.props.navigation.navigate('Basket')}>
                <ShoppingCardIcon width={25} height={24} color={COLOR.BLACK}/>
                    <View style={{position: 'absolute',backgroundColor: COLOR.TINT_COLOR, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: 0}}>
                    <Text style={{fontSize: 10, color: COLOR.WHITE, fontWeight: 'bold'}}>3</Text>
                </View>
                </View>
            </View>
        </View>
    </View>
    <ScrollView style={{backgroundColor: COLOR.BACKGROUND}}>
    <View style={{paddingTop: 16, paddingRight: 16}}>
        <CompareConsist items={this.props.route.params.items}/>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB', marginLeft: 16}}>
            <Text style={{fontSize: 16, color: COLOR.BLACK }}>Только отличия</Text>
            <Switch value={true} trackColor={{ false: COLOR.WHITE, true: '#34C678' }} ></Switch>
        </View>
    </View>
    <View style={{paddingBottom: 16}}>
        <CompareItemList items={this.props.route.params.compareItems}/>
    </View>
    </ScrollView>
    </>
    )
  }
}

interface ICompareItemListProps {
    items: [{
        optionTitle: string;
        option: [
            {
                title: string;
                price: string;
                option: string;
                image: {
                    src: any;
                    width: number;
                    height: number
                };
            }
        ]
    }]
}

const CompareItemList: React.FC<ICompareItemListProps> = ({ items }) => {
    return(
        <View style={{}}>
            { items.map((el, index) => {
                return(
                    <>
                    <View style={{paddingHorizontal: 16, paddingTop: 15}}>
                        <Text style={{fontSize: 16, fontWeight: '600', color: COLOR.BLACK}}>{el.optionTitle}</Text>
                    </View>
                    <View style={{marginTop: 8, backgroundColor: COLOR.WHITE, paddingLeft: 16 }}>
                        {el.option.map((el, index) => {
                            return(
                                <View style={[index !== items.length - 1 ? {borderBottomWidth: .5, borderBottomColor: '#EBEBEB'} : {}]}>
                                    <CompareItem item={el}/>
                                </View>
                            )
                        })}
                    </View>
                    </>
                )
            })}
        </View>
    )
}

interface ICompareItemProps {
    item: {
        title: string;
        price: string;
        option: string;
        image: {
            src: any;
            width: number;
            height: number
        };
    }
}

const CompareItem: React.FC<ICompareItemProps> = ({ item }) => {
    return(
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingVertical: 15, paddingRight: 16 }]}>
            <View style={{width: 50,}}>
                <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
            </View>
            <View style={{width: '40%'}}>
                <Text style={{color: COLOR.GRAY, fontSize: 12,}}>{item.title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{fontSize: 14, color: COLOR.BLACK,}}>{item.price}</Text>
            </View>
            </View>
            <View style={{width: '40%'}}>
                <Text style={{fontSize: 12, color: COLOR.BLACK}}>{item.option}</Text>
            </View>
        </View>
    )
}

interface CompareConsistProps {
    items: [
        {
            title: string;
            price: string;
            image: {
                src: any;
                width: number;
                height: number
            };
        }
    ],
}

const CompareConsist: React.FC<CompareConsistProps> = ({ items }) => {
    return(
        <View style={{paddingLeft: 16, backgroundColor: COLOR.WHITE}}>
            { items.map((el, index: number) => {
                return(
                    <View style={[index !== items.length - 1 ? {borderBottomWidth: .5, borderBottomColor: '#EBEBEB'} : {}]}>
                        <CompareConsistItem item={el}/>
                    </View>
                )
            })}
        </View>
    )
}

interface CompareConsistItemProps {
    item: {
        title: string;
        price: string;
        image: {
            src: any;
            width: number;
            height: number
        };
    }
}

const CompareConsistItem:React.FC<CompareConsistItemProps> = ({ item }) => {
    const [liked, setLiked] = useState(false);
    const [bag, setBag] = useState(false);
    let newState;

    const likedHandler = useCallback(
        (e) => {
            if (liked) {
                newState = false;
            } else {
                Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе Ещё > Избранное',[{}], {});
                newState = true
            }
            setLiked(newState);
        }, [liked]
    );

    const bagHandler = useCallback(
        (e) => {
            if (bag) {
                newState = false;
            } else {
                newState = true;
                ActionSheetIOS.showActionSheetWithOptions({
                    title: 'Товар добавлен в корзину, теперь можно:',
                    options: ['Продолжить покупки','Оформить покупку','Перейти в корзину', 'Быстрая покупка'],
                    cancelButtonIndex: 0,
                    tintColor: COLOR.TINT_COLOR
                },
                (index) => { console.log(index) });
            }
            setBag(newState);
        }, [bag]
    )

    const deleteCompareItemHandler = (e: any) => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: ['Отмена','Удалить из сравнения'],
            cancelButtonIndex: 0,
            tintColor: COLOR.TINT_COLOR
        },
        (index) => { console.log(index)});
    }

    return(
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingVertical: 15, paddingRight: 16 }]}>
            
            <View style={{width: '25%',}}>
                <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
            </View>
            <View style={{width: '75%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 14, color: COLOR.BLACK}}>{item.title}</Text>
                <View style={{width: 16, height: 16,}}>
                    <TouchableHighlight underlayColor={COLOR.WHITE} style={{justifyContent: 'center', alignItems: 'center'}} onPress={deleteCompareItemHandler}>
                        <AntDesign name="close" color={'#A8A8A8'} size={20}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{width: '60%',fontSize: 16, color: COLOR.TINT_COLOR }}>{item.price}</Text>
                <View style={{width: 31}} onTouchStart={likedHandler}>
                <TouchableHighlight underlayColor={COLOR.WHITE}>
                    <View style={{width: 31}}>
                    <HeartIcon underlayColor={COLOR.WHITE} width={25} height={23} color={liked ? '#EB5757' : COLOR.GRAY}/>
                    { liked ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={'#EB5757'}/></View> : null}
                    </View>
                </TouchableHighlight>
                </View>
                <View style={{width: 31}} onTouchStart={bagHandler}>
                <TouchableHighlight underlayColor={COLOR.WHITE}>
                    <View style={{width: 31}}>
                    <ShoppingCardIcon width={25} height={24} color={bag ? COLOR.TINT_COLOR : COLOR.GRAY}/>
                    { bag ? <View style={{position: 'absolute', right: 0, bottom: 0}}><CheckIcon width={16} height={16} color={COLOR.TINT_COLOR}/></View> : null}
                    </View>
                </TouchableHighlight>
                </View>
            </View>
            </View>
        </View>
    )
}