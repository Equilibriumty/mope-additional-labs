import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export const Result = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultBox}>
        <Text style={styles.text}>{props.result}</Text>
      </View>
    </View>
  );
};
