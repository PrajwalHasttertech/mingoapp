import React, {Component} from "react";
import {Text, StyleSheet, View, Pressable} from "react-native";
import {globalHeight, fs19, FontFamily} from "../../constants/Dimensions";

class WrappedButton extends Component {
    render() {
        const {
            backgroundColor,
            buttonText,
            onPress,
            textColor,
            opacity,
            containerStyle,
            textStyle,
            elevation,
        } = this.props;
        return (
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: backgroundColor,
                        opacity: opacity || 1,
                    },
                    containerStyle,
                ]}
            >
                <Pressable
                    style={styles.Pressable}
                    android_ripple={{color: "#00000033", radius: 200}}
                    onPress={() => {
                        onPress();
                    }}
                >
                    <Text
                        style={[
                            {
                                color: textColor,
                                opacity: 1,
                                fontSize: fs19,
                                fontFamily:
                                    FontFamily.FontsFreeNetSFProDisplayMedium,
                            },
                            textStyle,
                        ]}
                    >
                        {buttonText}
                    </Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: globalHeight * 0.7,
        borderRadius: globalHeight * 0.5,
        overflow: "hidden",
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
export default WrappedButton;
