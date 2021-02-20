import React from 'react';
import { View, StyleSheet, Dimensions, Image } from "react-native"
import { globalHeight, globalWidth } from "../constants/Dimensions";
export const SLIDER_WIDTH = globalWidth * 14.3
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: ITEM_WIDTH,
        height: Dimensions.get('window').height * 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: Dimensions.get('window').height * 1.2,
    },
})

export default CarouselCardItem