// AppInitializer.js
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { loadInitialStateAsync } from './redux/userSlice';
import { AppDispatch } from './redux/store';
import { Platform } from 'react-native';
import { REVENUECAT_APIKEY_ANDROID } from '@env';

export const AppInitializer = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  // async function initializeRevenueCat() {
  //   console.log('INITIALIZING!!!!!!!!');
  //   try {
  //     Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
  //     if (Platform.OS === 'ios') {
  //       //await Purchases.configure({ apiKey: '<public_apple_api_key>' });
  //     } else if (Platform.OS === 'android') {
  //       console.log('android api key: ', REVENUECAT_APIKEY_ANDROID);
  //       await Purchases.configure({ apiKey: REVENUECAT_APIKEY_ANDROID });
  //       console.log('configured successfully!');
  //     }
  //   } catch (e) {
  //     console.warn('Error al inicializar RevenueCat', e);
  //   }
  // }

  useEffect(() => {
    // initializeRevenueCat();
    dispatch(loadInitialStateAsync());
  }, [dispatch]);

  useEffect(() => {
    async function prepare() {
      try {
        // Carga de fuentes
        // await FontLoader.loadAsync({
        //   regularFont: require("./assets/fonts/Merriweather-Regular.ttf"),
        //   lightFont: require("./assets/fonts/Merriweather-Light.ttf"),
        //   boldFont: require("./assets/fonts/Merriweather-Bold.ttf"),
        // });

        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        // Ocultar la pantalla de inicio
        SplashScreen.hide();
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return children;
};
