export interface Ipizza{
    id: string;
     name: string;
      price: number; 
      img: string; 
      description: string; 
      photos: string[]; 
      quantity?: number;
      comment?: string;
      pricePerUnit?: number | undefined;
    index?: number;
    time: string
      
}
export interface totalBillPrice{
    totalItems: number
    Delivery: number
    total: number
}