import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { ScoreProvider } from "./context/ScoreContext";
import Score from "./components/Score";
import Controls from "./components/Controls";

const getFonts = () =>
  Font.loadAsync({
    "orbitron-regular": require("./assets/fonts/Orbitron-Regular.ttf"),
    "orbitron-bold": require("./assets/fonts/Orbitron-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return (
    <ScoreProvider>
      <View style={styles.container}>
        {fontsLoaded ? (
          <>
            <Score />
            <Controls />
          </>
        ) : (
          <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
          />
        )}
      </View>
    </ScoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
