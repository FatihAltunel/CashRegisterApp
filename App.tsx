import React from 'react';
import {SafeAreaView,StatusBar} from 'react-native';
import LoginScreen from './src/screens/Login';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <StatusBar/>
        <LoginScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
export default App;