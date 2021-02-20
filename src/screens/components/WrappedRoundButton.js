import React, {Component} from "react";
import {StyleSheet, Image, ActivityIndicator} from "react-native";
import Ripple from "react-native-material-ripple";
class WrappedRoundButton extends Component {
    render() {
        const {
            buttonSource,
            onPress,
            height,
            style,
            isLoading,
            containerStyle,
        } = this.props;

        return (
            <Ripple
                style={[
                    styles.container,
                    {
                        height: height || 50,
                        width: height || 50,
                        borderRadius: height / 2 || 25,
                    },
                    containerStyle,
                ]}
                rippleCentered={true}
                rippleContainerBorderRadius={height / 2 || 100}
                onPress={() => {
                    if (!isLoading) {
                        onPress();
                    }
                }}
            >
                {isLoading ? (
                    <ActivityIndicator
                        size={30}
                        color={"#500061"}
                        style={{opacity: 0.5}}
                    />
                ) : (
                    <Image
                        source={buttonSource}
                        style={!style ? styles.buttonIcon : style}
                        resizeMode={style ? "contain" : "contain"}
                    />
                )}
            </Ripple>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        //elevation: 1,
    },
    buttonIcon: {
        height: 20,
        width: 20,
        borderRadius: 10,
        resizeMode: "contain",
    },
});
export default WrappedRoundButton;
