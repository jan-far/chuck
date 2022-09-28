import React from "react";
import { StyleSheet, Text } from "react-native";

const StyledText = ({ value }: { value?: string }) => {
  return <Text style={styles.text}>{value}</Text>;
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationColor: "lightgrey",
    textTransform: "capitalize",
    letterSpacing: 1.2,
    fontSize: 16,
  },
});
