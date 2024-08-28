import { IfinalOrder } from "@/interface/iFinalOrder";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IfinalOrder[] =
  typeof window !== "undefined" && localStorage.getItem("orderList")
    ? JSON.parse(localStorage.getItem("orderList") || "[]")
    : [];
const orderList = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    addToOrderList: (state, action) => {
        state.push({
            ...action.payload,
            index: state.length,
          });
      localStorage.setItem("orderList", JSON.stringify(state));
    },
    removeFromOrderList: (state,action) => {
        state.splice(action.payload, 1);
        localStorage.setItem("orderList", JSON.stringify(state));
    },
  },
});
export const { addToOrderList, removeFromOrderList } = orderList.actions;
export const orderListSlice = orderList.reducer;
