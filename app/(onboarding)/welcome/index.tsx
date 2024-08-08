import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import globalStyles from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import margin from "@/styles/margin";
import buttons from "@/styles/buttons";
import padding from "@/styles/padding";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import Button from "@/components/Inputs/Button";

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
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={globalStyles.container}
    >
      <StatusBar style="dark" />
      <Image
        source={require("@/assets/draws/draw7.svg")}
        style={[globalStyles.logo, margin.bottom3]}
        contentFit="contain"
      />
      <Text style={[globalStyles.title, { fontFamily: "Raleway_700Bold" }]}>
        Welcome to the app!
      </Text>
      <Text
        style={[
          globalStyles.subtitle,
          margin.top3,
          margin.x4,
          {
            fontFamily: "Nunito_400Regular",
          },
        ]}
      >
        This is the onboarding screen. You can customize it however you like.
      </Text>
      <Button
        onPress={() => router.push("/(onboarding)/sliders")}
        text="Get Starting"
        fullWidth
        textStyle={{ fontFamily: "Nunito_700Bold" }}
        touchableStyle={[margin.top4]}
      />
    </LinearGradient>
  );
}
