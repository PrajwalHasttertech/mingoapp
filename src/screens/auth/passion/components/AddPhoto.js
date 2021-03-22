import React, {Component} from "react";
import {StyleSheet, Image, ActivityIndicator, View} from "react-native";
import {
    fs16,
    fs13,
    fs17,
    fs44,
    globalHeight,
    globalWidth,
    paddingTop,
    errorColor,
} from "../../../../constants/Dimension";
import Ripple from "react-native-material-ripple";
import {WrappedText} from "../../../components";

class AddPhoto extends Component {
    render() {
        const {
            buttonSource,
            onPress,
            buttonText,
            style,
            isLoading,
            containerStyle,
            selected,
        } = this.props;

        return (
            <View>
                <Ripple
                    style={[styles.container, containerStyle]}
                    rippleCentered={true}
                    onPress={() => {
                        if (!isLoading) {
                            onPress();
                        }
                    }}
                >
                    {buttonSource ? (
                        <Image
                            source={buttonSource}
                            style={!style ? styles.buttonIcon : style}
                            resizeMode={style ? "contain" : null}
                        />
                    ) : (
                        <View />
                    )}
                </Ripple>
                <WrappedText
                    containerStyle={{
                        alignSelf: "center",
                        marginTop: globalHeight,
                    }}
                    text={buttonText}
                    textStyle={styles.textStyle1}
                    fontFamilyNo={5}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fdfdfd",
        alignItems: "center",
        justifyContent: "center",
        height: globalHeight,
        width: globalHeight,
        borderRadius: globalHeight * 0.5,
    },
    buttonIcon: {
        height: globalHeight * 0.7,
        width: globalHeight * 0.7,
        resizeMode: "contain",
    },
    textStyle1: {
        color: "#000000",
        fontSize: fs13,
    },
});
export default AddPhoto;
