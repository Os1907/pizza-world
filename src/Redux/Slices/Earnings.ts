import { createSlice } from "@reduxjs/toolkit";

export interface Earnings {
  week: string;
  amount: number;
}

const amounts = [
  { week: "week1", amount: 13000 },
  { week: "week2", amount: 7520 },
  { week: "week3", amount: 3400 },
  { week: "week4", amount: 9310 },
];

const initialState: Earnings[] =
  typeof window !== "undefined" && localStorage.getItem("Earnings")
    ? JSON.parse(localStorage.getItem("Earnings") || "[]")
    : amounts;

const Earnings = createSlice({
  name: "Earnings",
  initialState,
  reducers: {
    increaseEarnings: (state, action) => {
      state[3].amount += action.payload;
      localStorage.setItem("Earnings", JSON.stringify(state));
            
    },
  },
});

export const { increaseEarnings } = Earnings.actions;
export const earningsSlice = Earnings.reducer;

