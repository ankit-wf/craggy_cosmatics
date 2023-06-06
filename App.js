import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux'
import Index from './src/store/index'
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";

export default function App() {
  const { store, persistor } = Index();
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 2000);

  const [fontsLoaded] = useFonts({
    'Raleway': require('./assets/fonts/Ralway/Raleway-Regular.ttf'),
    'Lato': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Baskervville': require('./assets/fonts/Baskervville/Baskervville-Regular.ttf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/logo1.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
    >
      <NavigationContainer>
        <StatusBar />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainNavigator />
          </PersistGate>
        </Provider>
      </NavigationContainer >
    </AnimatedSplash>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

