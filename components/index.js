import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import CurrentWorkouts from "./CurrentWorkout";
import Welcome from "./welcome";
import TabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true
    };
  }
  handleSplash = () => {
    this.setState({ splash: !this.state.splash });
  };
  render() {
    return this.state.splash ? (
      <Welcome
        lastLogOn="September 24, 1993"
        splash={this.handleSplash}
      ></Welcome>
    ) : (
      <TabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar></ScrollableTabBar>}
        tabBarPosition="bottom"
      >
        <View tabLabel="2">
          <Button title="SUUUUUUUPER LOOOONG TITLE"></Button>
        </View>
        <CurrentWorkouts tabLabel="1"></CurrentWorkouts>
      </TabView>
    );
  }
}

export default index;
