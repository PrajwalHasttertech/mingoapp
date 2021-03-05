import React, {Component} from "react";
import {StyleSheet, Image, ActivityIndicator, View} from "react-native";
import {
    fs21,
    globalHeight,
    globalWidth,
    paddingTop,
    errorColor,
    FontFamily,
} from "../../../../constants/Dimensions";
import Ripple from "react-native-material-ripple";
import {WrappedText} from "../../../components";
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
                        {backgroundColor: !selected ? "#FFEEFD" : "#3C0FC7"},
                    ]}
                    onPress={() => {
                        if (!selected) {
                            onPress();
                        }
                    }}
                    rippleContainerBorderRadius={globalHeight * 0.75}
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
                </Ripple>
                <WrappedText
                    containerStyle={{
                        alignSelf: "center",
                        marginTop: globalHeight * 0.2,
                    }}
                    text={buttonText}
                    textStyle={styles.textStyle1}
                    fontFamily={FontFamily.FontsFreeNetSFProDisplayBold}
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
        height: globalHeight * 1.5,
        width: globalHeight * 1.5,
        borderRadius: globalHeight * 0.75,
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
