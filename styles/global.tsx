import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: wp("19%"),
    height: hp("9%"),
  },
  title: {
    color: "black",
    fontSize: hp("3%"),
  },
  subtitle: {
    color: "#2A3439",
    fontSize: hp("2%"),
    textAlign: "center",
  },
  text: {
    color: "#2A3439",
    fontSize: hp("1.8%"),
    textAlign: "center",
  },
  w100: {
    width: wp("90%"),
  },
  w50: {
    width: wp("50%"),
  },
  dots: {
    backgroundColor: "#5C636A",
  },
  activeDot: {
    backgroundColor: "#0B5ED7",
  },
  draw: {
    width: wp("30%"),
    height: hp("20%"),
    alignSelf: "center",
  },
  link: {
    color: "#3B82F6",
    textDecorationLine: "underline",
  },
});

export default globalStyles;
