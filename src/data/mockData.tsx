export type TemperatureHistoryItemType = {
  id: string
  temperature: string
  timeChangedTemperature: string
}

export const mockTemperatureHistoryData: TemperatureHistoryItemType[] = [
  { id: "1", temperature: "36,6", timeChangedTemperature: "8 Oct 7:30 AM" },
  { id: "2", temperature: "37,6", timeChangedTemperature: "9 Oct 1:29 PM" },
]