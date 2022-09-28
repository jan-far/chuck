import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackParamList } from "../../types";
import Card from "../components/Card";
import JokeList from "../components/JokeList";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { AppContext } from "../context/AppContext";

type Props = NativeStackScreenProps<StackParamList>;

const Home = ({ ...props }: Props) => {
  const { loading, categories, searching } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.header}>
        <Text style={styles.text}>{searching ? "Jokes" : "Chuck Categories"}</Text>
      </View>
      <View>
        {loading ? (
          <Loading />
        ) : searching ? (
          <JokeList />
        ) : (
          <ScrollView>
            <View style={styles.contentWrapper}>
              {categories?.map((category) => (
                <View key={category} style={styles.content}>
                  <Card category={category} {...props} />
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationColor: "lightgrey",
    textTransform: "capitalize",
    letterSpacing: 1.2,
    fontSize: 18,
  },
  contentWrapper: {
    marginVertical: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  content: {
    width: "40%",
    marginVertical: 10,
  },
});
