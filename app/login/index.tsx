import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import margin from "@/styles/margin";
import { Fontisto } from "@expo/vector-icons";
import Input from "@/components/Inputs/Input";

export default function index() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{ flex: 1 }}>
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
            styles.title,
            margin.top4,
            { fontFamily: "Raleway_700Bold", textAlign: "center" },
          ]}
        >
          Welcome Back!
        </Text>
        <Text
          style={[
            styles.subtitle,
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
          icon="email"
          placeholder="Email or Username"
          onchange={(text) => setEmailOrUserName(text)}
          keyboard="email-address"
        />
        <Input
          value={password}
          icon="locked"
          placeholder="Password"
          onchange={(text) => setPassword(text)}
          keyboard="default"
          password
        />
      </View>
    </LinearGradient>
  );
}
