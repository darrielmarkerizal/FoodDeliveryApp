import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
