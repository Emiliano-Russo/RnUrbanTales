import { useTranslation } from 'react-i18next';
import { AuthWrapper } from '../wrappers/AuthWrapper';
import { createStackNavigator } from '@react-navigation/stack';
import { ITaleCreate } from '../interfaces/Tale';
import { NewTaleTitle } from '../screens/NewTale/Title';
import { NewTaleImage } from '../screens/NewTale/Image';
import { NewTaleNarrative } from '../screens/NewTale/Narrative';
import { NewTaleCategory } from '../screens/NewTale/Category';
import { NewTaleMark } from '../screens/NewTale/Mark';
import NewTaleIsAnonymous from '../screens/NewTale/IsAnonymous';

export type NewTaleStackParamList = {
  Title: undefined;
  Image: undefined;
  Narration: undefined;
  Category: undefined;
  Mark: undefined;
  Anonymous: undefined;
  TaleDisplay: { tale: ITaleCreate; isCreation?: boolean };
};

const NewTaleStack = createStackNavigator<NewTaleStackParamList>();

export const NewTaleNavigator = () => {
  const { t } = useTranslation();
  const title = t('Title');
  const image = t('Image');
  const narration = t('Narration');
  const category = t('Category');
  const mark = t('Mark');
  const anonymous = t('Anonymous');

  return (
    <AuthWrapper>
      <NewTaleStack.Navigator>
        <NewTaleStack.Screen
          name="Title"
          component={NewTaleTitle}
          options={{
            headerTitle: title,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
        <NewTaleStack.Screen
          name="Image"
          component={NewTaleImage}
          options={{
            headerTitle: image,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
        <NewTaleStack.Screen
          name="Narration"
          component={NewTaleNarrative}
          options={{
            headerTitle: narration,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
        <NewTaleStack.Screen
          name="Category"
          component={NewTaleCategory}
          options={{
            headerTitle: category,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
        <NewTaleStack.Screen
          name="Mark"
          component={NewTaleMark}
          options={{
            headerTitle: mark,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
        <NewTaleStack.Screen
          name="Anonymous"
          component={NewTaleIsAnonymous}
          options={{
            headerTitle: anonymous,
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
            },
          }}
        />
      </NewTaleStack.Navigator>
    </AuthWrapper>
  );
};
