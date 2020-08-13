import { StyleSheet, Platform } from "react-native";

export const commonstyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadowCardItem: {
    backgroundColor: '#fff',
    elevation: 1.9,
  },
  shadow: Platform.OS == "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: .3,
    shadowRadius: 6,
  } : {
    elevation: 4,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 2,
      height: 4
    }
    // padding: 10,
    // borderColor: SHADOW_COLOR,
    // borderWidth: 5
  },
})