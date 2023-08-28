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
        cardStyleInterpolator: ({current, next, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
                {
                  scale: next
                    ? next.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.9],
                      })
                    : 1,
                },
              ],
            },
          };
        },
      }}>
      <HomeStack.Screen name="homeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="wildLifeDetails"
        component={WildLifeDetailsScreen}
      />
    </HomeStack.Navigator>
  );
};
