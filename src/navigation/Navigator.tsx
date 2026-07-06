import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from "./TabNavigator"
import type { RootStackParamList } from "./types"
import LanguagesScreen from "screens/LanguagesScreen"
import { ROUTES } from "navigation/routes"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen
        name={ROUTES.LanguagesScreen}
        component={LanguagesScreen}
      />
    </Stack.Navigator>
  )
}

export default Navigator
