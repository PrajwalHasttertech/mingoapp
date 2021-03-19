import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
    fs33,
    globalHeight,
    paddingTop,
    FontFamily,
    fs24,
    colors,
} from "../../../constants/Dimensions";
import { gender } from "../../../constants/dataTypes";
import { Loader, WrappedRectangleButton, WrappedText } from "../../components";
import SelectGender from "./component/selectGender";
// import { Storage } from "../../../localstorage/storage";
import { DataHandling } from "../../../server/DatahandlingHoc";

class Gender extends DataHandling {
    state = {
        gender: [...gender],
        selectedIndex: 0,
        // update: this.props.route.params && this.props.route.params.update | "false",
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //SplashScreen.hide();
        StatusBar.setBackgroundColor("#ffffff");
        StatusBar.setBarStyle("dark-content");
    }

    selectGender = (selectedIndex) => {
        this.setState({ selectedIndex });
    };
    sendDetails = async () => {
        try {
            this.setLoader(true);
            const { selectedIndex } = this.state;
            const gender = this.state.gender[selectedIndex];
            console.log(gender);
            const result = await this.makeDirectApiCall({
                gender: gender.gender,
            });
            if (result) {
                Storage.addItemToUserDetail({ gender: gender.gender });
                this.setLoader(false);
                if (this.state.update) this.props.navigation.goBack();
                else this.props.navigation.replace("passionScreen");
            } else {
                this.setLoader(false);
            }
        } catch (error) {
            console.log(error);
            this.setLoader(false);
        }
    };

    render() {
        const { gender, selectedIndex, isLoading, navigation } = this.state;
        return (
            <View style={[styles.container, paddingTop]}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />
                <View style={styles.container1}>
                    <WrappedText
                        containerStyle={{
                            alignSelf: "center",
                            marginTop: globalHeight,
                        }}
                        text={"What is your Gender ? "}
                        textStyle={styles.textStyle1}
                        fontFamily={FontFamily.RobotoMedium}
                    />
                    <View style={styles.genderContainer}>
                        {gender.map((gender, index) => {
                            return (
                                <SelectGender
                                    buttonText={gender.gender}
                                    buttonSource={
                                        index == selectedIndex
                                            ? gender.imageBlue
                                            : gender.imageWhite
                                    }
                                    selected={index == selectedIndex}
                                    containerStyle={styles.gender}
                                    onPress={() => {
                                        this.selectGender(index);
                                    }}
                                />
                            );
                        })}
                    </View>
                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={async () => {
                                // this.sendDetails();
                                this.props.navigation.replace("Passion")
                            }}
                            backgroundColor={colors.textColor}
                            textColor={"#ffffff"}
                            buttonText={"Continue"}
                        />
                    </View>
                </View>
                {/* {isLoading && <Loader />} */}
            </View>
        );
    }
}

export default Gender;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#ffffff",
    },
    container1: {
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: "5%",
        left: "5%",
        right: "5%",
    },
    textStyle1: {
        fontSize: fs24,
        color: colors.blue,
    },
    genderContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: globalHeight * 0.7,
    },
    gender: {
        backgroundColor: "#fdfdfd",
    },
});
