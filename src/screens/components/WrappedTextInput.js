import React, {Component} from "react";
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import {
    fs17,
    fs15,
    globalHeight,
    globalWidth,
    FontFamily,
    fs10,
    errorColor,
} from "../../constants/Dimensions";
// import Icon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons";

export default class WrappedTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: false,
        };
    }

    componentDidMount() {
        const {secureTextEntry} = this.props;
        this.setState({secureTextEntry});
    }

    render() {
        const {
            errorText,
            errorTextColor,
            value,
            onChangeText,
            placeholder,
            keyboardType,
            eyeButton,
            icon,
            style,
            textInputStyle,
            placeholderTextColor,
            errorContainer,
            multiline,
        } = this.props;
        const {secureTextEntry} = this.state;
        return (
            <View>
                <View style={[styles.mainContainer, style]}>
                    <View style={styles.textInputContainer}>
                        {icon ? (
                            <View style={styles.iconContainer}>
                                <Image
                                    source={icon}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        resizeMode: "contain",
                                    }}
                                />
                            </View>
                        ) : (
                            <View />
                        )}
                        <TextInput
                            value={value}
                            onChangeText={onChangeText}
                            placeholder={placeholder}
                            placeholderTextColor={
                                placeholderTextColor || "#1A202C4D"
                            }
                            style={[styles.textInput, textInputStyle]}
                            keyboardType={keyboardType}
                            secureTextEntry={secureTextEntry || false}
                            multiline={multiline}
                        />
                        {eyeButton ? (
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                }}
                                onPress={() => {
                                    this.setState((prevState) => ({
                                        secureTextEntry: !prevState.secureTextEntry,
                                    }));
                                }}
                            >
                                <Icon
                                    name={secureTextEntry ? "eye" : "eye-off"}
                                    style={styles.eye}
                                    size={20}
                                    color={"#1A202C4D"}
                                />
                            </TouchableOpacity>
                        ) : (
                            <View />
                        )}
                    </View>
                </View>
                {errorText ? (
                    <View style={[styles.errorContainer, {errorContainer}]}>
                        <Text
                            style={[
                                styles.errorText,
                                {color: errorTextColor || errorColor},
                            ]}
                        >
                            {errorText}
                        </Text>
                    </View>
                ) : (
                    <View />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 1,
    },
    textInputContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        flex: 9,
        fontWeight: "normal",
        //color: "#1A202c",

        fontSize: fs15,
        fontFamily: FontFamily.Helvatica,
        //paddingLeft: 20,
    },
    errorContainer: {},
    errorText: {
        color: errorColor,
        fontSize: fs10,
        fontStyle: "normal",
    },
    eye: {
        height: globalHeight * 0.35,
        width: globalHeight * 0.35,
        alignSelf: "center",
        resizeMode: "contain",
    },
});
