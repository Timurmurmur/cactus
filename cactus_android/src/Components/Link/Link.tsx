import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Colors from '../../constants/Colors';
import { ArrowRight } from '../Icons/Icons';

interface ILinkProps {
  styleImage: any;
  image: any;
  label: string;
  width: number;
  height: number;
}

export const Link: React.FC<ILinkProps> = ({ styleImage, image, label, width, height }) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerLink}>
        <View style={styleImage}>
          <Image source={image} style={{ width, height }}></Image>
        </View>
        <Text style={styles.linkText}>{label}</Text>
      </View>
      <ArrowRight width={7} height={12} color={'#CECECE'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingVertical: 5,
    borderBottomWidth: .5,
    borderBottomColor: '#EBEBEB'
  },
  containerLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkImage: {
    marginRight: 15,
    backgroundColor: Colors.green,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray,
  },
});