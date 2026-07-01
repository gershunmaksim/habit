/* eslint-disable @typescript-eslint/no-namespace */
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ROUTES } from "./routes"

export type TabParamList = {
  [ROUTES.HomeScreen]: undefined
  [ROUTES.StatsScreen]: undefined
  [ROUTES.CalendarScreen]: undefined
  [ROUTES.ProfileScreen]: undefined
}

export type RootStackParamList = {
  MainTabs: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type TabScreenProps<T extends keyof TabParamList> =
  BottomTabScreenProps<TabParamList, T>

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
