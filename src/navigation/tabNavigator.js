import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {COLORS, ImagesPath} from '../constant';
import {Text} from '../components';
import {HomeNavigator} from './homeNavigator';
import {ProfileNavigator} from './profileNavigator';
// import all screens here
const CustomTabBarButton = ({focused, iconName, label}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#F1EEF2',
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 7,
    }}>
    <Image
      source={iconName}
      style={{
        width: 20,
        height: 20,
      }}
    />
    {focused && (
      <Text color={COLORS.purple} style={{marginLeft: '3%'}}>
        {label}
      </Text>
    )}
  </View>
);
const TabNavigation = createBottomTabNavigator();
const homeName = 'home';
const detailsName = 'details';
const settingsName = 'setting';
const profileName = 'profile';
export const TabNavigator = () => {
  return (
    <TabNavigation.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarStyle: {height: 60},
        tabBarIcon: ({focused}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? ImagesPath.homeFill : ImagesPath.homeOut;
            label = 'home';
          } else if (rn === detailsName) {
            iconName = focused ? ImagesPath.love : ImagesPath.loveOut;
            label = 'details';
          } else if (rn === settingsName) {
            iconName = focused ? ImagesPath.msgFill : ImagesPath.msgOut;
            label = 'setting';
          } else if (rn === profileName) {
            iconName = focused ? ImagesPath.userFill : ImagesPath.userOut;
            label = 'profile';
          }

          return (
            <CustomTabBarButton
              focused={focused}
              iconName={iconName}
              label={label}
            />
          );
        },
        // tabBarActiveBackgroundColor: COLORS.purple,
        headerShown: false,
        tabBarLabel: '',
      })}>
      <TabNavigation.Screen name={homeName} component={HomeNavigator} />
      <TabNavigation.Screen name={detailsName} component={ProfileNavigator} />
      <TabNavigation.Screen name={settingsName} component={HomeNavigator} />
      <TabNavigation.Screen name={profileName} component={ProfileNavigator} />
    </TabNavigation.Navigator>
  );
};
