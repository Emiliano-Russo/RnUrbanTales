import { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const AnimatedFromLeft = ({ children }) => {
  const positionX = useSharedValue(-100);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: positionX.value }],
    };
  });

  useEffect(() => {
    positionX.value = withSpring(0, { stiffness: 100, damping: 50 });
  }, []);

  return <Animated.View style={[animatedStyles]}>{children}</Animated.View>;
};
