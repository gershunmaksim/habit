import { Linking, Alert } from "react-native";

export const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert("Error", "Unable to open this link");
  }
};