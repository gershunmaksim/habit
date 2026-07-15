import moment from "moment";

export type TemperatureHistoryItemType = {
  id: string;
  temperature: string;
  timeChangedTemperature: string;
};

export const mockTemperatureHistoryData: TemperatureHistoryItemType[] = [
  {
    id: "1",
    temperature: "36,6",
    timeChangedTemperature: moment("2025-10-08 07:30").format("D MMM h:mm A"),
  },
  {
    id: "2",
    temperature: "37,6",
    timeChangedTemperature: moment("2025-10-09 13:29").format("D MMM h:mm A"),
  },
  {
    id: "3",
    temperature: "36,6",
    timeChangedTemperature: moment("2025-10-08 07:30").format("D MMM h:mm A"),
  },
  {
    id: "4",
    temperature: "37,6",
    timeChangedTemperature: moment("2025-10-09 13:29").format("D MMM h:mm A"),
  },
];

export type WeightHistoryItemType = {
  id: string;
  weight: string;
  timeChangedWeight: string;
};

export const mockWeightHistoryData: WeightHistoryItemType[] = [
  {
    id: "1",
    weight: "60 kg",
    timeChangedWeight: moment("2025-10-12 07:30").format("D MMM h:mm A"),
  },
  {
    id: "2",
    weight: "49 kg",
    timeChangedWeight: moment("2025-10-25 13:29").format("D MMM h:mm A"),
  },
];

export type PressureHistoryItemType = {
  id: string;
  pressure: string;
  timeChangedPressure: string;
};

export const mockPressureHistoryData: PressureHistoryItemType[] = [
  {
    id: "1",
    pressure: "120/80",
    timeChangedPressure: moment("2025-04-12 07:30").format("D MMM h:mm A"),
  },
  {
    id: "2",
    pressure: "170/120",
    timeChangedPressure: moment("2025-05-25 13:29").format("D MMM h:mm A"),
  },
];

export type MoodItemType = {
  id: string;
  mood: string;
};

export const mockMoodData: MoodItemType[] = [
  {
    id: "1",
    mood: "Satisfied",
  },
  {
    id: "2",
    mood: "Good",
  },
  {
    id: "3",
    mood: "Bad",
  },
  {
    id: "4",
    mood: "Angry",
  },
];