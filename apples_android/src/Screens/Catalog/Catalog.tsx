import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { COLOR } from '../../common/colors';
import { Icons } from '../../common/icons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation, Route } from '../../common/types';

interface ICatalogRouteProps extends Route{
  params: {
    title: string;
    items: [
      {
        title: string;
        image: {
          src: any,
          width: number,
          height: number;
        }
      }
    ]
  }
}

export interface ICatalogProps {
  navigation: Navigation;
  route: ICatalogRouteProps;
}
interface ICatalogState {}

export class Catalog extends React.Component<ICatalogProps, ICatalogState> {
  constructor(props: ICatalogProps){
    super(props);

    this.state = {}
  }

  componentDidMount(){
    console.log(this.props.navigation);
  }

  catalogNavigationHandler = (e: any, title: string) => {
    this.props.navigation.navigate("CatalogItemList", { title })
  }

  render() {
    return(
      <ScrollView style={{backgroundColor: COLOR.WHITE}}>
        <View style={{padding: 16}}>
        <ScrollView>
          {
            this.props.route.params.items.map((element, index) => (
              <CatalogItem key={index} onPress={e => this.catalogNavigationHandler(e, element.title)} {...element}/>
            ))
          }
        </ScrollView>
      </View>
      </ScrollView>
    )
  }
}

interface ICatalotItemProps {
  onPress: (e: any) => void;
  title: string;
  image: {
    src: any;
    width: number;
    height: number;
  }
}


const CatalogItem:React.FC<ICatalotItemProps> = ({ onPress, title, image }) => (
  <TouchableHighlight style={catalogStyle.catalogButton} underlayColor={COLOR.GRAY} onPress={onPress}>
    <View style={catalogStyle.catalogContainer} >
      <View style={catalogStyle.catalogImage}>
        {/* <Ionicons name="ios-phone-portrait" size={50} color={COLOR.WHITE}/> */}
        <Image source={image.src} style={{width: image.width, height: image.height}}/>
      </View>
      <View style={{}}>
        <Text style={catalogStyle.catalogText}>{title}</Text>
      </View>
      <View style={{position: 'absolute', right: 0}}>
        <Image source={Icons.arrow_right} style={{width: 7, height: 12}}/>
      </View>
    </View>
  </TouchableHighlight>
)

const catalogStyle = StyleSheet.create({
  catalogContainer: {marginRight: 22, flexDirection: 'row', alignItems: 'center', position: 'relative', width: '100%'},
  catalogImage: {backgroundColor: COLOR.GREEN, width: 47, height: 47, justifyContent: 'center', alignItems: 'center', borderRadius: 7},
  catalogText: {fontSize: 14, textAlign: "center", marginLeft: 10, color: COLOR.BLACK, fontFamily:"Roboto-Medium"},
  catalogButton: { marginBottom: 10, borderRadius: 7 }
})