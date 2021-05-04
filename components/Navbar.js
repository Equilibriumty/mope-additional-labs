import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/styles";
export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbar_text}>{props.title}</Text>

      <Text style={styles.navbar_text}>{props.labName}</Text>
      <View>
        <Text style={styles.navbar_text}>Виконав: Ільків Максим, ІО-93</Text>
      </View>
    </View>
  );
};
