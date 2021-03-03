import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors, fs16, fs21, FontFamily, fs12, globalWidth, globalHeight } from '../../constants/Dimensions';
import WrappedRectangleButton from "../components/WrappedRectangleButton";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/CarouselCardItem';
import data from '../../components/data';



const Splash = ({ navigation }) => {

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    const getItem = async (name) => {
        return await AsyncStorage.getItem(name);
    };

    const checkPermission = async () => {
        const enabled = await messaging().hasPermission();
        if (enabled) {
            await getToken();
        } else {
            await requestPermission();
        }
    }

    const requestPermission = async () => {
        try {
            await messaging().requestPermission();
            // User has authorised
            await getToken();
        } catch (error) {
            // User has rejected permissions
            console.log("permission rejected");
        }
    }

    const getToken = async () => {
        let fcmToken = await AsyncStorage.getItem("fcmToken");
        if (!fcmToken) {
            console.log("No Token. Getting a New Token");
            fcmToken = await messaging().getToken();
            if (fcmToken) {
                // user has a device token
                await AsyncStorage.setItem("fcmToken", fcmToken);
            }
        }
        console.log("FCM TOKEN: ", fcmToken);
    }

    useEffect(() => {
        checkPermission();
    }, []);

    return (
        <View style={styles.container}>
            <Carousel
                layout="stack"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />

            <View style={{ position: 'absolute' }}>

                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={["#f18122", "#f18122", "#de1616", "#de161601"]}
                    // colors={['#4c669f', '#3b5998', '#192f6a']} 
                    style={styles.linearGradient}
                >
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../icons/Logo.png')}
                    />
                    <View style={styles.TandC}>
                        <View style={{ marginBottom: '4%' }}>
                            <Text style={styles.titleText}>Lorem ipsum dolor</Text>
                        </View>
                        <View>
                            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.descText}>{'        '}Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Text>
                        </View>
                    </View>
                    {/* <View style={styles.withinRelative}> */}
                    <Pagination
                        dotsLength={data.length}
                        activeDotIndex={index}
                        carouselRef={isCarousel}
                        dotStyle={{
                            width: 30,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: 0,
                            backgroundColor: colors.white
                        }}
                        inactiveDotOpacity={1}
                        inactiveDotScale={0.6}
                        tappableDots={true}

                    />
                    {/* </View> */}
                    <View style={styles.getStartedContainer}>
                        <WrappedRectangleButton
                            onPress={() => navigation.navigate('authScreen')}
                            backgroundColor={colors.white}
                            textColor={colors.textColor}
                            buttonText={"Get Started"}
                        />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20, marginBottom: globalHeight * 0.7 }}>
                        <Text style={{ color: colors.white }}>Terms and Conditions </Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}
export default Splash;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: globalHeight * 10,
        position: 'relative',
        display: 'flex',
        flex: 1,
    },
    tinyLogo: {
        width: globalWidth * 8,
        height: globalHeight * 1.5,
        // marginLeft: '8%',
        // backgroundColor: '#fff',
        alignSelf: 'center',
        // aspectRatio: 1,
        resizeMode: 'contain',
    },
    linearGradient: {
        // height: globalHeight * 6,
        marginBottom: Dimensions.get("window").height * -0.47,
        // width: globalWidth * 10,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: FontFamily.RobotoRegular,
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        color: '#ffffff',
    },
    TandC: {
        alignItems: 'center',
        marginTop: '5%'
    },
    titleText: {
        color: colors.white,
        fontSize: fs21,
        fontFamily: FontFamily.RobotoMedium,
    },
    descText: {
        color: colors.white,
        fontSize: fs16,
        paddingLeft: 60,
        paddingRight: 60,
        fontFamily: FontFamily.RobotoRegular,

    },
    getStartedContainer: {
        marginLeft: globalWidth * 0.5,
        marginRight: globalWidth * 0.5,
    },
    TandCText: {
        fontSize: fs12,
        fontFamily: FontFamily.RobotoRegular,
    },
})

