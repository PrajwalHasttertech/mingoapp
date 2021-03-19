import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import {
    colors,
    globalHeight,
    globalWidth,
    paddingTop,
} from "../../constants/Dimensions";
//import * as API from '@app/core/api/apiLayer'
import { WrappedRectangleButton, Header } from "../components";
import { DataHandling } from "../../server/DatahandlingHoc";
import { routeNames } from "../../server/route";
// import { Storage } from "../../localstorage/storage";
import DropDownPicker from "react-native-dropdown-picker";
import { LeftArrowBlack } from "../../icons";

class University extends DataHandling {
    constructor(props) {
        super(props);
        this.state = {
            InstituteList: [],
            selectedInstitute: "",
            update:
                this.props.route.params && this.props.route.params.update | "false",
        };
    }

    selectPassion = (index) => {
        this.setState((prevState) => {
            prevState.InstituteList[index]["selected"] = !prevState.InstituteList[
                index
            ]["selected"];
            return { InstituteList: prevState.InstituteList };
        });
    };

    fetchPassion = async () => {
        try {
            this.setLoader(true);
            const result = await this.fetchData(routeNames.getInstitute);
            if (result) {
                //console.log(result, result.data.passion);
                this.setState({
                    InstituteList: result.data.data.passion.map((institute) => {
                        return { label: institute.name, value: institute._id };
                    }),
                    isLoader: false,
                });

                this.setLoader(false);
            }
        } catch (error) {
            this.setLoader(false);
        }
    };

    componentDidMount() {
        this.fetchPassion();
    }

    updatePassion = async () => {
        this.props.navigation.replace("Interested");
        // try {
        //     this.setLoader(true);
        //     const { selectedInstitute } = this.state;
        //     console.log(selectedInstitute);
        //     const result = await this.makeDirectApiCall({
        //         institute: selectedInstitute.value,
        //     });
        //     console.log(result);
        //     this.setLoader(false);
        //     if (result) {
        //         Storage.addItemToUserDetail({
        //             institute: selectedInstitute.label,
        //         });
        //         if (this.state.update) this.props.navigation.goBack();
        //         else this.props.navigation.replace("Interested");
        //     }
        // } catch (error) {
        //     this.setLoader(false);
        // }
    };

    render() {
        const { InstituteList, selectedInstitute } = this.state;
        //console.log(InstituteList);
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />

                <View style={{ flex: 1, paddingTop }}>
                    <View
                        style={{
                            margin: "2%",
                            height: "100%",
                            borderRadius: 10
                        }}
                    >
                        <DropDownPicker
                            items={InstituteList}
                            onChangeItem={(item) => {
                                this.setState({ selectedInstitute: item });
                            }}
                            placeholder={"Select your institute"}
                            placeholderStyle={{ color: colors.orange }}
                            style={{
                                height: globalHeight * 5, borderTopLeftRadius: 25, borderTopRightRadius: 25,
                                borderBottomLeftRadius: 25, borderBottomRightRadius: 25
                            }}
                            containerStyle={{ height: globalHeight * 0.7 }}
                            dropDownStyle={{ height: globalHeight * 5 }}
                            searchable={true}
                            searchablePlaceholder="Search for an item"
                            searchablePlaceholderTextColor="gray"
                            seachableStyle={{}}
                            searchableError={() => <Text>Not Found</Text>}
                            selectedLabelStyle={{ color: colors.orange }}

                        />
                    </View>

                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={() => {
                                //this.onSignUp();
                                if (!selectedInstitute) {
                                    this.showToast("Please select a institute.");
                                } else {
                                    this.updatePassion();
                                }
                            }}
                            backgroundColor={colors.textColor}
                            textColor={"#ffffff"}
                            buttonText={"Continue"}
                        />
                    </View>
                </View>
                {this.returnLoader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: globalHeight * 0.4,
        left: "5%",
        right: "5%",
    },
    headerContainer: {
        elevation: 2,
        paddingVertical: "2%",
        backgroundColor: "#ffffff",
    },
});

export default University;
