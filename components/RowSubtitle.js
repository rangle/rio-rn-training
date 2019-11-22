import React from "React";
import { Text } from "react-native";

const styles = {
    subtitle: {
        color: "grey"
    }
};

const RowSubtitle = ({ children }) => (
    <Text style={styles.subtitle}>{children}</Text>
);

export default RowSubtitle;