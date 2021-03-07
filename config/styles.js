//Default text styles for Android and IOS platforms. These styles will be used for all text.
import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
