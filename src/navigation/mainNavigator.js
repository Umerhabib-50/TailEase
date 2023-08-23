import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/main';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {COLORS, ImagesPath} from '../constant';
import {DetailsScreen, SettingScreen} from '../screens';
import {Text} from '../components';

// import all screens here
const CustomTabBarButton = ({focused, iconName, label}) => (
  <View style={{display: 'flex', flexDirection: 'row'}}>
    <Image
      source={iconName}
      style={{
        width: 20,
        height: 20,
      }}
    />
    <Text
      color={focused ? COLORS.white : COLORS.purple}
      style={{marginLeft: '3%'}}>
      {label}
    </Text>
  </View>
);
const MainStack = createBottomTabNavigator();
const homeName = 'home';
const detailsName = 'details';
const settingsName = 'setting';
export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarStyle: {height: 70},
        tabBarIcon: ({focused}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? ImagesPath.grooming : ImagesPath.melatonin;
            label = 'home';
          } else if (rn === detailsName) {
            iconName = focused ? ImagesPath.grooming : ImagesPath.melatonin;
            label = 'details';
          } else if (rn === settingsName) {
            iconName = focused ? ImagesPath.grooming : ImagesPath.melatonin;
            label = 'setting';
          }

          return (
            <CustomTabBarButton
              focused={focused}
              iconName={iconName}
              label={label}
            />
          );
        },
        tabBarActiveBackgroundColor: COLORS.purple,
        headerShown: false,
        tabBarLabel: '',
      })}>
      <MainStack.Screen name={homeName} component={HomeScreen} />
      <MainStack.Screen name={detailsName} component={DetailsScreen} />
      <MainStack.Screen name={settingsName} component={SettingScreen} />
    </MainStack.Navigator>
  );
};
