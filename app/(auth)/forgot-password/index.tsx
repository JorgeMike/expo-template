import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import inputStyles from "@/styles/inputs";
import globalStyles from "@/styles/global";
import margin from "@/styles/margin";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import Input from "@/components/Inputs/Input";
import { router } from "expo-router";
import Button from "@/components/Inputs/Button";

export default function index() {
  const [email, setEmail] = React.useState("");
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={{ alignSelf: "center" }}>
        <Text
          style={[
            globalStyles.title,
            { fontFamily: "Raleway_700Bold", textAlign: "center" },
          ]}
        >
          Forgot Password?
        </Text>
        <Text
          style={[globalStyles.subtitle, { fontFamily: "Nunito_400Regular" }]}
        >
          Enter your email to reset your password
        </Text>
      </View>
      <View style={[margin.top4]}>
        <Input
          placeholder="Email"
          icon="email"
          value={email}
          onchange={(text) => setEmail(text)}
          keyboard="email-address"
          style={margin.bottom2}
        />
        <View style={{ alignSelf: "center" }}>
          <Button
            fullWidth
            text="Send"
            onPress={() => router.push("/(auth)/sign-in")}
          />
        </View>
        <View style={[margin.top2, { alignSelf: "center" }]}>
          <Text>
            <Text style={{ fontFamily: "Nunito_400Regular" }}>
              Remember your password?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text
                style={{ fontFamily: "Raleway_600SemiBold", color: "#3B82F6" }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
