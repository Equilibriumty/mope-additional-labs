import React from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Navbar } from "../components/Navbar";
export const TestScreen2 = () => {
  return (
    <View style={styles.container}>
      <Navbar
        title="Лабораторна робота №3.3"
        labName="Дослідження генетичного алгоритму"
      />
    </View>
  );
};
