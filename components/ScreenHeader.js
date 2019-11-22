import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 20,
        backgroundColor: "#1EA2C1"
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    }
});

const ScreenHeader = ({ title }) => (
    <View style={styles.container}>
        <StatusBar backgroundColor="red" />
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default ScreenHeader;
