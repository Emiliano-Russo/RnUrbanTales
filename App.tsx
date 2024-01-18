import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IconFill, IconOutline } from '@ant-design/icons-react-native';
import { TouchableOpacity, StatusBar, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18next';
import { Text } from './tool-components/Text';
import { TaleDisplay } from './screens/TaleDisplay';
import { Highlights } from './screens/HighlightedStories';
import { Profile } from './screens/Profile';
import { Home } from './screens/Home';
import { SignIn } from './screens/auth/SignIn';
import { SignUp } from './screens/auth/SignUp';
import { WelcomeScreen } from './screens/Welcome';
import { LanguageSelectionScreen } from './screens/LanguageSelectionScreen ';
import { NewTaleTitle } from './screens/NewTale/Title';
import { NewTaleImage } from './screens/NewTale/Image';
import { NewTaleNarrative } from './screens/NewTale/Narrative';
import { NewTaleCategory } from './screens/NewTale/Category';
import { Provider, useDispatch } from 'react-redux';
import store, { AppDispatch } from './redux/store';
import { ITaleCreate } from './interfaces/Tale';
import { AuthWrapper } from './wrappers/AuthWrapper';
import { AppInitializer } from './AppInitializer';
import { NewTaleMark } from './screens/NewTale/Mark';
import { NewTaleIsAnonymous } from './screens/NewTale/IsAnonymous';
import Settings from './screens/Settings';
import { EditUser } from './screens/EditUser';
import { Support } from './screens/Support';
import { Language } from './screens/Language';
import { About } from './screens/About';
import { DeleteAccount } from './screens/DeleteAccount';
import { toggleCreatePressed } from './redux/newTaleSlice';
import { Security } from './screens/Security';
import { ForgotPassword } from './screens/auth/ForgotPassword';

const CreateIcon = require('./assets/iconsHTML/color/create.png');
const HomeIcon = require('./assets/iconsHTML/black/home.png');
const StarIcon = require('./assets/iconsHTML/black/star.png');
const ProfileIcon = require('./assets/iconsHTML/black/profile.png');

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  Welcome: undefined;
  LanguageSelection: undefined;
};

export type AppTabParamList = {
  Highlights: undefined;
  Home: undefined;
  Profile: undefined;
};

export type TaleStackParamList = {
  Home: undefined;
  TaleDisplay: { tale?: ITaleCreate; isCreation?: boolean; taleId?: string };
  NewTale: undefined;
};

export type NewTaleStackParamList = {
  Title: undefined;
  Image: undefined;
  Narration: undefined;
  Category: undefined;
  Mark: undefined;
  Anonymous: undefined;
  TaleDisplay: { tale: ITaleCreate; isCreation?: boolean };
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

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

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const AppTab = createBottomTabNavigator<AppTabParamList>();
const TaleStack = createStackNavigator<TaleStackParamList>();
const NewTaleStack = createStackNavigator<NewTaleStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

const AuthNavigator = () => {
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

const NewTaleNavigator = () => {
  const { t } = useTranslation();
  const title = t('Title');
  const image = t('Image');
  const narration = t('Narration');
  const category = t('Category');
  const mark = t('Mark');
  const anonymous = t('Anonymous');

  return (
    <AuthWrapper>
      <NewTaleStack.Navigator>
        <NewTaleStack.Screen name="Title" component={NewTaleTitle} options={{ headerTitle: title }} />
        <NewTaleStack.Screen name="Image" component={NewTaleImage} options={{ headerTitle: image }} />
        <NewTaleStack.Screen name="Narration" component={NewTaleNarrative} options={{ headerTitle: narration }} />
        <NewTaleStack.Screen name="Category" component={NewTaleCategory} options={{ headerTitle: category }} />
        <NewTaleStack.Screen name="Mark" component={NewTaleMark} options={{ headerTitle: mark }} />
        <NewTaleStack.Screen name="Anonymous" component={NewTaleIsAnonymous} options={{ headerTitle: anonymous }} />
      </NewTaleStack.Navigator>
    </AuthWrapper>
  );
};

const TaleNavigator = () => {
  const { t } = useTranslation();
  return (
    <TaleStack.Navigator>
      <TaleStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Urban Tales',
          headerShown: false,
        }}
      />
      <TaleStack.Screen name="TaleDisplay" component={TaleDisplay} options={{ title: '' }} />
      <TaleStack.Screen name="NewTale" component={NewTaleNavigator} options={{ headerShown: false }} />
    </TaleStack.Navigator>
  );
};

const ProfileNavigator = () => {
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
      <ProfileStack.Screen name={'Settings'} component={Settings} options={{ title: settings }} />
      <ProfileStack.Screen name={'EditUser'} component={EditUser} options={{ title: editUser }} />
      <ProfileStack.Screen name={'Security'} component={Security} options={{ title: security }} />
      <ProfileStack.Screen name={'Support'} component={Support} options={{ title: support }} />
      <ProfileStack.Screen name={'Language'} component={Language} options={{ title: language }} />
      <ProfileStack.Screen name={'About'} component={About} options={{ title: about }} />
      <ProfileStack.Screen name={'DeleteAccount'} component={DeleteAccount} options={{ title: deleteAccount }} />
    </ProfileStack.Navigator>
  );
};

const AppNavigator = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  return (
    <AppTab.Navigator initialRouteName="Home">
      <AppTab.Screen
        name="Highlights"
        component={Highlights}
        options={{
          tabBarIcon: ({ color, size }) => <Image style={{ height: 20, width: 20 }} source={StarIcon} />,
          tabBarLabel: ({ color, focused }) => <Text style={{ color }}>{t('Highlights')}</Text>,
          headerTitle: t('Highlights'),
          headerTitleStyle: {
            fontFamily: 'boldFont', // Estilo del texto del encabezado
          },
        }}
      />
      <AppTab.Screen
        name="Home"
        component={TaleNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ height: focused ? 25 : 20, width: focused ? 25 : 20 }}
              source={focused ? CreateIcon : HomeIcon}
            />
          ),
          tabBarLabel: ({ color, focused }) => <Text style={{ color }}>{focused ? t('Narrate') : t('Home')}</Text>,
          headerShown: false,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            console.log('mid pressed');
            // Previene la acción por defecto
            e.preventDefault();

            // Verifica si la pestaña está actualmente enfocada
            const isFocused = navigation.isFocused();
            console.log('is focused? ', isFocused ? 'trueee' : 'falseeee');

            if (isFocused) {
              // Si está enfocada, ejecuta tu lógica personalizada
              //dispatch(setIsCreatingTale(true));
              console.log('create tale');
              dispatch(toggleCreatePressed(true));
            } else {
              // Si no está enfocada, navega a la pestaña
              navigation.navigate(route.name);
              console.log('just homeee :))');
              dispatch(toggleCreatePressed(false));
            }
          },
        })}
      />
      <AppTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Image style={{ height: 20, width: 20 }} source={ProfileIcon} />,
          tabBarLabel: ({ color, focused }) => <Text style={{ color }}>{t('Profile')}</Text>,
          headerShown: false,
        }}
      />
    </AppTab.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <AppInitializer>
        <NavigationContainer>
          <StatusBar backgroundColor="#7D3C98" />
          <RootStack.Navigator initialRouteName="LanguageSelection" screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
            <RootStack.Screen name="Auth" component={AuthNavigator} />
            <RootStack.Screen name="Welcome" component={WelcomeScreen} />
            <RootStack.Screen name="App" component={AppNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </AppInitializer>
    </Provider>
  );
};

export default RootNavigator;
