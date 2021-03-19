import { StyleSheet, Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const StatusBarHeight = getStatusBarHeight();
export const paddingTop = Platform.OS == "android" ? 0 : StatusBarHeight;
export const globalHeight = Dimensions.get("window").height * 0.1;
export const globalWidth = Dimensions.get("window").width * 0.1;


export const fs9 = 9;
export const fs10 = 10;
export const fs12 = 12;
export const fs13 = 13;
export const fs14 = 14;
export const fs15 = globalHeight * 0.18;
export const fs16 = globalHeight * 0.2;
export const fs17 = 17;
export const fs19 = 19;
export const fs21 = 21;
export const fs22 = 22;
export const fs24 = globalHeight * 0.3;
export const fs24ng = 24;
export const fs29 = 29;
export const fs33 = 33;
export const fs39 = 39;
export const fs44 = globalHeight * 0.5;
export const fs54 = 54;

export const colors = {
    white: '#fff',
    black: '#000',
    textColor: '#e90f18',//get started color "RED"
    blue: '#172b4d',//COntinue with phone
    bluishGrey: '#7a869a',
    grey: '#7a869a',//OTP page text Desc
    orange :'#ef7820',
    headerColor:'#0e1b42',
    facebookBlue:'#3c5a9a',
    termsAndcondition:"#bababa",
    showInfoLocColor:'#ffd2b1',
    infoShowLocationTextColor:'#170731',
    lightGrey:'#dddddd'
};

export const errorColor = "#F73D02CC";

export const FontFamily = {
    FontsFreeNetSFProDisplayMedium: "FontsFree-Net-SFProDisplay-Medium",
    FontsFreeNetSFProDisplayBold: "FontsFree-Net-SFProDisplay-Bold",
    FontsFreeNetSFProDisplayRegular: "FontsFree-Net-SFProDisplay-Regular",
    RobotoRegular: "Roboto-Regular",
    RobotoMedium: "Roboto-Medium",
    RobotBold: "Roboto-Bold",
    Helvatica: "Helvetica",
};

export const commonStyle = StyleSheet.create({
    borderedContainer: {
      borderStyle: "dashed",
    },
    container: {
      flex: 1,
      paddingTop: paddingTop,
    },
    Pressable: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: "absolute",
  
      alignItems: "center",
      justifyContent: "center",
    },
  });

export const navigationScreen = {
    // firendRequest: "friendRequest",
    splashScreen: "splashScreen",
    // chatScreen: "chatScreen",
  };