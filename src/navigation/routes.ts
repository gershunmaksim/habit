export const ROUTES = {
  HomeScreen: "home",
  StatsScreen: "stats",
  CalendarScreen: "calendar",
  ProfileScreen: "profile",
  LanguagesScreen: "languages",
  TemperatureScreen: "temperature",
  WeightScreen: "weight",
  PressureScreen: "pressure",
} as const

type valueof<T> = T[keyof T]

export type Routes = valueof<typeof ROUTES>
