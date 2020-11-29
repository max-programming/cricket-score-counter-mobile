import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Controls from "./components/Controls";
import Score from "./components/Score";
import { ScoreProvider } from "./context/ScoreContext";

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
