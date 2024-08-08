import { View, Text } from "react-native";
import React from "react";
import global from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";

export default function index() {
  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={global.container}>
      <Text>Forgot Password Screen</Text>
    </LinearGradient>
  );
}
