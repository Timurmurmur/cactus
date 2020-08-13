import React, { useState, useCallback } from 'react';
import {View, Text, ScrollView, Image, Switch, TouchableHighlight, Alert, ActionSheetIOS} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { ShoppingCardIcon, HeartEmptyIcon, HeartIcon, ArrowLeft } from '../../Components/Icons/Icons';
import Svg, { Path, Rect } from 'react-native-svg';
import Colors from '../../constants/Colors';
import { Navigation, Route } from '../../common/types';
import { SmallHeader } from '../../Components/Header/SmallHeader';

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
    <View style={{height: 60, backgroundColor: Colors.green, paddingHorizontal: 16, position: 'relative', justifyContent: 'space-between'}}>
            <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
                <View style={{width: 67}}>
                    <ArrowLeft underlayColor={Colors.green} onPress={e => this.props.navigation.goBack() } width={11} height={20} color="#fff"/>
                </View>
                <View style={{}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff',  textAlign: 'center' }}>Смартфоны</Text>
                </View>
                <View style={{flexDirection: 'row', width: 67, justifyContent: 'space-between'}}>
                    <View style={{width: 21}}>
                    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <Rect x="9" width="3" height="21" rx="1.5" fill="white"/>
                        <Rect x="21" y="9" width="3" height="21" rx="1.5" transform="rotate(90 21 9)" fill="white"/>
                    </Svg>
                    </View>
                <View style={{ width: 24 }} onTouchStart={e => this.props.navigation.navigate('Basket')}>
                    <ShoppingCardIcon width={24} height={24} color={Colors.white}/>
                    <View style={{position: 'absolute',backgroundColor: Colors.noticeBackground, width: 17, height: 17,borderRadius: 50, justifyContent: 'center', alignItems: 'center', zIndex: 80, bottom: -5, right: -5}}>
                        <Text style={{fontSize: 10, color: Colors.noticeText, fontWeight: 'bold'}}>3</Text>
                    </View>
                </View>
                </View>
            </View>
        </View>
    <ScrollView style={{backgroundColor: '#F7F7F7'}}>
    <View style={{paddingVertical: 16}}>
        <CompareConsist items={this.props.route.params.items}/>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingRight: 16, paddingVertical: 15, borderBottomWidth: .5, borderBottomColor: '#EBEBEB', marginLeft: 16}}>
            <Text style={{fontSize: 16, color: Colors.black, fontWeight: '500'}}>Только отличия</Text>
            <Switch value={true} trackColor={{ false: Colors.white, true: '#34C678' }} ></Switch>
        </View>
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
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: Colors.black}}>{el.optionTitle}</Text>
                    </View>
                    <View style={{marginTop: 8, backgroundColor: Colors.white, paddingLeft: 16 }}>
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
                <Text style={{color: Colors.gray, fontSize: 12, fontWeight: '500'}}>{item.title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{fontSize: 14, color: Colors.black, fontWeight: '500'}}>{item.price}</Text>
            </View>
            </View>
            <View style={{width: '40%'}}>
                <Text style={{fontSize: 12, color: Colors.black}}>{item.option}</Text>
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
        <View style={{paddingLeft: 16, backgroundColor: Colors.white}}>
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
                    tintColor: Colors.lightGreen
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
            tintColor: Colors.lightGreen
        },
        (index) => { console.log(index)});
    }

    return(
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingVertical: 15, paddingRight: 16 }]}>
            <View style={{}}>
                <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
            </View>
            <View style={{width: '77%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: Colors.black}}>{item.title}</Text>
                <View style={{width: 16, height: 16,}}>
                    <TouchableHighlight underlayColor={Colors.white} style={{justifyContent: 'center', alignItems: 'center'}} onPress={deleteCompareItemHandler}>
                        <AntDesign name="close" color={'#A8A8A8'} size={20}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{width: '60%',fontSize: 16, color: Colors.lightGreen, fontWeight: '500'}}>{item.price}</Text>
                <TouchableHighlight onPress={likedHandler} underlayColor={Colors.white}>
                    { liked ? 
                    <Svg width={28} height={25}>
                        <Path d="M25.7787 2.44657C24.3293 0.868907 22.3405 0 20.1782 0C18.5619 0 17.0817 0.512812 15.7786 1.52407C15.1211 2.03452 14.5253 2.65903 14 3.38794C13.4749 2.65925 12.8789 2.03452 12.2212 1.52407C10.9183 0.512812 9.43808 0 7.82181 0C5.65952 0 3.67047 0.868907 2.22104 2.44657C0.78891 4.00581 0 6.13595 0 8.44489C0 10.8214 0.882477 12.9967 2.7771 15.2911C4.47198 17.3434 6.90793 19.4268 9.72882 21.8393C10.692 22.6632 11.7839 23.5971 12.9176 24.5918C13.2171 24.8551 13.6014 25 14 25C14.3984 25 14.7829 24.8551 15.082 24.5922C16.2157 23.5973 17.3082 22.663 18.2718 21.8387C21.0923 19.4266 23.5282 17.3434 25.2231 15.2909C27.1177 12.9967 28 10.8214 28 8.44467C28 6.13595 27.2111 4.00581 25.7787 2.44657Z" fill={Colors.tintColor}/>
                    </Svg>
                    : 
                    <Svg width={28} height={25}>
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.9176 24.5918C13.2171 24.8551 13.6014 25 14 25C14.3984 25 14.7829 24.8551 15.0822 24.5922C16.2159 23.5973 17.3082 22.663 18.272 21.8389L18.2725 21.8385C21.0927 19.4264 23.5283 17.3433 25.2231 15.2909C27.1177 12.9967 28 10.8214 28 8.44489C28 6.13595 27.2113 4.00581 25.779 2.44657C24.3295 0.868907 22.3405 0 20.1782 0C18.5619 0 17.0817 0.512812 15.7788 1.52407C15.1211 2.03452 14.5253 2.65925 14 3.38794C13.4749 2.65925 12.8789 2.03452 12.2214 1.52407C10.9185 0.512812 9.43829 0 7.82202 0C5.65952 0 3.67068 0.868907 2.22125 2.44657C0.78891 4.00581 0 6.13595 0 8.44489C0 10.8214 0.882477 12.9967 2.7771 15.2911C4.47198 17.3434 6.90793 19.4268 9.72882 21.8393L9.73373 21.8436C10.6959 22.6664 11.7864 23.5992 12.9176 24.5918ZM3.42889 3.5623C4.5643 2.32658 6.12503 1.64612 7.82398 1.64612C9.06833 1.64612 10.211 2.04316 11.2199 2.8261C12.1193 3.52414 12.7456 4.40655 13.1126 5.02399C13.3015 5.34149 13.6339 5.53101 14.002 5.53101C14.37 5.53101 14.7024 5.34149 14.8913 5.02399C15.2585 4.40655 15.8848 3.52414 16.784 2.8261C17.7929 2.04316 18.9356 1.64612 20.1801 1.64612C21.8789 1.64612 23.4398 2.32658 24.575 3.5623C25.7273 4.81668 26.362 6.55063 26.362 8.44495C26.362 10.4437 25.6218 12.2312 23.9623 14.2409C22.3597 16.1817 19.9768 18.2198 17.2177 20.5799L17.2101 20.5863C16.2424 21.4136 15.1459 22.3515 13.9996 23.3534C12.8601 22.3535 11.7653 21.417 10.7995 20.591L10.7944 20.5867L10.7928 20.5853C8.0309 18.2232 5.64556 16.1831 4.04178 14.2409C2.38214 12.2312 1.64194 10.4437 1.64194 8.44495C1.64194 6.55063 2.27661 4.81668 3.42889 3.5623Z" fill={"#A1A1A1"}/>
                    </Svg>
                    }
                </TouchableHighlight>
                <ShoppingCardIcon onPress={bagHandler} underlayColor={Colors.white} width={25} height={25} color={bag ? Colors.lightGreen: '#A8A8A8'}/>
            </View>
            </View>
        </View>
    )
}