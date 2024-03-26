import React, { Dispatch, SetStateAction, useEffect } from 'react';
import MapView, { Marker, Callout, LatLng, Region } from 'react-native-maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Platform, View, Image } from 'react-native';
import { Text } from '../tool-components/index';
import customMapStyle from '../assets/map-basic.json';
import { useTranslation } from 'react-i18next';
import { ITale } from '../interfaces/Tale';
import { toggleCreatePressed, updateCoordinatesAsync } from '../redux/newTaleSlice';
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { MapLoadingDots } from './MapLoadingDots';
import { MapSelection } from './MapSelection';
import { MapAlertZoomOut } from './MapAlertZoomOut';
import { findMark } from '../marks';
import { TaleStackParamList } from '../navegation-components/TaleStack';
import { Particles } from './Particles';

interface Props {
  onRegionChangeComplete: (region: Region) => void;
  region: Region;
  handleMapPress: (event: any) => void;
  selectedLocation: LatLng | null;
  tales: ITale[];
  showLoading: boolean;
  showAlertZoom: boolean;
  selectingLocation: boolean;
  setSelectedLocation: React.Dispatch<React.SetStateAction<LatLng | null>>;
  handleNarrarPress: () => void;
  setSelectingLocation: Dispatch<SetStateAction<boolean>>;
}

export const HomeMap = (props: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigation<StackNavigationProp<TaleStackParamList, 'Home'>>();
  const dispatch = useDispatch<AppDispatch>();
  const shareYourTale: string = t('Share your tale!');
  const selectLocationOnTheMap: string = t('Select a location on the map');
  const createPressed = useSelector((state: RootState) => state.newTale.createPressed);

  useEffect(() => {
    if (createPressed) {
      props.handleNarrarPress();
    } else {
      props.setSelectingLocation(false);
    }
  }, [createPressed]);

  useFocusEffect(
    React.useCallback(() => {
      if (props.selectingLocation == false && props.selectedLocation == null) {
        dispatch(toggleCreatePressed(false));
      }
      return () => {
        // Aquí puedes agregar cualquier lógica de limpieza si es necesario
      };
    }, [dispatch]),
  );

  const saveCoordinates = (latitude: string, longitude: string) => {
    dispatch(updateCoordinatesAsync({ latitude, longitude }));
  };

  return (
    <View>
      <MapView
        onRegionChangeComplete={props.onRegionChangeComplete}
        showsMyLocationButton={true}
        showsUserLocation={true}
        style={{ width: '100%', height: '100%' }}
        region={props.region}
        customMapStyle={customMapStyle}
        onPress={props.handleMapPress} // Nuevo evento onPress
      >
        {props.selectedLocation && <Marker coordinate={props.selectedLocation} title={t('Ubicación seleccionada')} />}
        {props.tales.map((tale, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(tale.latitude),
              longitude: parseFloat(tale.longitude),
            }}
            title={tale.title}>
            {Platform.OS == 'ios' ? (
              <Particles>
                <Image
                  source={findMark(tale.mark)?.image}
                  style={{ width: 20, height: 20 }} // Ajusta el tamaño según sea necesario
                />
              </Particles>
            ) : (
              <Image
                source={findMark(tale.mark)?.image}
                style={{ width: 20, height: 20 }} // Ajusta el tamaño según sea necesario
              />
            )}

            <Callout
              style={{
                ...Platform.select({
                  ios: {
                    minWidth: 120, // Un mínimo de ancho para asegurar que el contenido no se recorte
                    maxWidth: 200, // Un máximo de ancho para mantener la caja de tamaño manejable
                    alignItems: 'center',
                    justifyContent: 'center',
                    // Otros estilos específicos de iOS que puedas necesitar
                  },
                  android: {
                    minWidth: 120,
                    maxWidth: 200,
                    // Estilos específicos para Android si los hay
                  },
                }),
              }}
              onPress={() =>
                navigation.navigate('TaleDisplay', {
                  tale: tale,
                  isCreation: false,
                  taleId: tale.id,
                })
              }>
              <View style={{ maxHeight: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{tale.title}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {props.showLoading && <MapLoadingDots />}
      {props.showAlertZoom && <MapAlertZoomOut />}

      {(props.selectingLocation || props.selectedLocation) && (
        <MapSelection
          navigation={navigation}
          saveCoordinates={saveCoordinates}
          selectLocationOnTheMap={selectLocationOnTheMap}
          selectedLocation={props.selectedLocation}
          setSelectedLocation={props.setSelectedLocation}
          shareYourTale={shareYourTale}
        />
      )}
    </View>
  );
};
