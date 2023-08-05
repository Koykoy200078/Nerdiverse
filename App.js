import React from 'react';
import {View, StatusBar} from 'react-native';
import {AppNav, backgroundStyles, isDarkMode} from './src';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        translucent={false}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyles.backgroundColor}
      />

      <AppNav />
    </>
  );
};

export default App;
