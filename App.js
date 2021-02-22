/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";



const App = () => {
  return (
    // <>
    //   <StatusBar barStyle='light-content' showHideTransition='fade' translucent backgroundColor="transparent" />
    //   {/* <SafeAreaView> */}
    //   {/* <Splash /> */}
    //   {/* <SignIn /> */}
    //   {/* <Otp /> */}
    //   <NavigationContainer>
    //     <Navigator />
    //   </NavigationContainer>
    //   {/* </SafeAreaView>  */}

    // </>
    <SafeAreaProvider>
      <StatusBar backgroundColor={"#000000"} barStyle={"light-content"} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
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
