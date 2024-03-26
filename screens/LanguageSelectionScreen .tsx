import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { Text } from '../tool-components/index';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../i18next';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setSelectedLanguageAsync } from '../redux/userSlice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import * as RNLocalize from 'react-native-localize';

const backgroundImage = require('../assets/background1.png');

export const LanguageSelectionScreen = () => {
  const { i18n } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'LanguageSelection'>>();

  // Obtener el primer idioma de la lista de idiomas del dispositivo
  const firstLocale = RNLocalize.getLocales()[0].languageTag;

  console.log(firstLocale); // Ejemplo: 'en-US'

  React.useEffect(() => {
    if (user.selectedLanguage) {
      if (!user.hasSeenWelcomeModal) {
        navigation.navigate('Welcome');
      } else {
        navigation.navigate('App');
      }
    }
  }, [user.selectedLanguage, user.hasSeenWelcomeModal, navigation]);

  React.useEffect(() => {
    const lng = firstLocale.slice(0, 2);
    if (lng == 'es' || lng == 'en' || lng == 'pt') handleLanguageChange(lng);
    else handleLanguageChange('en');
  }, []);

  const handleLanguageChange = async language => {
    i18n.changeLanguage(language);
    dispatch(setSelectedLanguageAsync(language));
    console.log('we dispatched the language: ', language);
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#7D3C98', '#191970']} style={styles.modalView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
