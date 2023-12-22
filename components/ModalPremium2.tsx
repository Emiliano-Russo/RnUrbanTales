import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { Text, Button } from '../tool-components/index';
import LinearGradient from 'react-native-linear-gradient';
import { premiumBenefits } from '../mocked-data/premium-benefits';

const Diamond = require('../assets/iconsHTML/white/diamond.png');
const Tick = require('../assets/iconsHTML/color/tick.png');

interface Props {
  setModalVisible: (value: boolean) => void;
  isModalVisible: boolean;
}

export const ModalPremium2 = (props: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isModalVisible}
      onRequestClose={() => {
        props.setModalVisible(false);
      }}>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={['#7D3C98', '#191970']} style={styles.modalView}>
          <View style={{ width: '100%' }}>
            <Button
              style={{ width: 40, borderRadius: 20, alignSelf: 'flex-end', backgroundColor: 'transparent' }}
              title="X"
              onPress={() => props.setModalVisible(false)}
            />
            <Image style={{ width: 200, height: 200, alignSelf: 'center' }} source={Diamond} />
            <View
              style={{
                alignItems: 'flex-start',
                alignSelf: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 34, fontWeight: '700', marginBottom: 10 }}>
                {t('Premium Access')}
              </Text>
              {premiumBenefits.map((benefit, index) => {
                return (
                  <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    <Image style={{ width: 20, height: 20, marginRight: 10 }} source={Tick} />
                    <Text style={{ color: 'white' }}>
                      {i18n.language == 'es'
                        ? benefit.titleEs
                        : i18n.language == 'pt'
                        ? benefit.titlePt
                        : benefit.titleEn}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.separator} />
            <Text style={{ color: 'white', alignSelf: 'center', marginTop: 40 }}>
              Try 3 Days <Text style={{ color: '#6FAEFF' }}>for free</Text>. Then $4.99/Month
            </Text>

            <Button
              style={{ width: 200, alignSelf: 'center', backgroundColor: '#6FAEFF', marginTop: 25 }}
              title="Try for free & Subscribe"
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </Modal>
  );
};

// Puedes modificar los estilos como prefieras
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  separator: {
    borderBottomWidth: 1, // Define el grosor de la línea
    borderBottomColor: '#dcdcdc', // Define el color de la línea
    marginTop: 50, // Espacio vertical arriba y abajo de la línea
    width: '40%',
    alignSelf: 'center',
    // Puedes agregar margen horizontal si quieres que la línea no se extienda a lo largo de todo el ancho
    // marginHorizontal: 10,
  },
});
