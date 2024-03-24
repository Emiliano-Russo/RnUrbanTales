import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export const AnimatedButton = ({ onPress, text }) => {
  // Usamos useSharedValue para manejar el valor de la animación
  const scale = useSharedValue(1);

  // Iniciamos la animación en el montaje del componente
  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 900, easing: Easing.exp }),
      -1, // Repetir indefinidamente
      true, // Autoreverse activado para volver al valor inicial suavemente
    );
  }, []);

  // Usamos useAnimatedStyle para crear estilos basados en valores animados
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Estilos de tu botón (background, padding, etc.)
    backgroundColor: '#f56798',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  text: {
    // Estilo del texto de tu botón
    color: '#ffffff',
  },
});
