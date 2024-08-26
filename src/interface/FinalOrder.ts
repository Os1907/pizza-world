import { Ipizza, totalBillPrice } from './Ipizza';
import { Iuser } from './Iuser';
export interface IfinalOrder{
    bill:Ipizza[],
    Info:Iuser,
    totalBill:totalBillPrice[],
    status?:string,
    id:string
}