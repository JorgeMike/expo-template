import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "@/styles/global";

export default function index() {
  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={globalStyles.container}
    >
      <Text>Home Screen</Text>
    </LinearGradient>
  );
}
