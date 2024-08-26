import { Ipizza } from "@/interface/Ipizza";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Ipizza[] =  typeof window !== "undefined" && localStorage.getItem("Bill") ? JSON.parse(localStorage.getItem("Bill") || "[]")   : [];

export const Bill = createSlice({
    name: "Bill Items",
    initialState,
    reducers: {
        modifedBill: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("Bill", JSON.stringify(state));
        },
        removeBill: (state, action) => {
            state.splice(action.payload, 1);
            localStorage.setItem("Bill", JSON.stringify(state));
        },
        modiQuantity: (state, action) => {
            const { index, quantity, comment, pricePerUnit } = action.payload;
            if (state[index]) {
                state[index].quantity = quantity;
                state[index].comment = comment;
                state[index].price = pricePerUnit * quantity;
            }
            localStorage.setItem("Bill", JSON.stringify(state));
        },
        clearBill:(state) =>{
            state.splice(0, state.length);
            localStorage.setItem("Bill", JSON.stringify(state));
        }
    }
});

export const { modifedBill, removeBill, modiQuantity , clearBill } = Bill.actions;
export const BillItems = Bill.reducer;
