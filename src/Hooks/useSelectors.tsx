'use client'

import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

export const useBill = () => useSelector((state: RootState) => state.Bill);
export const useInfo = () => useSelector((state: RootState) => state.UserInfo);
export const useTotalBill = () => useSelector((state: RootState) => state.totalBill);
export const useEarning = () => useSelector((state: RootState) => state.Earnings);
export const useItemCount = () => useSelector((state: RootState) => state.itemCount);
