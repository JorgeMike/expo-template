import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import globalStyles from "@/styles/global";
import margin from "@/styles/margin";
import { useFonts } from "expo-font";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Image } from "expo-image";
import Button from "@/components/Inputs/Button";
import { router } from "expo-router";

export default function index() {
  const [code, setCode] = useState(new Array(4).fill(""));
  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));
  const [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleInput = (index: number, value: string) => {
    const newValue = [...code];
    newValue[index] = value;
    setCode(newValue);

    if (value && index < 3) {
      inputs.current[index + 1].current.focus();
    }

    if (value === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  const handleSubmit = () => {
    console.log(code);
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={globalStyles.container}
    >
      <Image
        source={require("@/assets/draws/draw9.svg")}
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
        Verify Code
      </Text>
      <Text
        style={[
          globalStyles.subtitle,
          margin.x4,
          {
            fontFamily: "Nunito_400Regular",
          },
        ]}
      >
        We have sent a code to your email. Please enter the code below.
      </Text>
      <View style={[margin.y4, { flexDirection: "row", gap: 10 }]}>
        {code.map((_, index) => (
          <TextInput
            key={index}
            ref={inputs.current[index]}
            value={_}
            onChangeText={(value) => handleInput(index, value)}
            style={globalStyles.inputBox}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      <Button
        text="Submit"
        touchableStyle={globalStyles.w50}
        onPress={handleSubmit}
        disabled={code.some((c) => c === "")}
      />
      <Text style={[globalStyles.text, margin.top4]}>
        Didn't receive the code?{" "}
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
          <Text style={[globalStyles.link]}>Resend Code</Text>
        </TouchableOpacity>
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/(auth)/sign-in")}
        style={margin.top4}
      >
        <Text style={[globalStyles.link]}>Go back to Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
