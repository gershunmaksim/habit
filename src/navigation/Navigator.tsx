import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from "./TabNavigator"
import type { RootStackParamList } from "./types"
import LanguagesScreen from "screens/LanguagesScreen"
import { ROUTES } from "navigation/routes"
import TemperatureScreen from "screens/TemperatureScreen "
import WeightScreen from "screens/WeightScreen"
import PressureScreen from "screens/PressureScreen"
import MoodScreen from "screens/MoodScreen"
import SplashScreen from "screens/SplashScreen"
const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.SplashScreen}
    >
      <Stack.Screen
        name={ROUTES.SplashScreen}
        component={SplashScreen}
      />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen
        name={ROUTES.LanguagesScreen}
        component={LanguagesScreen}
      />
      <Stack.Screen
        name={ROUTES.TemperatureScreen}
        component={TemperatureScreen}
      />
      <Stack.Screen
        name={ROUTES.WeightScreen}
        component={WeightScreen}
      />
      <Stack.Screen
        name={ROUTES.PressureScreen}
        component={PressureScreen}
      />
      <Stack.Screen
        name={ROUTES.MoodScreen}
        component={MoodScreen}
      />
    </Stack.Navigator>
  )
}

export default Navigator
