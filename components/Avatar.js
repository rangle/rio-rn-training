import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 5
    }
});

const Avatar = ({ source }) => (
    <Image
        source={source}
        style={styles.image}
    />
);

export default Avatar;