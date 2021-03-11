// import React, {Component} from "react";
// import {View, StyleSheet, StatusBar} from "react-native";
// import {DummyData} from "./components/DummyData";
// import {Banner, ToBeDated} from "./components";
// import CardStack, {Card} from "react-native-card-stack-swiper";
// import {LeftArrowBlack} from "../../icons/index";
// import RenderNoMoreCards from "./components/NoMoreCards";
// import {Header} from "../components";
// import {loadUser, updateUser} from "../../action/userAction";
// import {DataHandling} from "../../server/DataHandlingHoc";
// import {connect} from "react-redux";
// import {discoverPartnerMapStateToProps} from "../../constants/mapStateToProps";
// import {directApihandler} from "../../server/apiHandler";
// import {routeNames} from "../../server/route";
// import AsyncStorage from "@react-native-community/async-storage";
// import Axios from "axios";
// class DiscoverPartner extends DataHandling {
//     state = {photo: []};

//     likeUser = async (receiverId, isLiked) => {
//         try {
//             const token = await AsyncStorage.getItem("token");

//             console.log(token);
//             this.setLoader(true);
//             const result = await this.fetchData(routeNames.likeUser, {
//                 is_liked: isLiked,
//                 reciever_id: receiverId,
//             });
//             if (result) {
//                 this.setLoader(false);
//                 console.log(result.data);
//                 return result.data;
//             }
//         } catch (error) {}
//     };

//     componentDidMount() {}
//     render() {
//         const {user, userById} = this.props;
//         const {photo} = this.state;
//         return (
//             <View style={styles.container}>
//                 <StatusBar
//                     backgroundColor={"#ffffff"}
//                     barStyle={"dark-content"}
//                 />
//                 <Header
//                     headerText={"Discover Partner"}
//                     verticalSwipe={false}
//                     leftIcon={LeftArrowBlack}
//                     onLeftIconPress={() => {
//                         this.props.navigation.goBack();
//                     }}
//                     textColor={"#000000"}
//                     containerStyle={styles.headerContainer}
//                 />
//                 <View style={{paddingHorizontal: "5%"}}>
//                     <View style={styles.bannerContainer}>
//                         <Banner daysLeft={25} />
//                     </View>
//                     <CardStack
//                         style={styles.CardContainer}
//                         ref={(swiper) => {
//                             this.swiper = swiper;
//                         }}
//                         verticalSwipe={false}
//                         renderNoMoreCards={() => <RenderNoMoreCards />}
//                     >
//                         {user.map((id) => {
//                             const profile = userById[id];
//                             return (
//                                 <Card style={{backgroundColor: "#00000000"}}>
//                                     <ToBeDated
//                                         likeUser={(isLiked) =>
//                                             this.likeUser(id, isLiked)
//                                         }
//                                         onPressCard={() => {
//                                             this.props.navigation.navigate(
//                                                 "userDetailScreen",
//                                                 {
//                                                     user: profile,
//                                                 },
//                                             );
//                                         }}
//                                         name={
//                                             profile.firstname +
//                                             " " +
//                                             profile.lastname
//                                         }
//                                         description={profile.shortDescription}
//                                         photo={
//                                             profile.profileImg &&
//                                             profile.profileImg.imgPath
//                                         }
//                                         photos={profile.photo}
//                                     />
//                                 </Card>
//                             );
//                         })}
//                     </CardStack>
//                 </View>
//                 {this.returnLoader()}
//             </View>
//         );
//     }
// }

// const mapStateToProps = (props) => {
//     return {
//         ...discoverPartnerMapStateToProps(props),
//     };
// };

// export default connect(mapStateToProps, {
//     loadUser,
//     updateUser,
// })(DiscoverPartner);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //backgroundColor: "#ffffff",
//     },
//     CardContainer: {
//         marginTop: "5%",
//         width: "100%",
//     },
//     bannerContainer: {
//         marginTop: "5%",
//     },
//     headerContainer: {
//         elevation: 2,
//         paddingVertical: "2%",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#ffffff",
//     },
// });
