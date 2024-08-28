import { createSlice } from "@reduxjs/toolkit";
import { IfinalOrder } from "../../interface/iFinalOrder";

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
            localStorage.setItem("finalOrder", JSON.stringify(state));
        },
        modifyStatus: (state, action) => {
            const { index, status } = action.payload;
            if (state[index]) {
                state[index].status = status;
            }
            localStorage.setItem("finalOrder", JSON.stringify(state));
        }
    }
});

export const { addFinalOrder , modifyStatus } = finalOrder.actions;
export const finalOrderSlice = finalOrder.reducer;
