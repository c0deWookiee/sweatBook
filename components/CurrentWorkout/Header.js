import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const Header = props => {
  return <View style={[styles.Header1_5, props.style]}>{props.children}</View>;
};

export default Header;
