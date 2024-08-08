import { StyleSheet } from "react-native";

const buttons = StyleSheet.create({
  primary: {
    backgroundColor: "#0B5ED7",
    borderRadius: 5,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  secondary: {
    backgroundColor: "#5C636A",
    borderRadius: 5,
    padding: 10,
  },
  succes: {
    backgroundColor: "#157347",
    borderRadius: 5,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  danger: {
    backgroundColor: "#D14545",
    borderRadius: 5,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  warning: {
    backgroundColor: "#D97706",
    borderRadius: 5,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  disabled: {
    opacity: 0.5,
  },
});

export default buttons;
