import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { StackParamList } from "../../types";

interface Props extends NativeStackScreenProps<StackParamList> {
  category: string;
}

const Card = ({ category, navigation }: Props) => {
  return (
    <TouchableHighlight
      underlayColor="lightgrey"
      onPress={() => {
        navigation?.navigate("Category", { category });
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationColor: "lightgrey",
    textTransform: "capitalize",
    letterSpacing: 1.2,
    fontSize: 18,
  },
});
