import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from './InitialScreen';
import { SecondScreen } from './SecondScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    InitialScreen: {
      screen: InitialScreen,
      options: {
        headerShown: false,
      },
    },
    SecondScreen: SecondScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
