import { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

export const AnimatedIcon = ({ focused, source }) => {
  console.log('Animated Icon... focused:', focused);
  // Valor compartido para la animación de escala
  const scale = useSharedValue(1);
  const top = useSharedValue(0);

  // Estilos animados que se aplicarán al icono
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      top: top.value,
      position: 'absolute',
      backgroundColor: '#c7ccd4',
      padding: 5,
      borderRadius: 30,
    };
  });

  // Efecto para iniciar la animación cuando el icono está enfocado
  useEffect(() => {
    console.log('Focused ha cambiado:', focused);
    scale.value = withSpring(focused ? 1.4 : 1);
    top.value = withSpring(focused ? -20 : 0);
  }, [focused]);

  return (
    <Animated.View style={animatedStyle}>
      <View style={{ backgroundColor: '#E956C6', padding: 5, borderRadius: 20 }}>
        <Image style={{ width: 20, height: 20 }} source={source} resizeMode="contain" />
      </View>
    </Animated.View>
  );
};
