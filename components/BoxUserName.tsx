import { useTranslation } from 'react-i18next';
import { Text } from '../tool-components/index';
import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, TouchableOpacity, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { PREMIUM_ACTIVE } from '@env';
import { RootState } from '../redux/store';
const backgroundImage = require('../assets/backgroundRegister.png');
const Setting = require('../assets/iconsHTML/white/setting.png');

interface Props {
  name: string;
  onClick: () => void;
}

export const BoxUserName = (props: Props) => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <LinearGradient
      colors={
        user && user.subscription && user.subscription && user.subscription.status == 'active'
          ? ['#ffd700', '#b8860b']
          : ['#673de3', '#793de3']
      }
      start={{ x: 0, y: 0 }} // Inicio del gradiente a la izquierda
      end={{ x: 1, y: 0 }} // Fin del gradiente a la derecha
      style={{
        width: '80%',
        marginBottom: 30,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        // iOS Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        // Android Shadow
        elevation: 10,
        marginTop: PREMIUM_ACTIVE == '1' ? 0 : 20,
      }}>
      <ImageBackground
        source={backgroundImage}
        style={{
          position: 'absolute', // Posiciona la imagen de fondo absolutamente
          width: '100%', // Asegura que la imagen de fondo llene el contenedor
          height: '100%', // Asegura que la imagen de fondo llene el contenedor
          opacity: 0.1,
        }}
      />
      {/* El primer icono ahora es invisible */}
      <View style={{ opacity: 0 }}>
        {/* <AntDesign name="setting" size={24} style={{ color: 'white' }} /> */}
        <Image style={{ width: 20, height: 20 }} source={Setting} />
      </View>
      <Text style={{ fontSize: 20, color: 'white', marginVertical: 20 }}>
        {t('Hello')}, {props.name}!
      </Text>
      {/* El segundo icono es más grande, por ejemplo, de tamaño 30 */}
      <TouchableOpacity onPress={props.onClick}>
        <Image style={{ width: 20, height: 20 }} source={Setting} />
      </TouchableOpacity>
    </LinearGradient>
  );
};
