import React, { Component } from "react";
import {
    View,
    Image,
    Pressable,
    StyleSheet,
    ImageBackground,
} from "react-native";

import {
    globalWidth,
    fs24,
    fs15,
    globalHeight,
    fs19,
    colors,
    FontFamily,
    fs12,
} from "../../../constants/Dimensions";
import { Heart, Cancel, Share } from "../../../icons";
import { WrappedRoundButton, WrappedText } from "../../components";
import Carousel, { Pagination } from "react-native-snap-carousel";
import HandleSvg from "../../../icons/HandleSvg";
import { InfoShowSmall } from ".";
//import FbGrid from "react-native-fb-image-grid";

class ToBeDated extends Component {
    state = {
        activeSlide: 0,
        liked: false,
        isLoading: false,
    };
    onPress = (url, index, event) => {
        // url and index of the image you have clicked alongwith onPress event.
        console.log(url, index, event);
    };

    pagination(length) {
        const { activeSlide } = this.state;

        return (
            <Pagination
                dotsLength={length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    position: "absolute",
                    bottom: 0,

                    //height: globalHeight * 0.6,
                }}
                dotStyle={{
                    width: globalWidth * 0.6,
                    height: globalWidth * 0.15,
                    borderRadius: 2,

                    margin: 0,
                    padding: 0,
                    //marginHorizonrtal: 1,
                    backgroundColor: "#ffffff",
                }}
                inactiveDotStyle={
                    {
                        // Define styles for inactive dots here
                    }
                }
                tappableDots={true}
                inactiveDotOpacity={0.7}
                inactiveDotScale={0.6}
            //activeOpacity={0.2}
            />
        );
    }
    like = async () => {
        const { liked } = this.state;
        const result = await this.props.likeUser(!liked);
        if (result) {
            this.setState({ liked: !liked });
        }
    };

    render() {
        const {
            name,
            description,
            photos,
            desitance,
            matchPercent,
            onPressCard,
            age,
        } = this.props;

        const { liked, isLoading } = this.state;
        return (
            <View style={styles.container}>
                {/* <Pressable
                    onPress={() => {
                        onPressCard();
                    }}
                    style={styles.Pressable}
                    android_ripple={{color: "#00000033", radius: 1000}}
                > */}
                <View style={styles.container1}>
                    <Carousel
                        data={photos}
                        renderItem={({ item }) => {
                            return (
                                <Image
                                    source={{ uri: item.imgPath }}
                                    style={styles.image}
                                />
                            );
                        }}
                        sliderWidth={globalWidth * 8.3}
                        itemWidth={globalWidth * 8.3}
                        onSnapToItem={(index) =>
                            this.setState({ activeSlide: index })
                        }
                    />
                    {/* {this.pagination((photos && photos.length) || 0)} */}

                    <InfoShowSmall
                        containerStyle={styles.infoShow}
                        text={"2.3km Away"}
                        textStyle={styles.textStyle}
                        buttonSource={Cancel}
                    />
                </View>
                <View style={styles.container2}>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <WrappedText
                            text={name + ',  ' + '23'}
                            textStyle={[
                                styles.middleText,
                                { fontSize: fs19, color: colors.white, fontFamily: FontFamily.RobotBold },
                            ]}
                        />
                    </View>
                    <InfoShowSmall
                        containerStyle={styles.infoShowLocation}
                        text={"Vadalia NYC"}
                        textStyle={styles.infoShowLocationText}
                        buttonSource={Cancel}
                    />
                </View>
                <View style={styles.container3}>
                    <WrappedRoundButton
                        height={globalHeight * 0.7}
                        buttonSource={Cancel}
                        onPress={() => {
                            // if (this.state.liked) {
                            //     const result = this.props.likeUser(false);
                            //     if (result) {
                            //         this.setState({ liked: false });
                            //     }
                            // }
                            alert('hai0')
                        }}
                        containerStyle={styles.buttonConatiner}
                        style={styles.buttonSource}
                    />
                    <WrappedRoundButton
                        height={globalHeight * 0.7}
                        buttonSource={liked ? Heart : Heart}
                        onPress={this.like}
                        style={styles.buttonSource}
                        containerStyle={styles.buttonConatiner}
                    >
                        {!liked && HandleSvg({}, "#000000", "Love", "20", "20")}
                    </WrappedRoundButton>

                    <WrappedRoundButton
                        height={globalHeight * 0.7}
                        buttonSource={Share}
                        onPress={() => {
                            // if (this.state.liked) {
                            //     const result = this.props.likeUser(false);
                            //     if (result) {
                            //         this.setState({ liked: false });
                            //     }
                            // }
                            alert('hai1')
                        }}
                        containerStyle={styles.buttonConatiner}
                        style={styles.buttonSource}
                    />
                </View>


                {/* </Pressable> */}
            </View>
        );
    }
}

export default ToBeDated;
const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        height: globalHeight * 8.2,
        width: globalWidth * 9,
        backgroundColor: "#ffffff",
        padding: "3%",
        elevation: 2,
        position: 'relative',
        borderRadius: globalWidth * 0.5,
    },
    container1: {
        flex: 6.5,
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        flex: 2.5,
        alignItems: "center",
        position: 'absolute',
        justifyContent: "center",
        top: globalHeight * 5.3,
        alignSelf: 'center'
    },
    container3: {
        flex: 1.5,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: globalWidth * 0.35,
        resizeMode: "cover",
    },
    middleText: {
        textAlign: "center",
    },
    infoShow: {
        // zIndex: 2,
        position: "absolute",
        top: "5%",
        left: "5%",
        backgroundColor: "#0000008A",
    },
    infoShowLocation: {

        top: globalHeight * 0.25,
        left: globalWidth * 0,
        backgroundColor: colors.showInfoLocColor,

    },
    infoShowLocationText: {
        color: colors.infoShowLocationTextColor,
        fontSize: fs12,
    },
    infoShowGradient: {
        position: "absolute",
        bottom: "-3%",
        left: "35%",
    },
    textStyle: {
        color: "#ffffff",
        fontSize: 12,
    },
    buttonSource: {
        height: globalHeight * 0.3,
        width: globalHeight * 0.3,

        resizeMode: "contain",
    },
    Pressable: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute",
        padding: "5%",
    },
    buttonConatiner: {
        elevation: 5,
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
});
