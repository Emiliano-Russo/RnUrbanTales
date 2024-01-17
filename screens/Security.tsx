import { Alert, View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from '../tool-components/index';
import { useTranslation } from 'react-i18next';

export const Security = () => {
  const { t } = useTranslation();

  const handleRequestChangeEmail = () => {
    // Aquí se despacharía una acción o se llamaría a una función para enviar el email
    Alert.alert(t('Request Change Email'), t('An email has been sent to your account to change your email.'));
  };

  const handleRequestChangePassword = () => {
    // Aquí se despacharía una acción o se llamaría a una función para enviar el email
    Alert.alert(t('Request Change Password'), t('An email has been sent to your account to change your password.'));
  };

  return (
    <View style={styles.container}>
      <Button
        textStyle={styles.buttonText}
        style={styles.button}
        title={t('Request Change Email')}
        onPress={handleRequestChangeEmail}
      />
      <Button
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
    fontWeight: 'bold',
    fontSize: 16,
  },
});
