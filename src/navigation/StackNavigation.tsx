import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Category from "../screens/Category";
import { StackParamList } from "../../types";

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
