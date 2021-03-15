import React, {Component} from "react";
import {View, Text} from "react-native";
import {
    commonStyle,
    fs16,
    globalWidth,
    globalHeight,
} from "../../../constants/Dimensions";

class NoMoreCards extends Component {
    state = {};
    render() {
        return (
            <View
                style={{
                    height: globalHeight * 7,
                    backgroundColor: "#ffffff",
                    borderRadius: globalWidth * 0.5,
                    //padding: "5%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text
                    style={{
                        fontWeight: "700",
                        fontSize: 18,
                        color: "gray",
                        alignSelf: "center",
                        alignContent: "center",
                    }}
                >
                    {"No More Partner Remaining :(  "}
                </Text>
            </View>
        );
    }
}

export default NoMoreCards;
