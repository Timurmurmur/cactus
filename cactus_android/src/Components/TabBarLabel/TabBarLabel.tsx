import * as React from 'react';
import { Text } from 'react-native';

import Colors from '../../constants/Colors';

interface ITabBarLabelProps {
  name: string;
  focused: boolean;
}

export const TabBarLabel: React.FC<ITabBarLabelProps> = ({name, focused}) => {
  return (
    <Text
      name={name}
      style={{
        color: focused ? Colors.tabIconSelected : Colors.tabIconDefault,
        fontSize: 12,
        marginBottom: 7
      }}
    >{name}</Text>
  );
}