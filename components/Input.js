import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 1,
        margin: 20,
        padding: 10
    }
})

const Input = (props) => (
    <TextInput style={styles.input} {...props}/>
)

export default Input;
