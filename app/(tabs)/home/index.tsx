import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "@/styles/global";
import useAuth from "@/hooks/useAuth";
import useSession from "@/hooks/useSession";

export default function index() {
  const { token, user } = useSession()

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={globalStyles.container}
    >
      <Text>Home Screen</Text>
    </LinearGradient>
  );
}
