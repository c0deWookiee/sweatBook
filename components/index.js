import React, { Component } from "react";
import { Text, View } from "react-native";
import Welcome from "./welcome";

export class index extends Component {
  render() {
    return <Welcome lastLogOn="September 24, 1990"></Welcome>;
  }
}

export default index;
