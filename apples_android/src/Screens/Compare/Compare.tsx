import React from 'react';
import {View, Text, ScrollView, Image, Switch, TouchableHighlight} from 'react-native';
import { commonstyles } from '../../common/styles';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { COLOR } from '../../common/colors';
import { ShoppingCardIcon, HeartEmptyIcon } from '../../Components/Icons/Icons';
import Svg, { Path } from 'react-native-svg';
import { Navigation, Route } from '../../common/types';


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
    }],
    title: string;
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
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{paddingVertical: 16}}>
          <CompareConsist items={this.props.route.params.items}/>
          <View style={{marginBottom: 20,flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: COLOR.GRAY}}>
            <Text style={{fontSize: 14, fontFamily: 'Roboto-Medium', color: COLOR.BLACK}}>Только отличия</Text>
            <Switch value={true} trackColor={{ true: 'rgba(52, 198, 120, .5);', false: COLOR.TEXT_GRAY }} thumbColor={`${true ? COLOR.LIGHT_GREEN: COLOR.WHITE}`}></Switch>
          </View>
          <CompareItemList items={this.props.route.params.compareItems}/>
        </View>
      </ScrollView>
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
                  <View style={{paddingHorizontal: 16}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: COLOR.BLACK}}>{el.optionTitle}</Text>
                  </View>
                  <View style={{marginTop: 15, backgroundColor: COLOR.WHITE, elevation: 2, marginBottom: 20, borderRadius: 2 }}>
                    { el.option.map((currentItem, index) => (
                      <View style={[index !== el.option.length - 1 ? {borderBottomWidth: 1, borderBottomColor: COLOR.GRAY} : {}]}>
                        <CompareItem item={currentItem}/>
                      </View>
                    ))}
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
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingVertical: 16, paddingHorizontal: 20}]}>
      <View style={{width: '20%',}}>
        <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
      </View>
      <View style={{width: '40%'}}>
        <Text style={{color: '#828282', fontSize: 12}}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={{fontSize: 14, color: COLOR.BLACK, fontFamily: 'Roboto-Medium'}}>{item.price}</Text>
        </View>
      </View>
      <View style={{width: '40%',}}>
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

const CompareConsist:React.FC<CompareConsistProps> = ({ items }) => {
  return(
    <View>
      {
        items.map((el, index) => (
          <CompareConsistItem item={el}/>
        ))
      }
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
  // const [liked, setLiked] = useState(false);
  // const [bag, setBag] = useState(false);
  // let newState;

  // const likedHandler = useCallback(
  //     (e) => {
  //         if (liked) {
  //             newState = false;
  //         } else {
  //             Alert.alert('Добавлен в избранное', 'Товар добавлен в избранное и находится в разделе Ещё > Избранное',[{}], {});
  //             newState = true
  //         }
  //         setLiked(newState);
  //     }, [liked]
  // );

  // const bagHandler = useCallback(
  //     (e) => {
  //         if (bag) {
  //             newState = false;
  //         } else {
  //             newState = true;
  //             ActionSheetIOS.showActionSheetWithOptions({
  //                 title: 'Товар добавлен в корзину, теперь можно:',
  //                 options: ['Продолжить покупки','Оформить покупку','Перейти в корзину', 'Быстрая покупка'],
  //                 cancelButtonIndex: 0,
  //                 tintColor: Colors.lightGreen
  //             },
  //             (index) => { console.log(index) });
  //         }
  //         setBag(newState);
  //     }, [bag]
  // )

  // const deleteCompareItemHandler = (e: any) => {
  //     ActionSheetIOS.showActionSheetWithOptions({
  //         options: ['Отмена','Удалить из сравнения'],
  //         cancelButtonIndex: 0,
  //         tintColor: Colors.lightGreen
  //     },
  //     (index) => { console.log(index)});
  // }

  return(
    <View style={[{ elevation: 2, backgroundColor: COLOR.WHITE}, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'relative', paddingVertical: 16, paddingHorizontal: 20, marginBottom: 10 }]}>
      <View style={{position: 'absolute', right: 16, top: 16}}>
        <AntDesign name="close" color={COLOR.TEXT_GRAY} size={20}/>
      </View>
      <View style={{width: '25%',}}>
        <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
      </View>
      <View style={{width: '75%'}}>
        <Text style={{fontFamily: 'Roboto-Medium',fontWeight: '500', color: COLOR.BLACK}}>{item.title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
          <Text style={{width: '60%',fontSize: 16, color: COLOR.LIGHT_GREEN, fontFamily: 'Roboto-Medium'}}>{item.price}</Text>
          <TouchableHighlight>
            <Svg width={28} height={25}>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.9176 24.5918C13.2171 24.8551 13.6014 25 14 25C14.3984 25 14.7829 24.8551 15.0822 24.5922C16.2159 23.5973 17.3082 22.663 18.272 21.8389L18.2725 21.8385C21.0927 19.4264 23.5283 17.3433 25.2231 15.2909C27.1177 12.9967 28 10.8214 28 8.44489C28 6.13595 27.2113 4.00581 25.779 2.44657C24.3295 0.868907 22.3405 0 20.1782 0C18.5619 0 17.0817 0.512812 15.7788 1.52407C15.1211 2.03452 14.5253 2.65925 14 3.38794C13.4749 2.65925 12.8789 2.03452 12.2214 1.52407C10.9185 0.512812 9.43829 0 7.82202 0C5.65952 0 3.67068 0.868907 2.22125 2.44657C0.78891 4.00581 0 6.13595 0 8.44489C0 10.8214 0.882477 12.9967 2.7771 15.2911C4.47198 17.3434 6.90793 19.4268 9.72882 21.8393L9.73373 21.8436C10.6959 22.6664 11.7864 23.5992 12.9176 24.5918ZM3.42889 3.5623C4.5643 2.32658 6.12503 1.64612 7.82398 1.64612C9.06833 1.64612 10.211 2.04316 11.2199 2.8261C12.1193 3.52414 12.7456 4.40655 13.1126 5.02399C13.3015 5.34149 13.6339 5.53101 14.002 5.53101C14.37 5.53101 14.7024 5.34149 14.8913 5.02399C15.2585 4.40655 15.8848 3.52414 16.784 2.8261C17.7929 2.04316 18.9356 1.64612 20.1801 1.64612C21.8789 1.64612 23.4398 2.32658 24.575 3.5623C25.7273 4.81668 26.362 6.55063 26.362 8.44495C26.362 10.4437 25.6218 12.2312 23.9623 14.2409C22.3597 16.1817 19.9768 18.2198 17.2177 20.5799L17.2101 20.5863C16.2424 21.4136 15.1459 22.3515 13.9996 23.3534C12.8601 22.3535 11.7653 21.417 10.7995 20.591L10.7944 20.5867L10.7928 20.5853C8.0309 18.2232 5.64556 16.1831 4.04178 14.2409C2.38214 12.2312 1.64194 10.4437 1.64194 8.44495C1.64194 6.55063 2.27661 4.81668 3.42889 3.5623Z" fill="#A8A8A8"/>
            </Svg>
          </TouchableHighlight>
          <ShoppingCardIcon width={25} height={25} color={COLOR.TEXT_GRAY}/>
        </View>
      </View>
    </View>
  )
}