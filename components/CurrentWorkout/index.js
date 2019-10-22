import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import Header from "./Header";
import AddWorkout from "./addAWorkout";
import MyModal from "../Modal";
import toggleModalActions from "../../redux/actions/actions/";

const mapStateToProps = state => {
  return {
    currentWorkouts: state.currentWorkouts,
    visible: state.UI.visible
  };
};

const mapActionsToProps = dispatch => ({
  toggleModal() {
    //dispatch an action
    dispatch(toggleModalActions());
  }
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class currentWorkouts extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <LinearGradient
          style={[styles.containerBase]}
          colors={["#4b6cb7", "#182848"]}
        >
          <MyModal
            toggleModal={this.props.toggleModal}
            visible={this.props.visible}
          ></MyModal>

          <Header style={{ width: "111%" }}>
            <Text style={[styles.typebase, styles.marTop5]}>
              Current Workout
            </Text>
          </Header>
          <AddWorkout toggleModal={this.props.toggleModal}></AddWorkout>
        </LinearGradient>
      );
    }
  }
);
