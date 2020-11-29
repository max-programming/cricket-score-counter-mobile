import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScoreContext } from "../context/ScoreContext";

export default function Score() {
  const {
    runs,
    wickets,
    over: { overNo, ballNo },
  } = useContext(ScoreContext);
  return (
    <>
      <View style={styles.score}>
        <Text style={styles.text}>{runs >= 10 ? runs : `0${runs}`}</Text>
        <Text style={styles.text}>{wickets}</Text>
      </View>
      <View style={styles.overs}>
        <Text style={styles.overText}>
          Overs:{" "}
          <Text style={styles.overNo}>
            {overNo}.{ballNo}
          </Text>
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
