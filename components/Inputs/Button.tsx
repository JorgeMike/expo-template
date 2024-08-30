import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import React from "react";
import globalStyles from "@/styles/global";
import buttons from "@/styles/buttons";

interface ButtonProps {
  text: string;
  onPress: () => void;
  variant?: "primary" | "succes" | "danger" | "warning";
  fullWidth?: boolean;
  textStyle?: StyleProp<TextStyle>;
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
        {disabled ? "Loading..." : text}
      </Text>
    </TouchableOpacity>
  );
}
