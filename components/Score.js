import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Score() {
  return (
    <>
      <View style={styles.score}>
        <Text style={styles.text}>00</Text>
        <Text style={styles.text}>0</Text>
      </View>
      <View style={styles.overs}>
        <Text style={styles.overText}>
          Overs: <Text style={styles.overNo}>0.0</Text>
        </Text>
      </View>
      <View style={styles.hr} />
    </>
  );
}

const styles = StyleSheet.create({
  score: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 20,
    margin: 15,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "orbitron-regular",
    fontSize: 45,
  },
  overs: {
    marginRight: 15,
  },
  overText: {
    textAlign: "right",
    fontSize: 23,
  },
  overNo: {
    fontFamily: "orbitron-bold",
  },
  hr: {
    marginTop: 21,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
