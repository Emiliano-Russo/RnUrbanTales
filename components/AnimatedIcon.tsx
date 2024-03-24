import { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const AnimatedIcon = ({ focused, source, first_background, second_background }) => {
  // Valor compartido para la animación de escala y posición
  const scale = useSharedValue(1);
  const top = useSharedValue(0);

  // Estilos animados que se aplicarán al icono
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      top: top.value,
      position: 'absolute',
      // backgroundColor y borderRadius pueden ser estáticos si no se animan
      backgroundColor: first_background,
      padding: 5,
      borderRadius: 30,
    };
  });

  // Efecto para iniciar la animación cuando el icono está enfocado
  useEffect(() => {
    scale.value = withTiming(focused ? 1.4 : 1, { duration: 300 });
    top.value = withTiming(focused ? -20 : 0, { duration: 300 });
  }, [focused, scale, top]);

  // Decidiendo el color del contenedor interior basado en el estado enfocado
  const containerStyle = {
    backgroundColor: focused ? second_background : 'transparent',
    padding: 5,
    borderRadius: 20,
  };

  return (
    <Animated.View style={animatedStyle}>
      <View style={containerStyle}>
        <Image style={{ width: 20, height: 20 }} source={source} resizeMode="contain" />
      </View>
    </Animated.View>
  );
};
