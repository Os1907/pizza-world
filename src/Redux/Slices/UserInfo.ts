import { Iuser } from "@/interface/Iuser";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Iuser = 
  typeof window !== "undefined" && localStorage.getItem("UserInfo")
    ? JSON.parse(localStorage.getItem("UserInfo") || "{}")
    : {};

const UserInfo = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.fullName = action.payload.fullName;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      localStorage.setItem("UserInfo", JSON.stringify(state));
    },
    removeInfo: (state) => {
      state.fullName = undefined;
      state.phoneNumber = undefined;
      state.address = undefined;
      localStorage.removeItem("UserInfo");
    }
  }
});

export const { addInfo, removeInfo } = UserInfo.actions;
export const InfoSlice = UserInfo.reducer;
