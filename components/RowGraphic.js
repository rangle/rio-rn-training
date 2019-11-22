import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingRight: 25
    }
});

const RowGraphic = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export default RowGraphic;
