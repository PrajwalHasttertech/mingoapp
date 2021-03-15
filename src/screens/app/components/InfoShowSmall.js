import React, { Component } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import WrappedText from "../../components/WrappedText";
import {
    commonStyle,
    FontFamily,
    fs16,
    globalWidth,
} from "../../../constants/Dimensions";

class InfoShow extends Component {
    render() {
        const {
            text,
            textStyle,
            containerStyle,
            fontFamilyNo,
            textContainerStyle,
            buttonSource,
        } = this.props;
        return (
            <View style={[styles.container, containerStyle]}>

                { buttonSource && (
                    <Image
                        source={buttonSource}
                        style={styles.buttonIcon}
                        resizeMode={"contain"}
                    />
                )}
                <WrappedText
                    text={"  "+text}
                    textStyle={textStyle}
                    containerStyle={textContainerStyle}
                    fontFamily={FontFamily.RobotBold}
                />
            </View>
        );
    }
}

export default InfoShow;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        paddingHorizontal: globalWidth * 0.4,
        paddingVertical: 4,
        borderRadius: globalWidth,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonIcon: {
        height: 15,
        width: 15,
        borderRadius: 10,
        resizeMode: "contain",
    },
});
