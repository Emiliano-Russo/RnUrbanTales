import { View } from 'react-native';
import { Button, Text, TextInput } from '../../tool-components/index';
import { useTranslation } from 'react-i18next';
import { UserService } from '../../services/user.service';
import { API_URL } from '@env';
import { useState } from 'react';

const userService = new UserService(API_URL);

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const requestPasswordReset = () => {
    setLoading(true);
    userService
      .requestPasswordReset(email)
      .then(res => {
        console.log('request successfully');
      })
      .catch(err => {
        console.error('error requesting password change', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={{ padding: 20, alignItems: 'center', backgroundColor: 'white', flex: 1 }}>
      <Text style={{ textAlign: 'center', color: 'black' }}>
        {t('Enter your email to receive a password reset link')}
      </Text>
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholder="example@email.com"
        style={{ width: 300, marginTop: 20 }}
        placeholderTextColor={'gray'}
      />
      <Button isLoading={loading} style={{ width: 100 }} title={t('Send')} onPress={requestPasswordReset} />
    </View>
  );
};
