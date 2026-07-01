import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import Icon from "react-native-vector-icons/Ionicons"

import CalendarScreen from "screens/CalendarScreen"
import HomeScreen from "screens/HomeScreen"
import ProfileScreen from "screens/ProfileScreen"
import StatsScreen from "screens/StatsScreen"

import { ROUTES } from "./routes"
import type { TabParamList } from "./types"

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#F0F0F0",
          height: 64,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons: Record<string, [string, string]> = {
            [ROUTES.HomeScreen]: ["home", "home-outline"],
            [ROUTES.StatsScreen]: ["bar-chart", "bar-chart-outline"],
            [ROUTES.CalendarScreen]: ["calendar", "calendar-outline"],
            [ROUTES.ProfileScreen]: ["person", "person-outline"],
          }
          const [active, inactive] = icons[route.name] ?? ["home", "home-outline"]
          return <Icon name={focused ? active : inactive} size={24} color={color} />
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#BDBDBD",
      })}
    >
      <Tab.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ROUTES.StatsScreen} component={StatsScreen} />
      <Tab.Screen name={ROUTES.CalendarScreen} component={CalendarScreen} />
      <Tab.Screen name={ROUTES.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
