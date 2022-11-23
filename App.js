import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./screens/Home";
import SafeViewAndroid from "./utils/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.droidSafeArea}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <Home />
    </SafeAreaView>
  );
}
