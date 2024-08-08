import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import margin from "@/styles/margin";
import styles from "@/styles/global";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { iconsType } from "@/types/fontisto";

interface InputProps {
  placeholder: string;
  value: string;
  onchange: (text: string) => void;
  keyboard: KeyboardTypeOptions;
  password?: boolean;
  icon?: string;
  style?: any;
}

export default function Input({
  value,
  placeholder,
  keyboard,
  password = false,
  icon,
  onchange,
  style,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const getIcon = (icon: string) => {
    switch (icon) {
      case "email":
        return "email";
      case "lock":
        return "locked";
      case "user":
        return "person";
      case "phone":
        return "phone";
      case "search":
        return "search";
      case "key":
        return "key";
      default:
        return "person";
    }
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboard}
        value={value}
        onChangeText={(text) => onchange(text)}
        secureTextEntry={password && !showPassword}
      />
      {icon && <Fontisto name={getIcon(icon)} style={styles.inputIcon} />}
      {password && (
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye"}
            style={styles.showPasswordIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
