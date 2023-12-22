import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, View, Image } from 'react-native';
import { Text } from '../tool-components/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
const markerIcon = require('../assets/icons/mark-love2.png');
const PlusIcon = require('../assets/iconsHTML/white/plus.png');

interface Props {
  handleNarrarPress: () => void;
}

export const MapButtonPlus = (props: Props) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          padding: 2,
          borderRadius: 50,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        }}
        onPress={props.handleNarrarPress} // Modificado para usar handleNarrarPress
      >
        <LinearGradient
          colors={['#4B0082', '#9400D3']}
          style={{
            padding: 15,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          start={{ x: 0, y: 0 }} // Modificado a formato de objeto
          end={{ x: 1, y: 1 }} // Modificado a formato de objeto
        >
          <Image style={{ height: 30, width: 30 }} source={PlusIcon} />
        </LinearGradient>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 5,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          fontWeight: 'bold',
          paddingHorizontal: 4,
        }}>
        {t('Narrate')}
      </Text>
    </View>
  );
};
