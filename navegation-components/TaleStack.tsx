import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { ITaleCreate } from '../interfaces/Tale';
import { TaleDisplay } from '../screens/TaleDisplay';
import { NewTaleNavigator } from './NewTaleStack';
import { Home } from '../screens/Home';

export type TaleStackParamList = {
  Home: undefined;
  TaleDisplay: { tale?: ITaleCreate; isCreation?: boolean; taleId?: string };
  NewTale: undefined;
};

const TaleStack = createStackNavigator<TaleStackParamList>();

export const TaleNavigator = () => {
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
