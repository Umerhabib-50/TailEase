import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, WildLifeDetailsScreen} from '../screens';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      name="homeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="wildLifeDetails"
        component={WildLifeDetailsScreen}
      />
    </HomeStack.Navigator>
  );
};
