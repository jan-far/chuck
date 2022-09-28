import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { JokeProps } from "../../types";
import { AppContext } from "../context/AppContext";
import StyledText from "./StyledText";

const JokeList = () => {
  const { query, searchValue } = useContext(AppContext);

  const _renderItem = ({ item }: { item: JokeProps }) => {
    return (
      <View style={styles.wrapper}>
        <StyledText value={item.value} />
      </View>
    );
  };

  const _renderEmpty = () => (
    <View style={styles.wrapper}>
      {searchValue ? (
        <StyledText value={`No result found for "${searchValue}"`} />
      ) : (
        <StyledText value="Enter your search query" />
      )}
    </View>
  );

  return (
    <FlatList data={query.result} renderItem={_renderItem} ListEmptyComponent={_renderEmpty} />
  );
};

export default JokeList;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});
