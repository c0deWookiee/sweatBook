import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Button } from "react-native";
import styles from "./styles";

const { Secondary, Tertiary, typebase, containerBase, marTop5 } = styles;
export default props => {
  const [lastLogOn, setLastLogOn] = useState(props.lastLogOn);
  return (
    <View>
      <LinearGradient
        colors={["#cbad6d", "#d53369"]}
        start={[0.1, 0.3]}
        end={[0.9, 0.9]}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={[containerBase]}>
          <Text style={[typebase, marTop5, { flex: 0.5 }]}> Sweat Book </Text>
          <Text style={[Tertiary, marTop5]}>Your last workout was on</Text>
          <Text style={[Secondary, marTop5]}>{lastLogOn}</Text>
          <Button
            title="Lets Get Down To Business"
            style={{ marginTop: 100 }}
            onPress={() => {
              props.splash();
              setLastLogOn("Today");
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
