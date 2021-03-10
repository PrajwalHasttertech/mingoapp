import React, { Component } from "react";
import { View, StyleSheet, Image, Pressable, ImageBackground, Text } from "react-native";
import {
    fs14,
    fs10,
    globalHeight,
    globalWidth,
    fs13,
    colors,
} from "../../../../constants/Dimensions";
import { Loader, WrappedText } from "../../../components";
import LinearGradient from 'react-native-linear-gradient';
import LocationFN  from "../../../app/components/findNearestLocation";

class ProfileCard extends Component {
    state = {};
    render() {
        const { details, onPress } = this.props;
        const { firstname, lastname, lastSeen, profileImg } = details;

        const imageUrl =
            typeof profileImg == "string"
                ? profileImg
                : profileImg && profileImg.imgPath;

        const name = firstname + " " + lastname;
        return (
            <Pressable
                style={styles.containerStyle}
                onPress={() => {
                    onPress();
                }}
            >
                <ImageBackground
                    source={{
                        uri: imageUrl,
                    }}
                    style={styles.ProfileCard}
                    imageStyle={{ borderRadius: 5 }}
                >
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={["#00000050", "#00000000"]}
                        style={styles.linearGradient}
                    >
                        <View style={styles.textContainer}>
                            <WrappedText
                                containerStyle={{
                                    alignSelf: "flex-start",
                                    marginLeft: globalWidth * 0.3,
                                    marginTop: globalHeight * 0.1
                                }}
                                text={name || "Rose Ward"}
                                textStyle={styles.textStyle1}
                            />

                            <LocationFN
                                locationNumber='10'
                                onPress={() => {
                                    onPress();
                                }}
                            />
                        </View>
                    </LinearGradient>

                </ImageBackground >
            </Pressable>
        );
    }
}

export default ProfileCard;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 4,
        height: globalHeight * 3.5,
        width: globalWidth * 4.7,
        elevation: 2,
        backgroundColor: colors.white,
    },
    ProfileCard: {
        width: globalWidth * 4.7,
        borderRadius: 4,
        height: globalHeight * 3.5,
        resizeMode: "cover",
    },
    textStyle1: {
        fontSize: fs13,
        color: colors.white,
    },
    textStyle2: {
        fontSize: fs10,
        color: colors.white,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    linearGradient: {
        height: globalHeight * 0.5,
        marginTop: globalHeight * 3,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },
});
