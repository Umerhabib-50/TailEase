import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserProfileScreen} from '../screens';
// import {ProfileScreen} from '../screens';
const ProfileStack = createNativeStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="profileScreen" component={UserProfileScreen} />
    </ProfileStack.Navigator>
  );
};
