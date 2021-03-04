import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Otp, SignIn } from "../screens/auth/Index";
import Splash from "../screens/splash/splash";
import {
    colors,
    fs14,
    fs16,
    globalHeight,
    navigationScreen,
} from "../constants/Dimensions";

import HandleSvg from "../icons/HandleSvg";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

class Auth extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="signInScreen" screenOptions={{headerTitleAlign:'center',headerTintColor:colors.headerColor}} >
                <Stack.Screen name="Register Number" component={SignIn} />
                <Stack.Screen name="Verify Phone" component={Otp} />
            </Stack.Navigator>
        );
    }
}

export default class Navigator extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#000000", flex: 1 }}>
                <Stack.Navigator initialRouteName="splashScreen" headerMode="none">
                    <Stack.Screen name="authScreen" component={Auth} />
                    <Stack.Screen name="splashScreen" component={Splash} />
                </Stack.Navigator>
            </View>
        );
    }
}