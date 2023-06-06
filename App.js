import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useState, useRef, useEffect } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux'
import Index from './src/store/index'
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Image, View } from 'react-native';

import ProgressBar from 'react-native-animated-progress';
export default function App() {

  const { store, persistor } = Index();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Ralway/Raleway-Regular.ttf'),
    'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Baskervville': require('./assets/fonts/Baskervville/Baskervville-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return loading ? (
    <View style={{ height: '100%', backgroundColor: 'black' }}>
      <View style={{ height: 630, justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require('./assets/logo1.png')} resizeMode='center' />
      </View>
      <ProgressBar
        indeterminate="true"
        backgroundColor="#4a0072"
        height={10}
        progress={10}
        animated={false}
      />
    </View>
  ) : (
    <NavigationContainer>
      <StatusBar />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer >
  )
}