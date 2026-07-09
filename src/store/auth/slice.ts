import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  language: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  language: "en",
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

    clearUser: () => initialState,
  },
});

export const {
  setName,
  setEmail,
  setLanguage,
  setUser,
  clearUser,
} = authSlice.actions;

export default authSlice.reducer;