import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './authNavigator';

const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  return (
    <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
      <RootStack.Screen name="authStack" component={AuthNavigator} />
    </RootStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
