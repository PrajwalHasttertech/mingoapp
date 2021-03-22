import React, {Component} from "react";
import {View, StyleSheet, Image} from "react-native";
import {globalHeight, globalWidth} from "../../../../constants/Dimensions";
import {ClosePhoto} from "../../../../icons";
import {WrappedRoundButton} from "../../../components";

class PassionPhoto extends Component {
    render() {
        const {imageSource, onCancelPress, imageStyle} = this.props;
        return (
            <View style={{}}>
                <Image source={imageSource} style={imageStyle} />
                <WrappedRoundButton
                    buttonSource={ClosePhoto}
                    containerStyle={[styles.ClosePhoto, styles.closePhoto]}
                    style={[styles.closePhoto]}
                    onPress={onCancelPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: "5%",
    },
    background: {
        color: "#ffffff",
    },
    image: {
        resizeMode: "contain",
        borderRadius: 10,
        height: globalHeight,
        width: globalWidth * 2,
    },
    ClosePhoto: {
        position: "absolute",
        right: -globalHeight * 0.1,
        top: -globalHeight * 0.1,
    },
    closePhoto: {
        height: globalHeight * 0.3,
        width: globalHeight * 0.3,
        resizeMode: "contain",
    },
});

export default PassionPhoto;
