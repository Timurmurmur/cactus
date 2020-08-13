import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-navigation';
import { Navigation } from './src/Components/Navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './src/Components/Header/Header';
import { Basket } from './src/Screens/Basket/Basket';
import { CreditList } from './src/Screens/CreditList/CreditList';
import { Decoration } from './src/Screens/Decoration/Decoration';
import { Delivery } from './src/Screens/Delivery/Delivery';
import { DecorationConsist } from './src/Screens/DecorationConsist/DecorationConsist';
import { DecorationMap } from './src/Screens/DecorationMap/DecorationMap';
import { Auth } from './src/Screens/Auth/Auth';
import { SmsVerification } from './src/Screens/SmsVerification/SmsVerification';


import { Epic, EpicMiddleware, createEpicMiddleware, combineEpics } from 'redux-observable';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const StackNavigator = createStackNavigator();

// export type Action = HeaderActions;
// export interface EpicDeps {}
// export interface State {}

// export type FuncEpic = Epic<Action, Action, State, EpicDeps>

// const createMiddleware = (
//   epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
// ) => applyMiddleware(epicMiddleware);

const App = (props: any) => {
//   const epicMiddleware = createEpicMiddleware<Action,Action,State,EpicDeps>({
//     dependencies: {}
//   });

//   const store = createStore<State, Action, {}, {}>(
//     combineReducers({  }),
//     createMiddleware(epicMiddleware),
//   )

//   epicMiddleware.run(combineEpics());

//   const initialState = store.getState();


  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync () {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e){
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
      
    }
    
    loadResourcesAndDataAsync();
  }, []);

  (async () => {
    let perm = await Permissions.getAsync('location');
    if (!perm.granted) {
      Permissions.askAsync('location');
    }
  })()

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <SafeAreaView
        style={[
          {
            height: Dimensions.get("screen").height,
            width: Dimensions.get("screen").width,
            justifyContent: "center",
            alignItems: "center"
          }
        ]}
      >
        <Text>LOADING</Text>
      </SafeAreaView>
    );
  } else {
    
    return (
        // <Provider>
        <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", bottom: "always" }}
        >
          <NavigationContainer>
            <StackNavigator.Navigator  headerMode="none" initialRouteName="Root">
              <StackNavigator.Screen name="Root" component={Navigation}/>
              <StackNavigator.Screen name="Basket" component={Basket}/>
              <StackNavigator.Screen name="CreditList" component={CreditList}/>
              <StackNavigator.Screen name="Delivery" component={Delivery}/>
              <StackNavigator.Screen name="Decoration" component={Decoration}/>
              <StackNavigator.Screen name="DecorationConsist" component={DecorationConsist}/>
              <StackNavigator.Screen name="DecorationMap" component={DecorationMap}/>
              <StackNavigator.Screen name="Auth" component={Auth}/>
              <StackNavigator.Screen name="SmsVerification" component={SmsVerification}/>
            </StackNavigator.Navigator>
          </NavigationContainer>
        </SafeAreaView>
        // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: '#149751',
  },
});

export default App;