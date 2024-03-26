import { Modal, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text } from '../tool-components/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useTranslation } from 'react-i18next';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const ModalSignInNow = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'App'>>();
  const { t } = useTranslation();

  return (
    <Modal
      transparent={true} // Permite que el fondo sea transparente
      visible={props.visible}
      animationType="none" // No hay animación para el ejemplo simple
    >
      {/* Fondo oscuro semitransparente (opcional) */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Esto crea el efecto de oscurecimiento del fondo
        }}>
        <View style={styles.modalContent}>
          {/* Botón de cierre */}
          <TouchableOpacity style={styles.closeButton} onPress={() => props.setVisible(false)}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{t('Do you have a story to tell?')}</Text>
          <Text style={styles.modalMessage}>{t('Login now and let your voice be heard')}</Text>
          <TouchableOpacity
            onPress={() => {
              props.setVisible(false);
              navigation.navigate('Auth');
            }}
            style={[styles.modalButton, styles.modalButtonSecondary]}>
            <Text style={styles.buttonText}>{t('Sign In')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    width: '75%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative', // Importante para posicionar el botón de cierre absoluto
  },
  closeButton: {
    position: 'absolute', // Se posiciona respecto a su contenedor más cercano con posición relativa
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonSecondary: {
    backgroundColor: '#5D3FD3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
