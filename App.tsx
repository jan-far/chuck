import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppContextProvider from "./src/context/AppContext";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppContextProvider>
        <RootNavigator />
      </AppContextProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
