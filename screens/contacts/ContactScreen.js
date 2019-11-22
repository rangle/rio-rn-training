import React from "react";
import { Platform, Alert } from "react-native";
import { Linking } from "expo"
import Screen from "../../components/Screen";
import ScreenHeader from "../../components/ScreenHeader";
import ScreenBody from "../../components/ScreenBody";
import ContactPreviewList from "./ContactPreviewList";
import ContactSearch from "./ContactSearch";

const FAKE_CONTACTS = [
  {
      key: "1",
      name: "Yazan Alaboudi",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "2",
      name: "John Doe",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "3",
      name: "Jane Austin",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "4",
      name: "Russell Brand",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "5",
      name: "Jack Hoi",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "6",
      name: "James Anderson",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "7",
      name: "Gaby Küpfer",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "8",
      name: "Yazan Alaboudi",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "9",
      name: "Yazan Alaboudi",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  },
  {
      key: "10",
      name: "Yazan Alaboudi",
      number: "+1 (212) 123-3510",
      picture: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1194,w_2119,x_0,y_70/f_auto,q_auto,w_1100/v1554738239/shape/mentalfloss/63484-istock-533859316.jpg"
  }
];


class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      searchTerm: ""
    };

    this.linkToPhone = this.linkToPhone.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  componentDidMount() {
    this.setState({ contacts: FAKE_CONTACTS })
  }

  setSearchTerm(searchTerm)  {
    this.setState({ searchTerm });
  }

  linkToPhone(number) {
    if(Platform.OS === "android") {
      Linking.openURL("tel://" + number);
    } else {
      Alert.alert("No phone app is available on iOS simulator");
    }
  }

  filterContactsBySearchTerm() {
    const lowerCasedSearchTerm = this.state.searchTerm.toLowerCase();
    return this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(lowerCasedSearchTerm)
    );
  }

  render() {
    return (
      <Screen>
        <ScreenHeader title="Contacts"/>
        <ScreenBody>
          <ContactSearch
            onChangeText={this.setSearchTerm}
          />
          <ContactPreviewList
            contacts={this.filterContactsBySearchTerm()}
            onCallPress={this.linkToPhone}
          />
        </ScreenBody>
      </Screen>
    );
  }
}

export default ContactScreen;
