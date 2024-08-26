import { createSlice } from "@reduxjs/toolkit";
import { IfinalOrder } from "../../interface/FinalOrder";

const initialState: IfinalOrder[] = 
  typeof window !== "undefined" && localStorage.getItem("finalOrder") 
    ? JSON.parse(localStorage.getItem("finalOrder") || "[]") 
    : [];

const finalOrder = createSlice({
    name: "finalOrder",
    initialState,
    reducers: {
        addFinalOrder: (state, action) => {
            state.push(action.payload);
            // if (state.length == 0) {
            // } else {
            //     state.splice(0, 1, action.payload);
            // }
            localStorage.setItem("finalOrder", JSON.stringify(state));
        }
    }
});

export const { addFinalOrder } = finalOrder.actions;
export const finalOrderSlice = finalOrder.reducer;
