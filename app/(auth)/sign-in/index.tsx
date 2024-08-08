import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import globalStyles from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
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
import margin from "@/styles/margin";
import Input from "@/components/Inputs/Input";
import { Image } from "expo-image";
import { router } from "expo-router";
import Button from "@/components/Inputs/Button";
import { FontAwesome } from "@expo/vector-icons";

export default function index() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={[margin.top4, { alignSelf: "center" }]}>
        <Image
          source={require("@/assets/draws/draw6.svg")}
          style={{
            width: 185.25,
            height: 150,
          }}
        />
        <Text
          style={[
            globalStyles.title,
            margin.top4,
            { fontFamily: "Raleway_700Bold", textAlign: "center" },
          ]}
        >
          Welcome Back!
        </Text>
        <Text
          style={[
            globalStyles.subtitle,
            {
              fontFamily: "Nunito_400Regular",
            },
          ]}
        >
          Log in to your account to continue.
        </Text>
      </View>
      <View style={margin.top4}>
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
        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Nunito_600Semibold",
              color: "#3B82F6",
              fontSize: 14,
              marginTop: 5,
              marginHorizontal: 32,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <View style={{ alignSelf: "center" }}>
          <Button
            touchableStyle={[margin.top2]}
            fullWidth
            text="Sign In"
            onPress={() => router.push("/home")}
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
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text
                style={{ fontFamily: "Raleway_600SemiBold", color: "#3B82F6" }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
