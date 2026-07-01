export const ROUTES = {
  HomeScreen: "home",
  StatsScreen: "stats",
  CalendarScreen: "calendar",
  ProfileScreen: "profile",
} as const

type valueof<T> = T[keyof T]

export type Routes = valueof<typeof ROUTES>
