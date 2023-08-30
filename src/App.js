import React, {useEffect} from 'react';

import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

// navigation
import {RootNavigator} from './navigation/rootNavigator';

import {StatusBar, Text, View} from 'react-native';
// redux setup
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './redux/store';
import {COLORS} from './constant';

const App = () => {
  // useEffect(() => {
  //   // StatusBar.setTranslucent(true);
  //   StatusBar.setBackgroundColor('red');
  // }, []);
  return (
    <>
      <StoreProvider store={store}>
        <PersistGate persistor={persistedStore}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootNavigator />
          </SafeAreaProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
};

export default App;
