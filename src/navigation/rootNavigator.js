import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './authNavigator';
import {TabNavigator} from './tabNavigator';

// Define the RootStackNavigator outside of the component
const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  const data = useSelector(state => state?.userLogin?.userLogin);
  const token = data?.user?.token;

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators?.forHorizontalIOS,
      }}>
      {token ? (
        <RootStack.Screen name="mainStack" component={TabNavigator} />
      ) : (
        <RootStack.Screen name="authStack" component={AuthNavigator} />
      )}
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
