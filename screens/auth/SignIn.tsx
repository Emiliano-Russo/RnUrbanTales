import React, { useState } from 'react';
import {
  View,
  Image,
  Alert,
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Button } from '../../tool-components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, RootStackParamList } from '../../App';
import * as Animatable from 'react-native-animatable';
import { useTranslation } from 'react-i18next';
import { UserService } from '../../services/user.service';
import { useDispatch } from 'react-redux';
import { addUserAndTokenAsync } from '../../redux/userSlice';
import { AppDispatch } from '../../redux/store';
import { NoAuthWrapper } from '../../wrappers/NoAuthWrapper';
import { API_URL } from '@env';
//const backgroundImage = require('../../assets/loginbackground3.png');
const backgroundImage = require('../../assets/backgroundRegister.png');

const userService = new UserService(API_URL);

const DividerWithText = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>{t('or')}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
};

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigationRoot = useNavigation<StackNavigationProp<RootStackParamList, 'Auth'>>();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'SignIn'>>();
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  const handleLocalSignIn = async () => {
    setLoading(true);
    userService
      .loginUser(email, password)
      .then(response => {
        console.log('Login successfully: ', response);
        const obj = { token: response.accessToken, user: response.user };
        dispatch(addUserAndTokenAsync(obj));
        //navigationRoot.navigate("App");
      })
      .catch(err => {
        console.error('error: ', err);
        Alert.alert('Error', t('Wrong email or password'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <NoAuthWrapper>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: 'rgb(90,57,183)', flex: 1 }}>
          <ImageBackground
            source={backgroundImage}
            style={{
              position: 'absolute', // Posiciona la imagen de fondo absolutamente
              width: '100%', // Asegura que la imagen de fondo llene el contenedor
              height: '50%', // Asegura que la imagen de fondo llene el contenedor
              opacity: 0.2,
            }}
          />
          <Animatable.View animation="tada" duration={1000}>
            <Image style={{ width: 200, height: 200 }} source={require('../../assets/official-logo-white.png')} />
          </Animatable.View>
          <Animatable.View
            animation="fadeIn"
            duration={1200}
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              flex: 1,
              width: '100%',
              backgroundColor: 'white',
              paddingVertical: 20,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}>
            <Text style={styles.welcomeLabel}>{t('Welcome!')}</Text>
            <TextInput
              placeholderTextColor="rgba(20, 20, 10, 0.7)"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              style={styles.input}
            />
            <TextInput
              placeholderTextColor="rgba(20, 20, 10, 0.7)"
              value={password}
              onChangeText={setPassword}
              placeholder={t('Password')}
              secureTextEntry
              style={styles.input}
            />

            <Button
              isLoading={loading}
              title={t('Sign In')}
              onPress={handleLocalSignIn}
              style={{ width: '50%', backgroundColor: '#5D3FD3', margin: 5 }}
            />
            <Button
              isLoading={loading}
              title={t("I'm New")}
              onPress={() => {
                /* Navega a la pantalla de registro */
                navigation.navigate('SignUp');
              }}
              style={{ width: '50%', borderColor: '#5D3FD3', borderWidth: 1, backgroundColor: 'white', margin: 5 }}
              textStyle={{ color: '#5D3FD3' }}
            />
            <Text
              style={styles.forgotPasswordLabel}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              {t('Forgot password?')}
            </Text>
            {/* <DividerWithText />
            <Button
              isLoading={loading}
              title="Sign In with Google"
              textStyle={{ color: 'black' }}
              style={{ width: '50%', backgroundColor: 'white', marginTop: 30, borderWidth: 1 }}
            /> */}
          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </NoAuthWrapper>
  );
}

const styles = StyleSheet.create({
  welcomeLabel: {
    fontSize: 30,
    marginBottom: 30,
    marginTop: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    marginBottom: 20,
    width: '80%',
    backgroundColor: 'rgba(20, 20, 10, 0.1)',
    padding: 10,
    color: 'black',
    borderRadius: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  dividerText: {
    marginHorizontal: 10,
    color: 'white',
  },
  forgotPasswordLabel: {
    marginTop: 10,
    color: 'blue',
  },
});
