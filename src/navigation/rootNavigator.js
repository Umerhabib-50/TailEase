import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

const RootStack = createNativeStackNavigator();

function HomeScreen() {
  const data = useSelector(state => state.userLogin);
  console.log('data from home screen', data);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

const RootStackContainer = () => {
  return (
    <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
      {/* <RootStack.Screen name="authStack" component={AuthNavigator} />
      <RootStack.Screen name="mainStack" component={MainNavigator} /> */}

      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
