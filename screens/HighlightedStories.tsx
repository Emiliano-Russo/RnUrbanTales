import React, { useCallback, useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TaleBox } from '../components/TaleBox';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TaleService } from '../services/tale.service';
import { API_URL } from '@env';
import { ITaleMini } from '../interfaces/Tale';
import { StackNavigationProp } from '@react-navigation/stack';
import { TaleStackParamList } from '../App';

const taleService = new TaleService(API_URL);

export const Highlights = () => {
  const navigationTalStack = useNavigation<StackNavigationProp<TaleStackParamList, 'Home'>>();
  const [tales, setTales] = useState<ITaleMini[]>([]);
  const animatableRefs = useRef([]);

  const fetchTopLikedTales = useCallback(() => {
    taleService.getTopLiked().then(res => {
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
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
              onPress={() => navigationTalStack.navigate('TaleDisplay', { taleId: item.id })}
            />
          </Animatable.View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
