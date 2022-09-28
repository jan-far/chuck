import React from "react";
import { StyleSheet, Text } from "react-native";

const Loading = () => {
  return <Text style={styles.text}>Loading...</Text>;
};

export default Loading;

const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationColor: "lightgrey",
    textTransform: "capitalize",
    letterSpacing: 1.2,
    fontSize: 18,
  },
});
