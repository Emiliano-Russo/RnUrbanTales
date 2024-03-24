import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { SignIn } from '../screens/auth/SignIn';
import { ForgotPassword } from '../screens/auth/ForgotPassword';
import { SignUp } from '../screens/auth/SignUp';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  const { t } = useTranslation();
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: t('Sign In'), headerTitleAlign: 'center' }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: t('Sign Up'), headerTitleAlign: 'center' }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: t('Forgot password?'), headerTitleAlign: 'center' }}
      />
    </AuthStack.Navigator>
  );
};
