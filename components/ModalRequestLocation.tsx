import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, Platform, PermissionsAndroid } from 'react-native';
import { Button } from '../tool-components/index';
import Geolocation from 'react-native-geolocation-service';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRequestLocation = (props: Props) => {
  const [status, setStatus] = useState<string | undefined>(undefined);
  const handleAllowLocation = () => {
    // Lógica para manejar el permiso de ubicación
    handleLocationAccess();
    props.setModalVisible(false);
  };

  const handleDenyLocation = () => {
    // Lógica para manejar la negación de ubicación
    props.setModalVisible(false);
  };

  const handleLocationAccess = async () => {
    try {
      let permission;

      if (Platform.OS === 'ios') {
        // Solicitud de permisos para iOS
        permission = await Geolocation.requestAuthorization('whenInUse');
      } else {
        // Solicitud de permisos para Android
        permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'Permiso de Ubicación',
          message: 'Esta aplicación necesita acceso a tu ubicación.',
          buttonNeutral: 'Pregúntame Luego',
          buttonNegative: 'Cancelar',
          buttonPositive: 'OK',
        });
      }

      setStatus(permission);

      if (permission === 'granted' || permission === PermissionsAndroid.RESULTS.GRANTED) {
        // Obtiene la posición actual si se concede el permiso
        Geolocation.getCurrentPosition(
          position => {
            console.log(position); // Maneja la posición aquí
            // navigation.dispatch(StackActions.replace('App'));
          },
          error => {
            // Maneja el error aquí
            console.error(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        console.error('No se ha dado permiso para acceder a la ubicación');
      }
    } catch (error) {
      console.error('Error al solicitar permisos de ubicación:', error);
    }
  };

  return (
    <Modal transparent={true} visible={props.modalVisible} onRequestClose={() => props.setModalVisible(false)}>
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPressOut={() => props.setModalVisible(false)}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            ¡Descubre las historias cercanas! 🌍 Para brindarte una experiencia completa en Urban Tales, es crucial
            acceder a tu ubicación.
          </Text>
          <Text style={styles.modalText}>
            Si no permites el acceso, te ubicaremos en una zona aleatoria del mapa, limitando la experiencia
            personalizada que podemos ofrecerte.
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Button title="Permitir ubicación" onPress={handleAllowLocation} />
            <Button title="Explorar sin ubicación" onPress={handleDenyLocation} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});
