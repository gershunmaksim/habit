export type TemperatureHistoryItemType = {
  id: string
  temperature: string
  timeChangedTemperature: string
}

export const mockTemperatureHistoryData: TemperatureHistoryItemType[] = [
  { id: "1", temperature: "36,6", timeChangedTemperature: "8 Oct 7:30 AM" },
  { id: "2", temperature: "37,6", timeChangedTemperature: "9 Oct 1:29 PM" },
  { id: "3", temperature: "36,6", timeChangedTemperature: "8 Oct 7:30 AM" },
  { id: "4", temperature: "37,6", timeChangedTemperature: "9 Oct 1:29 PM" },
]

export type WeightHistoryItemType = {
  id: string
  weight: string
  timeChangedWeight: string
}

export const mockWeightHistoryData: WeightHistoryItemType[] = [
  { id: "1", weight: "60 kg", timeChangedWeight: "12 Oct 7:30 AM" },
  { id: "2", weight: "49 kg", timeChangedWeight: "25 Oct 1:29 PM" },
]