import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Score from "./components/Score";

const getFonts = () =>
  Font.loadAsync({
    "orbitron-regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    "orbitron-bold": require("./assets/fonts/Orbitron-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <Score />
      ) : (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
