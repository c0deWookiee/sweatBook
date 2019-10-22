import { Dimensions, StyleSheet } from "react-native";
import containers from "./Containers";
import Header1_5 from "./Headers";
import type from "./Typography";
import utility from "./utility";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  ...containers,
  ...Header1_5,
  ...type,
  ...utility
});
export default styles;
