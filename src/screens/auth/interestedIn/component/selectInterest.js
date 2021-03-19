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

class SelectInterest extends Component {
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
            <View key={key} >
                <Ripple
                    style={[
                        styles.container,
                        containerStyle,
                        { backgroundColor: !selected ? colors.white : colors.orange },
                        { borderWidth: !selected ? 3 : 3 },
                        { borderColor: !selected ? colors.lightGrey : colors.orange, }
                    ]}
                    onPress={() => {
                        if (!selected) {
                            onPress();
                        }
                    }}
                    rippleContainerBorderRadius={globalHeight * 0.1}
                >

                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight * 0.2,
                        }}
                        text={buttonText}
                        textStyle={[styles.textStyle1, { color: !selected ? colors.blue : colors.white, }]}
                        fontFamily={selected ? FontFamily.FontsFreeNetSFProDisplayBold : FontFamily.RobotoMedium}
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
        width: globalHeight * 2.3,
        borderRadius: globalHeight * 0.2,
        flexWrap: 'wrap',
        // flex:100,
        alignItems: 'flex-start'
    },
    buttonIcon: {
        height: globalHeight,
        width: globalHeight * 0.7,
        resizeMode: "contain",
    },
    textStyle1: {
        color: "#3c0fc7",
        fontSize: fs21,
        marginLeft: globalWidth * 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default SelectInterest;
