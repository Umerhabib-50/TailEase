import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, ReanimtaionScreen, RegisterScreen} from '../screens';

// import all screens here

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}>
      {/* <AuthStack.Screen name="animate" component={ReanimtaionScreen} /> */}
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="register" component={RegisterScreen} />
      {/* <AuthStack.Screen name="forgot" component={ForgotScreen} /> */}
    </AuthStack.Navigator>
  );
};
