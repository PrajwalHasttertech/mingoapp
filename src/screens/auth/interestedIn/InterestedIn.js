import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
    fs33,
    globalHeight,
    paddingTop,
    FontFamily,
    fs24,
    colors,
    globalWidth,
} from "../../../constants/Dimensions";
import { interestedIn } from "../../../constants/dataTypes";
import { Loader, WrappedRectangleButton, WrappedText } from "../../components";
import SelectInterest from "./component/selectInterest";
// import { Storage } from "../../../localstorage/storage";
import { DataHandling } from "../../../server/DatahandlingHoc";

class InterestedIn extends DataHandling {
    state = {
        interestedIn: [...interestedIn],
        selectedIndex: 0,
        // update: this.props.route.params && this.props.route.params.update | "false",
    };
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     //SplashScreen.hide();
    //     StatusBar.setBackgroundColor("#ffffff");
    //     StatusBar.setBarStyle("dark-content");
    // }

    selectInterest = (selectedIndex) => {
        this.setState({ selectedIndex });
    };
    sendDetails = async () => {
        try {
            this.setLoader(true);
            const { selectedIndex } = this.state;
            const interestedIn = this.state.interestedIn[selectedIndex];
            console.log(interestedIn);
            const result = await this.makeDirectApiCall({
                interestedIn: interestedIn.interestedIn,
            });
            if (result) {
                Storage.addItemToUserDetail({ interestedIn: interestedIn.interestedIn });
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
        const { interestedIn, selectedIndex, isLoading, navigation } = this.state;
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
                        {interestedIn.map((interestedIn, index) => {
                            return (
                                <SelectInterest
                                    buttonText={interestedIn.interestedIn}
                                    selected={index == selectedIndex}
                                    containerStyle={styles.interestIn}
                                    onPress={() => {
                                        this.selectInterest(index);
                                    }}
                                />
                            );
                        })}
                    </View>
                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={async () => {
                                // this.sendDetails();
                                this.props.navigation.replace("About You")
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

export default InterestedIn;

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
        justifyContent: "space-between",
        marginTop: globalHeight * 0.7,
        marginLeft: globalWidth * 0.7,
        marginRight: globalWidth * 0.7,
        flexWrap:'wrap',
    },
    interestIn: {
        backgroundColor: "#fdfdfd",
    },
});
