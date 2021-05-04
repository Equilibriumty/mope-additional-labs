import React from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Navbar } from "../components/Navbar";
import { Lab2 } from "../components/Lab2";
export const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar
        title="Лабораторна робота №3.2"
        labName="Дослідження нейронних мереж"
      />
      <Lab2 />
    </View>
  );
};
