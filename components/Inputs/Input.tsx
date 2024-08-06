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
  icon: iconsType;
  password?: boolean;
}

export default function Input({
  value,
  placeholder,
  icon,
  keyboard,
  password = false,
  onchange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[margin.bottom2, styles.inputContainer]}>
      <Fontisto name={icon} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboard}
        value={value}
        onChangeText={(text) => onchange(text)}
        secureTextEntry={password && !showPassword}
      />
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
