import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./components/";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 2
  }
});
