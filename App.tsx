import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './i18next';
import { WelcomeScreen } from './screens/Welcome';
import { LanguageSelectionScreen } from './screens/LanguageSelectionScreen ';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppInitializer } from './AppInitializer';
import { AuthNavigator } from './navegation-components/AuthStack';
import { AppNavigator } from './navegation-components/AppTabNavigator';
import { StatusBar } from 'react-native';

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
  Welcome: undefined;
  LanguageSelection: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

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
