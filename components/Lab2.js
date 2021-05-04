import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export const Lab2 = () => {
  const p = 0.4;
  const a = [0, 6];
  const b = [1, 5];
  const c = [3, 3];
  const d = [2, 4];
  const epsilon = [0.001, 0.01, 0.05, 0.1, 0.2, 0.3];
  const iterationCount = [100, 200, 500, 1000];
  const deadlineTime = [0.5, 1, 2, 5];
  return (
    <View>
      <View style={styles.dataBox}>
        <Text style={styles.dataText}>Поріг P: {p}</Text>
        <Text style={styles.dataText}>
          Точки:{" "}
          {`A: ${a.toString()}, B:${b.toString()}, C: ${c.toString()}, D: ${d.toString()}`}
        </Text>
        <Text style={styles.dataText}>
          Швидкості навчання: {epsilon.toString()}
        </Text>
        <Text style={styles.dataText}>
          Часовий дедлайн: {deadlineTime.toString()}
        </Text>
        <Text style={styles.dataText}>
          К-сть ітерацій: {iterationCount.toString()}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.center}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Inter-SemiBold",
                  color: "#4B9460",
                }}
              >
                Змоделювати
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
