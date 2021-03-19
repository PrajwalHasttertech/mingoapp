import React, { Component } from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import {
    fs16,
    fs44,
    fs13,
    fs17,
    fs29,
    fs15,
    globalHeight,
    globalWidth,
    paddingTop,
    passionList,
    colors,
} from "../../../constants/Dimensions";
import SelectPassion from "./components/selectPassion";
//import * as API from '@app/core/api/apiLayer'
import {
    WrappedRectangleButton,
    Header,
    Loader,
    WrappedText,
} from "../../components";
import { DataHandling } from "../../../server/DatahandlingHoc";
import { routeNames } from "../../../server/route";
// import { Storage } from "../../../localstorage/storage";
// import AsyncStorage from "@react-native-community/async-storage";
// import { LeftArrowBlack } from "../../../icons";
class Passion extends DataHandling {
    constructor(props) {
        super(props);
        this.state = {
            //passionList: [...passionList],
            //passionInitialList: [...passionList],
            passionList: [],
            update: this.props.route.params && this.props.route.params.update | "false",
        };
    }

    selectPassion = (index) => {
        this.setState((prevState) => {
            prevState.passionList[index]["selected"] = !prevState.passionList[index]["selected"];
            return { passionList: prevState.passionList };
        });
    };

    fetchPassion = async () => {
        try {
            this.setLoader(true);
            const result = await this.fetchData(routeNames.getPassion);
            console.log(result, result.data.passion, "The result");
            if (result) {
                // console.log(result, result.data.passion);
                this.setState({
                    passionList: result.data.data.passion,
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
        try {
            this.setLoader(true);
              const passion = this.state.passionList
                .filter((passion) => passion["selected"])
                .map((passion) => passion._id);
            if (passion.length < 3) {
                this.showToast("Please select atleast 3 passion");
            }else{                                                  //to remove check the dating app code
                this.props.navigation.navigate("FindNearestTab")    //to remove check the dating app code
            }                                                       //to remove check the dating app code
            //   await Storage.addItemToUserDetail({ passion: passion });
            //   const result = await this.makeDirectApiCall({
            //     passion: passion,
            //   });
            this.setLoader(false);
            
            //   if (result) {
            // if (this.state.update) this.props.navigation.goBack();
            // else this.props.navigation.replace("universityScreen");

            //   }
        } catch (error) {
            this.setLoader(false);
        }
    };

    render() {
        const { passionList } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />
                <View style={{ flex: 1, paddingTop }}>

                    <FlatList
                        data={passionList}
                        renderItem={({ item, index }) => {
                            return (
                                <SelectPassion
                                    key={index}
                                    buttonText={item.name}
                                    selected={item["selected"]}
                                    onPress={() => {
                                        this.selectPassion(index);
                                    }}
                                />
                            );
                        }}
                        keyExtractor={(item) => item._id}
                        columnWrapperStyle={{ justifyContent: "space-around" }}
                        numColumns={3}
                    />
                    <View style={styles.button}>
                        <WrappedRectangleButton
                            onPress={() => {
                                //this.onSignUp();
                                this.updatePassion();
                                // this.props.navigation.replace("Passion")

                            }}
                            backgroundColor={colors.textColor}
                            textColor={"#ffffff"}
                            buttonText={"Continue"}
                        />
                    </View>
                </View>
                {/* {this.returnLoader()} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
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

export default Passion;
