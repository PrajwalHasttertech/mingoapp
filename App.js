/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Splash from './src/screens/app/splash/splash';
import SignIn from './src/screens/auth/SignIn';
import Otp from './src/screens/auth/Otp';


const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' showHideTransition='fade' translucent backgroundColor="transparent" />
      <SafeAreaView>
        {/* <Splash /> */}
        {/* <SignIn /> */}
        <Otp />
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
