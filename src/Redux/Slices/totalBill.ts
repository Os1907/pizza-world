import { totalBillPrice } from "@/interface/Ipizza";
import { createSlice } from "@reduxjs/toolkit";

const initialState: totalBillPrice[] = 
  typeof window !== "undefined" && localStorage.getItem("totalBill")
    ? JSON.parse(localStorage.getItem("totalBill") || "[]")
    : [];

const totalBill = createSlice({
    name: "totalBill",
    initialState,
    reducers: {
        addTotalBill: (state, action) => {
            if (state.length === 0) {
                state.push(action.payload);
            } else {
                state.splice(0, 1, action.payload);
            }
            localStorage.setItem("totalBill", JSON.stringify(state));
        },
        clearTotalBill:(state)=>{
            state.splice(0, state.length);
            localStorage.setItem("totalBill", JSON.stringify(state));
        }
    }
});

export const { addTotalBill , clearTotalBill} = totalBill.actions;
export const totalBillSlice = totalBill.reducer;

