import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Link } from '../../Components/Link/Link';
import { dataCatalog } from '../../../assets/data/dataCatalog';
import Colors from '../../constants/Colors';
import { Navigation, Route } from '../../common/types';
import { RootNavigationContext } from '../../Components/Navigation/Navigation';
import { Header } from '../../Components/Header/Header';

interface ICatalogProps {
  navigation: Navigation;
  route: Route;
}

export const Catalog:React.FC<ICatalogProps> = (props) => {
  const RootContext = React.useContext(RootNavigationContext);


  const catalogPressHandler = async (title: string) => {
    props.navigation.navigate('BrandCards', { title });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Каталог" back={false} {...props}/>
      <ScrollView style={{backgroundColor: Colors.white}}>
        {dataCatalog.map((item: any, index: number) => {
          return (
            <TouchableOpacity key={index} onPress={() => catalogPressHandler(item.label)}>
              <Link styleImage={styles.styleImage} {...item}></Link>
            </TouchableOpacity>
          );
        }
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  styleImage: {
    width: 47,
    height: 47,
    marginRight: 15,
    backgroundColor: Colors.green,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
