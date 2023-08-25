import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {AuthNavigator} from './authNavigator';
import {TabNavigator} from './tabNavigator';

const RootStack = createNativeStackNavigator();

const RootStackContainer = () => {
  const data = useSelector(state => state?.userLogin?.userLogin);
  // const token = data?.token;
  const token = true;
  return (
    <RootStack.Navigator name="root" screenOptions={{headerShown: false}}>
      {/* <RootStack.Screen name="mainStack" component={MainNavigator} /> */}
      {token ? (
        <RootStack.Screen name="mainStack" component={TabNavigator} />
      ) : (
        <RootStack.Screen name="authStack" component={AuthNavigator} />
      )}
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
