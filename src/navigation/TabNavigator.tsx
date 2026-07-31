import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"

import CalendarScreen from "screens/CalendarScreen"
import HomeScreen from "screens/HomeScreen"
import ProfileScreen from "screens/ProfileScreen"
import StatsScreen from "screens/StatsScreen"

import { ROUTES } from "./routes"
import type { TabParamList } from "./types"
import { View } from "react-native"
import clsx from "clsx"
import CalendarIcon from "assets/icons/Calendar.svg"
import HealthIcon from "assets/icons/Health.svg"
import HistoryIcon from "assets/icons/History.svg"
import SettingsIcon from "assets/icons/Settings.svg"

const Tab = createBottomTabNavigator<TabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HomeScreen}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 68,
          marginBottom: 32,
          borderRadius: 40,
          marginHorizontal: 24,
          backgroundColor: "#3E414C",
        },
        
        tabBarIcon: ({ focused }) => {
          const icons = {
            [ROUTES.HomeScreen]: HealthIcon,
            [ROUTES.StatsScreen]: HistoryIcon,
            [ROUTES.CalendarScreen]: CalendarIcon,
            [ROUTES.ProfileScreen]: SettingsIcon,
          }

          const IconComponent = icons[route.name]

          return (
            <View className={clsx("items-center justify-center mt-[25px] w-[50px] h-[50px] rounded-full", focused ? "bg-blue1" : "bg-transparent")}>
              <IconComponent
                {...(focused ? { stroke: "#FFFFFF" } : {})}
              />
            </View>
          )
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#BDBDBD",
      })}
    >
      <Tab.Screen name={ROUTES.CalendarScreen} component={CalendarScreen} />
      <Tab.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={ROUTES.StatsScreen} component={StatsScreen} />
      <Tab.Screen name={ROUTES.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
