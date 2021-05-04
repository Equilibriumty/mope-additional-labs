import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import { Result } from "./Result";
const Factorization = require("factorization");
export const Input = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const [result, setResult] = useState("");

  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) if (n % i == 0) return false;

    return true;
  };

  const handlePress = () => {
    if (isPrime(value) === true) {
      setState(true);
      setResult(`Число є простим\n${value} = ${value} × 1`);
    } else if (value <= 0) {
      setResult(`Число не є натуральним!`);
    } else if (isPrime(value) === false) {
      const arrayValues = Factorization(value);
      const substr = arrayValues.join(" × ");
      const resultString = `Результат факторизації:\n${value} = ${substr}`;
      setState(true);
      setResult(resultString);
    }
  };
  const handleLongPress = () => {
    setState(false);
    setValue("");
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Введіть число..."
            keyboardType="decimal-pad"
            placeholderTextColor="#BDBDBD"
            onChangeText={(text) => setValue(text)}
            defaultValue={value}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
            onLongPress={handleLongPress}
          >
            <View style={styles.center}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Inter-SemiBold",
                  color: "#4B9460",
                }}
              >
                Розрахувати
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>{state === false ? null : <Result result={result} />}</View>
    </View>
  );
};
