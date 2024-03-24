import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Profile } from '../screens/Profile';
import Settings from '../screens/Settings';
import { EditUser } from '../screens/EditUser';
import { Security } from '../screens/Security';
import { Support } from '../screens/Support';
import { Language } from '../screens/Language';
import { About } from '../screens/About';
import { DeleteAccount } from '../screens/DeleteAccount';

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
  EditUser: undefined;
  Security: undefined;
  Support: undefined;
  Language: undefined;
  About: undefined;
  DeleteAccount: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => {
  const { t } = useTranslation();
  const settings = t('Settings');
  const editUser = t('Edit User');
  const security = t('Security');
  const support = t('Support');
  const language = t('Language');
  const about = t('About');
  const deleteAccount = t('Delete Account');

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen
        name={'Settings'}
        component={Settings}
        options={{
          title: settings,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'EditUser'}
        component={EditUser}
        options={{
          title: editUser,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'Security'}
        component={Security}
        options={{
          title: security,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'Support'}
        component={Support}
        options={{
          title: support,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'Language'}
        component={Language}
        options={{
          title: language,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'About'}
        component={About}
        options={{
          title: about,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
      <ProfileStack.Screen
        name={'DeleteAccount'}
        component={DeleteAccount}
        options={{
          title: deleteAccount,
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular',
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};
