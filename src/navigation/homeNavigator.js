import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ReanimtaionScreen, WildLifeDetailsScreen} from '../screens';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      name="homeStack"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current, next, layouts}) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
              // Add more transformations as needed
            ],
          },
        }),
      }}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="wildLifeDetails"
        component={WildLifeDetailsScreen}
      />
      <HomeStack.Screen name="animate" component={ReanimtaionScreen} />
    </HomeStack.Navigator>
  );
};
