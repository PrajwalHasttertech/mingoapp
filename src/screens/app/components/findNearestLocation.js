import React, { Component } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import {
    fs14,
    fs10,
    globalHeight,
    globalWidth,
    fs13,
    colors,
} from "../../../constants/Dimensions";
import WrappedText from "../../components/WrappedText";
import { WomanGender, ManGender } from "../../../icons";

class LocationFN extends Component {
    render() {
        const { locationNumber, onPress } = this.props;

        return (
            <Pressable
                style={styles.containerStyle}
                onPress={() => {
                    // onPress();
                    alert('hai')
                }}
            >
                <View style={styles.containerStyle1}>

                    <View style={styles.iconContainer}>
                        <Image
                            source={WomanGender}
                            style={{
                                height: 10,
                                width: 10,
                                resizeMode: "contain",
                            }}
                        />
                    </View>

                    <WrappedText
                        containerStyle={{
                            // alignSelf: "flex-start",
                            marginRight: globalWidth * 0.15,
                            marginTop: 1
                        }}
                        text={locationNumber || "10"}
                        textStyle={styles.textStyle}
                    />

                </View>

            </Pressable>
        );
    }
}

export default LocationFN;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        borderRadius: 15,
        height: globalHeight * 0.3,
        alignSelf: 'center',
        marginRight: globalHeight * 0.1
    },
    containerStyle1: {
        flex: 1,
        backgroundColor: colors.orange,
        borderRadius: 15,
        height: globalHeight * 0.3,
        alignSelf: 'flex-end',
        position: 'relative',
        width: globalWidth * 1,
        top: globalHeight * 0.0,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    textStyle: {
        position: 'absolute',
        top: globalHeight * 0.01,
        color: colors.white,
        fontSize: fs10,
        alignSelf: 'center'
    },
    iconContainer: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
