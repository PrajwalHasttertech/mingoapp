import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text, Image } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

import { colors, FontFamily, fs14, globalHeight, globalWidth } from "../../constants/Dimensions";
import { WrappedRectangleButton, WrappedTextInput } from "../components";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '+91',
            mobileNumber: "",
            error: {},
            fetchError: "",
        };
    }

    componentDidMount() {
        StatusBar.setBackgroundColor("#000000");
        StatusBar.setBarStyle("light-content");
    }

    render() {
        const {
            mobileNumber,
            fetchError,
            error,
        } = this.state;
        return (
            <View>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../icons/Logo_Register_MoB.png')}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.contWithPhno}>Continue with Phone </Text>
                    <Text numberOfLines={2} ellipsizeMode='clip' style={styles.contWithPhnoDesc}> you’ll receive a 6 digit code  </Text>
                    <Text style={styles.contWithPhnoDesc1}> to  verify next. </Text>
                </View>


                <View style={styles.mobNoContainer}>
                    <View style={{ width: globalWidth * 2, left: 8 }}>
                        <DropDownPicker
                            items={[
                                { label: '+91', value: '+91' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                                { label: '+380', value: '+380' },
                                { label: '+33', value: '+33' },
                            ]}
                            defaultValue={this.state.country}
                            containerStyle={{ height: 40 }}
                            style={{ backgroundColor: '#fff', borderStyle: 'dotted', borderColor: '#fff' }}
                            itemStyle={{ justifyContent: 'flex-start' }}
                            dropDownStyle={{ backgroundColor: '#fff', borderColor: '#fff' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                    </View>
                    <View style={styles.buttonContainerMob}>
                        <WrappedTextInput
                            value={mobileNumber}
                            onChangeText={(mobileNumber) => {
                                this.setState({
                                    mobileNumber: mobileNumber,
                                });
                            }}
                            style={[styles.textContainerMob, { backgroundColor: colors.white }]}
                            placeholderTextColor={colors.textColor}
                            textInputStyle={styles.textInput}
                            placeholder={"Mobile Number"}
                            keyboardType={"numeric"}
                            errorContainer={{}}
                            errorText={error.mobileNumber}
                            errorTextColor={colors.white}
                        />
                    </View>
                    <View style={{ width: globalWidth * 1.5, backgroundColor: '#fff', height: globalHeight * 0.62 }}>
                        <Image
                            style={styles.checked}
                            source={require('../../icons/checked.png')}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <WrappedRectangleButton
                        onPress={() => {
                            alert('hai')
                        }}
                        backgroundColor={colors.textColor}
                        textColor={colors.white}
                        buttonText={"Continue"}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contWithPhno: {
        fontSize: 24,
        color: colors.blue,
        fontFamily: FontFamily.RobotoMedium
    },
    contWithPhnoDesc: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 14,
        color: colors.bluishGrey,
        fontFamily: FontFamily.RobotoRegular,
        marginTop: globalHeight * 0.3,
        // marginLeft: globalWidth * 2.5,
        // marginRight: globalWidth * 2.7
    },
    contWithPhnoDesc1: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 14,
        color: colors.bluishGrey,
        fontFamily: FontFamily.RobotoRegular,
        // marginLeft: globalWidth * 2.5,
        // marginRight: globalWidth * 2.7
    },
    logoContainer: {
        alignItems: 'center',
        top: globalHeight * 1.5
    },
    textContainer: {
        alignItems: 'center',
        top: globalHeight * 3
    },
    buttonContainer: {
        top: globalHeight * 5.1,
        marginLeft: '5%',
        marginRight: '5%',
    },
    mobNoContainer: {
        flexDirection: 'row',
        top: globalHeight * 3.5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    textContainerMob: {
        height: globalHeight * 0.65,
        // borderRadius: globalHeight * 0.06,
        color: "#ffffff",
    },
    buttonContainerMob: {
        width: globalWidth * 5
    },
    checked: {
        height: globalHeight * 0.3,
        width: globalWidth * 0.5,
        top: globalHeight * 0.17,
        left: globalWidth * 0.7
    },
    textInput: {
        color: "#000",
        marginLeft: globalWidth * 0.2,
        fontSize: fs14
    },
})

export default SignIn;