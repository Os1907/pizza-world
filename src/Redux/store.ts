import { configureStore } from "@reduxjs/toolkit";
import { BillItems } from "./Slices/BillOrder";
import { totalBillSlice } from "./Slices/totalBill";
import { InfoSlice } from "./Slices/UserInfo";
import { finalOrderSlice } from "./Slices/FinalOrder";
import { orderListSlice } from "./Slices/OrderList";
import { earningsSlice } from "./Slices/Earnings";




export const store = configureStore({
    reducer:{
        Bill:BillItems,
        totalBill:totalBillSlice,
        UserInfo:InfoSlice,
        finalOrder: finalOrderSlice,
        orderList: orderListSlice,
        Earnings:earningsSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>

