import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
});

const Row = ({ children }) => (
    <View style={styles.container}>
        { children }
    </View>
);

export default Row;
