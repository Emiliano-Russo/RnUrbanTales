import { Alert, View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from '../tool-components/index';
import { useTranslation } from 'react-i18next';
import { UserService } from '../services/user.service';
import { API_URL } from '@env';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';

const userService = new UserService(API_URL);

export const Security = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.user.user);

  const handleResendConfirmationEmail = () => {
    setLoading(true);
    userService
      .resendConfirmationEmail(user.email)
      .then(val => {
        alert(t('An email has been sent to your account'));
      })
      .catch(err => {
        alert('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRequestChangeEmail = () => {
    setLoading(true);
    userService
      .requestEmailChange(user.email)
      .then(res => {
        Alert.alert(t('Change Request Email'), t('An email has been sent to your account'));
      })
      .catch(err => {
        console.error(err.message);
        alert('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRequestChangePassword = () => {
    setLoading(true);
    userService
      .requestPasswordReset(user.email)
      .then(res => {
        Alert.alert(t('Request Change Password'), t('An email has been sent to your account'));
      })
      .catch(err => {
        alert('Error');
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        isLoading={loading}
        textStyle={styles.buttonText}
        style={styles.button}
        title={t('Resend confirmation email')}
        onPress={handleResendConfirmationEmail}
      />
      <Button
        isLoading={loading}
        textStyle={styles.buttonText}
        style={styles.button}
        title={t('Request Change Email')}
        onPress={handleRequestChangeEmail}
      />
      <Button
        isLoading={loading}
        textStyle={styles.buttonText}
        style={styles.button}
        title={t('Request Change Password')}
        onPress={handleRequestChangePassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4CAF50', // Un color de botón más vivo
    padding: 15,
    width: '80%',
    borderRadius: 5,
    marginVertical: 10, // Espacio vertical entre botones
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
