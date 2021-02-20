import React, {Component} from "react";
import {View, Text} from "react-native";
import {fs16, fs15, fs17, FontFamily} from "../../constants/Dimensions";

class WrappedText extends Component {
    fontFamily = (fontFamilyNo) => {
        const fontFamily =
            fontFamilyNo == 1
                ? "Roboto-Regular"
                : fontFamilyNo == 2
                ? "Roboto-Medium"
                : fontFamilyNo == 3
                ? "Roboto-Bold"
                : fontFamilyNo == 4
                ? "FontsFree-Net-SFProDisplay-Regular"
                : fontFamilyNo == 5
                ? "FontsFree-Net-SFProDisplay-Medium"
                : "FontsFree-Net-SFProDisplay-Bold";
        if (this.props.text == 25) {
            console.log(fontFamily);
        }
        return fontFamily;
    };
    render() {
        const {text, textStyle, containerStyle, fontFamily} = this.props;

        return (
            <View style={containerStyle}>
                <Text
                    style={[
                        {
                            fontFamily: fontFamily || FontFamily.Helvatica,
                            //fontFamily: "sans-serif-thin",
                        },
                        {
                            fontSize: fs17,
                            fontWeight: "600",
                            color: "#000000",
                        },
                        textStyle,
                    ]}
                >
                    {text}
                </Text>
            </View>
        );
    }
}

export default WrappedText;
