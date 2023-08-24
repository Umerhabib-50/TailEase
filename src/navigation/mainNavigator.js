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
const MainStack = createBottomTabNavigator();
const homeName = 'home';
const detailsName = 'details';
const settingsName = 'setting';
const profileName = 'profile';
export const MainNavigator = () => {
  return (
    <MainStack.Navigator
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
      <MainStack.Screen name={homeName} component={HomeScreen} />
      <MainStack.Screen name={detailsName} component={DetailsScreen} />
      <MainStack.Screen name={settingsName} component={SettingScreen} />
      <MainStack.Screen name={profileName} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
