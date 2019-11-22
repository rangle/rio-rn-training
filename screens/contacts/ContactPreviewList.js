import React from "react";
import { FlatList } from "react-native";
import ContactPreview from "./ContactPreview";

const ContactPreviewList = ({ contacts, onCallPress }) => (
    <FlatList 
        data={contacts}
        renderItem={({ item }) => <ContactPreview {...item} onCallPress={onCallPress} />}
    />
);

export default ContactPreviewList;