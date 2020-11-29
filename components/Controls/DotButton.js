import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ScoreContext } from "../../context/ScoreContext";
import { Ionicons } from "@expo/vector-icons";

export default function AddButtons() {
  const { increaseOver } = useContext(ScoreContext);
  return (
    <TouchableOpacity style={styles.button} onPress={() => increaseOver()}>
      <Text style={styles.number}>
        <Ionicons name="ios-tennisball" size={40} color="black" />
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
