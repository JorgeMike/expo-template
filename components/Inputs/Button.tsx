import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";
import margin from "@/styles/margin";
import globalStyles from "@/styles/global";
import padding from "@/styles/padding";
import buttons from "@/styles/buttons";
import { StyleProps } from "react-native-reanimated";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant?: "primary" | "succes" | "danger" | "warning";
  fullWidth?: boolean;
  textStyle?: StyleProps;
  touchableStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export default function Button({
  text,
  onPress,
  variant = "primary",
  fullWidth = false,
  textStyle,
  touchableStyle,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttons[variant],
        fullWidth && globalStyles.w100,
        disabled && buttons.disabled,
        touchableStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          {
            color: "white",
            textAlign: "center",
            fontSize: 16,
          },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
