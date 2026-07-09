import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "store";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}