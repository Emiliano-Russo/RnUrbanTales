import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Button, Text } from '../../tool-components/index';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NewTaleStackParamList } from '../../App';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateStringPropertyAsync } from '../../redux/newTaleSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { debounce } from 'lodash';

const backgroundImage = require('../../assets/paper.png');

const { height } = Dimensions.get('window');

export const NewTaleNarrative = () => {
  const tale = useSelector((state: RootState) => state.newTale);
  const { t, i18n } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [narrative, setNarrative] = useState(tale.narrative);
  const navigation = useNavigation<StackNavigationProp<NewTaleStackParamList, 'Narration'>>();

  const saveNarrative = () => {
    dispatch(updateStringPropertyAsync({ property: 'narrative', value: narrative }));
    setHasUnsavedChanges(false);
  };

  const debouncedSaveNarrative = useCallback(
    debounce(() => {
      dispatch(updateStringPropertyAsync({ property: 'narrative', value: narrative }));
      setHasUnsavedChanges(false);
    }, 500),
    [narrative, dispatch],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} fontType="boldFont">
        {tale.title}
      </Text>
      <TextInput
        value={narrative}
        onChangeText={text => {
          setNarrative(text);
          setHasUnsavedChanges(true);
          debouncedSaveNarrative();
        }}
        multiline
        style={styles.textInput}
        placeholder="Start writing your tale here..."
      />
      <Text style={styles.characterCounter}>{tale.narrative.length}/8000</Text>

      <Button
        onPress={() => navigation.navigate('Anonymous')}
        title={t('Next')}
        style={{ marginTop: 50, width: 100, alignSelf: 'center' }}
      />
    </ScrollView>
  );
};

// Estilos actualizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  textInput: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    fontFamily: 'regularFont',
    backgroundColor: '#f8f8f8', // Un color de fondo ligeramente diferente para dar profundidad
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    borderWidth: 1, // Un borde sutil
    borderColor: '#e1e1e1', // Color del borde sutil
  },
  characterCounter: {
    textAlign: 'right',
    marginRight: 15,
    marginTop: 10,
    color: 'gray',
  },
  nextButton: {
    marginTop: 0,
    width: 100,
    alignSelf: 'center',
  },
});
