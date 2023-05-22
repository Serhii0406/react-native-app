import React from "react";
import { View, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";

import Login from "./Screens/LoginScreen";
import Register from "./Screens/RegistrationScreen";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <Login /> */}
      <Register />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1},
});