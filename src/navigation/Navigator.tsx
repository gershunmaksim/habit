import { createNativeStackNavigator } from "@react-navigation/native-stack"

import TabNavigator from "./TabNavigator"
import type { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default Navigator
