import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  language: string;
  temperature: string;
  weight: string;
  bloodPressureUp: string;
  bloodPressureDown: string;
  notifications: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  language: "en",
  temperature: "",
  weight: "",
  bloodPressureUp: "",
  bloodPressureDown: "",
  notifications: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },

    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },

    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
    },

    setTemperature: (state, action: PayloadAction<string>) => {
      state.temperature = action.payload;
    },
    setBloodPressureUp: (state, action: PayloadAction<string>) => {
      state.bloodPressureUp = action.payload;
    },
    setBloodPressureDown: (state, action: PayloadAction<string>) => {
      state.bloodPressureDown = action.payload;
    },
    setNotifications: (state, action: PayloadAction<boolean>) => {
      state.notifications = action.payload;
    },
    clearUser: () => initialState,
  },
});

export const {
  setName,
  setEmail,
  setLanguage,
  setUser,
  setTemperature,
  setBloodPressureUp,
  setBloodPressureDown,
  clearUser,
  setNotifications,
} = authSlice.actions;

export default authSlice.reducer;