import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, Image, View } from 'react-native';
import { LatLng } from 'react-native-maps';
import { TaleStackParamList } from '../App';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text } from '../tool-components/index';
import * as Animatable from 'react-native-animatable';

const Book = require('../assets/iconsHTML/white/book.png');

interface Props {
  selectedLocation: LatLng | null;
  saveCoordinates: (latitude: string, longitude: string) => void;
  setSelectedLocation: (value: React.SetStateAction<LatLng | null>) => void;
  navigation: StackNavigationProp<TaleStackParamList, 'Home'>;
  shareYourTale: string;
  selectLocationOnTheMap: string;
}

export const MapSelection = (props: Props) => {
  return (
    <Animatable.View
      animation="fadeInRight"
      delay={100}
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        padding: 1,
        borderRadius: 15,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row', // para alinear el ícono y el texto horizontalmente
        justifyContent: 'center', // para centrar ambos elementos dentro del View
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'rgba(130,10,200,0.7)',
          padding: 14,
          width: '100%',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          if (props.selectedLocation) {
            props.saveCoordinates(
              props.selectedLocation.latitude.toString(),
              props.selectedLocation.longitude.toString(),
            );
            props.setSelectedLocation(null);
            props.navigation.navigate('NewTale');
          }
        }}>
        {props.selectedLocation && <Image style={{ width: 20, height: 20 }} source={Book} />}
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          {props.selectedLocation ? props.shareYourTale : props.selectLocationOnTheMap}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};
