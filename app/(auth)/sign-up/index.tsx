import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import margin from "@/styles/margin";
import globalStyles from "@/styles/global";
import Input from "@/components/Inputs/Input";
import Button from "@/components/Inputs/Button";
import { router } from "expo-router";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
  useFonts,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { FontAwesome } from "@expo/vector-icons";
import inputStyles from "@/styles/inputs";

export default function index() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={[margin.top4]}>
        <Image
          source={require("@/assets/draws/draw8.svg")}
          style={{
            width: 185.25,
            height: 122,
            alignSelf: "center",
          }}
        />
        <Text
          style={[
            globalStyles.title,
            margin.top4,
            { fontFamily: "Raleway_700Bold", textAlign: "center" },
          ]}
        >
          Let's get started!
        </Text>
        <Text
          style={[
            globalStyles.subtitle,
            {
              fontFamily: "Nunito_400Regular",
            },
          ]}
        >
          Create an account to get all features
        </Text>
      </View>
      <View style={[margin.top4]}>
        <Input
          value={name}
          placeholder="Complete name"
          onchange={(text) => setName(text)}
          icon="user"
          style={margin.bottom2}
          keyboard="default"
        />
        <Input
          value={emailOrUserName}
          placeholder="Email or Username"
          onchange={(text) => setEmailOrUserName(text)}
          keyboard="email-address"
          icon="email"
          style={margin.bottom2}
        />
        <Input
          value={password}
          placeholder="Password"
          onchange={(text) => setPassword(text)}
          keyboard="default"
          password
          icon="lock"
        />
        <View style={{ alignSelf: "center" }}>
          <Button
            touchableStyle={[margin.top2]}
            fullWidth
            text="Sign Up"
            onPress={() => router.push("/(auth)/verify-code")}
          />
        </View>

        <View
          style={[
            margin.top2,
            { flexDirection: "row", alignSelf: "center", gap: 20 },
          ]}
        >
          <FontAwesome name="google" size={24} color="black" />
          <FontAwesome name="github" size={24} color="black" />
        </View>

        <View style={[margin.top2, { alignSelf: "center" }]}>
          <Text>
            <Text style={{ fontFamily: "Nunito_400Regular" }}>
              Already have an account?{" "}
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
