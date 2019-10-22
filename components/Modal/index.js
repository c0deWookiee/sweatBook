import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { connect } from "react-redux";
import Header from "../CurrentWorkout/Header";
import Input from "./inputHeader";
import styles from "../styles";

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: true
    };
  }

  render() {
    return (
      <Modal
        animationType="slide"
        trans={false}
        visible={this.props.visible}
        onRequestClose={() => this.props.toggleModal()}
      >
        <View
          style={[styles.containerBase, { paddingLeft: 0, paddingRight: 0 }]}
        >
          <Header style={{ backgroundColor: "green" }}>
            <Input
              placeholder="Search Workouts..."
              onChangeText={this.props.onChangeText}
              style={{ color: "white" }}
            ></Input>
          </Header>
        </View>
      </Modal>
    );
  }
}

// const mapStatetoProps =

export default MyModal;
