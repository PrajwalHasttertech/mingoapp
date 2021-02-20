import React, {Component} from "react";
import {
    View,
    Image,
    TouchableOpaciy,
    StyleSheet,
    Pressable,
} from "react-native";
import WrappedText from "./WrappedText";
import {
    FontFamily,
    globalHeight,
} from "../../constants/Dimensions";
import WrappedRoundButton from "./WrappedRoundButton";
class Header extends Component {
    state = {};
    render() {
        const {
            leftIcon,
            onLeftIconPress,
            headerText,
            headerTextStyle,
            containerStyle,
        } = this.props;

        return (
            <View style={[styles.container, containerStyle]}>
                {leftIcon ? (
                    <WrappedRoundButton
                        buttonSource={leftIcon}
                        onPress={() => {
                            onLeftIconPress();
                        }}
                        containerStyle={styles.Image}
                    />
                ) : (
                    <View />
                )}
                <WrappedText
                    containerStyle={{alignSelf: "center"}}
                    text={headerText}
                    textStyle={headerTextStyle}
                    fontFamily={FontFamily.Helvatica}
                />
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    },
    textStyle: {},
    Image: {
        position: "absolute",
        left: "5%",
        alignSelf: "center",
        backgroundColor: "#00000000",
        height: globalHeight * 0.3,
        width: globalHeight * 0.3,
    },
});
