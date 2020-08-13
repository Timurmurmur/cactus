import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Navigation, Route } from '../../common/types';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import { SmallHeader } from '../../Components/Header/SmallHeader';

export interface ICompareListProps {
  navigation: Navigation;
  route: Route;
}
interface ICompareListState {}

export class CompareList extends React.Component<ICompareListProps, ICompareListState> {
  constructor(props: ICompareListProps){
    super(props);

    this.state = {}
  }

  render() {
    return(
      <>
      <SmallHeader title="Сравнение товаров" back {...this.props}/>
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{padding: 16}}>
            <CompareItem {...this.props}/>
            <CompareItem {...this.props}/>
            <CompareItem {...this.props}/>
        </View>
      </ScrollView>
      </>
    )
  }
}

const CompareItem: React.FC = (props: any) => {
    return(
        <TouchableHighlight onPress={e => props.navigation.navigate('Compare', { title: 'Смартфоны'})} underlayColor={Colors.white} style={[{ borderRadius: 7, marginBottom: 20, backgroundColor: Colors.white }]}>
            <View style={{paddingHorizontal: 15, paddingVertical: 12}}>
              <View style={{borderBottomColor: '#EBEBEB', borderBottomWidth: .5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>Смартфоны</Text>
                  <AntDesign name="close" color={'#A8A8A8'} size={20}/>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 15}}>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 45, height: 62}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 45, height: 62}}/>
                  </View>
                  <View style={{marginRight: 20}}>
                    <Image source={require('../../../assets/images/phone.png')} style={{width: 45, height: 62}}/>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8}}>
                <View style={{}}>
                    <Text style={{fontSize: 12, color: '#A8A8A8' }}>Количество</Text>
                    <Text style={{fontSize: 18, marginTop: 5, color: Colors.black, }}>3 шт</Text>
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 12, color: '#A8A8A8' }}>Сумма</Text>
                    <Text style={{fontSize: 18, marginTop: 5, color: Colors.black, fontWeight: '500',}}>57 998 ₴</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
    )
}

