/* eslint-disable @typescript-eslint/no-namespace */
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ROUTES } from "./routes"

export type RootStackParamList = {
  [ROUTES.HomeScreen]: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
  Popular: undefined
  Latest: undefined
}

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}