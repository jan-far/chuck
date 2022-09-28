import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackParamList } from "../../types";
import Loading from "../components/Loading";
import StyledText from "../components/StyledText";
import { AppContext } from "../context/AppContext";

type Props = NativeStackScreenProps<StackParamList, "Category">;

const Category = ({ route }: Props) => {
  const { category } = route.params;
  const { loadingJoke, joke, getJoke } = useContext(AppContext);

  useLayoutEffect(() => {
    getJoke(category);
  }, []);

  return (
    <View style={styles.wrapper}>
      {loadingJoke ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <Image
            source={{
              uri: joke.icon_url,
              cache: "force-cache",
            }}
            style={{ width: 200, height: 150, resizeMode: "contain" }}
          />
          <View style={{ paddingHorizontal: 5 }}>
            <Text style={styles.joke}>Joke</Text>
            <StyledText value={joke.value} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
  },
  joke: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "lightgrey",
    marginBottom: 5,
  },
});
