import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Otp, SignIn, Gender, Passion } from "../screens/auth/Index";
import Splash from "../screens/splash/splash";
import FindNearest from "../screens/app/findNearest/FindNearest";
import DiscoverPartner from "../screens/app/discoverPartner/DiscoverPartner";

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
            <View style={{ backgroundColor: "#000000", flex: 1, top: globalHeight * 0.3 }}>
                <Stack.Navigator initialRouteName="signInScreen" screenOptions={{ headerTitleAlign: 'center', headerTintColor: colors.headerColor }} >
                    <Stack.Screen name="Register Number" component={SignIn} />
                    <Stack.Screen name="Verify Phone" component={Otp} />
                </Stack.Navigator>
            </View>
        );
    }
}
class GenPass extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#000000", flex: 1, top: globalHeight * 0.3 }}>
                <Stack.Navigator initialRouteName="Gender" screenOptions={{ headerTitleAlign: 'center', headerTintColor: colors.headerColor }} >
                    <Stack.Screen name="Gender" component={Gender} />
                    <Stack.Screen name="Passion" component={Passion} />
                </Stack.Navigator>
            </View>
        );
    }
}

class FindNearestTab extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#000000", flex: 1, top: globalHeight * 0.3 }}>
                <Stack.Navigator initialRouteName={"Find the Nearest"} screenOptions={{ headerTitleAlign: 'center', headerTintColor: colors.headerColor }}>
                    <Stack.Screen name="Find the Nearest" component={FindNearest} />
                    <Stack.Screen name="Discover Partner" component={DiscoverPartner} />
                </Stack.Navigator>
            </View>
        );
    }
}

export default class Navigator extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#000000", flex: 1 }}>
                <Stack.Navigator initialRouteName="splashScreen" headerMode={null}>
                    <Stack.Screen name="splashScreen" component={Splash} />
                    <Stack.Screen name="authScreen" component={Auth} />
                    <Stack.Screen name="authScreenAfter" component={GenPass} />
                    <Stack.Screen name="FindNearestTab" component={FindNearestTab} />
                </Stack.Navigator>
            </View>
        );
    }
}