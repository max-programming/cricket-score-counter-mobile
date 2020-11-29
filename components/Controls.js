import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ScoreContext } from "../context/ScoreContext";

export default function Controls() {
  const { increaseRuns, increaseOver } = useContext(ScoreContext);
  return (
    <View style={styles.controls}>
      {/* <Button style={{ borderRadius: 50 }} title="1" /> */}
      <TouchableOpacity style={styles.button} onPress={() => increaseOver()}>
        <Text style={styles.number}>0</Text>
      </TouchableOpacity>
      <View style={styles.addRunsRow}>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(1)}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(2)}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(3)}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addRunsRow}>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(4)}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(5)}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => increaseRuns(6)}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    alignItems: "center",
  },
  addRunsRow: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#EFEFEF",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 85 / 2,
    width: 85,
    height: 85,
    margin: 8,
  },
  number: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "orbitron-regular",
  },
});
