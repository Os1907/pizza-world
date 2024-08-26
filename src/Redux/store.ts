import { configureStore } from "@reduxjs/toolkit";
import { BillItems } from "./Slices/BillOrder";
import { totalBillSlice } from "./Slices/totalBill";
import { InfoSlice } from "./Slices/UserInfo";
import { finalOrderSlice } from "./Slices/finalOrder";





export const store = configureStore({
    reducer:{
        Bill:BillItems,
        totalBill:totalBillSlice,
        UserInfo:InfoSlice,
        finalOrder: finalOrderSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>

