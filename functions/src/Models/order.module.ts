export interface Order {
    orderLines:
        { productName: string; price: number; amount: number;}[];
    totalPrice: number;
}
