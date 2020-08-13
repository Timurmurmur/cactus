import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ComparisonScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Comparison Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});