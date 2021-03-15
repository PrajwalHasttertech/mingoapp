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
import configureStore from './src/store';
import { Provider } from "react-redux";
import { colors } from "./src/constants/Dimensions";

const store = configureStore();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={"#fff"} barStyle={"light-content"} />
      <SafeAreaProvider>
        <StatusBar backgroundColor={"#000000"} barStyle={"light-content"} />
        <Provider store={store}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
