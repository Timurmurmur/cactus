import * as Font from 'expo-font';

export async function bootstrap() {
  await Font.loadAsync({
    'roboto-light': require('../assets/fonts/Roboto-Light.ttf'),
    'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
  })
}