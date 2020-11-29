import React from "react";
import { View, StyleSheet } from "react-native";
import AddButtons from "./Controls/AddButtons";
import DotButton from "./Controls/DotButton";
import OtherButtons from "./Controls/OtherButtons";

export default function Controls() {
  return (
    <View style={styles.controls}>
      <DotButton />
      <AddButtons />
      <OtherButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    alignItems: "center",
  },
});
