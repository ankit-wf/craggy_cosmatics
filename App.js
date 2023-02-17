import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux'
import Index from './src/store/index'
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import SkeletonTestScreen from './src/screens/SkeletonTestScreen';


export default function App() {
  const { store, persistor } = Index();
  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Ralway/Raleway-Regular.ttf'),
    'Raleway800': require('./assets/fonts/Ralway/Raleway-ExtraBold.ttf'),
    'Raleway700': require('./assets/fonts/Ralway/Raleway-Bold.ttf'),
    'Raleway600': require('./assets/fonts/Ralway/Raleway-SemiBold.ttf'),
    'Raleway500': require('./assets/fonts/Ralway/Raleway-Medium.ttf'),
    'Raleway400': require('./assets/fonts/Ralway/Raleway-Regular.ttf'),
    'Raleway300': require('./assets/fonts/Ralway/Raleway-Light.ttf'),
    'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato800': require('./assets/fonts/Lato/Lato-ExtraBold.ttf'),
    'Lato700': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    'Lato600': require('./assets/fonts/Lato/Lato-Semibold.ttf'),
    'Lato500': require('./assets/fonts/Lato/Lato-Medium.ttf'),
    'Lato400': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato300': require('./assets/fonts/Lato/Lato-Light.ttf'),
    'Baskervville400': require('./assets/fonts/Baskervville/Baskervville-Regular.ttf'),

  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }


  return (
    <NavigationContainer >
      <StatusBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer >

    // <View>
    //   <SkeletonTestScreen />
    // </View>

  );
}

