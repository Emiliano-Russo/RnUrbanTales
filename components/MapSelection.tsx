import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity, Image } from 'react-native';
import { LatLng } from 'react-native-maps';
import { TaleStackParamList } from '../App';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text } from '../tool-components/index';

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
    <TouchableOpacity
      onPress={() => {
        if (props.selectedLocation) {
          props.saveCoordinates(
            props.selectedLocation.latitude.toString(),
            props.selectedLocation.longitude.toString(),
          );
          props.setSelectedLocation(null);
          props.navigation.navigate('NewTale');
        }
      }}
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(130,10,200,0.7)',
        alignItems: 'center',
        flexDirection: 'row', // para alinear el ícono y el texto horizontalmente
        justifyContent: 'center', // para centrar ambos elementos dentro del View
      }}>
      {props.selectedLocation && <Image style={{ width: 20, height: 20 }} source={Book} />}
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
        {props.selectedLocation ? props.shareYourTale : props.selectLocationOnTheMap}
      </Text>
    </TouchableOpacity>
  );
};
