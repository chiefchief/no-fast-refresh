import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialScreen } from './InitialScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    InitialScreen: InitialScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
