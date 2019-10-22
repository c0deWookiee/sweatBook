import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../styles";

export default class InputHeader extends Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: "pink",
          borderBottomWidth: 3,
          width: "90%"
        }}
      >
        <TextInput {...this.props}></TextInput>
      </View>
    );
  }
}
