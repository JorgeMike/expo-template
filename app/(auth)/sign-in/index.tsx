import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import alerts from "@/styles/alerts";

export default function index() {
  const { login, error } = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    emailOrUserName: "",
    password: "",
  });

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

  const handleSubmit = async () => {
    setIsLoading(true)
    await login(userData.emailOrUserName, userData.password)
    setIsLoading(false)
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View style={{ alignSelf: "center" }}>
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
          value={userData.emailOrUserName}
          placeholder="Email or Username"
          onchange={(text) =>
            setUserData({ ...userData, emailOrUserName: text })
          }
          keyboard="email-address"
          icon="email"
          style={margin.bottom2}
        />
        <Input
          value={userData.password}
          placeholder="Password"
          onchange={(text) => setUserData({ ...userData, password: text })}
          keyboard="default"
          password
          icon="lock"
        />
        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text
            style={[{
              textAlign: "right",
              fontFamily: "Nunito_600Semibold",
              color: "#3B82F6",
              fontSize: 14,
            }, margin.y2, margin.x2]}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {error &&
          <Text style={[alerts.danger, margin.bottom2, margin.x3]}>{error}</Text>
        }
        <View style={{ alignSelf: "center" }}>
          <Button
            fullWidth
            text="Sign In"
            onPress={handleSubmit}
            disabled={isLoading}
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
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")} disabled={isLoading}>
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
