import { Text } from "react-native";
import React from "react";
import globalStyles from "@/styles/global";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { slider } from "@/types/global";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { welcomeSliders } from "@/constants/sliders";
import buttons from "@/styles/buttons";
import margin from "@/styles/margin";
import { LinearGradient } from "expo-linear-gradient";
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

  const renderItem = ({ item }: { item: slider }) => {
    return (
      <LinearGradient
        colors={["#E5ECF9", "#F6F7F9"]}
        style={globalStyles.container}
      >
        <Text
          style={[
            globalStyles.title,
            margin.y4,
            { fontFamily: "Raleway_700Bold" },
          ]}
        >
          {item.title}
        </Text>
        <Image
          source={item.image}
          style={[
            globalStyles.draw,
            margin.y4,
            { width: item.imageSize?.width, height: item.imageSize?.height },
          ]}
        />
        <Text
          style={[
            globalStyles.subtitle,
            margin.top4,
            margin.x4,
            {
              fontFamily: "Nunito_700Bold",
            },
          ]}
        >
          {item.subtitle}
        </Text>
        <Text
          style={[
            globalStyles.text,
            margin.top2,
            margin.x4,
            {
              fontFamily: "Nunito_400Regular",
            },
          ]}
        >
          {item.text}
        </Text>
      </LinearGradient>
    );
  };

  const renderDoneButton = () => {
    return <Text style={buttons.succes}>Start Now</Text>;
  };

  const renderNextButton = () => {
    return <Text style={buttons.primary}>Next</Text>;
  };

  const handleRouterLogin = () => {
    router.push("/sign-in");
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={welcomeSliders}
      onDone={handleRouterLogin}
      onSkip={handleRouterLogin}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton={false}
      dotStyle={globalStyles.dots}
      activeDotStyle={globalStyles.activeDot}
      bottomButton={true}
    />
  );
}
