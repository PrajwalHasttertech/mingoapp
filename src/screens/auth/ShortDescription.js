import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import SimpleToast from "react-native-simple-toast";
import {
    colors,
    commonStyle,
    FontFamily,
    globalHeight,
} from "../../constants/Dimensions";

// import { Storage } from "../../localstorage/storage";
import { DataHandling } from "../../server/DatahandlingHoc";
import {
    Header,
    WrappedRectangleButton,
    WrappedTextInput,
} from "../components";

class ShortDescription extends DataHandling {
    state = {
        shortDescription: "",
        error: {},
        // update: this.props.route.params && this.props.route.params.update | "false",
    };

    // componentDidMount() {
    // if (this.state.update) {
    //   this.setState({ shortDescription: this.props.route.params.data });
    // }
    // }

    sendDetails = async () => {
        this.props.navigation.navigate("FindNearestTab")
        // try {
        //   this.setLoader(true);
        //   const { shortDescription } = this.state;
        //   console.log(shortDescription);
        //   const result = await this.makeDirectApiCall({ shortDescription });
        //   console.log(result);
        //   if (result) {
        //     Storage.addItemToUserDetail({ shortDescription });
        //     this.setLoader(false);
        //     if (this.state.update) this.props.navigation.goBack();
        //     else this.props.navigation.replace("photoScreen");
        //   } else {
        //     this.setLoader(false);
        //   }
        // } catch (error) {
        //   this.setLoader(false);
        // }
    };

    render() {
        const { shortDescription, error } = this.state;
        return (
            <View>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />

                <View
                    style={{
                        height: globalHeight * 7.5,
                        marginTop: "3%",
                        padding: "3%",
                        backgroundColor: "#ffffff",
                    }}
                >
                    <WrappedTextInput
                        value={shortDescription}
                        onChangeText={(shortDescription) => {
                            this.setState({ shortDescription });
                        }}
                        placeholder={"About you"}
                        placeholderTextColor={"#273d52"}
                        style={{
                            height: globalHeight * 4,
                            width: "100%",
                            borderColor: "#e1e1e1",
                            backgroundColor: "#f7f8fa",
                            borderWidth: 1,
                            padding: "1%",
                        }}
                        textInputStyle={{
                            fontFamily: FontFamily.Helvatica,
                            textAlignVertical: "top",
                            height: "100%",
                            width: "100%",
                        }}
                        multiline={true}
                        errorText={error["lastName"]}
                    />
                </View>
                <WrappedRectangleButton
                    onPress={() => {
                        //this.onSignUp();
                        if (shortDescription.length < 10) {
                            this.showToast(
                                "Please provide a short description of atleast 10 length."
                            );
                        } else {
                            this.sendDetails();
                        }
                    }}
                    backgroundColor={colors.textColor}
                    textColor={colors.white}
                    buttonText={"Save"}
                    containerStyle={{
                        borderRadius: globalHeight * 0.35,
                        marginBottom: globalHeight * 0.2,
                        marginHorizontal: "2%",
                    }}
                />
                {/* {this.returnLoader()} */}
            </View>
        );
    }
}

export default ShortDescription;

const styles = StyleSheet.create({

});
