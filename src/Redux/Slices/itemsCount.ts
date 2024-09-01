import { itemOrderCount } from "@/helper/Items/orderCount";
import { orderCount } from "@/interface/iDate";
import { createSlice } from "@reduxjs/toolkit";



const initialState : orderCount[] = typeof window !== "undefined" && localStorage.getItem("itemCount") ? JSON.parse(localStorage.getItem("itemCount")!) : itemOrderCount

const itemCount = createSlice({
    name: "itemCount",
    initialState,
    reducers: {
       incrementItemCount: (state , action) => {
        action.payload.map((order:any)=> {
            const index = state.findIndex(item => item.name === order.name);
              if (index !== -1) {
                  state[index].count +=order.quantity;
              } else {
                 throw new Error("Item not found");
              }
              localStorage.setItem("itemCount", JSON.stringify(state));
           }
        )
         },
    }
})


export const { incrementItemCount } = itemCount.actions;
export const itemCountSlice = itemCount.reducer;



