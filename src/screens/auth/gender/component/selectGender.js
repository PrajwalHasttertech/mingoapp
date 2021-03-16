import React, { Component } from "react";
import { StyleSheet, Image, ActivityIndicator, View } from "react-native";
import {
    fs21,
    globalHeight,
    globalWidth,
    paddingTop,
    errorColor,
    FontFamily,
    colors,
} from "../../../../constants/Dimensions";
import Ripple from "react-native-material-ripple";
import { WrappedText } from "../../../components";
class SelectGender extends Component {
    render() {
        const {
            buttonSource,
            onPress,
            buttonText,
            style,
            isLoading,
            containerStyle,
            selected,
            key,
        } = this.props;

        return (
            <View key={key}>
                <Ripple
                    style={[
                        styles.container,
                        containerStyle,
                        { backgroundColor: !selected ? undefined : colors.white },
                        { borderWidth: !selected ? 0 : 3 }
                    ]}
                    onPress={() => {
                        if (!selected) {
                            onPress();
                        }
                    }}
                    rippleContainerBorderRadius={globalHeight * 0.1}
                >
                    {buttonSource ? (
                        <Image
                            source={buttonSource}
                            style={!style ? styles.buttonIcon : style}
                            resizeMode={style ? "contain" : "contain"}
                        />
                    ) : (
                            <View />
                        )}

                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.2,
                        }}
                        text={buttonText}
                        textStyle={styles.textStyle1}
                        fontFamily={FontFamily.FontsFreeNetSFProDisplayBold}
                    />
                </Ripple>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        height: globalHeight * 2.3,
        width: globalHeight * 1.9,
        borderRadius: globalHeight * 0.1,
        borderColor: colors.orange,
    },
    buttonIcon: {
        height: globalHeight,
        width: globalHeight * 0.7,
        resizeMode: "contain",
    },
    textStyle1: {
        color: "#3c0fc7",
        fontSize: fs21,
    },
});
export default SelectGender;
