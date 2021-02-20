import React, { Component } from "react";
import { View, StyleSheet, Pressable, StatusBar, Text, Image, ToastAndroid } from "react-native";
import {
    fs13,
    fs29,
    fs15,
    globalHeight,
    globalWidth,
    FontFamily,
    colors,
    fs24,
    fs14,
    fs24ng,
    fs16
} from "../../constants/Dimensions";

import {
    WrappedRectangleButton,
    Header,
    WrappedText,
} from "../components";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { LeftArrowBlack } from "../../icons";

class Otp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: undefined,
            error: undefined,
            timer: 10,
            mobileNumber: "+91 XXXXXXXXXX",
            userName: "",

        };
    }

    showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Toast on react native works ",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };



    render() {
        // const { timer, mobileNumber, isLoading } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"} />

                <View style={{ flex: 1 }}>
                    <Header
                        headerText={"Verify Phone"}
                        headerTextStyle={styles.headerTextStyle}
                        containerStyle={{
                            justifyContent: "center",
                            height: globalHeight * 1.1,
                        }}
                    leftIcon={LeftArrowBlack}
                    onLeftIconPress={() => {
                        // this.props.navigation.goBack();
                        alert('hai')
                    }}
                    />

                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../icons/Logo_Register_MoB.png')}
                        />
                    </View>


                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight,
                        }}
                        text={"Enter OTP "}
                        textStyle={styles.textStyleEnterOTP}
                    />
                    {/* <Text style={styles.textStyleEnterOTP}>Enter OTP</Text> */}
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.1,
                        }}
                        text={"Enter 4 digit code. We'll text you on"}
                        textStyle={styles.textStyleEnterOTPDesc}
                    />
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.2,
                        }}
                        // text={"+91 " + mobileNumber}
                        text={"9995550100. "}
                        textStyle={[styles.textStyleEnterOTPDesc, { marginTop: globalHeight * 2.8 }]}
                        fontFamily={FontFamily.RobotoRegular}
                    />
                    <OTPInputView
                        style={styles.otpTextInput}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.otpInputStyle}
                        codeInputHighlightStyle={{
                            backgroundColor: colors.orange,
                            fontSize: 16,
                            color: colors.black,
                        }}
                    // onCodeChanged={(otp) => {
                    //     this.setState({ otp });
                    // }}
                    />
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <WrappedText
                            containerStyle={styles.otpTextContainer}
                            text={"  00.36"}
                            textStyle={[
                                styles.resendOtpText,
                                // timer == 0 ? { color: "#ffffff" } : { color: "#ffffff60" },
                            ]}
                        />
                        <WrappedText
                            containerStyle={styles.otpTextContainer}
                            text={" Seconds"}
                            textStyle={[
                                styles.resendOtpText, { color: colors.orange }
                                // timer == 0 ? { color: "#ffffff" } : { color: "#ffffff60" },
                            ]}
                        />
                    </View>

                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <WrappedText
                            containerStyle={styles.otpTextContainerResend}
                            text={"Didn't receive the OTP? "}
                            textStyle={[
                                styles.resendOtpText,
                                // timer == 0 ? { color: "#ffffff" } : { color: "#ffffff60" },
                            ]}
                        />
                        <WrappedText
                            containerStyle={styles.otpTextContainerResend}
                            text={" Resend"}
                            textStyle={[
                                styles.resendOtpText, { color: colors.orange }
                                // timer == 0 ? { color: "#ffffff" } : { color: "#ffffff60" },
                            ]}
                        />
                    </View>



                    {/* <Pressable
                        // onPress={() => {
                        //     this.resendOtp();
                        // }}
                        android_ripple={true}
                    >

                    </Pressable> */}

                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={() => this.showToastWithGravityAndOffset()}
                            backgroundColor={colors.textColor}
                            textColor={colors.white}
                            buttonText={"Verify And Create Account"}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

export default Otp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    otpContainer: {
        alignSelf: "center",
    },
    headerTextStyle: {
        color: "#000",
    },
    buttonContainer: {
        position: "absolute",
        bottom: "5%",
        left: "5%",
        right: "5%",
    },
    textInputStyle: {
        width: globalWidth,
    },
    otpTextInput: {
        marginTop: globalHeight * 3.5,
        width: globalWidth * 5,
        marginLeft: globalWidth * 2.5,
        height: globalHeight * 0.6,
    },
    otpTextContainer: {
        // alignSelf: "center",
        marginTop: globalHeight * 0.5,
    },
    otpTextContainerResend: {
        marginTop: globalHeight * 1.1,
    },
    resendOtpText: {
        fontSize: fs16,
    },
    textStyle1: {
        fontSize: fs15,
        color: colors.black,
    },
    textStyleEnterOTP: {
        color: colors.blue,
        fontSize: fs24ng,
        fontFamily: FontFamily.RobotoMedium,
        marginTop: globalHeight * 1.9,
    },
    textStyleEnterOTPDesc: {
        color: colors.grey,
        fontSize: fs14,
        fontFamily: FontFamily.RobotoMedium,
        marginTop: globalHeight * 2.7,
    },
    number: {
        fontSize: fs29,
        color: "#ffffff",
    },
    otpInputStyle: {
        height: globalHeight * 0.6,
        width: globalHeight * 0.6,
        borderRadius: globalHeight * 0.1,
        color: colors.black
    },
    button: {
        // position: "absolute",
        // bottom: "5%",
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: globalHeight * 2.3,
    },
    logoContainer: {
        alignItems: 'center',
        top: globalHeight * 0.7
    },
});
