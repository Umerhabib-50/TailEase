import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/main';
import { ReportDetailsScreen } from '../screens';

// import all screens here

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: ''},
      }}>
      <MainStack.Screen name="report_details" component={ReportDetailsScreen} />
      <MainStack.Screen name="home" component={HomeScreen} />
      
    </MainStack.Navigator>
  );
};
