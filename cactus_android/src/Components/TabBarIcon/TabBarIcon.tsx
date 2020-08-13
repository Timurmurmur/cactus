import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

interface ITabBarIconProps {
  name: string;
  focused: boolean;
}

export const TabBarIcon: React.FC<ITabBarIconProps> = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={27}
      style={{ marginBottom: -5 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
