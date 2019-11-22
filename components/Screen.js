import React from "react";
import {View} from "react-native";

const styles = {
    container: {
        flex: 1,
    }
};

const Screen = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export default Screen;