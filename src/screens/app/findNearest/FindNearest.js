import React, { Component } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    StatusBar,
    Image,
} from "react-native";
import { globalHeight, paddingTop } from "../../../constants/Dimensions";
import { findNearestMapStateToProps } from "../../../constants/mapStateToProps";
import { Header } from "../../components";
import ProfileCard from "./components/profileCard";
import { loadUser } from "../../../action/userAction";
import { connect } from "react-redux";
import { updateUser } from "../../../action/userAction";
// import SplashScreen from "react-native-splash-screen";
import { routeNames } from "../../../server/route";
import Axios from "axios";
class FindNearest extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            clearState: true,
        };
    }

    loadUser = () => {
        const { page, limit } = this.props.user;
        console.log(Axios.defaults.headers);
        this.props.loadUser(page, limit, routeNames.loadUser);
    };

    componentDidMount() {
        // SplashScreen.hide();

        this.loadUser();

        this._subscribe = this.props.navigation.addListener("focus", () => {
            if (this.props.user.userId.length == 0) this.loadUser();
        });

    }

    componentWillUnmount() {
        this._subscribe();
    }

    render() {
        const { userById, user } = this.props;
        return (
            <View style={[styles.container, { paddingTop: paddingTop }]}>
                <StatusBar
                    backgroundColor={"#ffffff"}
                    barStyle={"dark-content"}
                />
                <View style={{ flex: 1 }}>
                    {/* <Header
                        headerText={"Find the nearest"}
                        textColor={"#000000"}
                        containerStyle={styles.headerContainer}
                    /> */}

                    <View style={{ flex: 1 }}>
                        {userById.length == 0 ? (
                            <Loader />
                        ) : (
                                <FlatList
                                    data={user.userId}
                                    renderItem={({ item, index }) => {
                                        const user = userById[item];
                                        return (
                                            <ProfileCard
                                                details={user}
                                                onPress={() => {
                                                    this.setState({
                                                        clearState: false,
                                                    });
                                                    this.props.updateUser({
                                                        selectedIndex: index,
                                                    });
                                                    this.props.navigation.navigate(
                                                        "authScreenAfter",
                                                    );
                                                }}
                                            />
                                        );
                                        // return <View />;
                                    }}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={2}
                                    //contentContainerStyle={{ paddingTop: globalHeight * 1.3 }}
                                    columnWrapperStyle={{
                                        justifyContent: "space-evenly",
                                        marginTop: 10,
                                    }}
                                    onEndReached={() => {
                                        if (!this.props.user.noMore)
                                            this.loadUser();
                                    }}
                                    onEndReachedThreshold={0.5}
                                    ListFooterComponent={() => {
                                        if (!this.props.user.noMore) {
                                            return (
                                                <View
                                                    style={{
                                                        height: globalHeight,
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <ActivityIndicator
                                                        size={"small"}
                                                        color={"black"}
                                                    />
                                                </View>
                                            );
                                        } else {
                                            return (
                                                <View
                                                    style={{
                                                        height: globalHeight * 0.5,
                                                    }}
                                                />
                                            );
                                        }
                                    }}
                                    ListFooterComponentStyle={{
                                        alignItems: "center",
                                    }}
                                    showsVerticalScrollIndicator={false}
                                />
                            )}
                        <View
                            style={{
                                right: "3%",
                                left: "3%",
                                marginVertical: "3%",
                                position: "absolute",
                            }}
                        >
                            {/* <Banner daysLeft={25} /> */}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#ffffff",
    },
    button: {
        position: "absolute",
        bottom: globalHeight * 0.3,
        left: "5%",
        right: "5%",
    },
    headerContainer: {
        elevation: 2,
        paddingVertical: "2%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
});

const mapStateToProps = (props) => {
    return {
        ...findNearestMapStateToProps(props),
    };
};

export default connect(mapStateToProps, {
    loadUser,
    updateUser,
})(FindNearest);
