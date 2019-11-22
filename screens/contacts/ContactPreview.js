import React from "react";
import { Ionicons } from '@expo/vector-icons';
import Avatar from "../../components/Avatar";
import Row from "../../components/Row";
import RowGraphic from "../../components/RowGraphic";
import RowActions from "../../components/RowActions";
import RowContent from "../../components/RowContent";
import RowTitle from "../../components/RowTitle";
import RowSubtitle from "../../components/RowSubtitle";

const ContactPreview = ({ name, number, picture, onCallPress }) => (
    <Row>
        <RowGraphic>
            <Avatar source={{uri: picture}}/>
        </RowGraphic>
        <RowContent>
            <RowTitle>{name}</RowTitle>
            <RowSubtitle>{number}</RowSubtitle>
        </RowContent>
        <RowActions>
            <Ionicons
                name="md-call"
                size={25}
                onPress={(e) => onCallPress(number)}
            />
        </RowActions>
    </Row>
);

export default ContactPreview;