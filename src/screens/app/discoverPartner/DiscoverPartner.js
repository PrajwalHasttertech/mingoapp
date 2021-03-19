import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";



import  {NoMoreCards,ToBeDated}  from "../components";
import CardStack, { Card } from "react-native-card-stack-swiper";
import RenderNoMoreCards from "../components/NoMoreCards";



import { loadUser, updateUser } from "../../../action/userAction";
import { DataHandling } from "../../../server/DatahandlingHoc";
import { connect } from "react-redux";
import { discoverPartnerMapStateToProps } from "../../../constants/mapStateToProps";
import { routeNames } from "../../../server/route";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../../constants/Dimensions";

class DiscoverPartner extends DataHandling {

    state = { photo: [] };

    likeUser = async (receiverId, isLiked) => {
        try {
            const token = await AsyncStorage.getItem("token");

            console.log(token);
            this.setLoader(true);
            const result = await this.fetchData(routeNames.likeUser, {
                is_liked: isLiked,
                reciever_id: receiverId,
            });
            if (result) {
                this.setLoader(false);
                console.log(result.data);
                return result.data;
            }
        } catch (error) { }
    };

    render() {
        const { user, userById } = this.props;
        const { photo } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" hidden={false} translucent={true} />
                <View style={{ paddingHorizontal: "5%" }}>
                        <CardStack
                        style={styles.CardContainer}
                        ref={(swiper) => {
                            this.swiper = swiper;
                        }}
                        verticalSwipe={false}
                        renderNoMoreCards={() => <RenderNoMoreCards />}
                    >
                        {user.map((id) => {
                            const profile = userById[id];
                            return (
                                <Card style={{ backgroundColor: "#00000000" }}>
                                    <ToBeDated
                                        likeUser={(isLiked) =>
                                            this.likeUser(id, isLiked)
                                        }
                                        onPressCard={() => {
                                            this.props.navigation.navigate(
                                                "userDetailScreen",
                                                {
                                                    user: profile,
                                                },
                                            );
                                        }}
                                        name={
                                            profile.firstname +
                                            " " +
                                            profile.lastname
                                        }
                                        description={profile.shortDescription}
                                        photo={
                                            profile.profileImg &&
                                            profile.profileImg.imgPath
                                        }
                                        photos={profile.photo}
                                    />
                                </Card>
                            );
                        })}
                    </CardStack>
                </View>
                {this.returnLoader()}
            </View>
        );
    }
}

const mapStateToProps = (props) => {
    return {
        ...discoverPartnerMapStateToProps(props),
    };
};

export default connect(mapStateToProps, {
    loadUser,
    updateUser,
})(DiscoverPartner);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#ffffff",
    },
    CardContainer: {
        marginTop: "5%",
        width: "100%",
    },
    bannerContainer: {
        marginTop: "5%",
    },
    headerContainer: {
        elevation: 2,
        paddingVertical: "2%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
});
