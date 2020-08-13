import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-navigation';
import { Navigation } from './src/Components/Navigation/Navigation';
import { COLOR } from './src/common/colors';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { AppLoading, SplashScreen } from 'expo';


// REDUX
import { Epic, EpicMiddleware, createEpicMiddleware, combineEpics } from 'redux-observable';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// END REDUX

// NAVIGATION
// END NAVIGATION


export type Action = NavigationAction;
export interface EpicDeps {}
export interface State {}


export type FuncEpic = Epic<Action, Action, State, EpicDeps>

const createMiddleware = (
  epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
) => applyMiddleware(epicMiddleware);
const epicMiddleware = createEpicMiddleware<Action,Action,State,EpicDeps>({
  dependencies: {}
});

const App = (props: any) => {
  

  // const store = createStore<State, Action, {}, {}>(
  //   combineReducers({  }),
  //   createMiddleware(epicMiddleware),
  // )

  // epicMiddleware.run(combineEpics());

  // const initialState = store.getState();

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync () {
      try {
        await Font.loadAsync({
          ...Ionicons.font,
          Popins: require('./assets/fonts/Poppins-Regular.ttf'),
          'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
          'SF': require('./assets/fonts/SF.ttf'),

        });
      } catch (e){
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    // async function getPermissions() {
    //   let grantedCameraRoll = await Permissions.getAsync('cameraRoll').then((value) => value.granted);
    //   let grantedCamera = await Permissions.getAsync('camera').then((value) => value.granted);
    //   if(!grantedCamera || !grantedCameraRoll){
    //     Permissions.askAsync('cameraRoll')
    //     Permissions.askAsync('camera')
    //   }
    // }
    // getPermissions();
    loadResourcesAndDataAsync();
  }, [])


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
        <AppLoading>
          <Text>Loading</Text>
        </AppLoading>
      </SafeAreaView>
    );
  } else {
    SplashScreen.hide();
    return (
        // <Provider>
            <NavigationContainer>
              <SafeAreaView
              style={styles.container}
              forceInset={{ top: "always", bottom: "always" }}
              >
              <Navigation/>
              </SafeAreaView>
            </NavigationContainer>
        // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

export default App;