import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import styles from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import margin from "@/styles/margin";
import buttons from "@/styles/buttons";
import padding from "@/styles/padding";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={require("@/assets/draws/draw7.svg")}
        style={[styles.logo, margin.bottom3]}
        contentFit="contain"
      />
      <Text style={[styles.title, { fontFamily: "Raleway_700Bold" }]}>
        Welcome to the app!
      </Text>
      <Text
        style={[
          styles.subtitle,
          margin.top3,
          margin.x4,
          {
            fontFamily: "Nunito_400Regular",
          },
        ]}
      >
        This is the onboarding screen. You can customize it however you like.
      </Text>
      <TouchableOpacity
        style={[buttons.primary, margin.top4, styles.w100, padding.y3]}
        onPress={() => {
          router.push("/(onboarding)/sliders");
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito_700Bold",
            color: "white",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
