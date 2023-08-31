import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, WildLifeDetailsScreen} from '../screens';
import PostsScreen from '../screens/home/reportAnimals/posts';

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
      <HomeStack.Screen name="postScreen" component={PostsScreen} />
    </HomeStack.Navigator>
  );
};
