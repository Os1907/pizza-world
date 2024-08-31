import { Earnings } from "@/Redux/Slices/Earnings";

export const earningsLastMonth: Earnings[] = [
    { week: "week1", amount: 14500 },
    { week: "week2", amount: 16400 },
    { week: "week3", amount: 11000 },
    { week: "week4", amount: 15280 },
  ];





export const calculateTotalEarnings = (
  amounts: Earnings[]
): { earnings: number; revenue: number; expenses: number } => {
  const earnings = amounts.reduce((a, b) => a + b.amount, 0);
  const revenue = Math.floor(earnings * 0.75);
  const expenses = Math.floor(earnings * 0.25);
  return { earnings, revenue, expenses };
};


export const calcAverage=(x : Earnings[] , average:number) => { 
    return x.map((item:Earnings)=> {
       return {
               week:item.week,
               amount:item.amount *  average
       }
   })
   }

