import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const Particle: React.FC = () => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0.1); // Empezamos con la partícula más pequeña y menos visible

  // Inicializamos translateX y translateY en 0 para comenzar desde el centro
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Generamos un ángulo aleatorio en radianes y la distancia
  const angle = Math.random() * Math.PI * 2;
  const distance = 100 + Math.random() * 100;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { translateX: translateX.value }, { translateY: translateY.value }],
    };
  });

  React.useEffect(() => {
    opacity.value = withTiming(0, { duration: 3000, easing: Easing.out(Easing.exp) });
    scale.value = withTiming(0.5, { duration: 3000, easing: Easing.out(Easing.exp) });
    // Establecemos los valores finales para translateX y translateY
    translateX.value = withTiming(Math.cos(angle) * distance, { duration: 3000, easing: Easing.out(Easing.exp) });
    translateY.value = withTiming(Math.sin(angle) * distance, { duration: 3000, easing: Easing.out(Easing.exp) });
  }, []);

  return <Animated.View style={[styles.particle, animatedStyle, { width: 40, height: 40, borderRadius: 20 }]} />;
};

const styles = StyleSheet.create({
  particle: {
    position: 'absolute',
    backgroundColor: '#8B00FF',
  },
});

export const Particles: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles2.container}>
      {children}
      <View style={[StyleSheet.absoluteFillObject, styles2.particlesContainer]} pointerEvents="none">
        {[...Array(10).keys()].map(index => (
          <Particle key={index} />
        ))}
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  particlesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
