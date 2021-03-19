import React, { Component } from "react";
import { View, StyleSheet, Pressable, StatusBar, Text, Image, ToastAndroid, KeyboardAvoidingView } from "react-native";
import { DataHandling } from "../../server/DatahandlingHoc";
import { routeNames } from "../../server/route";
import SimpleToast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
    WrappedRectangleButton,
    Header,
    WrappedText,
} from "../components";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { LeftArrowBlack } from "../../icons";



class Otp extends DataHandling {
    constructor(props) {
        super(props);

        this.state = {
            otp: undefined,
            error: undefined,
            timer: 30,
            mobileNumber: "+91 XXXXXXXXXX",
            userName: "",
        };
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            this.setState({ timer: this.state.timer - 1 });
        }, 1000);
    };

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.timer);
        }
    }

    navigateTo = (screen) => {
        this.props.navigation.replace(screen);
    };

    verifyOtp = async () => {
        //this.startTimer();
        this.setState({ isLoading: true });
        const { mobileNumber, otp, userName } = this.state;
        const fcmToken = await AsyncStorage.getItem("fcmToken");
        try {
            const result = await this.fetchData(routeNames.verifyOtp, {
                mobile_number: "+91" + mobileNumber,
                otp: otp,
                device_token: fcmToken,
            });
            console.log("The console log of result is -->",result);
            if (result) {
                this.props.navigation.replace("authScreenAfter");
                // await this.storeData(result.data.data);
                // Axios.defaults.headers.common = {                                    //to be fixed soon
                //     Authorization: `Bearer ${result.data.data.access_token}`,
                // };

                // console.log("Lets Check Result");
                // this.checkNavigationState();                                         //to be fixed soon
                // this.props.navigation.replace("Gender");
            } else {
            }
        } catch (error) {
            console.log(error);
            this.setLoader(false);
        }
    };

    resendOtp = async () => {
        try {
            "+91 " + console.log(this.state.timer, "resend");
            if (this.state.timer < 1) {
                this.setState({ timer: 30 });
                this.startTimer();
            }
            this.setState({ isLoading: true });

            const result = await this.fetchData(routeNames.resendOtp, {
                mobile_number: "+91" + this.state.mobileNumber,
            });
            console.log(result);
            if (result) {
                SimpleToast.show("OTP sent to provided mobile number.");
                this.setState({ isLoading: false });
            }
        } catch (error) {
            this.setLoader(false);
        }
        //resendOtp callback
    };

    setMobileNumber = () => {
        const mobileNumber = this.props.route.params.mobileNumber;
        this.setState({ mobileNumber })
    }

    componentDidMount() {
        this.setMobileNumber();
        this.startTimer();
    }


    render() {
        const { timer, mobileNumber, isLoading } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />

                <View style={{ flex: 1 }}>

                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../icons/Logo_Register_MoB.png')}
                        />
                    </View>


                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.5,
                        }}
                        text={"Enter OTP "}
                        textStyle={styles.textStyleEnterOTP}
                    />
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.5
                        }}
                        text={"Enter 4 digit code. We'll text you on"}
                        textStyle={styles.textStyleEnterOTPDesc}
                    />
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.2,
                        }}
                        text={"+91 " + mobileNumber}
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
                        onCodeChanged={(otp) => {
                            this.setState({ otp });
                        }}
                    />
                    <View style={{ flexDirection: "row", alignSelf: "center", }}>
                        <WrappedText
                            containerStyle={styles.otpTextContainer}
                            text={timer != 0 && `${timer}`}
                            textStyle={[
                                styles.resendOtpText,
                                // timer == 0 ? { color: "#ffffff" } : { color: "#ffffff60" },
                            ]}
                        />
                        <WrappedText
                            containerStyle={styles.otpTextContainer}
                            text={timer != 0 && " Seconds"}
                            textStyle={[styles.resendOtpText, { color: colors.orange }]}
                        />
                    </View>

                    <View style={{ flexDirection: "row", alignSelf: "center", marginRight: globalWidth }}>
                        <WrappedText
                            containerStyle={styles.otpTextContainerResend}
                            text={"Didn't receive the OTP? "}
                            textStyle={[
                                styles.resendOtpText,
                            ]}
                        />

                        <Pressable
                            onPress={() => {
                                timer == 0 ? this.resendOtp() : SimpleToast.show("Wait till the timer ends.");
                                // this.resendOtp();
                                // alert('hai')
                            }}
                            android_ripple={true}
                            style={{ position: 'absolute', left: globalWidth * 4 }}
                        >
                            <WrappedText
                                containerStyle={styles.otpTextContainerResend}
                                text={" Resend"}
                                textStyle={[
                                    styles.resendOtpText,
                                    timer == 0 ? { color: colors.orange } : { color: colors.grey },
                                ]}
                            />
                        </Pressable>
                    </View>

                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={() => { this.verifyOtp(); }}
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
        // flex: 1,
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
        // marginTop: globalHeight * 3.5,
        // width: '70%',
        // marginLeft: globalWidth * 1.5,
        // height: globalHeight * 0.6,
        marginTop: globalHeight * 3.2,
        height: globalHeight,
        width: "60%",
        alignSelf: "center",
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
        marginTop: globalHeight * 2.5,
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
        // flex:1,
        // justifyContent:'flex-end'
    },
    logoContainer: {
        alignItems: 'center',
        top: globalHeight * 0.7
    },
});
