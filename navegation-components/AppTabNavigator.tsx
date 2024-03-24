import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Highlights } from '../screens/HighlightedStories';
import { AnimatedIcon } from '../components/AnimatedIcon';
import { TaleNavigator } from './TaleStack';
import { View, Image } from 'react-native';
import { Text } from '../tool-components/index';
import { ProfileNavigator } from './ProfileStack';

const CreateIcon = require('../assets/iconsHTML/color/create.png');
const HomeIcon = require('../assets/iconsHTML/black/home.png');
const StarIcon = require('../assets/iconsHTML/black/star.png');
const ProfileIcon = require('../assets/iconsHTML/black/profile.png');

const StarIcon_White = require('../assets/iconsHTML/white/star.png');

export type AppTabParamList = {
  Highlights: undefined;
  Home: undefined;
  Profile: undefined;
};

const AppTab = createBottomTabNavigator<AppTabParamList>();

export const AppNavigator = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  return (
    <AppTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#c7ccd4', // Establece el color de fondo a blanco
          borderTopWidth: 0, // Elimina la línea del borde superior para quitar la sombra/sombreado
          shadowOpacity: 0, // Específico para iOS, elimina la sombra
          elevation: 0, // Específico para Android, elimina la sombra
          paddingBottom: 10,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          // Si necesitas ajustar el estilo del texto de las etiquetas, hazlo aquí
        },
        tabBarIconStyle: {
          // Si necesitas ajustar el estilo de los iconos, hazlo aquí
        },
      }}>
      <AppTab.Screen
        name="Highlights"
        component={Highlights}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            console.log('FOCUSED HIGLIGHT ', focused);
            return <AnimatedIcon focused={focused} source={StarIcon_White} />;
          },
          tabBarLabel: ({ color, focused }) => <Text style={{ color }}>{t('Highlights')}</Text>,
          headerTitle: t('Highlights'),
          headerTitleStyle: {
            fontFamily: 'Merriweather-Regular', // Estilo del texto del encabezado
          },
        }}
      />
      <AppTab.Screen
        name="Home"
        component={TaleNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            console.log('HOME FOCUSED: ', focused);
            return (
              <View>
                <Text>focused: {focused ? 'true' : 'false'}</Text>
                <Image
                  style={{ height: focused ? 25 : 10, width: focused ? 25 : 10 }}
                  source={focused ? CreateIcon : HomeIcon}
                />
              </View>
            );
          },
          tabBarLabel: ({ color, focused }) => <Text style={{ color }}>{focused ? t('Narrate') : t('Home')}</Text>,
          headerShown: false,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            // Previene la acción por defecto
            //e.preventDefault();
            // Verifica si la pestaña está actualmente enfocada
            // const isFocused = navigation.isFocused();
            // if (isFocused) {
            //   // Si está enfocada, ejecuta tu lógica personalizada
            //   //dispatch(setIsCreatingTale(true));
            //   dispatch(toggleCreatePressed(true));
            // } else {
            //   // Si no está enfocada, navega a la pestaña
            //   navigation.navigate(route.name);
            //   dispatch(toggleCreatePressed(false));
            // }
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
