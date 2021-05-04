import React from "react";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { Input } from "../components/Input";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Navbar title="Лабораторна робота №3.1" labName="Факторизація чисел" />
      <Input />
    </View>
  );
};
