// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';
// import { Compare } from '../CompareList/CompareList';
// import { News } from '../News/News';
// import { Settings } from '../Settings/Settings';
// import { Notification } from '../Notification/Notification';
// import { COLOR } from '../../common/colors';
// import { Icons } from '../../common/icons';
// import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { Navigation, Route } from '../../common/types';


// export interface ICatalogItemListProps {
//   navigation: Navigation;
//   route: Route;
// }
// interface ICatalogItemListState {}

// export class CatalogItemList extends React.Component<ICatalogItemListProps, ICatalogItemListState> {
//   constructor(props: ICatalogItemListProps){
//     super(props);

//     this.state = {}
//   }

//   catalogListNavigationHandler = (e: any, title: string) => {
//     this.props.navigation.navigate("CatalogItem", { title })
//   }

//   render() {
//     return(
//       <ScrollView style={{backgroundColor: COLOR.WHITE}}>
//         <View style={{padding: 16}}>
//         <View>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Apple")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Apple</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Xiaomi")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Xiaomi</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Meizu")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Meizu</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Apple")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Samsung</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "OnePlus")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>OnePlus</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Huawei")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Huawei</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Doogee")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Doogee</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Vernee")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Vernee</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Google Pixel")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Google Pixel</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Honor")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Honor</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Картфоны AEKU")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Картфоны AEKU</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//           <TouchableHighlight style={catalogItemStyle.catalogButton}  underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Sony Xperia")}>
//             <View style={catalogItemStyle.catalogContainer}>
//               <View style={catalogItemStyle.catalogImage}>
//                 {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
//                 <FontAwesome name="apple" size={30}/>
//               </View>
//               <View style={{}}>
//                 <Text style={catalogItemStyle.catalogText}>Sony Xperia</Text>
//               </View>
//               <View style={{position: 'absolute', right: 0}}>
//                 <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
//               </View>
//             </View>
//           </TouchableHighlight>
//         </View>
//       </View>
//       </ScrollView>
//     )
//   }
// }

// const catalogItemStyle = StyleSheet.create({
//   catalogContainer: {marginRight: 22, flexDirection: 'row', alignItems: 'center',  position: 'relative', width: '100%'},
//   catalogImage: {width: 47, height: 47, justifyContent: 'center', alignItems: 'center'},
//   catalogText: {fontSize: 14, textAlign: "center", marginLeft: 10, color: COLOR.BLACK,},
//   catalogButton: { marginBottom: 10, borderRadius: 7 }
// })
import React from 'react';
import { Navigation, Route } from '../../common/types';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import { CatalogItem } from '../CatalogItem/CatalogItem';
import { COLOR } from '../../common/colors';
// import { UPDATE_HEADER_CONFIG } from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
// import { Header } from '../../components/Header/Header';

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
        navigation.navigate('CatalogItem', { title });
    }
    return(
        <>
        {/* <TouchableHighlight style={CatalogItemList.catalogButton} underlayColor={COLOR.GRAY} onPress={(e: any) => this.catalogListNavigationHandler(e, "Apple")}></TouchableHighlight> */}

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