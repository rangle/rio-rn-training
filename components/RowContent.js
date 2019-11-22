import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const RowContent = ({ children }) => (
    <View style={styles.container}>{ children }</View>
);

export default RowContent;
