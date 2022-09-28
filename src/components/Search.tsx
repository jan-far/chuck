import React, { useContext } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  const { searching, error, query, setSearching, searchValue, setSearchValue } =
    useContext(AppContext);

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.searchBar, searching ? styles.activeSearch : styles.unactiveSearch]}>
          <Ionicons name="search" size={20} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="grey"
            value={searchValue}
            onChangeText={setSearchValue}
            onFocus={() => {
              setSearching(true);
            }}
            onBlur={() => {
              setSearching(false);
            }}
          />
          {searching && (
            <Ionicons
              name="close-sharp"
              size={20}
              color="red"
              style={{ marginLeft: 2 }}
              onPress={() => {
                setSearchValue("");
              }}
            />
          )}
        </View>
        {searching && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setSearching(false);
              }}
            />
          </View>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      {searchValue && query.result.length >= 1 && <Text>Total: {query.total}</Text>}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "85%",
    borderRadius: 10,
    fontSize: 20,
    marginLeft: 5,
  },
  searchBar: {
    paddingHorizontal: 5,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  activeSearch: {
    width: "82%",
  },
  unactiveSearch: {
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: 12,
    fontWeight: "500",
  },
});
