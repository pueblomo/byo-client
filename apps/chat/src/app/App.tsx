/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { Conversation } from '@byo-client/pages';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ height: '100%' }}>
          <Conversation />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
