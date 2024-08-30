import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 40,
    backgroundColor: "white",
    color: "#2A3439",
  },
  inputIcon: {
    position: "absolute",
    top: 14,
    left: 28,
    color: "#A1A1A1",
    fontSize: 20,
  },
  showPasswordButton: {
    position: "absolute",
    top: 14,
    right: 30,
    color: "#A1A1A1",
    fontSize: 20,
  },
  showPasswordIcon: {
    fontSize: 20,
    color: "#ccc",
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#E5ECF9",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 8,
  },
});

export default inputStyles;
