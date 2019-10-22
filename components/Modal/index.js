import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { connect } from "react-redux";
import Header from "../CurrentWorkout/Header";
import styles from "../styles";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        animationType="slide"
        trans={false}
        visible={false}
        onRequestClose={() => console.warn("modal being close")}
      >
        <Header>
          <Text style={[styles.typebase, styles.marTop5]}>Current Workout</Text>
        </Header>
      </Modal>
    );
  }
}

export default Modal;
