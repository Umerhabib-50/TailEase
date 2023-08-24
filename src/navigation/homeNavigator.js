import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen} from '../screens';
const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
      <HomeStack.Screen name="detail" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
