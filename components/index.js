import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Welcome from "./welcome";
import TabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";

export class index extends Component {
  render() {
    return (
      <TabView
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar></ScrollableTabBar>}
      >
        <View tabLabel="2">
          <Button title="SUUUUUUUPER LOOOONG TITLE"></Button>
        </View>
        <Welcome tabLabel="1" lastLogOn="September 24, 1993"></Welcome>
      </TabView>
    );
  }
}

export default index;
