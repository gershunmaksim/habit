import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTES } from "./routes";
import HomeScreen from "screens/HomeScreen";
import type { RootStackParamList } from "./types";

const NavigationStack =
  createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationStack.Navigator
      initialRouteName={ROUTES.HomeScreen}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <NavigationStack.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
      />
    </NavigationStack.Navigator>
  );
};

export default Navigator;