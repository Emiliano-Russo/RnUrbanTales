import React, { useCallback, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TaleBox } from '../components/TaleBox';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TaleService } from '../services/tale.service';
import { API_URL } from '@env';
import { ITaleMini } from '../interfaces/Tale';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaleStackParamList } from '../navegation-components/TaleStack';
import { Text } from '../tool-components/index';
import { HighlightStackParamList } from '../navegation-components/HighlightsStack';

const taleService = new TaleService(API_URL);

export const Highlights = () => {
  const navigationTalStack = useNavigation<StackNavigationProp<HighlightStackParamList, 'Highlight'>>();
  const [tales, setTales] = useState<ITaleMini[]>([]);
  const animatableRefs = useRef([]);
  const { t, i18n } = useTranslation();

  const fetchTopLikedTales = useCallback(() => {
    taleService.getTopLiked(i18n.language.toUpperCase()).then(res => {
      setTales(res);
      animatableRefs.current = animatableRefs.current.slice(0, res.length);
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchTopLikedTales();
      // Reiniciar las animaciones
      animatableRefs.current.forEach(ref => ref && ref.animate('fadeInLeft'));
    }, [fetchTopLikedTales]),
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10, color: 'black', marginBottom: 10 }}>
        Highlights
      </Text>
      <FlatList
        numColumns={3}
        data={tales}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item, index }) => (
          <Animatable.View
            ref={ref => (animatableRefs.current[index] = ref)}
            animation="fadeInLeft"
            delay={index * 100}>
            <TaleBox
              image={item.image}
              title={item.title}
              onPress={() => navigationTalStack.navigate('TaleDisplayHighlight', { taleId: item.id })}
            />
          </Animatable.View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
