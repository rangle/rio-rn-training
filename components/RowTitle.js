import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "700"
    },
});

const RowTitle = ({children}) => (
    <Text style={styles.text}>{children}</Text>
);

export default RowTitle;