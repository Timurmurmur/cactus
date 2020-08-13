import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLOR } from '../../common/color';
import { Route, Navigation } from '../../common/types';
import { Header } from '../../components/Header/Header';

interface IDescriptionRouteProps extends Route{
  params: {
    data: {
      title: string;
      description: {
        title?: string;
        text: string;
      }[],
      image?: {
        src: any,
        width: number;
        height: number;
      }
    }[],
    title: string;
  }
}

interface IDescriptionProps {
  route: IDescriptionRouteProps;
  navigation: Navigation;
}

export const Description:React.FC<IDescriptionProps> = ({ route, navigation }) => {
  const { data } = route.params;
  return(
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <Header navigation={navigation} route={route} config={{back: true, title: route.params.title, type: 'SMALL', basket: true}}/>
      <ScrollView>
        <View style={descriptionStyles.container}>
          {
            data.map((el, index) => (
              <DescriptionItem key={index} item={el}/>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}


interface IDescriptionItemProps {
  item: {
    title: string;
    description: {
      title?: string;
      text: string;
    }[],
    image?: {
      src: any,
      width: number;
      height: number;
    }
  }
}

export const DescriptionItem:React.FC<IDescriptionItemProps> = ({item}) => (
  <View style={descriptionStyles.wrapper}>
    <View>
      <Text style={descriptionStyles.title}>{item.title}</Text>
    </View>
    <View>
      {
        item.description.map((el, index) => (
          <Text style={descriptionStyles.text}>
            { el.title ? <Text style={{fontSize: 14, fontWeight: '600', color: COLOR.BLACK}}>{el.title}</Text> : null}{" "}
            { el.text }
          </Text>
        ))
      }
    </View>
    {
      item.image ? 
      <View style={descriptionStyles.image}>
        <Image source={item.image.src} style={{width: item.image.width, height: item.image.height}}/>
      </View> : null
    }
  </View>
)

const descriptionStyles = StyleSheet.create({
  container: { width: '100%', paddingHorizontal: 16, paddingVertical: 30},
  wrapper: { alignItems: 'center'},
  title: { textAlign: 'center', fontSize: 16, fontWeight: '600', marginBottom: 20, color: COLOR.BLACK},
  text: { fontSize: 14, lineHeight: 22, textAlign: 'center', marginBottom: 40, fontWeight: '300', color: COLOR.BLACK},
  image: { marginBottom: 30, width: '100%', justifyContent: 'center', alignItems: 'center' }
})