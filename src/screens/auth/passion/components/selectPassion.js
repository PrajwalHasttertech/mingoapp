import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {colors, fs14, fs16, globalWidth} from "../../../../constants/Dimensions";

//import * as API from '@app/core/api/apiLayer'
import {WrappedRectangleButton} from "../../../components";

class SelectPassion extends Component {
    render() {
        const {selected, buttonText, onPress} = this.props;
        return (
            <WrappedRectangleButton
                onPress={() => {
                    onPress();
                }}
                buttonText={buttonText}
                containerStyle={[
                    {
                        backgroundColor: selected ? colors.orange : colors.white,
                        borderWidth: 1.5,
                        borderColor: selected ? colors.orange : colors.orange,

                        flex: (1 * buttonText.length) / 25,
                        marginHorizontal: globalWidth * 0.05,
                    },
                ]}
                textColor={selected ? colors.white : colors.blue}
                textStyle={styles.textStyle}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: "5%",
    },
    textStyle: {
        fontSize: fs16,
    },
});

export default SelectPassion;
