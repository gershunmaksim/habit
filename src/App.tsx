import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navigator from "navigation/Navigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store, useTypedSelector } from "store";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

const LanguageSync: React.FC = () => {
  const { language } = useTypedSelector((state) => state.auth);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return null;
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LanguageSync />
            <Navigator />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
