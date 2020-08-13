import React, { createContext } from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Navigation } from './src/components/Navigation/Navigation';
import { SafeAreaView } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/components/Header/Header';

import { Provider } from 'react-redux';

import { Epic, EpicMiddleware, createEpicMiddleware, combineEpics } from 'redux-observable';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { Basket } from './src/Screens/Basket/Basket';
import { CreditList } from './src/Screens/CreditList/CreditList';
import { Decoration } from './src/Screens/Decoration/Decoration';
import { Delivery } from './src/Screens/Delivery/Delivery';
import { DecorationConsist } from './src/Screens/DecorationConsist/DecorationConsist';
import { Auth } from './src/Screens/Auth/Auth';
import { SmsVerification } from './src/Screens/SmsVerification/SmsVerification';
import { TextInput } from 'react-native-gesture-handler';

import * as Permissions from 'expo-permissions';

const StackNavigator = createStackNavigator();

// export type Action = HeaderActions;
// export interface EpicDeps {}
// export interface State {
//   header: HeaderState;
// }

// export type FuncEpic = Epic<Action, Action, State, EpicDeps>

// const createMiddleware = (
//   epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
// ) => applyMiddleware(epicMiddleware);

  // const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
  //   dependencies: {}
  // });

  // const store = createStore<State, Action, {}, {}>(
  //   combineReducers({ header }),
  //   createMiddleware(epicMiddleware)
  // );

  // epicMiddleware.run(combineEpics());


const App = (props: any) => {
  StatusBar.setBarStyle('dark-content');
  if (Text.defaultProps === null) {
    Text.prototype.allowFontScaling = false;
  }
  (async () => {
    let perm = await Permissions.getAsync('location');
    if (!perm.granted) {
      Permissions.askAsync('location');
    }
  })()
  return (
    // <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }} 
      forceInset={{ top: "always", bottom: "always" }}>
        <NavigationContainer onStateChange={(state) => {console.log(state)}}>
          <StackNavigator.Navigator headerMode="none" initialRouteName="Navigation">
            <StackNavigator.Screen name="Navigation" component={Navigation}/>
            <StackNavigator.Screen name="Basket" component={Basket}/>
            <StackNavigator.Screen name="CreditList" component={CreditList}/>
            <StackNavigator.Screen name="Decoration" component={Decoration}/>
            <StackNavigator.Screen name="Delivery" component={Delivery}/>
            <StackNavigator.Screen name="DecorationConsist" component={DecorationConsist}/>
            <StackNavigator.Screen name="Auth" component={Auth}/>
            <StackNavigator.Screen name="SmsVerification" component={SmsVerification}/>
          </StackNavigator.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    // </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
