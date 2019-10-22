import React, { Component } from "react";
import { Text, View, TouchableOpacity, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import Icon from "react-native-vector-icons/EvilIcons";
import Header from "./Header";

export default class currentWorkouts extends Component {
  render() {
    return (
      <LinearGradient
        style={[styles.containerBase]}
        colors={["#4b6cb7", "#182848"]}
      >
        <Header style={{ width: "111%" }}>
          <Text style={[styles.typebase, styles.marTop5]}>Current Workout</Text>
        </Header>

        <View style={styles.plus}>
          <Text style={[, styles.typebase, styles.Secondary]}>
            add a new workout
          </Text>
          <TouchableOpacity>
            <Icon
              name="plus"
              size={100}
              style={{ color: "white", marginTop: "10%" }}
            ></Icon>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
