import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Button } from "react-native";
const large = 38,
  medium = 24,
  small = 20;

export default props => {
  const [lastLogOn, setLastLogOn] = useState(props.lastLogOn);
  const { HeaderPrimary, Secondary, Tertiary } = styles;
  return (
    <View>
      <LinearGradient
        colors={["#cc34eb", "#eb3474", "#eb3474"]}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={[HeaderPrimary]}> Sweat Book </Text>
          <Text style={[HeaderPrimary, Tertiary]}>
            Your last workout was on
          </Text>
          <Text style={[HeaderPrimary, Secondary]}>{lastLogOn}</Text>
          <Button
            title="Lets Get Down To Business"
            style={{ marginTop: 100 }}
            onPress={() => setLastLogOn("Today")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  HeaderPrimary: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
    marginTop: "25%",
    fontSize: large
  },
  Secondary: {
    fontSize: medium,
    marginBottom: "25%"
  },
  Tertiary: {
    fontSize: small
  }
});
