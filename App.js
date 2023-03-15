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

export default function App() {
  const { store, persistor } = Index();
  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Ralway/Raleway-Regular.ttf'),
    'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Baskervville': require('./assets/fonts/Baskervville/Baskervville-Regular.ttf'),
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
    <NavigationContainer>
      <StatusBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer >

  );
}

