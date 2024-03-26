import { createStackNavigator } from '@react-navigation/stack';
import { Highlights } from '../screens/HighlightedStories';
import { TaleDisplay } from '../screens/TaleDisplay';

export type HighlightStackParamList = {
  Highlight: undefined;
  TaleDisplayHighlight: { taleId: string };
};

const HighlightStack = createStackNavigator<HighlightStackParamList>();

export const HighlightNavigator = () => {
  return (
    <HighlightStack.Navigator>
      <HighlightStack.Screen name="Highlight" component={Highlights} options={{ headerShown: false }} />
      <HighlightStack.Screen name="TaleDisplayHighlight" component={TaleDisplay} options={{ title: '' }} />
    </HighlightStack.Navigator>
  );
};
