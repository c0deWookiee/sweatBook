import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";
import Icon from "react-native-vector-icons/EvilIcons";
//this component will cause the modal to open
const addAWorkout = props => {
  return (
    <View style={styles.plus}>
      <Text style={[styles.typebase, styles.Secondary]}>add a new workout</Text>
      <TouchableOpacity onPress={() => props.toggleModal()}>
        <Icon
          name="plus"
          size={100}
          style={{ color: "white", marginTop: "10%" }}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
};

export default addAWorkout;
