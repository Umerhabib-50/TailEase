import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './authNavigator';
import {TabNavigator} from './tabNavigator';
import {CardStyleInterpolators} from '@react-navigation/stack'; // Import CardStyleInterpolators

const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  const data = useSelector(state => state?.userLogin?.userLogin);
  const token = data?.user?.token;

  return (
    <RootStack.Navigator
      name="root"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
